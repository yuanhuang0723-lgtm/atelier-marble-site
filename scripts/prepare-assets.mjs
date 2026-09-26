import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import {
  altFor,
  categoryFor,
  imageId,
  publicFilenameFor,
  slug,
  sourceFolderName,
  sourceInfo,
  supportedExtensions,
  supportedVideoExtensions,
  titleFor
} from "./asset-naming.mjs";

const projectRoot = process.cwd();
const args = process.argv.slice(2);
const sourceArgument = args.find((argument) => !argument.startsWith("--"));
const categoryFilter = args.find((argument) => argument.startsWith("--category="))?.slice("--category=".length);
const renamePublicFiles = args.includes("--rename-public-files");
const onlyExistingManifest = args.includes("--only-existing-manifest");
const sourceCandidates = [sourceArgument, process.env.ATELIER_ASSET_SOURCE_ROOT, "D:\\\u77f3\u6750\u7d20\u6750"].filter(Boolean);
let sourceRoot = sourceCandidates[0];
const publicRoot = path.join(projectRoot, "public", "materials");
const manifestPath = path.join(projectRoot, "data", "assets.json");

const categories = [
  "kitchen-countertop",
  "hotel-project",
  "coffee-table",
  "carving-decor",
  "factory",
  "materials",
  "projects"
];

async function listMediaFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMediaFiles(full)));
      continue;
    }

    if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }

  return files;
}

async function ensureDirs() {
  await fs.mkdir(path.dirname(manifestPath), { recursive: true });
  for (const category of categories) {
    await fs.mkdir(path.join(publicRoot, category), { recursive: true });
  }
}

async function enhanceImage(source, destination) {
  const image = sharp(source, { failOn: "none" }).rotate();
  const meta = await image.metadata();
  const width = meta.width || 1600;
  const height = meta.height || 1200;
  const landscape = width >= height;

  const pipeline = image
    .resize({
      width: landscape ? 1800 : 1400,
      height: landscape ? 1200 : 1800,
      fit: "inside",
      withoutEnlargement: true
    })
    .normalise({ lower: 1, upper: 98 })
    .modulate({
      brightness: 1.035,
      saturation: 0.94
    })
    .linear(1.04, -3)
    .sharpen({
      sigma: 0.8,
      m1: 0.7,
      m2: 1.2,
      x1: 2,
      y2: 8,
      y3: 16
    });

  await pipeline.webp({ quality: 84, effort: 5 }).toFile(destination);
}

async function copyVideo(source, destination) {
  await fs.copyFile(source, destination);
}

async function main() {
  if (categoryFilter && !categories.includes(categoryFilter)) {
    throw new Error(`Unknown asset category filter: ${categoryFilter}`);
  }
  for (const candidate of sourceCandidates) {
    try {
      const stat = await fs.stat(candidate);
      if (stat.isDirectory()) {
        sourceRoot = candidate;
        break;
      }
    } catch {
      // Try the next candidate; pasted paths may arrive with broken encoding.
    }
  }

  await ensureDirs();
  let files = await listMediaFiles(sourceRoot);
  const previousManifest = JSON.parse(await fs.readFile(manifestPath, "utf8").catch(() => "[]"));
  const sourceKeys = new Set(files.map((file) => `${sourceFolderName(sourceRoot, file)}|${path.basename(file)}`));
  if (onlyExistingManifest) {
    if (previousManifest.length === 0) {
      throw new Error("--only-existing-manifest requires a nonempty curated asset manifest");
    }
    const selectedSources = new Set(previousManifest.map((asset) => `${asset.sourceFolder}|${asset.sourceName}`));
    files = files.filter((file) => selectedSources.has(`${sourceFolderName(sourceRoot, file)}|${path.basename(file)}`));
    if (files.length === 0) {
      throw new Error("--only-existing-manifest did not find any selected source files");
    }
  }
  const sourceExists = (asset) => sourceKeys.has(`${asset.sourceFolder}|${asset.sourceName}`);
  const manifest = categoryFilter
    ? previousManifest.filter((asset) => asset.category !== categoryFilter || !sourceExists(asset))
    : previousManifest.filter((asset) => !sourceExists(asset));
  let refreshedRecords = 0;

  for (const file of files) {
    const info = sourceInfo(sourceRoot, file);
    const assigned = categoryFor(sourceRoot, file).filter((category) => !categoryFilter || category === categoryFilter);
    if (assigned.length === 0) continue;
    const ext = path.extname(file).toLowerCase();
    const mediaType = supportedVideoExtensions.has(ext) ? "video" : "image";
    const base = slug(path.parse(file).name) || imageId(file);
    const id = imageId(file);
    const sourceFolder = sourceFolderName(sourceRoot, file);
    const sourceName = path.basename(file);

    for (const category of assigned) {
      const previous = previousManifest.find((asset) =>
        asset.category === category && asset.sourceFolder === sourceFolder && asset.sourceName === sourceName
      );
      const legacyFilename = mediaType === "video" ? `${base}-${id}${ext}` : `${base}-${id}.webp`;
      const filename = previous?.filename || legacyFilename;
      const publicFilename = publicFilenameFor(file, info, mediaType, filename);
      const src = `/materials/${category}/${publicFilename}`;
      const previousPublicFilename = previous?.publicFilename || previous?.filename || legacyFilename;
      const legacySrc = previous?.legacySrc || (previous?.src && previous.src !== src ? previous.src : undefined);
      const output = path.join(publicRoot, category, publicFilename);
      let outputReady = false;

      if (renamePublicFiles && previous && previousPublicFilename !== publicFilename) {
        const oldOutput = path.join(publicRoot, category, previousPublicFilename);
        try {
          await fs.stat(oldOutput);
          try {
            await fs.stat(output);
            throw new Error(`Both old and new asset files exist; refusing to overwrite ${output}`);
          } catch (error) {
            if (error.code !== "ENOENT") throw error;
          }
          await fs.rename(oldOutput, output);
          outputReady = true;
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
      }

      if (!outputReady && mediaType === "video") {
        await copyVideo(file, output);
      } else if (!outputReady) {
        await enhanceImage(file, output);
      }

      manifest.push({
        filename,
        ...(publicFilename !== filename ? { publicFilename } : {}),
        ...(legacySrc ? { legacySrc } : {}),
        category,
        mediaType,
        sourceFolder,
        sourceName,
        label: info.label,
        title: titleFor(file, info, mediaType, filename),
        alt: altFor(info, mediaType),
        description: info.description,
        src
      });
      refreshedRecords += 1;
    }
  }

  if (renamePublicFiles) {
    for (const asset of manifest) {
      if (asset.category === "factory" || sourceExists(asset)) continue;
      if (categoryFilter && asset.category !== categoryFilter) continue;

      const sourcePath = asset.sourceFolder === "__root__"
        ? path.join(sourceRoot, asset.sourceName)
        : path.join(sourceRoot, asset.sourceFolder, asset.sourceName);
      const info = sourceInfo(sourceRoot, sourcePath);
      const mediaType = asset.mediaType || (supportedVideoExtensions.has(path.extname(asset.filename).toLowerCase()) ? "video" : "image");
      const publicFilename = publicFilenameFor(sourcePath, info, mediaType, asset.filename);
      const src = `/materials/${asset.category}/${publicFilename}`;
      const previousSrc = asset.src;
      const previousPublicFilename = asset.publicFilename || asset.filename;
      const oldOutput = path.join(publicRoot, asset.category, previousPublicFilename);
      const output = path.join(publicRoot, asset.category, publicFilename);

      if (previousPublicFilename !== publicFilename) {
        try {
          await fs.stat(output);
          throw new Error(`Both old and new asset files exist; refusing to overwrite ${output}`);
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        await fs.rename(oldOutput, output);
      } else {
        await fs.stat(output);
      }

      asset.label = info.label;
      asset.title = titleFor(sourcePath, info, mediaType, asset.filename);
      asset.alt = altFor(info, mediaType);
      asset.description = info.description;
      asset.src = src;
      if (publicFilename !== asset.filename) asset.publicFilename = publicFilename;
      if (previousSrc !== src) asset.legacySrc = asset.legacySrc || previousSrc;
      refreshedRecords += 1;
    }
  }

  manifest.sort((a, b) =>
    `${a.category}-${a.sourceFolder}-${a.sourceName}-${a.filename}`.localeCompare(
      `${b.category}-${b.sourceFolder}-${b.sourceName}-${b.filename}`
    )
  );

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`Prepared ${refreshedRecords} ${categoryFilter || "all-category"} media records; manifest contains ${manifest.length} records from ${files.length} source files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
