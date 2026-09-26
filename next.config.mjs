import fs from "node:fs";
import path from "node:path";

/** @type {import('next').NextConfig} */
const assetManifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "assets.json"), "utf8"));
const legacyAssetRedirects = assetManifest
  .filter((asset) => asset.legacySrc && asset.src && asset.legacySrc !== asset.src)
  .map((asset) => ({ source: asset.legacySrc, destination: asset.src, permanent: true }));
const publicImageMetadata = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "public-image-metadata.json"), "utf8"));
const legacyPublicImageRedirects = Object.entries(publicImageMetadata)
  .map(([source, image]) => ({ source: encodeURI(source), destination: image.src, permanent: true }));

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/hotel-hospitality-projects", destination: "/projects/hotel-stone-supply", permanent: true },
      { source: "/hotel-projects", destination: "/projects/hotel-stone-supply", permanent: true },
      { source: "/kitchen-countertops", destination: "/countertops", permanent: true },
      { source: "/luxury-residential-kitchens", destination: "/countertops", permanent: true },
      { source: "/architectural-stone-interiors", destination: "/architectural-stone", permanent: true },
      { source: "/custom-furniture-sculptures", destination: "/custom-stone-fabrication-china", permanent: true },
      { source: "/stone-sculptures", destination: "/custom-stone-fabrication-china", permanent: true },
      { source: "/marble-coffee-tables", destination: "/custom-stone-fabrication-china", permanent: true },
      { source: "/stone-slabs", destination: "/materials", permanent: true },
      ...legacyAssetRedirects,
      ...legacyPublicImageRedirects
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }]
      },
      {
        source: "/project-brief-template.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Content-Disposition", value: "attachment; filename=atelier-marble-project-brief.txt" }
        ]
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  }
};

export default nextConfig;
