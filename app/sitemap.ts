import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/projects",
    "/hotel-hospitality-projects",
    "/luxury-residential-kitchens",
    "/architectural-stone-interiors",
    "/custom-furniture-sculptures",
    "/kitchen-countertops",
    "/hotel-projects",
    "/stone-sculptures",
    "/marble-coffee-tables",
    "/stone-slabs",
    "/materials",
    "/factory",
    "/contact",
    "/countertops",
    "/countertops/vanity-tops",
    "/countertops/integrated-stone-sinks",
    "/projects/hotel-stone-supply",
    "/projects/commercial-stone",
    "/custom-stone-fabrication-china",
    "/resources",
    "/how-we-work",
    "/guides/stone-supplier-china",
    "/guides/export-packing-standards",
    "/guides/hotel-stone-pricing",
    "/guides/stone-project-checklist",
    "/guides/quality-control-delivery",
    "/guides/hotel-lobby-case-study",
    "/about",
    "/privacy-policy"
  ];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8
    }))
  ];
}
