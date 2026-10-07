import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as Sitemap from "../app/image-sitemap.xml/route";
import * as PageSitemap from "../app/sitemap";

const origin = "https://ateliermarblestone.com";
const component = (module) => typeof module.default === "function" ? module.default : module.default.default;

test("image sitemap matches rendered images on every public sitemap page", async () => {
  const GET = Sitemap.GET ?? Sitemap.default.GET;
  const response = GET();
  assert.match(response.headers.get("Content-Type"), /application\/xml/);
  const xml = await response.text();
  const groups = [...xml.matchAll(/<url><loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)];
  assert.equal(new Set(groups.map((group) => group[1])).size, groups.length);
  assert.doesNotMatch(xml, /<image:(?:caption|title|license|geo_location)>/);
  assert.doesNotMatch(xml, /<loc>[^<]*\/(?:contact\/thank-you|project\/)[^<]*<\/loc>/);

  const publicRoutes = component(PageSitemap)().map((entry) => new URL(entry.url).pathname);
  for (const route of publicRoutes) {
    const Page = await import(pathToFileURL(path.join(process.cwd(), "app", route.slice(1), "page.tsx")).href);
    const html = renderToStaticMarkup(await component(Page)({ searchParams: Promise.resolve({}) }));
    const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main, `${route} must render a main region`);
    const displayed = new Set([...main.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map((match) => {
      const image = new URL(match[1].replace(/&amp;/g, "&"), origin);
      return image.pathname === "/_next/image" ? image.searchParams.get("url") : image.pathname;
    }));
    const group = groups.find((entry) => entry[1] === origin + route);
    if (!displayed.size) {
      assert.equal(group, undefined, `${route} should not have an empty image sitemap group`);
      continue;
    }
    assert.ok(group, `${route} must be present in image sitemap`);
    const listed = new Set([...group[2].matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((match) => new URL(match[1]).pathname));
    assert.deepEqual(listed, displayed, `${route} sitemap must match displayed images`);
    for (const src of listed) await fs.access(path.join(process.cwd(), "public", src.slice(1)));
  }
});
