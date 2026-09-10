import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/projects",
    "/architectural-stone",
    "/architectural-stone/wall-cladding",
    "/architectural-stone/flooring",
    "/materials",
    "/materials/marble",
    "/materials/quartzite",
    "/materials/granite",
    "/factory",
    "/contact",
    "/countertops",
    "/countertops/marble-countertops",
    "/countertops/vanity-tops",
    "/countertops/integrated-stone-sinks",
    "/projects/hotel-stone-supply",
    "/projects/commercial-stone",
    "/projects/canada-shower-niches-2025",
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
  const recentlyUpdated = new Set([
    "/",
    "/projects",
    "/architectural-stone",
    "/architectural-stone/wall-cladding",
    "/architectural-stone/flooring",
    "/materials",
    "/materials/marble",
    "/materials/quartzite",
    "/materials/granite",
    "/factory",
    "/contact",
    "/countertops",
    "/countertops/marble-countertops",
    "/projects/hotel-stone-supply",
    "/projects/commercial-stone",
    "/projects/canada-shower-niches-2025",
    "/custom-stone-fabrication-china",
    "/resources",
    "/how-we-work"
  ]);
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8,
      ...(recentlyUpdated.has(route) ? { lastModified: new Date("2026-09-10T00:00:00.000Z") } : {})
    }))
  ];
}
