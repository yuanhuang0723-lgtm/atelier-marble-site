# Project detail gallery layout — 2026-10-17

## Request and diagnosis

The user reported excessive blank space below differently proportioned images on clicked project pages. The shared detail template used `grid auto-rows-fr`, stretching every figure to the tallest row. On the floral sculpture page at 1280px, cards measured 718.31px while individual images were 178–492px tall; the first six figures contained 166–480px of unused space after their captions.

## Implementation

- Apply a dedicated gallery style in `app/project/[slug]/page.tsx`, separate from homepage and project listing cards.
- Use natural-height columns: one below 768px, two from 768px, three from 1280px. Keep figures intact across column breaks and use consistent 24px gaps.
- Display the complete original image at full card width and automatic height. A prebuild step reads the original dimensions into a small JSON inventory; the page imports only this inventory to reserve proportions before lazy loading.
- Use a compact caption with 12px vertical padding. Preserve every image, image URL, alt text, existing reference wording, detail route and inquiry link.
- Add `#project-reference-gallery` for direct navigation and verification.

## Local acceptance

- Asset audit: 202 records passed.
- Existing static asset/provenance/image-sitemap checks: 5 passed.
- Next 16.3.4 build and TypeScript: passed, 333 pages generated.
- SEO audit: 30 public sitemap routes passed; 24 image pages / 248 image associations unchanged.
- Actual browser: 1440×1000, three columns; 390×844, one column. All 30 floral gallery figures retained, no horizontal overflow. Unused internal space is 2px (the card border), captions approximately 42px. Rendered image proportions agree with intrinsic proportions within pixel rounding.
- An early attempt to run the unrelated homepage browser test had no localhost server and returned connection refused. Actual gallery acceptance used the browser after starting the production build on port 3107; no claim is made that the full browser test suite passed.

## Evidence and release

Local evidence: `F:\Atelier-Marble-Site\outputs\gallery-layout-20261017\` (desktop/mobile metrics, screenshots, local SEO audit). Build and static-check logs use the adjacent `gallery-layout-20261017-*.log` paths.

Publish through the existing Git/Vercel production integration after rechecking remote main. Confirm the deployed commit is Ready and verify the primary-domain gallery in the browser. Production evidence is stored in the same local evidence folder.

The first deployment (`293b620`) passed its build but failed upload: reading image metadata inside the route caused source assets to enter the traced server function (394MB, above Vercel's 250MB limit). Dimensions are now prepared exclusively by `scripts/build-gallery-image-dimensions.ts`, automatically invoked by `prebuild`; no source-image filesystem reader or Sharp import remains in the route. Preserve this separation when updating the gallery.

This is a visual layout correction. It does not establish any change in rankings, clicks or inquiry delivery.
