/** @type {import('next').NextConfig} */
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
      { source: "/stone-slabs", destination: "/materials", permanent: true }
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
