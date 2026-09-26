import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as FactoryPageModule from "../app/factory/page";
import { GET as getImageSitemap } from "../app/image-sitemap.xml/route";
import { getAssets } from "../lib/assets";
import { getPublicImageEntries } from "../lib/public-image-metadata";

const FactoryPage = typeof FactoryPageModule.default === "function"
  ? FactoryPageModule.default
  : FactoryPageModule.default.default;
const workshopPhotos = getPublicImageEntries("/assets/factory/local/");
const packingPhotos = getAssets("hotel-project").filter((asset) => asset.sourceFolder === "发货");

test("factory page uses semantic source-backed workshop photos", async () => {
  assert.equal(workshopPhotos.length, 3);
  const html = renderToStaticMarkup(FactoryPage());

  for (const photo of workshopPhotos) {
    assert.match(photo.src, /^\/assets\/factory\/workshop\/[a-z0-9-]+-[a-f0-9]{10}\.webp$/);
    assert.ok(photo.title.length > 8);
    assert.ok(photo.alt.length > 30);
    await fs.access(`public${photo.src}`);
    assert.ok(html.includes(photo.src), `${photo.src} should be rendered on the factory page`);
  }
  for (const photo of packingPhotos) {
    await fs.access(`public${photo.src}`);
    assert.ok(html.includes(photo.src), `${photo.src} should be rendered on the factory page`);
  }
});

test("factory trust section includes workshop, packing, drawing and inspection context", () => {
  const html = renderToStaticMarkup(FactoryPage());
  assert.match(html, /Redacted drawing, workshop photos, and packing references/i);
  assert.match(html, /Redacted drawing example/i);
  assert.match(html, /project identifiers and dimension values removed/i);
  assert.match(html, /CAD\/BOQ drawing review/i);
  assert.match(html, /QC checkpoints/i);
  assert.match(html, /machine model is not identified/i);
  assert.match(html, /Canada/);
});

test("factory photo references appear in the image sitemap", async () => {
  const response = getImageSitemap();
  const xml = await response.text();
  assert.match(xml, /<loc>https:\/\/ateliermarblestone\.com\/factory<\/loc>/);
  for (const photo of [...workshopPhotos, ...packingPhotos]) {
    assert.ok(xml.includes(`https://ateliermarblestone.com${photo.src}`), `${photo.src} should appear in the image sitemap`);
  }
});

test("packing reference photos do not claim a completed shipment", () => {
  assert.equal(packingPhotos.length, 2);
  assert.match(packingPhotos[0].alt, /wooden transport frame/i);
  assert.match(packingPhotos[1].alt, /wrapped stone pieces/i);
  for (const photo of packingPhotos) {
    assert.match(photo.alt, /shipment|destination/i);
    assert.match(photo.description, /does not document.*shipment|does not identify.*destination/i);
  }
});
