import { getAssets, getProjectAssets } from "../../lib/assets";
import { getWorkshopImageSources } from "../../lib/factory-images";
import { absoluteUrl } from "../../lib/seo";

export const runtime = "nodejs";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] || character);
}

export function GET() {
  const factoryDefaults = getAssets("factory");
  const factorySources = getWorkshopImageSources();
  const factoryImageCount = Math.max(factoryDefaults.length, factorySources.length);
  const factoryImages = Array.from({ length: factoryImageCount }, (_, index) => factorySources[index] ?? factoryDefaults[index % factoryDefaults.length].src);
  const imageGroups = [
    { page: "/", images: ["/materials/hero/atelier-marble-luxury-hero.webp", "/assets/vanity-cabinet/cover.webp", "/assets/carving-decor/cover.webp", "/materials/categories/hotel-projects.webp"] },
    { page: "/factory", images: ["/assets/factory/factory-hero-workshop.webp", ...factoryImages] },
    { page: "/materials", images: getAssets("materials").map((asset) => asset.src) },
    { page: "/projects", images: getProjectAssets("all").map((asset) => asset.src) },
    { page: "/architectural-stone", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/countertops", images: ["/materials/featured-covers/kitchen-countertop.webp"] },
    { page: "/countertops/marble-countertops", images: ["/materials/featured-covers/kitchen-countertop.webp"] },
    { page: "/countertops/vanity-tops", images: ["/assets/vanity-cabinet/cover.webp"] },
    { page: "/countertops/integrated-stone-sinks", images: ["/assets/vanity-cabinet/hero.webp"] },
    { page: "/projects/hotel-stone-supply", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/projects/commercial-stone", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/custom-stone-fabrication-china", images: ["/materials/featured-covers/carving-decor.webp"] },
    { page: "/resources", images: ["/generated/guides/buyer-guide-hero.webp"] },
    { page: "/architectural-stone/wall-cladding", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/architectural-stone/flooring", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/materials/marble", images: ["/materials/hero/atelier-marble-luxury-hero.webp"] }
  ];
  const entries = [...new Set(imageGroups.flatMap((group) => group.images.map((image) => `${group.page}|${image}`)))].map((entry) => {
    const [page, image] = entry.split("|");
    return { page, image };
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${entries
    .map((entry) => `\n  <url><loc>${escapeXml(absoluteUrl(entry.page))}</loc><image:image><image:loc>${escapeXml(absoluteUrl(entry.image))}</image:loc></image:image></url>`)
    .join("")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
