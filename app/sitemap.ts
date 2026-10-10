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
  // Keep these dates aligned with the latest significant page-content, structured-data, or link update.
  // Omit lastModified when there is no verified significant-update date; update this map with future edits.
  const lastModifiedByRoute: Record<string, string> = {
    "/": "2026-10-10",
    "/projects": "2026-09-10",
    "/architectural-stone": "2026-10-10",
    "/architectural-stone/wall-cladding": "2026-10-10",
    "/architectural-stone/flooring": "2026-10-10",
    "/materials": "2026-10-10",
    "/materials/marble": "2026-10-10",
    "/materials/quartzite": "2026-10-10",
    "/materials/granite": "2026-10-10",
    "/factory": "2026-10-10",
    "/contact": "2026-10-10",
    "/countertops": "2026-10-10",
    "/countertops/marble-countertops": "2026-10-10",
    "/countertops/vanity-tops": "2026-10-07",
    "/countertops/integrated-stone-sinks": "2026-10-10",
    "/projects/hotel-stone-supply": "2026-10-10",
    "/projects/commercial-stone": "2026-10-10",
    "/projects/canada-shower-niches-2025": "2026-09-26",
    "/custom-stone-fabrication-china": "2026-10-10",
    "/resources": "2026-10-10",
    "/how-we-work": "2026-10-10",
    "/guides/stone-supplier-china": "2026-10-10",
    "/guides/export-packing-standards": "2026-10-10",
    "/guides/hotel-stone-pricing": "2026-10-10",
    "/guides/stone-project-checklist": "2026-10-10",
    "/guides/quality-control-delivery": "2026-10-10",
    "/guides/hotel-lobby-case-study": "2026-10-10",
    "/about": "2026-10-10"
  };
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      ...(lastModifiedByRoute[route] ? { lastModified: lastModifiedByRoute[route] } : {})
    }))
  ];
}
