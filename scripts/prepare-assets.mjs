import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import {
  altFor,
  categoryFor,
  imageId,
  slug,
  sourceFolderName,
  sourceInfo,
  supportedExtensions,
  supportedVideoExtensions,
  titleFor
} from "./asset-naming.mjs";

const projectRoot = process.cwd();
const sourceCandidates = [process.argv[2], process.env.ATELIER_ASSET_SOURCE_ROOT, "D:\\\u77f3\u6750\u7d20\u6750"].filter(Boolean);
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
  const files = await listMediaFiles(sourceRoot);
  const manifest = [];

  for (const file of files) {
    const info = sourceInfo(sourceRoot, file);
    const assigned = categoryFor(sourceRoot, file);
    const ext = path.extname(file).toLowerCase();
    const mediaType = supportedVideoExtensions.has(ext) ? "video" : "image";
    const base = slug(path.parse(file).name) || imageId(file);
    const id = imageId(file);
    const sourceFolder = sourceFolderName(sourceRoot, file);
    const sourceName = path.basename(file);

    for (const category of assigned) {
      const filename = mediaType === "video" ? `${base}-${id}${ext}` : `${base}-${id}.webp`;
      const output = path.join(publicRoot, category, filename);

      if (mediaType === "video") {
        await copyVideo(file, output);
      } else {
        await enhanceImage(file, output);
      }

      manifest.push({
        filename,
        category,
        mediaType,
        sourceFolder,
        sourceName,
        label: info.label,
        title: titleFor(file, info, mediaType),
        alt: altFor(info, mediaType),
        description: info.description,
        src: `/materials/${category}/${filename}`
      });
    }
  }

  manifest.sort((a, b) =>
    `${a.category}-${a.sourceFolder}-${a.sourceName}-${a.filename}`.localeCompare(
      `${b.category}-${b.sourceFolder}-${b.sourceName}-${b.filename}`
    )
  );

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`Prepared ${manifest.length} enhanced media records from ${files.length} source files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
