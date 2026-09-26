import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as HomePageModule from "../app/page";
import { workshopVideos } from "../data/workshop-videos";
const HomePage = typeof HomePageModule.default === "function" ? HomePageModule.default : HomePageModule.default.default;

function homepageHtml() {
  return renderToStaticMarkup(HomePage());
}

test("homepage introduces drawing-to-fabrication service for the requested buyer groups", () => {
  const html = homepageHtml();
  assert.match(html, /CAD Drawing to Real Stone Fabrication/);
  assert.match(html, /Custom Marble &amp; Stone Components Manufacturer/);
  assert.match(html, /Interior Design Studios/);
  assert.match(html, /Architecture Firms/);
  assert.match(html, /Stone Importers/);
  assert.match(html, /Stone Fabricators/);
});

test("homepage displays the requested fabrication and fulfillment capabilities", () => {
  const html = homepageHtml();
  for (const capability of ["One Piece Custom", "CAD Support", "Factory Direct", "Small MOQ", "Global Shipping"]) {
    assert.ok(html.includes(capability), `Missing visible capability: ${capability}`);
  }
  assert.doesNotMatch(html, /dependable lead times|reliable lead times|stable quality|consistent quality|export-ready delivery|keep project timing under control|safer international delivery/i);
  assert.match(html, /Watch Workshop Videos/);
});

test("homepage video CTA count stays synchronized with the gallery", () => {
  assert.equal(workshopVideos.length, 16);
  assert.ok(homepageHtml().includes(`View all ${workshopVideos.length} workshop videos`));
});

test("homepage connects each buyer group to its matching service page", () => {
  const html = homepageHtml();
  const buyerPathways = html.slice(html.indexOf('id="buyer-pathways"'));
  for (const [path, audience] of [
    ["/countertops/vanity-tops", "Interior Design Studios"],
    ["/architectural-stone", "Architecture Firms"],
    ["/how-we-work", "Stone Importers"],
    ["/custom-stone-fabrication-china", "Stone Fabricators"]
  ]) {
    const hrefIndex = buyerPathways.indexOf(`href=\"${path}\"`);
    assert.notEqual(hrefIndex, -1, `Missing buyer pathway: ${path}`);
    const anchorStart = buyerPathways.lastIndexOf("<a ", hrefIndex);
    const anchorEnd = buyerPathways.indexOf("</a>", hrefIndex);
    const anchor = buyerPathways.slice(anchorStart, anchorEnd + 4);
    assert.ok(anchor.includes(audience), `${audience} does not link to ${path}`);
  }
});
