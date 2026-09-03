import { getAssets, getProjectAssets } from "../../lib/assets";
import { absoluteUrl } from "../../lib/seo";

export const runtime = "nodejs";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] || character);
}

export function GET() {
  const images = [
    "/materials/hero/atelier-marble-luxury-hero.png",
    "/assets/factory/factory-hero-workshop.png",
    "/assets/vanity-cabinet/cover.png",
    "/assets/carving-decor/cover.png",
    "/materials/categories/hotel-projects.png",
    ...getAssets("factory").map((asset) => asset.src),
    ...getAssets("materials").map((asset) => asset.src),
    ...getProjectAssets("all").map((asset) => asset.src)
  ];
  const uniqueImages = [...new Set(images)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${uniqueImages
    .map((image) => `\n  <url><loc>${escapeXml(absoluteUrl("/"))}</loc><image:image><image:loc>${escapeXml(absoluteUrl(image))}</image:loc></image:image></url>`)
    .join("")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
