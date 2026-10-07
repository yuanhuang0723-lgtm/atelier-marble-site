import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import type { ReactNode } from "react";

type ImagePage = { page: string; images: string[] };
type PageModule = { default: unknown; metadata?: { robots?: string | { index?: boolean } } };
const root = process.cwd();

function unwrapFunction(value: unknown): (...args: any[]) => any {
  let candidate = value;
  for (let depth = 0; depth < 3; depth++) {
    if (typeof candidate === "function") return candidate as (...args: any[]) => any;
    if (candidate && typeof candidate === "object" && "default" in candidate) {
      candidate = (candidate as { default: unknown }).default;
    } else break;
  }
  throw new Error("Expected a page or sitemap function");
}

function isNoindex(module: PageModule): boolean {
  const metadata = module.metadata || (module.default as PageModule | undefined)?.metadata;
  const robots = metadata?.robots;
  return typeof robots === "string" ? /\bnoindex\b/i.test(robots) : robots?.index === false;
}

async function main() {
  const sitemapModule = await import(pathToFileURL(path.join(root, "app/sitemap.ts")).href);
  const urls = unwrapFunction(sitemapModule.default)() as { url: string }[];
  const pages: ImagePage[] = [];
  let inspected = 0;

  for (const { url } of urls) {
    const canonical = new URL(url);
    const page = canonical.pathname;
    const filename = path.resolve(root, "app", page.slice(1), "page.tsx");
    if (!filename.startsWith(path.join(root, "app") + path.sep)) throw new Error(`Invalid page path: ${page}`);
    const module = await import(pathToFileURL(filename).href) as PageModule;
    inspected++;
    if (isNoindex(module)) continue;
    const element = await unwrapFunction(module.default)({ searchParams: Promise.resolve({}), params: Promise.resolve({}) }) as ReactNode;
    const markup = renderToStaticMarkup(element);
    const mainRegion = markup.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
    if (mainRegion === undefined) throw new Error(`Missing main region: ${page}`);
    const images = new Set<string>();

    for (const match of mainRegion.matchAll(/<img\b[^>]*src="([^"]+)"/gi)) {
      const src = match[1].replace(/&amp;/g, "&");
      if (/^(?:data|blob):/i.test(src)) continue;
      const image = new URL(src, canonical.origin);
      const original = image.pathname === "/_next/image" ? image.searchParams.get("url") : image.href;
      if (!original) throw new Error(`Missing optimizer image URL: ${page}`);
      const target = new URL(original, canonical.origin);
      if (target.origin !== canonical.origin) throw new Error(`External image needs explicit review: ${page} ${target.origin}${target.pathname}`);
      if (target.search || target.hash) throw new Error(`Unexpected image URL parameters: ${page} ${target.pathname}`);
      await fs.access(path.join(root, "public", decodeURIComponent(target.pathname).slice(1)));
      images.add(target.pathname);
    }

    if (images.size > 1000) throw new Error(`Image sitemap limit exceeded: ${page}`);
    if (images.size) pages.push({ page, images: [...images].sort() });
  }

  if (new Set(pages.map((entry) => entry.page)).size !== pages.length) throw new Error("Duplicate canonical page paths");
  await fs.writeFile(path.join(root, "data/image-sitemap-pages.json"), JSON.stringify(pages, null, 2) + "\n", "utf8");
  const imageCount = pages.reduce((sum, entry) => sum + entry.images.length, 0);
  console.log(`Image sitemap inventory: ${inspected} public routes, ${pages.length} image pages, ${imageCount} page/image associations.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
