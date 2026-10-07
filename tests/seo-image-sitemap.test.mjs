import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as Sitemap from "../app/image-sitemap.xml/route";
import * as Home from "../app/page";
import * as Countertops from "../app/countertops/page";
import * as Vanity from "../app/countertops/vanity-tops/page";
import * as Fabrication from "../app/custom-stone-fabrication-china/page";

const origin = "https://ateliermarblestone.com";
const render = (page) => renderToStaticMarkup((typeof page.default === "function" ? page.default : page.default.default)());

test("image sitemap groups actual priority-page images under their canonical page once", async () => {
  const GET = Sitemap.GET ?? Sitemap.default.GET;
  const response = GET();
  assert.match(response.headers.get("Content-Type"), /application\/xml/);
  const xml = await response.text();
  const groups = [...xml.matchAll(/<url><loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)];
  assert.equal(new Set(groups.map((group) => group[1])).size, groups.length);
  assert.doesNotMatch(xml, /<image:(?:caption|title|license|geo_location)>/);

  for (const [route, Page] of [["/", Home], ["/countertops", Countertops], ["/countertops/vanity-tops", Vanity], ["/custom-stone-fabrication-china", Fabrication]]) {
    const main = render(Page).match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main, `${route} must render a main region`);
    const displayed = new Set([...main.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map((match) => {
      const image = new URL(match[1].replace(/&amp;/g, "&"), origin);
      return image.pathname === "/_next/image" ? image.searchParams.get("url") : image.pathname;
    }));
    const group = groups.find((entry) => entry[1] === origin + route);
    assert.ok(group, `${route} must be present in image sitemap`);
    const listed = new Set([...group[2].matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((match) => new URL(match[1]).pathname));
    assert.deepEqual(listed, displayed, `${route} sitemap must match displayed images`);
    for (const src of listed) await fs.access(path.join(process.cwd(), "public", src.slice(1)));
  }
});
