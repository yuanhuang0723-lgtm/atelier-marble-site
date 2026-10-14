import assert from "node:assert/strict";
import test from "node:test";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";

const quotePages = [
  "/custom-stone-fabrication-china", "/architectural-stone", "/architectural-stone/wall-cladding",
  "/architectural-stone/flooring", "/countertops", "/countertops/marble-countertops",
  "/countertops/integrated-stone-sinks", "/materials", "/materials/marble", "/materials/granite",
  "/materials/quartzite", "/projects/commercial-stone", "/projects/hotel-stone-supply", "/factory"
];

async function pageHtml(route: string) {
  const module = await import(pathToFileURL(path.join(process.cwd(), "app", route.slice(1), "page.tsx")).href);
  const page = typeof module.default === "function" ? module.default : module.default.default;
  return renderToStaticMarkup(await page({ params: Promise.resolve({}), searchParams: Promise.resolve({}) }));
}

test("quotation/category pages do not expose invented inventory, product prices, or unverified fixed test values", async () => {
  for (const route of quotePages) {
    const html = await pageHtml(route);
    const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    for (const [, script] of scripts) {
      const data = JSON.parse(script);
      const visit = (value: unknown) => {
        if (!value || typeof value !== "object") return;
        if (Array.isArray(value)) return value.forEach(visit);
        const record = value as Record<string, unknown>;
        assert.ok(!["Product", "Offer", "AggregateOffer"].includes(String(record["@type"])), `${route}: quote-based categories must not imply a priced stock item`);
        Object.values(record).forEach(visit);
      };
      visit(data);
    }
    const unsupported = html.match(/5[- ]axis|±\s*1mm|compressive strength\s*[>&]|bulk density\s*[~\d]|absorption\s*&lt;0\./i);
    assert.equal(unsupported?.[0], undefined, `${route}: unexpected fixed capability or test claim`);
  }
});

test("vanity material selection is visible, sourced, connected to materials, and retains product photographs", async () => {
  const html = await pageHtml("/countertops/vanity-tops");
  assert.match(html, /id="vanity-material-selection-title"/);
  for (const route of ["marble", "granite", "quartzite"]) assert.ok(html.includes(`href="/materials/${route}"`));
  assert.match(html, /https:\/\/www\.naturalstoneinstitute\.org\/consumers\/care\//);
  assert.match(html, /vanity-basin-component/);
  assert.doesNotMatch(html, /5[- ]axis|±\s*1mm|85 GU|120.room/i);
});

test("the hotel vanity review distinguishes archive references from a documented customer project", async () => {
  const html = await pageHtml("/projects/hotel-vanity-tops-fabrication-case");
  assert.match(html, /What evidence is included in this review/);
  assert.match(html, /not been tied to a documented hotel order/);
  assert.match(html, /sourcePage=%2Fprojects%2Fhotel-vanity-tops-fabrication-case/);
  assert.doesNotMatch(html, /120.room|5[- ]axis|±\s*1mm|85 GU|records actual factory fabrication/i);
});
