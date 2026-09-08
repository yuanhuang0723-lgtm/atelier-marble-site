import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";
import { getPublishedProjectCases, getPublishedSitePageRoutes } from "../lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "/",
    "/projects",
    "/architectural-stone",
    "/materials",
    "/factory",
    "/contact",
    "/countertops",
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
  const localizedRoutes = ["/zh", "/zh/contact", "/zh/about", "/zh/materials", "/zh/custom-stone-fabrication-china", "/zh/how-we-work", "/zh/projects/hotel-stone-supply"];
  const [cases, managedPages] = await Promise.all([getPublishedProjectCases(), getPublishedSitePageRoutes()]);
  const managedRoutes = managedPages.map((page) => `${page.locale === "zh" ? "/zh" : ""}/pages/${page.slug}`);
  const caseRoutes = cases.map((item) => `/projects/cases/${item.slug}`);
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8
    })),
    ...localizedRoutes.map((route) => ({ url: absoluteUrl(route), changeFrequency: "weekly" as const, priority: 0.7 })),
    ...managedRoutes.concat(caseRoutes).map((route) => ({ url: absoluteUrl(route), changeFrequency: "weekly" as const, priority: 0.7 }))
  ];
}
