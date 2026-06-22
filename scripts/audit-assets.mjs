import fs from "node:fs/promises";
import path from "node:path";
import {
  altFor,
  sourceFolders,
  sourceFolderName,
  sourceInfo,
  supportedVideoExtensions,
  titleFor
} from "./asset-naming.mjs";

const projectRoot = process.cwd();
const manifestPath = path.join(projectRoot, "data", "assets.json");
const sourceCandidates = [process.env.ATELIER_ASSET_SOURCE_ROOT, process.argv[2], "D:\\\u77f3\u6750\u7d20\u6750"].filter(Boolean);

async function resolveSourceRoot() {
  for (const candidate of sourceCandidates) {
    try {
      const stat = await fs.stat(candidate);
      if (stat.isDirectory()) {
        return candidate;
      }
    } catch {
      // Try the next candidate.
    }
  }

  return null;
}

function fail(message) {
  throw new Error(message);
}

async function main() {
  const sourceRoot = await resolveSourceRoot();
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const errors = [];

  for (const asset of manifest) {
    if (!asset.filename || !asset.category || !asset.label || !asset.title || !asset.alt || !asset.description || !asset.src) {
      errors.push(`Missing required fields in manifest item: ${JSON.stringify(asset)}`);
      continue;
    }

    if (!asset.sourceFolder || !asset.sourceName) {
      errors.push(`Missing sourceFolder/sourceName for ${asset.category}/${asset.filename}`);
      continue;
    }

    if (sourceRoot) {
      const sourcePath = path.join(sourceRoot, asset.sourceFolder, asset.sourceName);
      const info = sourceInfo(sourceRoot, sourcePath);
      const skipNamingChecks = Boolean(asset.categoryLabel);

      if (!info || !info.label) {
        errors.push(`Unmapped source folder: ${asset.sourceFolder} (${asset.sourceName})`);
        continue;
      }

      const expectedSourceFolder = sourceFolderName(sourceRoot, sourcePath);
      if (expectedSourceFolder !== asset.sourceFolder) {
        errors.push(`sourceFolder mismatch for ${asset.filename}: expected ${expectedSourceFolder}, got ${asset.sourceFolder}`);
      }

      if (!skipNamingChecks) {
        if (asset.label !== info.label) {
          errors.push(`label mismatch for ${asset.sourceFolder}/${asset.sourceName}: expected ${info.label}, got ${asset.label}`);
        }

        const expectedTitle = titleFor(sourcePath, info, asset.mediaType || "image");
        if (asset.title !== expectedTitle) {
          errors.push(`title mismatch for ${asset.sourceFolder}/${asset.sourceName}: expected "${expectedTitle}", got "${asset.title}"`);
        }

        const expectedAlt = altFor(info, asset.mediaType || "image");
        if (asset.alt !== expectedAlt) {
          errors.push(`alt mismatch for ${asset.sourceFolder}/${asset.sourceName}: expected "${expectedAlt}", got "${asset.alt}"`);
        }
      }
    }

    const filePath = path.join(projectRoot, "public", "materials", asset.category, asset.filename);
    try {
      await fs.stat(filePath);
    } catch {
      errors.push(`Missing output file: ${filePath}`);
    }

    const isVideo = supportedVideoExtensions.has(path.extname(asset.filename).toLowerCase()) || asset.mediaType === "video";
    if (isVideo && !asset.title.startsWith("Production Process Video - ")) {
      errors.push(`Video title format mismatch for ${asset.filename}: ${asset.title}`);
    }
  }

  const uniqueSourceFolders = new Set(manifest.map((asset) => asset.sourceFolder));
  for (const folder of uniqueSourceFolders) {
    if (folder === "__root__") {
      continue;
    }
    if (!sourceFolders[folder]) {
      errors.push(`Unexpected source folder in manifest: ${folder}`);
    }
  }

  if (errors.length > 0) {
    fail(`Asset audit failed with ${errors.length} issue(s):\n- ${errors.join("\n- ")}`);
  }

  if (sourceRoot) {
    console.log(`Asset audit passed for ${manifest.length} records from ${sourceRoot}.`);
  } else {
    console.log(`Asset audit passed for ${manifest.length} manifest records. Source folder not available, skipped source-name verification.`);
  }
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
