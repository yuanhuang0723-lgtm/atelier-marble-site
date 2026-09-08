const baseUrl = (process.env.SEO_AUDIT_URL || "https://ateliermarblestone.com").replace(/\/$/, "");

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1] || "";
}

function cleanText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

async function fetchPage(path) {
  const response = await fetch(`${baseUrl}${path}${path.includes("?") ? "&" : "?"}seoAudit=1`);
  const html = await response.text();
  const title = cleanText(firstMatch(html, /<title>([\s\S]*?)<\/title>/i));
  const description = decodeHtml(firstMatch(html, /<meta\s+name="description"\s+content="([^"]*)"/i));
  const h1 = cleanText(firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i));
  const canonical = firstMatch(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  return {
    path,
    status: response.status,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    h1,
    canonical,
    hiddenKeywordMarker: /<meta[^>]+name="keywords"|display:\s*none|visibility:\s*hidden/i.test(html)
  };
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml?seoAudit=1`);
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap returned HTTP ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
if (!paths.length) {
  throw new Error("Sitemap contains no URLs");
}

const pages = await Promise.all(paths.map(fetchPage));
const errors = [];
const seenTitles = new Map();

for (const page of pages) {
  if (page.status !== 200) errors.push(`${page.path}: HTTP ${page.status}`);
  if (!page.title) errors.push(`${page.path}: missing title`);
  if (page.titleLength > 65) errors.push(`${page.path}: title too long (${page.titleLength})`);
  if (!page.description) errors.push(`${page.path}: missing description`);
  if (page.descriptionLength < 80 || page.descriptionLength > 180) {
    errors.push(`${page.path}: description length ${page.descriptionLength}`);
  }
  if (!page.h1) errors.push(`${page.path}: missing H1`);
  if (page.canonical !== `${baseUrl}${page.path}` && !(page.path === "/" && page.canonical === baseUrl)) {
    errors.push(`${page.path}: canonical mismatch (${page.canonical || "missing"})`);
  }
  if (page.hiddenKeywordMarker) errors.push(`${page.path}: hidden keyword marker found`);
  const matches = seenTitles.get(page.title) || [];
  matches.push(page.path);
  seenTitles.set(page.title, matches);
}

for (const [title, titlePaths] of seenTitles) {
  if (titlePaths.length > 1) errors.push(`duplicate title: ${title} (${titlePaths.join(", ")})`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`SEO audit passed for ${pages.length} sitemap pages at ${baseUrl}`);
