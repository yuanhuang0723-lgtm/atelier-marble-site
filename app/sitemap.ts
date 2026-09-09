import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/projects",
    "/architectural-stone",
    "/architectural-stone/wall-cladding",
    "/materials",
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
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8
    }))
  ];
}
