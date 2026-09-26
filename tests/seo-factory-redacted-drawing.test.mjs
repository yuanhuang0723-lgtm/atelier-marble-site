import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as FactoryPageModule from "../app/factory/page";
import { GET as getImageSitemap } from "../app/image-sitemap.xml/route";

const FactoryPage = typeof FactoryPageModule.default === "function"
  ? FactoryPageModule.default
  : FactoryPageModule.default.default;
const drawingSrc = "/assets/factory/evidence/redacted-stone-drawing-review-example.png";

test("factory evidence presents a redacted drawing example with an accurate disclosure", async () => {
  const html = renderToStaticMarkup(FactoryPage());
  assert.ok(html.includes(drawingSrc), "the redacted drawing example should be rendered");
  assert.match(html, /Redacted drawing example/i);
  assert.match(html, /project identifiers and dimension values removed/i);
  assert.match(html, /not a completed project or QC record/i);
  assert.match(html, /alt="Redacted stone drawing excerpt showing plan and elevation views/i);
  const image = await fs.readFile(`public${drawingSrc}`);
  assert.deepEqual([...image.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], "asset must be a raster PNG without a searchable PDF text layer");
});

test("redacted drawing example is listed in the image sitemap", async () => {
  const response = getImageSitemap();
  const xml = await response.text();
  assert.ok(xml.includes(`https://ateliermarblestone.com${drawingSrc}`));
});
