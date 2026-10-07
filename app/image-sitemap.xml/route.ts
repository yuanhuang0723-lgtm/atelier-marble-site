import { getAssets, getProjectAssets } from "../../lib/assets";
import { absoluteUrl } from "../../lib/seo";
import { getPublicImageEntries } from "../../lib/public-image-metadata";
import { vanityPageImagePaths } from "../../data/vanity-page-images";
import { fabricationPageImagePaths } from "../../data/fabrication-page-images";

export const runtime = "nodejs";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] || character);
}

export function GET() {
  const factoryEvidenceImages = [
    ...getPublicImageEntries("/assets/factory/local/").map((image) => image.src),
    ...getAssets("hotel-project").filter((asset) => asset.sourceFolder === "发货").map((asset) => asset.src),
    "/assets/factory/evidence/redacted-stone-drawing-review-example.png",
    "/videos/posters/atelier-marble-workshop-clip-07.jpg"
  ];
  const imageGroups = [
    { page: "/", images: ["/assets/factory/factory-hero-workshop.webp", "/videos/posters/atelier-marble-workshop-clip-07.jpg", "/assets/vanity-cabinet/cover.webp", "/materials/categories/hotel-projects.webp", "/assets/home-top-cover.webp", "/assets/carving-decor/cover.webp", "/assets/why-choose-us/why-choose-us.webp", "/materials/featured-covers/kitchen-countertop.webp", "/materials/featured-covers/coffee-table.webp", "/materials/featured-covers/carving-decor.webp", "/materials/featured-covers/project-support.webp"] },
    { page: "/materials", images: getAssets("materials").map((asset) => asset.src) },
    { page: "/projects", images: getProjectAssets("all").map((asset) => asset.src) },
    { page: "/architectural-stone", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/countertops", images: ["/assets/home-top-cover.webp", ...getAssets("kitchen-countertop", 2).concat(getAssets("coffee-table", 1)).map((image) => image.src)] },
    { page: "/countertops/marble-countertops", images: ["/materials/featured-covers/kitchen-countertop.webp"] },
    { page: "/countertops/vanity-tops", images: vanityPageImagePaths },
    { page: "/countertops/integrated-stone-sinks", images: ["/assets/vanity-cabinet/hero.webp"] },
    { page: "/projects/hotel-stone-supply", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/projects/commercial-stone", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/factory", images: factoryEvidenceImages },
    { page: "/custom-stone-fabrication-china", images: fabricationPageImagePaths },
    { page: "/resources", images: ["/generated/guides/buyer-guide-hero.webp"] },
    { page: "/architectural-stone/wall-cladding", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/architectural-stone/flooring", images: ["/materials/categories/hotel-projects.webp"] },
    { page: "/materials/marble", images: ["/materials/hero/atelier-marble-luxury-hero.webp"] }
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${imageGroups
    .map((group) => `\n  <url><loc>${escapeXml(absoluteUrl(group.page))}</loc>${[...new Set(group.images)].map((image) => `<image:image><image:loc>${escapeXml(absoluteUrl(image))}</image:loc></image:image>`).join("")}</url>`)
    .join("")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
