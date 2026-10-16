import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";
import sharp from "sharp";
import { renderToStaticMarkup } from "react-dom/server";
import CadProposalEvidence from "../components/CadProposalEvidence";
import { cadProposalEvidence } from "../data/cad-proposal-evidence";

test("public proposal evidence preserves the client quotation, distinguishes its stage and retains page-specific inquiry attribution", () => {
  for (const sourcePage of ["/", "/custom-stone-fabrication-china"]) {
    const html = renderToStaticMarkup(CadProposalEvidence({ sourcePage }));
    assert.ok(html.includes(cadProposalEvidence.quote));
    assert.match(html, /not an order confirmation/);
    assert.match(html, /Technical details and proposal figures are retained/);
    assert.ok(html.includes(`sourcePage=${encodeURIComponent(sourcePage)}`));
    assert.ok(html.includes("projectType=Commercial%20Stone%20Projects"));
    assert.doesNotMatch(html, /application\/ld\+json|AggregateRating|Review|clipboard|AppData|private-sources/);
  }
});

test("public image renditions are flattened, metadata-free and decode to identical pixels", async () => {
  const png = await fs.readFile(`public${cadProposalEvidence.fullSizeImage}`);
  const webp = await fs.readFile(`public${cadProposalEvidence.image}`);
  const info = await sharp(png).metadata();
  assert.equal(info.width, cadProposalEvidence.width);
  assert.equal(info.height, cadProposalEvidence.height);
  assert.equal(info.exif, undefined);
  assert.equal(info.xmp, undefined);
  const [pngPixels, webpPixels] = await Promise.all([sharp(png).ensureAlpha().raw().toBuffer(), sharp(webp).ensureAlpha().raw().toBuffer()]);
  assert.deepEqual(pngPixels, webpPixels, "web rendition must not alter document values or the quotation");
});
