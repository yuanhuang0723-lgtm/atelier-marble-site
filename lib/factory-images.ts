import fs from "node:fs";
import path from "node:path";

export function getWorkshopImageSources() {
  const assetDir = path.join(process.cwd(), "public", "assets", "factory", "local");

  if (!fs.existsSync(assetDir)) return [];

  return fs
    .readdirSync(assetDir)
    .filter((file) => /^workshop-\d+\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/assets/factory/local/${file}`);
}
