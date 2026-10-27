import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "OAI-SearchBot",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended"
        ],
        allow: "/"
      },
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/image-sitemap.xml`]
  };
}
