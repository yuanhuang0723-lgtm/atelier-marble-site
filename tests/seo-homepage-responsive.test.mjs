import assert from "node:assert/strict";
import test from "node:test";
import { chromium } from "playwright";

const localOrigin = process.env.SEO_PREVIEW_ORIGIN || "http://127.0.0.1:3000";

test("laptop navigation keeps the quote route available without a clipped horizontal menu", async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(localOrigin, { waitUntil: "load" });
    const mobileMenu = page.locator(".site-nav__mobile");
    assert.equal(await mobileMenu.isVisible(), true, "laptop width should use the compact navigation");
    await page.locator(".site-nav__mobile summary").click();
    const quoteLink = page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Get a Quote" });
    assert.equal(await quoteLink.isVisible(), true, "the quote route should be visible after opening the compact navigation");
  } finally {
    await browser.close();
  }
});

test("desktop hero eyebrow clears the fixed navigation bar", async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(localOrigin, { waitUntil: "load" });
    const header = await page.locator("header.site-nav").boundingBox();
    const eyebrow = await page.locator(".hero-architectural__eyebrow").boundingBox();
    assert.ok(header && eyebrow, "header and hero eyebrow must render");
    assert.ok(eyebrow.y >= header.y + header.height + 8, "hero eyebrow should start below the fixed header with breathing room");
  } finally {
    await browser.close();
  }
});
