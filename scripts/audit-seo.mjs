const auditOrigin = new URL(process.env.SEO_AUDIT_URL || "https://ateliermarblestone.com").origin;
const canonicalOrigin = new URL(process.env.SEO_CANONICAL_ORIGIN || auditOrigin).origin;
const requestTimeoutMs = Number(process.env.SEO_AUDIT_TIMEOUT_MS || 15000);

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
  const description = getMetaTags(resource.body).find((meta) => meta.name === "description")?.content || "";
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
    title, description, h1Values, canonical, metaRobots, visibleText, entities,
    jsonLdErrors, faqErrors: inspectFaqs(entities, visibleText, path)
  };
}

function parseSitemapPaths(xml) {
  if (!/<urlset\b/i.test(xml) || !/<loc>/i.test(xml)) throw new Error("Sitemap is not a valid urlset");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => normalizePath(decodeHtml(match[1])));
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
    if (page.title.length > 65) warnings.push(`${page.path}: title is long (${page.title.length})`);
    if (page.description.length === 0) errors.push(`${page.path}: missing description`);
    if (page.description.length < 80 || page.description.length > 180) warnings.push(`${page.path}: description length ${page.description.length}`);
    if (page.h1Values.length === 0) errors.push(`${page.path}: missing H1`);
    if (page.h1Values.length > 1) errors.push(`${page.path}: expected one H1, found ${page.h1Values.length}`);
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

  try {
    const images = await fetchResource(`${auditOrigin}/image-sitemap.xml?seoAudit=1`);
    if (images.status !== 200) errors.push(`image sitemap: HTTP ${images.status}${images.location ? ` -> ${images.location}` : ""}`);
    else {
      const entries = [...images.body.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map((match) => ({
        page: normalizePath(decodeHtml(match[1].match(/<loc>([^<]+)<\/loc>/i)?.[1] || "")),
        image: normalizePath(decodeHtml(match[1].match(/<image:loc>([^<]+)<\/image:loc>/i)?.[1] || ""))
      })).filter((entry) => entry.page !== "/" || entry.image !== "/");
      if (!entries.length) errors.push("image sitemap: no image entries");
      for (const entry of entries.slice(0, 10)) {
        const page = validPages.find((item) => item.path === entry.page);
        if (!page) warnings.push(`image sitemap sample page is not in sitemap: ${entry.page}`);
        else if (!page.body.includes(entry.image)) warnings.push(`image sitemap sample not found in page HTML: ${entry.image}`);
      }
    }
  } catch (error) { errors.push(`image sitemap: ${error.message}`); }

  for (const [title, titlePages] of new Map(validPages.map((page) => [page.title, validPages.filter((item) => item.title === page.title).map((item) => item.path)]))) {
    if (titlePages.length > 1) errors.push(`duplicate title: ${title} (${[...new Set(titlePages)].join(", ")})`);
  }
  if (warnings.length) console.warn(warnings.map((warning) => `Warning: ${warning}`).join("\n"));
  if (errors.length) { console.error(errors.map((error) => `- ${error}`).join("\n")); process.exit(1); }
  console.log(`SEO audit passed for ${validPages.length} sitemap pages at ${auditOrigin} (canonical: ${canonicalOrigin})`);
}

await main();
