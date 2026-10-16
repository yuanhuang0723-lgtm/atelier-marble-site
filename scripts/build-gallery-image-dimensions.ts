import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { getCaseStudyForAsset, getProjectAssets } from "../lib/assets";

async function main() {
  const sources = [...new Set(getProjectAssets("all").flatMap((asset) =>
    getCaseStudyForAsset(asset).gallery.map((image) => image.src)
  ))].sort();
  const dimensions: Record<string, { width: number; height: number }> = {};

  for (const src of sources) {
    const { width, height } = await sharp(path.join(process.cwd(), "public", src.slice(1))).metadata();
    if (!width || !height) throw new Error(`Missing gallery image dimensions: ${src}`);
    dimensions[src] = { width, height };
  }

  await fs.writeFile(path.join(process.cwd(), "data/project-gallery-image-dimensions.json"), JSON.stringify(dimensions, null, 2) + "\n", "utf8");
  console.log(`Gallery image dimensions prepared for ${sources.length} existing images.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
