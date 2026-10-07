const auditUrl = new URL(process.env.SEO_AUDIT_URL || "https://ateliermarblestone.com");
const auditOrigin = auditUrl.origin;
const canonicalOrigin = new URL(process.env.SEO_CANONICAL_ORIGIN || auditOrigin).origin;
const requestTimeoutMs = Number(process.env.SEO_AUDIT_TIMEOUT_MS || 15000);
const snippetLengthExemptions = new Set(["/privacy-policy"]);

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_, code) => String.fromCodePoint(code.toLowerCase().startsWith("x") ? parseInt(code.slice(1), 16) : parseInt(code, 10)));
}

function cleanText(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function normalizePath(value, origin = auditOrigin) {
  const url = new URL(value, origin);
  const path = url.pathname.replace(/\/+$/, "");
  return path || "/";
}

function getMetaTags(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => {
    const tag = match[0];
    const name = tag.match(/\bname\s*=\s*["']([^"']*)["']/i)?.[1]?.toLowerCase() || "";
    const content = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1] || "";
    return { name, content: decodeHtml(content) };
  });
}

async function fetchResource(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), requestTimeoutMs);
  try {
    const response = await fetch(url, { redirect: "manual", signal: controller.signal });
    return {
      status: response.status,
      location: response.headers.get("location") || "",
      body: await response.text()
    };
  } catch (error) {
    const reason = error.name === "AbortError" ? `timeout after ${requestTimeoutMs}ms` : error.message;
    throw new Error(`${url}: ${reason}`);
  } finally {
    clearTimeout(timer);
  }
}

function parseJsonLd(html) {
  const entities = [];
  for (const match of html.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(match[1].trim());
      const values = Array.isArray(parsed) ? parsed : [parsed];
      for (const value of values) if (value && typeof value === "object") entities.push(value);
    } catch (error) {
      entities.push({ __invalidJsonLd: error.message });
    }
  }
  return entities;
}

function inspectFaqs(entities, visibleText, path) {
  const errors = [];
  for (const entity of entities.filter((item) => item["@type"] === "FAQPage")) {
    if (!Array.isArray(entity.mainEntity) || entity.mainEntity.length === 0) {
      errors.push(`${path}: FAQPage has no questions`);
      continue;
    }
    for (const question of entity.mainEntity) {
      const name = cleanText(String(question.name || ""));
      const answer = cleanText(String(question.acceptedAnswer?.text || ""));
      if (!name || !answer) errors.push(`${path}: FAQ question or answer is incomplete`);
      if (name && !visibleText.toLowerCase().includes(name.toLowerCase())) {
        errors.push(`${path}: FAQ question is not visible: ${name}`);
      }
      if (answer && !visibleText.toLowerCase().includes(answer.toLowerCase())) {
        errors.push(`${path}: FAQ answer is not visible for: ${name}`);
      }
    }
  }
  return errors;
}

async function fetchPage(path) {
  const url = `${auditOrigin}${path}${path.includes("?") ? "&" : "?"}seoAudit=1`;
  const resource = await fetchResource(url);
  const title = cleanText(resource.body.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "");
  const metaTags = getMetaTags(resource.body);
  const description = metaTags.find((meta) => meta.name === "description")?.content || "";
  const h1Values = [...resource.body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => cleanText(match[1])).filter(Boolean);
  const canonical = resource.body.match(/<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([^"']*)["']/i)?.[1] || "";
  const metaRobots = getMetaTags(resource.body)
    .filter((meta) => meta.name === "robots" || meta.name === "googlebot")
    .map((meta) => meta.content.toLowerCase())
    .join(",");
  const body = resource.body.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || resource.body;
  const visibleText = cleanText(body.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " "));
  const entities = parseJsonLd(resource.body);
  const jsonLdErrors = entities.some((entity) => entity.__invalidJsonLd)
    ? [`${path}: invalid JSON-LD`] : [];
  return {
    path, status: resource.status, location: resource.location, body: resource.body,
    title, description, h1Values, canonical, metaRobots, hasKeywordMeta: metaTags.some((meta) => meta.name === "keywords"), visibleText, entities,
    jsonLdErrors, faqErrors: inspectFaqs(entities, visibleText, path)
  };
}

function parseSitemapPaths(xml) {
  if (!/<urlset\b/i.test(xml) || !/<loc>/i.test(xml)) throw new Error("Sitemap is not a valid urlset");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => normalizePath(decodeHtml(match[1])));
}

function mainImagePaths(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || "";
  const images = new Set();
  for (const match of main.matchAll(/<img\b[^>]*src\s*=\s*["']([^"']+)["']/gi)) {
    const src = decodeHtml(match[1]);
    if (/^(?:data|blob):/i.test(src)) continue;
    const url = new URL(src, auditOrigin);
    const original = url.pathname === "/_next/image" ? url.searchParams.get("url") : url.href;
    if (original) images.add(normalizePath(original, auditOrigin));
  }
  return images;
}

async function main() {
  const errors = [];
  const warnings = [];
  let sitemap;
  try {
    sitemap = await fetchResource(`${auditOrigin}/sitemap.xml?seoAudit=1`);
  } catch (error) {
    throw new Error(`Could not fetch sitemap: ${error.message}`);
  }
  if (sitemap.status !== 200) {
    throw new Error(`Sitemap returned HTTP ${sitemap.status}${sitemap.location ? ` -> ${sitemap.location}` : ""}`);
  }
  const paths = parseSitemapPaths(sitemap.body);
  const duplicates = paths.filter((path, index) => paths.indexOf(path) !== index);
  if (duplicates.length) errors.push(`sitemap contains duplicate paths: ${[...new Set(duplicates)].join(", ")}`);

  const pages = await Promise.all(paths.map(async (path) => {
    try { return await fetchPage(path); }
    catch (error) { errors.push(error.message); return null; }
  }));
  const validPages = pages.filter(Boolean);
  const incoming = new Map(paths.map((path) => [path, new Set()]));

  for (const page of validPages) {
    if (page.status !== 200) errors.push(`${page.path}: HTTP ${page.status}${page.location ? ` -> ${page.location}` : ""}`);
    if (page.title.length === 0) errors.push(`${page.path}: missing title`);
    if (page.description.length === 0) errors.push(`${page.path}: missing description`);
    if (!snippetLengthExemptions.has(page.path)) {
      if (page.title.length < 50 || page.title.length > 60) errors.push(`${page.path}: title length ${page.title.length}, expected 50–60`);
      if (page.description.length < 140 || page.description.length > 160) errors.push(`${page.path}: description length ${page.description.length}, expected 140–160`);
    }
    if (page.h1Values.length === 0) errors.push(`${page.path}: missing H1`);
    if (page.h1Values.length > 1) errors.push(`${page.path}: expected one H1, found ${page.h1Values.length}`);
    if (page.hasKeywordMeta) errors.push(`${page.path}: explicit meta keywords found`);
    if (/\bnoindex\b/i.test(page.metaRobots)) errors.push(`${page.path}: sitemap page has noindex`);
    const canonical = page.canonical ? new URL(page.canonical, canonicalOrigin) : null;
    const expected = new URL(page.path, canonicalOrigin);
    if (!canonical || canonical.origin !== canonicalOrigin || normalizePath(canonical.href, canonicalOrigin) !== normalizePath(expected.href, canonicalOrigin)) {
      errors.push(`${page.path}: canonical mismatch (${page.canonical || "missing"})`);
    }
    errors.push(...page.jsonLdErrors, ...page.faqErrors);

    const body = page.body.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || "";
    for (const match of body.matchAll(/<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
      try {
        const target = new URL(decodeHtml(match[1]), auditOrigin);
        if (target.origin === auditOrigin) {
          const targetPath = normalizePath(target.pathname);
          if (targetPath !== page.path && incoming.has(targetPath)) incoming.get(targetPath).add(page.path);
        }
      } catch { /* Ignore malformed external links here; the public route check covers route integrity. */ }
    }
  }
  for (const [path, sources] of incoming) if (path !== "/" && sources.size === 0) errors.push(`${path}: no incoming internal link`);

  let imageAssociations = 0;
  let imagePagesChecked = 0;
  try {
    const images = await fetchResource(`${auditOrigin}/image-sitemap.xml?seoAudit=1`);
    if (images.status !== 200) errors.push(`image sitemap: HTTP ${images.status}${images.location ? ` -> ${images.location}` : ""}`);
    else {
      const groups = new Map();
      for (const match of images.body.matchAll(/<url>([\s\S]*?)<\/url>/gi)) {
        const location = match[1].match(/<loc>([^<]+)<\/loc>/i)?.[1];
        if (!location) { errors.push("image sitemap: missing page location"); continue; }
        const pageUrl = new URL(decodeHtml(location), canonicalOrigin);
        const page = normalizePath(pageUrl.href, canonicalOrigin);
        const entries = [...match[1].matchAll(/<image:loc>([^<]+)<\/image:loc>/gi)].map((entry) => {
          const imageUrl = new URL(decodeHtml(entry[1]), canonicalOrigin);
          if (imageUrl.origin !== canonicalOrigin || imageUrl.search || imageUrl.hash) errors.push(`${page}: image sitemap URL needs review (${imageUrl.origin}${imageUrl.pathname})`);
          return normalizePath(imageUrl.href, canonicalOrigin);
        });
        if (pageUrl.origin !== canonicalOrigin) errors.push(`${page}: image sitemap canonical origin mismatch`);
        if (groups.has(page)) errors.push(`${page}: duplicate image sitemap page group`);
        if (!entries.length || entries.length > 1000) errors.push(`${page}: invalid image sitemap image count ${entries.length}`);
        if (new Set(entries).size !== entries.length) errors.push(`${page}: duplicate image sitemap image URL`);
        if (!paths.includes(page)) errors.push(`${page}: image sitemap page is not in the page sitemap`);
        groups.set(page, new Set(entries));
        imageAssociations += entries.length;
      }
      if (!groups.size) errors.push("image sitemap: no image entries");
      imagePagesChecked = groups.size;
      for (const page of validPages) {
        const displayed = mainImagePaths(page.body);
        const listed = groups.get(page.path) || new Set();
        for (const image of displayed) if (!listed.has(image)) errors.push(`${page.path}: displayed image missing from image sitemap (${image})`);
        for (const image of listed) if (!displayed.has(image)) errors.push(`${page.path}: image sitemap URL not displayed on this page (${image})`);
      }
    }
  } catch (error) { errors.push(`image sitemap: ${error.message}`); }

  for (const [title, titlePages] of new Map(validPages.map((page) => [page.title, validPages.filter((item) => item.title === page.title).map((item) => item.path)]))) {
    if (titlePages.length > 1) errors.push(`duplicate title: ${title} (${[...new Set(titlePages)].join(", ")})`);
  }
  if (warnings.length) console.warn(warnings.map((warning) => `Warning: ${warning}`).join("\n"));
  if (errors.length) { console.error(errors.map((error) => `- ${error}`).join("\n")); process.exit(1); }
  const snippetChecked = validPages.filter((page) => !snippetLengthExemptions.has(page.path)).length;
  console.log(`SEO audit passed for ${validPages.length} sitemap pages at ${auditOrigin} (canonical: ${canonicalOrigin}); strict 50–60 / 140–160 snippet lengths passed for ${snippetChecked} pages, with the legal privacy page exempted; image sitemap matches ${imageAssociations} displayed image associations across ${imagePagesChecked} pages.`);
}

await main();
