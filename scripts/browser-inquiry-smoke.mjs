import assert from "node:assert/strict";
import { chromium } from "playwright";

const baseUrl = "http://localhost:3100";
const testFile = "C:/Users/86580/Documents/Codex/2026-06-13/019ebf0c-6d49-7f43-aca7-877cd87d39d9/work/browser-test-scope.pdf";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
page.on("requestfailed", (request) => console.log(`request failed ${request.method()} ${request.url()}`));

await page.route(`${baseUrl}/api/inquiry/upload-url`, async (route) => {
  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({
      ok: true,
      key: "inquiries/123e4567-e89b-12d3-a456-426614174000.pdf",
      name: "browser-test-scope.pdf",
      contentType: "application/pdf",
      uploadUrl: `${baseUrl}/mock-upload`,
      receipt: "local-browser-test-receipt"
    })
  });
});
await page.route(`${baseUrl}/mock-upload`, async (route) => route.fulfill({ status: 200, body: "ok" }));
await page.route(`${baseUrl}/api/inquiry`, async (route) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, message: "accepted" }) }));

for (const width of [360, 390, 430, 1280, 1440]) {
  console.log(`checking viewport ${width}`);
  await page.setViewportSize({ width, height: 900 });
  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(200);
  const homeText = await page.locator("body").innerText();
  assert.equal(homeText.includes("A clearer route for project stone."), false, `homepage still contains the workflow block at ${width}px`);
  assert.equal(homeText.includes("Discuss your project requirements."), false, `homepage still contains the duplicate CTA at ${width}px`);
  const homeWidth = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  assert.ok(homeWidth.scroll <= homeWidth.client + 1, `homepage overflows horizontally at ${width}px`);

  await page.goto(`${baseUrl}/contact`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(200);
  const contactWidth = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
  assert.ok(contactWidth.scroll <= contactWidth.client + 1, `contact page overflows horizontally at ${width}px`);
}

await page.setViewportSize({ width: 390, height: 900 });
await page.goto(`${baseUrl}/contact`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(200);
console.log("checking file selection");
const fileInput = page.locator('input[type="file"]');
await fileInput.setInputFiles(testFile);
await assertFileVisible(page, "browser-test-scope.pdf");
console.log("checking file removal and reselection");
await page.getByRole("button", { name: "Remove browser-test-scope.pdf" }).click();
assert.equal(await page.getByText("browser-test-scope.pdf", { exact: false }).count(), 0, "removed file remains visible");
await fileInput.setInputFiles(testFile);
await assertFileVisible(page, "browser-test-scope.pdf");

await page.getByLabel("Email").fill("browser-test@example.com");
await page.getByLabel("Project Notes").fill("Synthetic local browser acceptance inquiry.");
console.log("checking submit lock and success navigation");
const submit = page.getByRole("button", { name: "Request Project Pricing" });
await submit.click();
assert.equal(await page.getByRole("button", { name: "Sending..." }).count(), 1, "submit was not locked while sending");
await page.waitForTimeout(2000);
console.log(`after submit URL: ${page.url()}`);
console.log(`after submit status: ${await page.locator('[role="alert"]').allTextContents()}`);
assert.equal(new URL(page.url()).pathname, "/contact/thank-you", "successful local inquiry did not navigate to thank-you");
const leadCount = await page.evaluate(() => (window.dataLayer || []).filter((event) => event && event.event === "generate_lead").length);
assert.equal(leadCount, 1, "success did not emit exactly one generate_lead event");
await page.reload({ waitUntil: "domcontentloaded" });
const leadCountAfterRefresh = await page.evaluate(() => (window.dataLayer || []).filter((event) => event && event.event === "generate_lead").length);
const submissionMarkerAfterRefresh = await page.evaluate(() => window.sessionStorage.getItem("atelierInquirySubmitted"));
assert.equal(leadCountAfterRefresh, 0, "refresh emitted a duplicate generate_lead event");
assert.equal(submissionMarkerAfterRefresh, null, "submission marker was not consumed");

await page.screenshot({ path: "work/browser-smoke-contact-390.png", fullPage: false });
await browser.close();
console.log("Browser smoke passed for 360, 390, 430, 1280, and 1440px; file reselection, submit lock, success navigation, and refresh tracking verified.");

async function assertFileVisible(currentPage, fileName) {
  await currentPage.getByText(fileName, { exact: false }).first().waitFor({ state: "visible" });
}
