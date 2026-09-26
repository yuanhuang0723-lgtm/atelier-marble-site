import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const metadata = JSON.parse(await fs.readFile(path.join(root, "data", "public-image-metadata.json"), "utf8"));
const dormantLegacyAliases = new Map([
  ["/assets/stone-table-coffee/0d26405f-d14f-452e-8be7-33d96886037b.png", "/materials/projects/illustrative-stone-project-concept-4970085ca1.webp"],
  ["/assets/stone-table-coffee/78d007b0-2cc3-4ab6-b3db-a2cf2e3d6591.png", "/materials/projects/illustrative-stone-project-concept-c3c3b08ace.webp"],
  ["/assets/stone-table-coffee/8f95f6ce-a2bc-4c44-86bb-1946caca37a8.png", "/materials/projects/illustrative-stone-project-concept-e96a005788.webp"],
  ["/materials/projects/0ede5720-0895-486d-aed9-3efcb71a8729-f3cfbfa189.webp", "/materials/carving-decor/illustrative-stone-vanity-interior-f3cfbfa189.webp"],
  ["/materials/projects/1e45d469-3f01-42ea-b194-3c0f23e24a5c-1ae0c0bdd6.webp", "/materials/factory/illustrative-stone-workshop-layout-concept-1ae0c0bdd6.webp"],
  ["/materials/projects/20260613092841_410_46-f2791ad368.webp", "/materials/coffee-table/stone-tile-layout-reference-f2791ad368.webp"],
  ["/materials/projects/20260613104347_463_46-2c4aa748c5.webp", "/materials/factory/illustrative-stone-workshop-layout-concept-2c4aa748c5.webp"],
  ["/materials/projects/35cf3717-173d-42be-a4a3-f3d925137a4c-69c21adec3.webp", "/materials/factory/illustrative-stone-workshop-layout-concept-69c21adec3.webp"],
  ["/materials/projects/3cf6f27a-c457-472c-b46c-a8effb460825-38710e1ab9.webp", "/materials/hotel-project/illustrative-hotel-stone-interior-38710e1ab9.webp"],
  ["/materials/projects/41738f44-4a4b-4c42-8d14-7e93bbd63c3f-b5098d2dd8.webp", "/materials/factory/illustrative-stone-workshop-layout-concept-b5098d2dd8.webp"],
  ["/materials/projects/55e95fa7-f883-46a7-bef9-4c549ec64588-978ca878b4.webp", "/materials/kitchen-countertop/illustrative-stone-dining-table-978ca878b4.webp"],
  ["/materials/projects/7b7cb542-0dbc-4626-b9cc-f663dbee6d06-5aaa47ffdc.webp", "/materials/carving-decor/illustrative-stone-garden-lantern-5aaa47ffdc.webp"],
  ["/materials/projects/a24dccf5-24c4-4d47-8722-02369e7efeca-f70f40e10b.webp", "/materials/materials/illustrative-stone-vanity-concept-f70f40e10b.webp"],
  ["/materials/projects/c8d14e3b-948f-4c0f-b727-1920d5ee594c-a65b60ac20.webp", "/materials/carving-decor/illustrative-stone-interior-concept-a65b60ac20.webp"],
  ["/materials/projects/d4e51396-56b5-41df-b9c8-512c466315e3-1636e29d07.webp", "/materials/factory/illustrative-stone-workshop-layout-concept-1636e29d07.webp"],
  ["/materials/projects/img_0121-df5b5c47ef.webp", "/materials/kitchen-countertop/round-stone-tabletop-reference-df5b5c47ef.webp"]
]);
const factoryPhotoRedirects = new Map([
  ["/assets/factory/local/workshop-19.jpg", "/assets/factory/workshop/stone-workshop-packing-area-b1a9572643.webp"],
  ["/assets/factory/local/workshop-25.jpg", "/assets/factory/workshop/stone-workshop-rack-handling-ced6af3f74.webp"],
  ["/assets/factory/local/workshop-30.jpg", "/assets/factory/workshop/stone-workshop-overhead-hoist-630d0f77ee.webp"]
]);

test("referenced nonmanifest concept images have descriptive paths, honest alt text, and local files", async () => {
  const entries = Object.entries(metadata);
  assert.equal(entries.length, 93);
  assert.equal(entries.filter(([oldSrc]) => oldSrc.startsWith("/assets/stone-sculptures/local/")).length, 25);

  for (const [oldSrc, image] of entries) {
    assert.notEqual(image.src, oldSrc);
    assert.ok(image.alt.trim().length > 20);
    assert.ok(image.title.trim().length > 8);
    assert.equal(image.caption, image.title);
    await fs.access(path.join(root, "public", image.src.slice(1)));
    if (dormantLegacyAliases.has(oldSrc)) {
      assert.equal(image.src, dormantLegacyAliases.get(oldSrc));
      await fs.access(path.join(root, "public", oldSrc.slice(1)));
    } else if (factoryPhotoRedirects.has(oldSrc)) {
      assert.equal(image.src, factoryPhotoRedirects.get(oldSrc));
      assert.match(image.alt, /workshop|crate|stone/i);
      assert.doesNotMatch(image.alt, /CNC model|certified QC|completed shipment/i);
      await assert.rejects(fs.access(path.join(root, "public", oldSrc.slice(1))));
    } else {
      assert.match(path.basename(image.src), /^[a-z0-9-]+-[a-f0-9]{8,10}\.(png|jpg|webp)$/);
      if (!oldSrc.startsWith("/assets/stone-sculptures/local/")) assert.match(image.alt, /illustrative/i);
      await assert.rejects(fs.access(path.join(root, "public", oldSrc.slice(1))));
    }
  }
});
