# Atelier Marble SEO Handoff

## Read This First

This repository is the live Atelier Marble independent-site source. The immediate SEO work is a controlled ranking experiment for the query `hotel bathroom countertop`, not a promise of a ranking or traffic result.

- Repository: `F:\Atelier-Marble-Site`
- Remote: `https://github.com/yuanhuang0723-lgtm/atelier-marble-site.git`
- Branch used for release: `codex/seo-ctr-rollout` (published to `main` through the existing Vercel Git integration).
- Remote production branch: `main`
- Latest functional SEO release: `9e4dbf28e893518333745f25616c02d1714595c9` (2026-09-26).
- Site: `https://ateliermarblestone.com`
- Deployment provider: Vercel through the existing Git integration

Start a new session from `F:\Atelier-Marble-Site` by checking `git status --short`, `git rev-parse HEAD`, and `git ls-remote origin refs/heads/main`. Do not assume an old working directory or stale local `main` branch is current.

## Worktree Relocation

On 2026-09-24 this linked Git worktree was moved from C: to `F:\Atelier-Marble-Site` using a cross-volume copy followed by `git worktree repair`. The former directory no longer exists. The move was verified with:

```powershell
npm run audit:assets
npm run test:inquiry
git worktree list --porcelain
```

The material source remains separate at `D:\石材素材`; do not move it with the repository unless the asset-audit configuration is updated and revalidated.

## Task We Are Doing

The site has started to receive Google Search Console impressions but no clicks. The work is focused on moving the landing page for `hotel bathroom countertop` from an observed average position of 24.7 toward the first two result pages before making further click-through-rate experiments.

The target landing page is:

```text
https://ateliermarblestone.com/countertops/vanity-tops
```

The current approach is:

1. Keep the recently released title and description stable.
2. Ensure the target page contains real hotel-bathroom procurement details.
3. Strengthen relevant internal links from the homepage, hotel supply page, and buyer checklist.
4. Wait for post-release GSC data before deciding whether further ranking or CTR work is justified.

Do not claim that a build, sitemap entry, or index request proves a ranking improvement.

## Verified Search Data

The raw GSC export used for analysis is:

```text
C:\Users\86580\Desktop\ateliermarblestone.com-Performance-on-Search-2026-09-21.zip
```

It was unpacked temporarily at:

```text
C:\Users\86580\AppData\Local\Temp\atelier-gsc-20260921
```

Important findings from the raw English export:

| Scope | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| Whole site, last 28 days | 0 | 84 | 0% | 35.8 |
| Query: `hotel bathroom countertop` | 0 | 10 | 0% | 24.7 |
| Same query, United Kingdom | 0 | 5 | 0% | 22.6 |
| Same query, Ireland | 0 | 5 | 0% | 26.8 |

The query-level data appeared only from 2026-09-11 to 2026-09-16 and was all desktop. The browser-translated Chinese GSC UI must not be used to infer the original English query text. Use the GSC CSV export or turn off browser translation.

Interpretation: the main bottleneck is ranking around page three, not an established low-CTR result near the top of Google. Zero clicks with only 10 query impressions at position 24.7 is not statistically surprising.

## Completed Work

### Search snippet experiment

Released on 2026-09-21:

- Commit `d7723fb` improved the hotel vanity top snippet and project-purchase messaging.
- Commit `8ca56f3` shortened the title after the audit flagged the previous version as too long with the brand suffix.

Current production metadata for `/countertops/vanity-tops` (updated 2026-09-26 to meet the project character range):

```text
Title: Hotel Bathroom Countertops & Vanity Tops | Atelier Marble (57 characters)
Description: Custom hotel vanity tops and marble bathroom counters from Yunfu, China. Send drawings, basin cut-outs, and quantities for a project quotation. (143 characters)
```

The page itself covers room or type numbers, quantity, basin cut-outs, faucet holes, thickness, splash/upstand, edges, support, material and finish, packing, inspection, drawings, BOQ, and destination details. Do not rewrite these sections merely to repeat the same phrases.

### Internal-link support

Released through commits `8978447` and `361543f`:

- Homepage buyer-intent card links to `/countertops/vanity-tops` as `Hotel Bathroom Countertops & Vanity Tops`.
- `/projects/hotel-stone-supply` links to the target page as `Review hotel bathroom countertops and vanity tops`.
- `/guides/stone-project-checklist` links to the target page in the hotel vanity top checklist section.
- The old Canada shower niches reference link was preserved. Replacing it caused an audit failure because `/projects/canada-shower-niches-2025` then had no internal link.

### Production checks completed

The following have passed against the production domain after the final release:

```powershell
$env:SEO_AUDIT_URL='https://ateliermarblestone.com'
$env:SEO_CANONICAL_ORIGIN='https://ateliermarblestone.com'
npm run audit:seo

$env:PUBLIC_BASE_URL='https://ateliermarblestone.com'
npm run check:public
```

Expected output includes:

```text
SEO audit passed for 29 sitemap pages
Public route check passed for 30 routes and 9 redirects
```

Local verification also passed:

```powershell
npm run build
npm run test:inquiry
```

`npm run test:inquiry` has 8 tests. `npm run build` includes `npm run audit:assets` and generates 332 pages in this environment.

## Current State and What Is Blocking

The latest functional release is `9e4dbf2` (2026-09-26): the vanity page contains 1,778 words of distinct hotel project-planning guidance, all 16 factory video posters have descriptive alt text, and the vanity Title/Description are 57/143 characters. Production technical checks passed, but ranking and click effects are not verifiable from the available export.

The next evidence gate is a later exact-date Search Console comparison after a stable post-release window, with a query × page mapping for any candidate. The 2026-09-26 export covers visible daily rows only through 2026-09-23 and has no query-to-page join; it predates the 2026-09-26 Title/Description update. Keep the new snippet stable and use a window on or after 2026-10-24 for a 28-day post-release comparison, allowing for GSC reporting lag.

The target position of 15 is an engineering experiment target, not a guaranteed Google outcome. Do not mark the SEO task complete because code is deployed; report ranking, impression, click, CTR, and inquiry changes separately.

## Next Steps

1. Wait until at least 2026-10-24 and the GSC report has settled. Do not make another title or description change before the comparison.
2. Export an exact-date GSC comparison with the interface untranslated. Capture query × page, countries, devices, clicks, impressions, CTR, and average position; retain the property and date filters.
3. Analyze `hotel bathroom countertop` separately from whole-site averages.
4. Decide based on the comparison:
   - Position improves toward 15 with no clicks: keep content stable and allow more impressions before a single CTR experiment.
   - Position remains around 20-30: inspect competing result types and enrich only missing purchase evidence or related supporting content; do not mass-create near-duplicate pages.
   - Position is in the top 15 with impressions but no clicks: test one title or description variable, not both.
   - Clicks appear but inquiries do not: audit contact flow, source attribution, trust evidence, and quote requirements before changing SEO copy.
5. For any new code batch, run `git diff --check`, `npm run build`, `npm run test:inquiry`, local SEO audit against the new build, and production audit after deployment.

## Known Deployment Behavior

There are two Vercel statuses on commits, including one named `atelier-marble-site` and another named `019ebf0c-6d49-7f43-aca7-877cd87d39d9`.

GitHub commit status can remain `pending` after the production domain has already updated. Treat production HTML as authoritative. Check the intended text at `https://ateliermarblestone.com/...`, then run the production audit. Public GitHub deployment records can be queried read-only with:

```powershell
$sha = '<commit sha>'
$headers = @{ 'User-Agent' = 'Codex-SEO-Health-Check' }
Invoke-RestMethod -Headers $headers -Uri "https://api.github.com/repos/yuanhuang0723-lgtm/atelier-marble-site/commits/$sha/status"
```

Do not install or log into a new Vercel CLI session merely to inspect status. A previous `npx vercel ls` attempt had no credentials and opened a device-login flow; it did not provide useful deployment evidence.

## Indexing Rules: Do Not Break These

The following exclusions are intentional and should remain excluded from search:

```text
/contact/thank-you
/project/{generated-slug}
```

The thank-you page uses `noindex`, and generated project-reference pages use `noindex, follow`. They are not in the sitemap. Google Search Console reports about these URLs being excluded are expected, not a reason to remove `noindex`.

The following legacy paths intentionally perform permanent redirects and should not be added to the sitemap:

```text
/hotel-hospitality-projects
/hotel-projects
/kitchen-countertops
/luxury-residential-kitchens
/architectural-stone-interiors
/custom-furniture-sculptures
/stone-sculptures
/marble-coffee-tables
/stone-slabs
```

For core SEO pages, verify 200 response, self-canonical, no `noindex`, sitemap inclusion, and relevant internal links.

## Image and Content History

The homepage and target detail pages previously appeared to have lost their real images after SEO edits. This was corrected in these releases:

- `d148a56` restored homepage reference imagery.
- `008dfeb` restored original detail-page imagery.
- `9c140a1` restored real image galleries on detail pages.

Do not replace real project or process imagery with generated imagery as proof of actual factory work or project delivery. Preserve existing image paths when editing SEO copy.

## Hard Lessons / Do Not Repeat

1. Do not infer raw English queries from a browser-translated GSC page. Use raw CSV exports.
2. Do not claim a title experiment failed using a date range that ends before the title was deployed.
3. Do not keep changing titles and descriptions every day. One variable per experiment and a stable observation period are required.
4. Do not remove `noindex` from thank-you or generated project pages merely to clear a GSC exclusion email.
5. Do not use `git push origin main` from this worktree: it can push a stale local branch. Use `git push origin HEAD:main` after verifying the remote SHA and local diff.
6. Before replacing an existing internal link, run the full sitemap audit. A seemingly unrelated case-study page can lose its only internal link.
7. Do not declare Vercel deployment complete from GitHub status alone. Verify the production HTML and run production audit.
8. Do not use the old C: worktree `C:\Users\86580\Documents\Codex\work\seo-luna-s0-20260914`; it was moved and no longer exists. Also do not use the unrelated old worktree `C:\Users\86580\Documents\Codex\work\seo-main-20260910`. Use the repository path at the top of this document.
9. Do not expose or store Supabase passwords, service-role keys, upload secrets, or other environment values in documents, command output, commits, or chat.

## Useful Files

- Target page: `app/countertops/vanity-tops/page.tsx`
- Shared commercial landing component: `components/CommercialLandingPage.tsx`
- Homepage: `app/page.tsx`
- Hotel supply page: `app/projects/hotel-stone-supply/page.tsx`
- Buyer checklist: `app/guides/stone-project-checklist/page.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- Redirects: `next.config.mjs`
- SEO audit script: `scripts/audit-seo.mjs`
- Public-route check: `scripts/check-public-routes.mjs`
- Query-to-page mapping: `docs/seo-keyword-map.md`
- Existing GSC operating notes: `docs/google-search-console-indexing.md`

## Latest Production Release and Follow-up (2026-09-26)

- Published one featured click-to-play workshop video below the homepage hero and a 16-clip gallery at `/factory#workshop-videos` in commit `530b0c3` on 2026-09-26. The original source directory `C:\Users\86580\Desktop\新建文件夹\视频` is unchanged; `微信视频2026-09-26_011507_054.mp4` was added as clip 16. Production homepage and factory HTML are live; all 16 MP4s and 16 posters returned HTTP 200. The layout keeps one featured video on the homepage and a responsive gallery on `/factory`; playback is click-to-play with native controls and no autoplay.
- Release commit `2b1245fc20f5cd2ff0db9c061ad008883a7b7710` was pushed to `origin/main` on 2026-09-26. `npm run build` generated 332 pages after the asset audit passed for 202 manifest records. SEO tests pass 32/32 and inquiry tests 8/8. Local and production SEO audits passed 29 pages; route audits passed 30 routes, 9 legacy page redirects, and 292 image redirects. Production verification confirmed the current homepage and factory copy, all 16 gallery videos, and all 16 MP4/poster pairs returned HTTP 200. Browser checks at 390px and 1440px showed no horizontal overflow; MP4s remain unloaded until clicked, and clip 16 played through native controls.
- The direct `/contact` default and source-specific WhatsApp/email shortcuts now preserve one project type and source page. The form states that only email and a short note are required; other fields/files are optional. Local 390px browser checks passed for direct and hotel-specific routes; GA4 receipt remains unverified.
- The existing `/custom-stone-fabrication-china`, `/projects/hotel-stone-supply`, and `/architectural-stone` pages now have 1,721, 1,727, and 1,549 visible main-content words; `/countertops/integrated-stone-sinks` has 1,750, `/countertops` has 1,626, and `/countertops/marble-countertops` has 1,556, `/architectural-stone/wall-cladding` has 1,539, and `/architectural-stone/flooring` has 1,504, and `/projects/commercial-stone` has 1,534. A 390px mobile browser check showed no horizontal overflow on these pages. The shared procurement-guide heading is basin-specific only on the integrated-sinks page, and the hotel-lobby image is labeled as an illustrative concept. These are local content/template changes and are not deployed.
- The production homepage loads a GA4 tag, but GA4 receipt/key-event configuration is not verified. The local `/api/visitor-events` endpoint returns 204 without persisting events. Do not treat it as an analytics store.
- A Search Console export was received on 2026-09-26. Its visible queries are too low-volume for the requested CTR screen: none meets the >100-impression threshold, and separate Queries and Pages tables do not establish a query-to-page mapping. The 2026-09-26 length correction was released after the export window; keep the new snippet stable and the CTR opportunity table header-only. The raw export and detailed analysis remain outside Git.
- On 2026-09-26, the Search Console deep link redirected to Google sign-in. The warning was not bypassed and no credentials were entered; the supplied export was analyzed instead. Its date filter says Last 3 months but the chart only contains rows through 2026-09-23, so query/page evidence after that date and a full nonzero 90-day series remain unverified.
- All 202 curated manifest images have semantic public filenames and reviewed source-group title/alt/description values; permanent redirects preserve old image URLs and logical case-route IDs are unchanged. Another 49 concept images and 25 sculpture-gallery assets have semantic paths, source-aware alt/title/caption metadata, and redirects from old image URLs. Twenty-seven other directly referenced images have reviewed alt/title values. The 51-file legacy countertop gallery uses numbered image filenames and source-aware generated alt/title text in its page code; the page route redirects, but these image paths were not renamed and are not part of the image redirect map. Sixteen other generic legacy URLs now redirect to existing semantic assets. The current local route audit passes for 292 image redirects. The public inventory contains 457 image files, including 16 video posters. The public directory still contains 72 dormant physical image files outside active page HTML and the image sitemap. Sixteen generic legacy URLs now permanently redirect to matching semantic assets already in the curated manifest; 56 other dormant files remain direct and unlisted. Source files were retained. Verify historic image indexing/backlinks before any later cleanup.
- Image backup is at `C:\Users\86580\AppData\Local\Temp\AtelierSEOBackups\2026-09-25-image-seo` and includes the prechange 202-record manifest, related code/docs, and 166 prechange nonfactory image files with SHA-256 sums.
- A further 49 hash-named images used by legacy category gallery code now have illustrative descriptions, semantic filenames, and redirects. The 25 sculpture-gallery items have semantic metadata mappings and image redirects. The 51-file legacy countertop gallery retains numbered filenames with source-aware generated alt/title values in a route that redirects; those image URLs have no dedicated rename redirects. Active buyer, materials, architectural, guide, and countertop-gallery images have descriptive alt/title values. Current local validation: asset audit passed for 202 manifest entries; production build generated 332 pages; local SEO audit passed for 29 sitemap pages; local public-route audit passed for 30 routes, 9 legacy page redirects, and 292 image redirects. Backups for the 49 images, active image components, 51 countertop images, 25 sculpture images, and this handoff refresh are under `C:\Users\86580\AppData\Local\Temp\AtelierSEOBackups` in their dated folders.
- The SEO rollout is released and production routes/media are verified. The GA4 receipt/key-event configuration and post-release Search Console ranking, CTR, and inquiry changes remain unverified; do not claim ranking uplift from this export.
- Follow-up code release `e9cf7ee173db059c4326e732591cb4f36472ebab` was pushed on 2026-09-26 and verified on production. The homepage now shows the buyer pathways and project-review inputs; `/factory` adds three source workshop photos, two packing-preparation references, a cutting still, a drawing-led Canada case link, and order-specific QC checkpoints. Captions state what the photos do not prove; the video does not identify a CNC model. Production audits pass 29 sitemap pages (27 length checks; privacy and held vanity snippet exempted), 30 routes, 9 page redirects, and 295 image redirects. The image sitemap contains 179 image locations; the three new semantic workshop assets return HTTP 200. Browser checks at 390px and 1440px found no horizontal overflow; all six evidence images load after scrolling; all 16 factory videos remain paused with `preload="none"` and no MP4 request before playback.
- The current `/countertops/vanity-tops` snippet is 57/143 characters, released on 2026-09-26 to meet the project range. The supplied export ends 2026-09-23 and therefore predates this version. It showed `hotel bathroom countertop` with 13 impressions at position 23.92 and the vanity page aggregate with 87 impressions at position 27.26; Queries.csv and Pages.csv do not join them, and no visible query exceeds 42 impressions. The CTR opportunity CSV remains header-only. Ranking and inquiry effects are unverified.
- The local `New_Title_Meta.xlsx` and `Keyword_Map.xlsx` workbooks now record the 2026-09-26 release state and GSC evidence. The raw ZIP and reports remain outside Git. The vanity snippet is explicitly held until a comparable post-release window with query-filtered page data is available.
- The 2026-09-26 ZIP only covers visible daily rows through 2026-09-23. No query exceeded 42 impressions; the exact query and vanity page rows are separate aggregates, not a query-to-page join. The CTR opportunity table remains header-only; the new snippet's effect is unmeasured.
- The production route checker intermittently timed out when issuing hundreds of concurrent `curl --head` requests. A throttled follow-up verified the 295 image redirects; four timed-out URLs returned the expected HTTP 308 on individual retry. The page and legacy redirect map did not change in commit `aac60c8`.
- Content release `aac60c8d268d685370738ee8d8c272632ff91a69` preceded the later snippet correction. It added the 1,778-word vanity planning sections and descriptive alt on all 16 video posters. Build generated 332 pages; the asset audit passed for 202 records; SEO/content tests passed 39/39 and inquiry tests 8/8. At that point the vanity snippet remained held. The production crawl found 253 images with no empty alt, missing title, or generic active reference; mobile/desktop checks at 390px and 1440px found no horizontal overflow.
- The production `npm run check:public` high-concurrency HEAD sweep timed out on intermittent public image requests. The affected URLs each returned the expected HTTP 308 when retried individually; a throttled pass verified all 295 image redirects. The current code did not alter route or image redirect maps. Do not record the high-concurrency timeout as a route or redirect failure.
- The latest snippet release `9e4dbf2` sets the vanity Title/Description to 57/143 characters. Keep this version stable through the new observation window. Request an exact-date Query × Page export on or after 2026-10-24 to compare post-release impressions, clicks, CTR, and position; the current ZIP ends 2026-09-23 and cannot measure the update. Do not claim ranking or inquiry lift. A CNC model/photo, an actual CAD drawing image/file, completed QC evidence, GSC index status, CrUX field data, and GA4 event receipt remain unverified.
- Code commit `9e4dbf28e893518333745f25616c02d1714595c9` was pushed to `main` and verified on production on 2026-09-26. Build generated 332 pages; SEO/content tests passed 38/38; inquiry tests passed 8/8. Production SEO audit passed 29 sitemap pages with 28 strict snippet checks (only the legal privacy page is exempt). The vanity page renders 1,778 words and its new snippet is live. No ranking, CTR, or inquiry effect can be measured from the supplied export.
