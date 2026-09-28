import assert from "node:assert/strict";
import test, { beforeEach } from "node:test";

process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = "AW-TEST";
process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL = "inquiry-label";

const tracking = await import("../lib/tracking");
const { trackConversionEvent, trackPageviewEvent } = tracking;
const dataLayer = [];
const gtagCalls = [];
const storage = new Map();
let beaconCalls = 0;
let fetchCalls = 0;

globalThis.window = {
  dataLayer,
  location: { origin: "https://site.test", pathname: "/contact", href: "https://site.test/contact", search: "" },
  sessionStorage: {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: (key) => storage.delete(key)
  },
  gtag: (...args) => gtagCalls.push(args)
};
globalThis.document = { title: "Hotel bathroom countertops", referrer: "https://search.example/" };
Object.defineProperty(globalThis, "navigator", {
  configurable: true,
  value: { sendBeacon: () => { beaconCalls += 1; return true; } }
});
globalThis.fetch = async () => { fetchCalls += 1; return { ok: true }; };

beforeEach(() => {
  dataLayer.length = 0;
  gtagCalls.length = 0;
  storage.clear();
  beaconCalls = 0;
  fetchCalls = 0;
});

test("Google Ads counts only a completed generate_lead as a conversion", () => {
  for (const eventName of ["whatsapp_inquiry_click", "file_upload_completed", "qualified_inquiry_submitted"]) {
    trackConversionEvent(eventName, { sourcePage: "/contact", projectType: "Hotel Projects" });
  }
  trackConversionEvent("generate_lead", { sourcePage: "/contact", projectType: "Hotel Projects" });

  const conversions = gtagCalls.filter(([command, name]) => command === "event" && name === "conversion");
  assert.equal(conversions.length, 1, "clicks, uploads, and diagnostic submit events must not count as Ads conversions");
  assert.equal(conversions[0][2].send_to, "AW-TEST/inquiry-label");
  assert.equal(conversions[0][2].event_label, "generate_lead");
  for (const eventName of ["whatsapp_inquiry_click", "file_upload_completed", "qualified_inquiry_submitted", "generate_lead"]) {
    assert.ok(dataLayer.some((event) => event.event === eventName), `${eventName} should remain available as an analytics event`);
  }
});

test("pageview and lead events stay in Google Analytics without posting to the non-persistent visitor endpoint", () => {
  trackPageviewEvent({ page_path: "/countertops/vanity-tops", page_title: "Hotel Vanity Tops" });
  trackConversionEvent("generate_lead", { sourcePage: "/countertops/vanity-tops", projectType: "Hotel Projects" });

  assert.equal(beaconCalls, 0, "tracking must not beacon to the non-persistent visitor endpoint");
  assert.equal(fetchCalls, 0, "tracking must not fall back to the non-persistent visitor endpoint");
  assert.ok(dataLayer.some((event) => event.event === "page_view"), "page_view should remain in the analytics data layer");
  assert.ok(dataLayer.some((event) => event.event === "generate_lead"), "generate_lead should remain in the analytics data layer");
  assert.ok(gtagCalls.some(([command, name]) => command === "event" && name === "page_view"), "page_view should still reach gtag");
  assert.ok(gtagCalls.some(([command, name]) => command === "event" && name === "generate_lead"), "generate_lead should still reach gtag");
});

test("pageview tracking does not make a fallback fetch when sendBeacon is unavailable", () => {
  navigator.sendBeacon = undefined;
  trackPageviewEvent({ page_path: "/", page_title: "Atelier Marble" });

  assert.equal(fetchCalls, 0, "no-op visitor events must not be sent with fetch");
  assert.ok(dataLayer.some((event) => event.event === "page_view"), "page_view should remain in the analytics data layer");
});

test("inquiry landing attribution is reduced to a same-site path", () => {
  assert.equal(typeof tracking.getStoredLandingPath, "function", "a path-only landing helper should be available for inquiry records");
  storage.set("atelierLandingPage", "/countertops/vanity-tops?utm_source=google&email=buyer@example.com");
  assert.equal(tracking.getStoredLandingPath(), "/countertops/vanity-tops");
  storage.set("atelierLandingPage", "https://outside.example/private");
  assert.equal(tracking.getStoredLandingPath(), "/contact");
});

test("mailto and WhatsApp shortcuts include the path-only landing attribution without duplicates", () => {
  assert.equal(typeof tracking.appendLandingPathToContactUrl, "function", "a shared shortcut-attribution helper should be available");
  const landingPath = "/countertops/vanity-tops";
  const mailto = tracking.appendLandingPathToContactUrl("mailto:buyer@example.test?subject=Project&body=Need%20a%20quote", landingPath);
  const whatsapp = tracking.appendLandingPathToContactUrl("https://wa.me/861234567890?text=Hello%20Atelier", landingPath);

  assert.match(new URL(mailto).searchParams.get("body") || "", /Website page: \/countertops\/vanity-tops/);
  assert.match(new URL(whatsapp).searchParams.get("text") || "", /Website page: \/countertops\/vanity-tops/);
  assert.equal(tracking.appendLandingPathToContactUrl(mailto, landingPath), mailto, "the path must not be appended twice");
  assert.equal(tracking.appendLandingPathToContactUrl("https://example.com/", landingPath), "https://example.com/");
});
