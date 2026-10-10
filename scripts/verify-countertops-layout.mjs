import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      // wait
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not respond at ${url} within ${timeoutMs}ms`);
}

async function main() {
  const port = 3456;
  const baseUrl = `http://127.0.0.1:${port}`;
  const outDir = path.resolve("outputs/countertops-responsive-20261010");
  await fs.mkdir(outDir, { recursive: true });

  console.log(`Starting next start on port ${port}...`);
  const server = spawn("npx", ["next", "start", "-p", String(port)], {
    shell: true,
    stdio: "inherit"
  });

  try {
    await waitForServer(`${baseUrl}/countertops`);
    console.log(`Server ready at ${baseUrl}/countertops`);

    const browser = await chromium.launch({ headless: true });
    try {
      // 1. Mobile (390 x 844)
      console.log("Testing mobile viewport (390x844)...");
      const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
      await mobilePage.goto(`${baseUrl}/countertops`, { waitUntil: "networkidle" });

      const mobileOverflow = await mobilePage.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      if (mobileOverflow) {
        throw new Error("Mobile layout has horizontal overflow!");
      }
      console.log("Mobile layout: No horizontal overflow. OK.");

      // Check disclosure summaries in main content
      const disclosureCount = await mobilePage.locator("main details").count();
      console.log(`Found ${disclosureCount} disclosure sections in main content.`);
      if (disclosureCount !== 7) {
        throw new Error(`Expected 7 disclosure sections in main, found ${disclosureCount}`);
      }

      // Check scope table
      const scopeRowsCount = await mobilePage.locator("table tbody tr").count();
      console.log(`Found ${scopeRowsCount} scopeRows in table.`);
      if (scopeRowsCount !== 3) {
        throw new Error(`Expected 3 scope rows, found ${scopeRowsCount}`);
      }

      await mobilePage.screenshot({
        path: path.join(outDir, "countertops-mobile-390.png"),
        fullPage: false
      });
      console.log("Saved mobile screenshot.");

      // 2. Desktop (1440 x 900)
      console.log("Testing desktop viewport (1440x900)...");
      const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await desktopPage.goto(`${baseUrl}/countertops`, { waitUntil: "networkidle" });

      const desktopOverflow = await desktopPage.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      if (desktopOverflow) {
        throw new Error("Desktop layout has horizontal overflow!");
      }
      console.log("Desktop layout: No horizontal overflow. OK.");

      await desktopPage.screenshot({
        path: path.join(outDir, "countertops-desktop-1440.png"),
        fullPage: false
      });
      console.log("Saved desktop screenshot.");

      console.log("All viewport checks passed successfully!");
    } finally {
      await browser.close();
    }
  } finally {
    console.log("Stopping Next.js server...");
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
