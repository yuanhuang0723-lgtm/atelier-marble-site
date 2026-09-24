# Atelier Marble SEO Handoff

## Read This First

This repository is the live Atelier Marble independent-site source. The immediate SEO work is a controlled ranking experiment for the query `hotel bathroom countertop`, not a promise of a ranking or traffic result.

- Repository: `C:\Users\86580\Documents\Codex\work\seo-luna-s0-20260914`
- Remote: `https://github.com/yuanhuang0723-lgtm/atelier-marble-site.git`
- Branch used for release: `seo-luna-s0-20260914`
- Remote production branch: `main`
- Current released commit: `361543f0b22ffb8d5cc88257a04cb7f0f1a21933`
- Site: `https://ateliermarblestone.com`
- Deployment provider: Vercel through the existing Git integration

Start a new session by checking `git status --short`, `git rev-parse HEAD`, and `git ls-remote origin refs/heads/main`. Do not assume an old working directory or stale local `main` branch is current.

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

Current metadata for `/countertops/vanity-tops`:

```text
Title: Hotel Vanity Tops & Marble Bathroom Counters | Atelier Marble
Description: Custom marble hotel vanity tops and bathroom counters from China for hospitality projects. Send drawings, basin cut-outs, quantities, and destination for a project quotation.
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

Code and production technical validation are complete. Ranking progress is not yet verifiable because the controlled changes were released on 2026-09-21 and the raw GSC data analyzed only covered dates through 2026-09-19.

The next evidence gate is a raw GSC export covering at least 2026-09-21 through 2026-09-27. Prefer a 7-day filter for the exact query `hotel bathroom countertop`, then compare it to the immediately preceding comparable period.

The target position of 15 is an engineering experiment target, not a guaranteed Google outcome. Do not mark the SEO task complete because code is deployed; report ranking, impression, click, CTR, and inquiry changes separately.

## Next Steps

1. Wait until the post-release window has enough GSC data. Do not make another title or description change before the comparison.
2. Export raw GSC data with the interface untranslated. Capture query, pages, countries, devices, clicks, impressions, CTR, and average position.
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
8. Do not use the old or invalid worktree `C:\Users\86580\Documents\Codex\work\seo-main-20260910` for this task. Use the repository path at the top of this document.
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
