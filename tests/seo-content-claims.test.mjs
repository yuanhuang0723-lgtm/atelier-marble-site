import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as Home from "../app/page";
import * as Factory from "../app/factory/page";
import * as HotelLobby from "../app/guides/hotel-lobby-case-study/page";
import * as ProjectProcurementInfoModule from "../components/ProjectProcurementInfo";

const homeSource = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const factorySource = readFileSync(new URL("../app/factory/page.tsx", import.meta.url), "utf8");
const hotelLobbySource = readFileSync(new URL("../app/guides/hotel-lobby-case-study/page.tsx", import.meta.url), "utf8");
const commercialLandingSource = readFileSync(new URL("../components/CommercialLandingPage.tsx", import.meta.url), "utf8");
const workflowSource = readFileSync(new URL("../app/how-we-work/page.tsx", import.meta.url), "utf8");
const aboutSource = readFileSync(new URL("../app/about/page.tsx", import.meta.url), "utf8");
const layoutSource = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const footerSource = readFileSync(new URL("../components/Footer.tsx", import.meta.url), "utf8");
const ProjectProcurementInfo = typeof ProjectProcurementInfoModule.default === "function"
  ? ProjectProcurementInfoModule.default
  : ProjectProcurementInfoModule.default.default;

test("homepage metadata and capability labels avoid unverified order and delivery promises", () => {
  assert.doesNotMatch(Home.metadata.description, /factory-direct|small orders|global project shipping/i);
  assert.doesNotMatch(homeSource, /One Piece Custom|Factory Direct|Small MOQ|Global Shipping/);
});

test("factory search metadata describes review material instead of claiming capability proof", () => {
  assert.doesNotMatch(Factory.metadata.description, /capability proof|CAD production|quality review/i);
  assert.match(Factory.metadata.description, /workshop|project/i);
  assert.doesNotMatch(factorySource, /eyebrow="Capability proof"/);
});

test("factory gallery count stays synchronized with the video list", () => {
  assert.match(factorySource, /<h2[^>]*>\{workshopVideos\.length\} short views of stone work and components\.<\/h2>/);
});

test("procurement information scopes delivery terms to the buyer's destination", () => {
  const html = renderToStaticMarkup(ProjectProcurementInfo({ materialOptions: "Stone", customCapability: "Custom work" }));
  assert.match(html, /Destination &amp; delivery/);
  assert.match(html, /reviewed for the stated destination/i);
  assert.doesNotMatch(html, /global shipping can be quoted/i);
});

test("service structured data does not claim worldwide coverage", () => {
  assert.doesNotMatch(commercialLandingSource, /areaServed\s*:\s*["']Worldwide["']/i);
});

test("commercial page heading presents delivery as planning, not a guaranteed export service", () => {
  assert.match(commercialLandingSource, /A clear path from material direction to delivery planning/i);
  assert.doesNotMatch(commercialLandingSource, /A clear path from material direction to export delivery/i);
});

test("workflow copy frames packing and shipment documents as project questions to confirm", () => {
  assert.doesNotMatch(workflowSource, /export wooden crates|shipment documentation support|factory-direct communication|export packing prepared for shipment/i);
  assert.match(workflowSource, /confirm responsibilities for the stated delivery term/i);
});

test("about, footer, and sitewide metadata avoid unverified delivery guarantees", () => {
  assert.doesNotMatch(aboutSource, /dependable stone supply|export-ready execution|directly managed factory supply chain/i);
  assert.doesNotMatch(layoutSource, /export-ready project supply/i);
  assert.doesNotMatch(footerSource, /worldwide/i);
});

test("hotel lobby concept page is consistently presented as a planning guide", () => {
  assert.equal(HotelLobby.metadata.title, "Hotel Lobby Stone Planning Guide for Buyers");
  assert.match(HotelLobby.metadata.description, /planning guide/i);
  assert.equal(HotelLobby.metadata.openGraph.title, HotelLobby.metadata.title);
  assert.match(hotelLobbySource, /headline: "Hotel Lobby Stone Planning Guide for Buyers"/);
  assert.match(hotelLobbySource, /title="Hotel Lobby Stone Planning Guide for Buyers"/);
  assert.match(hotelLobbySource, /concept visualization, not a completed project photo/i);
  assert.doesNotMatch(hotelLobbySource, /eyebrow="Project case study"/);
});
