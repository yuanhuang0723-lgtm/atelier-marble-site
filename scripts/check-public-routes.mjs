import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://atelier-marble-site.vercel.app").replace(/\/$/, "");
const routes = ["/", "/contact", "/about", "/factory", "/materials", "/projects", "/resources", "/countertops", "/countertops/vanity-tops", "/countertops/integrated-stone-sinks", "/projects/hotel-stone-supply", "/projects/commercial-stone", "/architectural-stone", "/custom-stone-fabrication-china", "/project-brief-template.txt", "/sitemap.xml", "/image-sitemap.xml", "/robots.txt"];

async function fetchRoute(route) {
  const curlCommand = process.platform === "win32" ? "curl.exe" : "curl";
  try {
    const { stdout } = await execFileAsync(curlCommand, ["--fail", "--silent", "--show-error", "--location", "--max-time", "30", `${baseUrl}${route}`], { maxBuffer: 8 * 1024 * 1024 });
    return { route, body: stdout };
  } catch (error) {
    throw new Error(`${route} could not be fetched: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const pages = await Promise.all(routes.map(fetchRoute));
const contents = new Map(pages.map(({ route, body }) => [route, body]));
const sitemap = contents.get("/sitemap.xml");
const imageSitemap = contents.get("/image-sitemap.xml");
const robots = contents.get("/robots.txt");

if (sitemap.includes("/contact/thank-you") || /\/project\/[^<]+/.test(sitemap)) {
  throw new Error("sitemap contains an excluded thank-you or UUID project URL");
}
if (!imageSitemap.includes("<image:loc>") || !imageSitemap.includes(`${baseUrl}/factory`)) {
  throw new Error("image sitemap is missing image entries or page mappings");
}
if (!robots.includes(`${baseUrl}/sitemap.xml`) || !robots.includes(`${baseUrl}/image-sitemap.xml`)) {
  throw new Error("robots.txt does not reference both sitemaps");
}
if (!contents.get("/project-brief-template.txt").includes("ATELIER MARBLE PROJECT BRIEF")) {
  throw new Error("project brief template is missing or incomplete");
}

console.log(`Public route check passed for ${pages.length} routes at ${baseUrl}`);
