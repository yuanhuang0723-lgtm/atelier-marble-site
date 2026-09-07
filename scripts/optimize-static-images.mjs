import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sources = [
  "public/assets/home-top-cover.png",
  "public/materials/hero/atelier-marble-luxury-hero.png",
  "public/assets/vanity-cabinet/cover.png",
  "public/assets/vanity-cabinet/hero.png",
  "public/assets/carving-decor/cover.png",
  "public/assets/factory/factory-hero-workshop.png",
  "public/assets/why-choose-us/why-choose-us.png",
  "public/materials/categories/hotel-projects.png",
  "public/materials/featured-covers/kitchen-countertop.png",
  "public/materials/featured-covers/coffee-table.png",
  "public/materials/featured-covers/carving-decor.png",
  "public/materials/featured-covers/project-support.png",
  "public/generated/guides/buyer-guide-hero.png",
  "public/generated/guides/case-study-hero.png",
  "public/generated/guides/project-checklist-hero.png",
  "public/generated/guides/pricing-guide-hero.png",
  "public/generated/guides/qc-delivery-hero.png"
];

for (const source of sources) {
  const input = path.join(root, source);
  const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
  await fs.access(input);
  await sharp(input).webp({ quality: 82, effort: 4 }).toFile(output);
  const [before, after] = await Promise.all([(await fs.stat(input)).size, (await fs.stat(output)).size]);
  console.log(`${source}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
}
