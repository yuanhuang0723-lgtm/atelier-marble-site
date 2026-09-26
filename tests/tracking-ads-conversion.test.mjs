import assert from "node:assert/strict";
import test from "node:test";

process.env.NEXT_PUBLIC_GOOGLE_ADS_ID = "AW-TEST";
process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL = "inquiry-label";

const { trackConversionEvent } = await import("../lib/tracking");
const dataLayer = [];
const gtagCalls = [];
const storage = new Map();

globalThis.window = {
  dataLayer,
  location: { pathname: "/contact", href: "https://site.test/contact", search: "" },
  sessionStorage: {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: (key) => storage.delete(key)
  },
  gtag: (...args) => gtagCalls.push(args)
};
Object.defineProperty(globalThis, "navigator", {
  configurable: true,
  value: { sendBeacon: () => true }
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
