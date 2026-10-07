import { absoluteUrl } from "../../lib/seo";
import imagePages from "../../data/image-sitemap-pages.json";

export const runtime = "nodejs";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] || character);
}

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${imagePages
    .map((group) => `\n  <url><loc>${escapeXml(absoluteUrl(group.page))}</loc>${[...new Set(group.images)].map((image) => `<image:image><image:loc>${escapeXml(absoluteUrl(image))}</image:loc></image:image>`).join("")}</url>`)
    .join("")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
