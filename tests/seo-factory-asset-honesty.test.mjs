import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import * as Naming from "../scripts/asset-naming.mjs";
import * as AssetModule from "../lib/assets";

test("factory concept assets are described as illustrations, not production evidence", () => {
  const sourceRoot = "D:\\石材素材";
  const sourceFile = path.join(sourceRoot, "车间封面", "ChatGPT Image 2026年6月16日 00_11_52.png");
  const info = Naming.sourceInfo(sourceRoot, sourceFile);
  const title = Naming.titleFor(sourceFile, info, "image");
  const alt = Naming.altFor(info, "image");
  const asset = AssetModule.assets.find((item) => item.category === "factory" && item.sourceName === "ChatGPT Image 2026年6月16日 00_11_52.png");

  assert.equal(info.label, "AI-Generated Workshop Illustration");
  assert.match(title, /AI-Generated Stone Workshop Concept/);
  assert.match(alt, /AI-generated concept illustration/i);
  assert.ok(asset, "the source image should remain addressable in the manifest");
  assert.equal(asset.title, title);
  assert.equal(asset.alt, alt);
  assert.match(asset.description, /does not document a real facility/i);

  const project = AssetModule.getCaseStudyForAsset(asset);
  assert.match(project.context, /illustrative|concept/i);
  assert.match(project.description, /not documentation/i);
  assert.doesNotMatch(`${project.context} ${project.scope} ${project.result}`, /production evidence|packing evidence|factory proof/i);
  assert.equal(project.productionEvidence.length, 0, "concept images cannot populate a production evidence field");

  const factoryAssets = AssetModule.assets.filter((item) => item.category === "factory");
  assert.equal(factoryAssets.length, 36);
  for (const item of factoryAssets) {
    assert.match(item.alt, /illustrative|AI-generated/i, `${item.filename} alt should disclose concept imagery`);
    assert.doesNotMatch(item.alt, /real local|production image from source folder/i);
    assert.match(item.description, /illustrative|AI-generated/i);
    const details = AssetModule.getCaseStudyForAsset(item);
    assert.match(details.context, /illustrative|concept/i);
    assert.doesNotMatch(`${details.context} ${details.scope} ${details.result}`, /production evidence|packing evidence|factory proof/i);
  }
});

test("semantic image filenames preserve generated case-route identifiers", () => {
  const sourceRoot = "D:\\石材素材";
  const sourceFile = path.join(sourceRoot, "车间封面", "ChatGPT Image 2026年6月16日 00_11_52.png");
  assert.equal(typeof Naming.publicFilenameFor, "function", "asset generator should provide a semantic public filename");
  const info = Naming.sourceInfo(sourceRoot, sourceFile);
  const publicFilename = Naming.publicFilenameFor(sourceFile, info, "image");
  const asset = AssetModule.assets.find((item) => item.category === "factory" && item.sourceName === "ChatGPT Image 2026年6月16日 00_11_52.png");

  assert.match(publicFilename, /^ai-generated-stone-workshop-concept-illustration-[a-f0-9]{10}\.webp$/);
  assert.ok(asset);
  assert.equal(asset.filename, "chatgpt-image-2026-6-16-00_11_52-7c98e2421d.webp");
  assert.equal(AssetModule.legacySlugFromAsset(asset), "chatgpt-image-2026-6-16-00_11_52-7c98e2421d");
  assert.equal(asset.publicFilename, publicFilename);
  assert.equal(asset.src, `/materials/factory/${publicFilename}`);
  assert.equal(asset.legacySrc, "/materials/factory/chatgpt-image-2026-6-16-00_11_52-7c98e2421d.webp");
});

test("remaining visual references use source-aware descriptions and semantic public filenames", () => {
  const sourceRoot = "D:\\石材素材";
  const references = AssetModule.assets.filter((asset) => asset.category !== "factory");
  assert.equal(references.length, 166);
  const projectConceptTitles = new Set();

  for (const asset of references) {
    const sourceFile = path.join(sourceRoot, asset.sourceFolder, asset.sourceName);
    const info = Naming.sourceInfo(sourceRoot, sourceFile);
    const expectedPublicFilename = Naming.publicFilenameFor(sourceFile, info, "image", asset.filename);

    assert.equal(asset.title, Naming.titleFor(sourceFile, info, "image", asset.filename), `${asset.sourceName} title should match its reviewed source group`);
    assert.equal(asset.alt, Naming.altFor(info, "image"), `${asset.sourceName} alt should match its reviewed visual category`);
    assert.equal(asset.publicFilename, expectedPublicFilename, `${asset.sourceName} should use its semantic filename`);
    assert.match(asset.publicFilename, /^[a-z0-9-]+-[a-f0-9]{10}\.webp$/);
    assert.equal(asset.legacySrc, `/materials/${asset.category}/${asset.filename}`, `${asset.sourceName} should preserve its old public URL`);
    assert.doesNotMatch(`${asset.title} ${asset.alt} ${asset.description}`, /real local|from source folder/i);

    if (asset.sourceFolder === "新建文件夹") {
      assert.match(asset.alt, /illustrative/i);
      projectConceptTitles.add(asset.title);
    }
    if (asset.sourceFolder === "发货") {
      assert.match(asset.alt, /not documentation of export packing or shipment|not an export packing or shipment record/i);
    }
  }

  assert.equal(projectConceptTitles.size, 52, "concept gallery title suffixes should remain unique");
});
