import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";
import sharp from "sharp";
import {renderToStaticMarkup} from "react-dom/server";
import TechnicalProposalCase from "../components/TechnicalProposalCase";
import {technicalProposalEvidence} from "../data/technical-proposal-evidence";

test("the replacement presents original engineering references and exact client feedback without invented approval or ratings", () => {
 const html=renderToStaticMarkup(TechnicalProposalCase({sourcePage:"/",embedded:true}));
 assert.ok(html.includes(technicalProposalEvidence.quote));
 assert.ok(html.includes(technicalProposalEvidence.image));
 assert.ok(html.includes(technicalProposalEvidence.fullSizeImage));
 assert.match(html,/Final site and fixing checks remain open/);
 assert.match(html,/sourcePage=%2F&amp;projectType=Commercial%20Stone%20Projects/);
 assert.doesNotMatch(html,/100%|tolerances verified|Customer Validation|valued partner|APPROVED|★|AggregateRating|stone-fixing-technical-proposal\.webp/);
});

test("the full-resolution and web images retain identical pixels without embedded metadata",async()=>{
 const [png,webp]=await Promise.all([fs.readFile(`public${technicalProposalEvidence.fullSizeImage}`),fs.readFile(`public${technicalProposalEvidence.image}`)]);
 const meta=await sharp(png).metadata();
 assert.equal(meta.width,technicalProposalEvidence.width);
 assert.equal(meta.height,technicalProposalEvidence.height);
 assert.equal(meta.exif,undefined);assert.equal(meta.xmp,undefined);
 const [a,b]=await Promise.all([sharp(png).ensureAlpha().raw().toBuffer(),sharp(webp).ensureAlpha().raw().toBuffer()]);
 assert.ok(a.equals(b));
});
