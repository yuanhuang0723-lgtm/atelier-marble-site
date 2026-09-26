import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as ArchitecturalStone from "../app/architectural-stone/page";
import * as Factory from "../app/factory/page";
import * as HowWeWork from "../app/how-we-work/page";
import * as Materials from "../app/materials/page";
import * as WallCladding from "../app/architectural-stone/wall-cladding/page";
import * as StoneFlooring from "../app/architectural-stone/flooring/page";
import * as Countertops from "../app/countertops/page";
import * as MarbleCountertops from "../app/countertops/marble-countertops/page";
import * as IntegratedSinks from "../app/countertops/integrated-stone-sinks/page";
import * as Marble from "../app/materials/marble/page";
import * as Quartzite from "../app/materials/quartzite/page";
import * as Granite from "../app/materials/granite/page";
import * as HotelSupply from "../app/projects/hotel-stone-supply/page";
import * as CommercialStone from "../app/projects/commercial-stone/page";
import * as CustomFabrication from "../app/custom-stone-fabrication-china/page";
import * as VanityTops from "../app/countertops/vanity-tops/page";
import * as ContactPage from "../app/contact/page";

const businessPages = [
  ["architectural stone", ArchitecturalStone],
  ["factory", Factory],
  ["project workflow", HowWeWork],
  ["materials", Materials],
  ["wall cladding", WallCladding],
  ["stone flooring", StoneFlooring],
  ["countertops", Countertops],
  ["marble countertops", MarbleCountertops],
  ["integrated sinks", IntegratedSinks],
  ["marble materials", Marble],
  ["quartzite materials", Quartzite],
  ["granite materials", Granite],
  ["hotel supply", HotelSupply],
  ["commercial stone", CommercialStone],
  ["custom fabrication", CustomFabrication],
  ["hotel vanity tops", VanityTops]
];

function component(moduleNamespace) {
  const candidate = moduleNamespace.default;
  return typeof candidate === "function" ? candidate : candidate.default;
}

test("each commercial landing page answers the five basic procurement questions", () => {
  const labels = ["Minimum order (MOQ)", "Lead time", "Material options", "Destination &amp; delivery", "Custom capability"];
  for (const [pageName, moduleNamespace] of businessPages) {
    const html = renderToStaticMarkup(component(moduleNamespace)());
    for (const label of labels) {
      assert.ok(html.includes(label), `${pageName} is missing procurement information: ${label}`);
    }
    assert.ok(/single-piece custom|one-piece custom/i.test(html), `${pageName} is missing single-piece scope guidance`);
    assert.ok(/small MOQ/i.test(html), `${pageName} is missing small-MOQ guidance`);
  }
});

test("shared procurement section uses product-specific heading only where applicable", () => {
  const sinkHtml = renderToStaticMarkup(component(IntegratedSinks)());
  const fabricationHtml = renderToStaticMarkup(component(CustomFabrication)());

  assert.match(sinkHtml, /Plan the basin and work surface as one project scope/i);
  assert.doesNotMatch(fabricationHtml, /Plan the basin and work surface as one project scope/i);
});

test("integrated stone sinks page meets the requested service-page depth and labels its concept render", () => {
  const html = renderToStaticMarkup(component(IntegratedSinks)());
  const visibleText = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /Define what integrated means for this project/);
  assert.match(visibleText, /Coordinate the drain, faucet, and plumbing envelope/);
  assert.match(html, /Illustrative 3D bathroom vanity rendering/);
  assert.match(visibleText, /Illustrative design rendering only/);
  assert.equal((html.match(/Illustrative 3D bathroom vanity rendering/g) ?? []).length, 1, "show the conceptual render once in the body, not again behind the hero");
});

test("custom fabrication page gives drawing-led buyers substantive quotation guidance", () => {
  const html = renderToStaticMarkup(component(CustomFabrication)());
  const visibleText = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /drawing revisions and component schedules/i);
  assert.match(visibleText, /natural stone variation/i);
  assert.match(visibleText, /site measuring and installation/i);
  assert.match(visibleText, /confirm tolerances in the project quotation/i);
});

test("hotel stone supply page gives hospitality buyers distinct planning guidance", () => {
  const html = renderToStaticMarkup(component(HotelSupply)());
  const visibleText = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /group each item by room type, floor, and project phase/i);
  assert.match(visibleText, /coordinate guestroom, lobby, and public-area stone/i);
  assert.match(visibleText, /room labels and packing groups/i);
  assert.match(visibleText, /hotel drawing revisions/i);
  assert.match(visibleText, /Illustrative hotel-lobby concept/i);
});

test("architectural stone page gives design teams drawing and interface guidance", () => {
  const html = renderToStaticMarkup(component(ArchitecturalStone)());
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const visibleText = main
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /link each elevation to a panel schedule/i);
  assert.match(visibleText, /flooring module and transition/i);
  assert.match(visibleText, /confirm fixing details with the responsible design team/i);
  assert.match(visibleText, /material lot approval/i);
});

test("custom countertop page gives buyers item, interface, and quote guidance", () => {
  const html = renderToStaticMarkup(component(Countertops)());
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const visibleText = main
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /list each countertop by room, area, and piece mark/i);
  assert.match(visibleText, /island and waterfall end/i);
  assert.match(visibleText, /support conditions with the cabinet and design teams/i);
  assert.match(visibleText, /vein direction/i);
  assert.match(visibleText, /natural stone differ in appearance and may vary from piece to piece/i);
});

test("marble countertop page explains material-specific review decisions", () => {
  const html = renderToStaticMarkup(component(MarbleCountertops)());
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const visibleText = main
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /review marble lots and slab layout/i);
  assert.match(visibleText, /vein direction and face selection/i);
  assert.match(visibleText, /natural variation across the same lot/i);
  assert.match(visibleText, /maintenance expectations/i);
});

test("contact shortcuts preserve one project context and explain optional fields", async () => {
  const renderContact = async (searchParams) => renderToStaticMarkup(await component(ContactPage)({ searchParams: Promise.resolve(searchParams) }));
  const decode = (value) => decodeURIComponent(value.replace(/&amp;/g, "&"));
  for (const { searchParams, projectType, sourcePage } of [
    { searchParams: {}, projectType: "Commercial Stone Projects", sourcePage: "/contact" },
    { searchParams: { sourcePage: "/projects/hotel-stone-supply", projectType: "Hotel & Hospitality Projects" }, projectType: "Hotel & Hospitality Projects", sourcePage: "/projects/hotel-stone-supply" }
  ]) {
    const html = await renderContact(searchParams);
    const whatsappHref = html.match(/<a\b[^>]*href="([^"]+)"[^>]*>\s*Discuss Project Requirements/i)?.[1];
    const emailHref = html.match(/<a\b[^>]*href="([^"]+)"[^>]*>\s*Email Project Details/i)?.[1];

    assert.ok(whatsappHref, "contact page should provide its WhatsApp inquiry shortcut");
    assert.ok(emailHref, "contact page should provide its email inquiry shortcut");
    assert.ok(decode(whatsappHref).includes(`Project type: ${projectType}`));
    assert.ok(decode(whatsappHref).includes(`Source page: ${sourcePage}`));
    assert.ok(decode(emailHref).includes(`subject=${projectType} Project Consultation`));
    assert.ok(decode(emailHref).includes(`Source page: ${sourcePage}`));
    assert.match(html, /Only your email and a short project note are required/i);
    assert.match(html, /Everything else.*optional/i);
  }
});

test("wall-cladding page gives design teams panel and fixing-coordination guidance", () => {
  const html = renderToStaticMarkup(component(WallCladding)());
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const visibleText = main
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /link each elevation to a panel schedule/i);
  assert.match(visibleText, /confirm fixing design with the responsible engineer/i);
  assert.match(visibleText, /Illustrative hotel-lobby concept only/i);
});

test("architectural-flooring page gives design teams module and transition guidance", () => {
  const html = renderToStaticMarkup(component(StoneFlooring)());
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const visibleText = main
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /set a datum and layout direction/i);
  assert.match(visibleText, /align modules with thresholds and stair details/i);
  assert.match(visibleText, /verify slope and drainage with the design team/i);
  assert.match(visibleText, /Illustrative lobby concept only/i);
});

test("commercial-stone page gives project teams distinct scope and handoff guidance", () => {
  const html = renderToStaticMarkup(component(CommercialStone)());
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const visibleText = main
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0;

  assert.ok(wordCount >= 1500 && wordCount <= 2500, `Expected 1,500–2,500 visible words, got ${wordCount}`);
  assert.match(visibleText, /group each package by site, zone, and operating phase/i);
  assert.match(visibleText, /separate guest-facing counters from back-of-house worktops/i);
  assert.match(visibleText, /confirm openings and support with the relevant trade/i);
  assert.match(visibleText, /Illustrative commercial interior concept/i);
});
