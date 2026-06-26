import type { MetadataRoute } from "next";
import { getProjectAssets } from "../lib/assets";
import { absoluteUrl, projectPath } from "../lib/seo";

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
    "/how-we-work",
    "/guides/stone-supplier-china",
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
    })),
    ...getProjectAssets("all").map((asset) => ({
      url: absoluteUrl(projectPath(asset)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
