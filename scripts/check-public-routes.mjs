import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ateliermarblestone.com").replace(/\/$/, "");
const baseOrigin = new URL(baseUrl).origin;
const escapedBaseUrl = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const routes = ["/", "/contact", "/about", "/factory", "/materials", "/materials/marble", "/materials/quartzite", "/materials/granite", "/projects", "/resources", "/countertops", "/countertops/marble-countertops", "/countertops/vanity-tops", "/countertops/integrated-stone-sinks", "/projects/hotel-stone-supply", "/projects/commercial-stone", "/projects/canada-shower-niches-2025", "/architectural-stone", "/architectural-stone/flooring", "/architectural-stone/wall-cladding", "/custom-stone-fabrication-china", "/hotel-projects", "/kitchen-countertops", "/stone-slabs", "/stone-sculptures", "/marble-coffee-tables", "/project-brief-template.txt", "/sitemap.xml", "/image-sitemap.xml", "/robots.txt"];
const legacyRedirects = {
  "/hotel-hospitality-projects": "/projects/hotel-stone-supply",
  "/hotel-projects": "/projects/hotel-stone-supply",
  "/kitchen-countertops": "/countertops",
  "/luxury-residential-kitchens": "/countertops",
  "/architectural-stone-interiors": "/architectural-stone",
  "/custom-furniture-sculptures": "/custom-stone-fabrication-china",
  "/stone-sculptures": "/custom-stone-fabrication-china",
  "/marble-coffee-tables": "/custom-stone-fabrication-china",
  "/stone-slabs": "/materials"
};

async function fetchRoute(route) {
  const curlCommand = process.platform === "win32" ? "curl.exe" : "curl";
  try {
    const [{ stdout: body }, { stdout: headerText }] = await Promise.all([
      execFileAsync(curlCommand, ["--fail", "--silent", "--show-error", "--location", "--max-time", "30", `${baseUrl}${route}`], { maxBuffer: 8 * 1024 * 1024 }),
      execFileAsync(curlCommand, ["--fail", "--silent", "--show-error", "--location", "--max-time", "30", "--head", `${baseUrl}${route}`], { maxBuffer: 128 * 1024 })
    ]);
    return { route, body, headers: headerText.toLowerCase() };
  } catch (error) {
    throw new Error(`${route} could not be fetched: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function fetchRedirect(route) {
  const curlCommand = process.platform === "win32" ? "curl.exe" : "curl";
  const { stdout } = await execFileAsync(curlCommand, ["--silent", "--show-error", "--max-time", "30", "--head", `${baseUrl}${route}`], { maxBuffer: 128 * 1024 });
  const statuses = [...stdout.matchAll(/HTTP\/\S+\s+(\d{3})/g)];
  const location = stdout.match(/^location:\s*(.+)$/im)?.[1]?.trim() || "";
  return { route, status: Number(statuses.at(-1)?.[1] || 0), location };
}

const pages = await Promise.all(routes.map(fetchRoute));
const redirects = await Promise.all(Object.entries(legacyRedirects).map(([route, destination]) => fetchRedirect(route).then((result) => ({ ...result, destination }))));
const contents = new Map(pages.map(({ route, body }) => [route, body]));
const pageHeaders = new Map(pages.map(({ route, headers }) => [route, headers]));
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
if (!contents.get("/projects/canada-shower-niches-2025").includes("Several thousand custom stone shower niches")) {
  throw new Error("Canada project reference is missing or incomplete");
}
for (const header of ["x-content-type-options: nosniff", "x-frame-options: sameorigin", "referrer-policy: strict-origin-when-cross-origin"]) {
  if (!pageHeaders.get("/").includes(header)) throw new Error(`homepage is missing ${header}`);
}
if (!pageHeaders.get("/project-brief-template.txt").includes("content-disposition: attachment")) {
  throw new Error("project brief template is not served as an attachment");
}
if (new URL(baseUrl).hostname === "ateliermarblestone.com") {
  const curlCommand = process.platform === "win32" ? "curl.exe" : "curl";
  for (const host of ["www.ateliermarblestone.com", "atelier-marble-site.vercel.app"]) {
    const { stdout } = await execFileAsync(curlCommand, ["--silent", "--show-error", "--max-time", "30", "--head", `https://${host}/`], { maxBuffer: 128 * 1024 });
    const statuses = [...stdout.matchAll(/HTTP\/\S+\s+(\d{3})/g)];
    const status = Number(statuses.at(-1)?.[1] || 0);
    const location = stdout.match(/^location:\s*(.+)$/im)?.[1]?.trim() || "";
    const target = location ? new URL(location, `https://${host}`).origin : "";
    if (![301, 308].includes(status) || target !== baseOrigin) {
      throw new Error(`${host} should redirect to ${baseOrigin}, received ${status} ${location}`);
    }
  }
}
for (const route of ["/", "/contact", "/about", "/factory", "/materials", "/materials/marble", "/materials/quartzite", "/materials/granite", "/projects", "/countertops", "/countertops/marble-countertops", "/countertops/vanity-tops", "/architectural-stone/flooring", "/architectural-stone/wall-cladding", "/hotel-projects", "/kitchen-countertops", "/stone-slabs", "/stone-sculptures", "/marble-coffee-tables"]) {
  if (!new RegExp(`<link[^>]+rel="canonical"[^>]+href="${escapedBaseUrl}(?:/|"|\\?)`, "i").test(contents.get(route))) {
    throw new Error(`${route} is missing a canonical URL`);
  }
}
for (const redirect of redirects) {
  if (![301, 308].includes(redirect.status) || redirect.location !== redirect.destination) {
    throw new Error(`${redirect.route} should redirect to ${redirect.destination}, received ${redirect.status} ${redirect.location}`);
  }
}

console.log(`Public route check passed for ${pages.length} routes and ${redirects.length} redirects at ${baseUrl}`);
