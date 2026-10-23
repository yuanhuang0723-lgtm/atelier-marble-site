# Query mapping, index review, and vanity material selection — 2026-10-23

Production: https://ateliermarblestone.com/ . Baseline: `6d27002a789fb25a1109ed8c19baaab6d6e25de2`, `codex/contact-simplify` managed worktree. The older F: source and its drafts were preserved.

## 1. Exact query to page mapping

Authenticated GSC domain property, Web search, no country or device filter. Final complete 28-day chart: **September 24–October 21, 2026**. Each query was filtered exactly before reading Pages. Each table had one row, `/countertops/vanity-tops`:

| Exact query | Clicks | Impressions | Average position |
|---|---:|---:|---:|
| luxury hotel vanity top materials | 0 | 41 | 11.1 |
| marble vanity tops | 0 | 38 | 22.3 |
| hotel bathroom countertop | 0 | 26 | 18.3 |
| hotel countertops | 0 | 22 | 20.9 |

This sample shows no competing landing page for these four queries. It does not rule out competition in other dates or queries, or establish Canadian/live search rankings.

GSC updated its complete period during collection. Earlier September 23–October 20 captures were retained separately, not mixed with this table. The final same-period property baseline was 379 impressions, 3 clicks, 0.8% CTR, average position 23.9. The independent vanity page table showed 260 impressions, no clicks, average position 22.4. Do not join independent page/query aggregates.

### Marble material page

Exact page `https://ateliermarblestone.com/materials/marble`: 5 impressions, no clicks, average position 7.0 for September 24–October 21. Queries displayed **No data**. No queries were disclosed, so neither branded nor procurement intent can be established. No marble-page keyword claims or content changes were inferred from that average.

## 2. Index review

The bulk report displayed an October 16 update: 23 indexed, 44 excluded. Exclusions were 32 noindex, 8 discovered/not-indexed, 3 redirects and 1 alternate canonical. These are displayed report records, not a claim that every URL was current to October 23.

- All 32 noindex examples were legacy `/project/...` image-detail pages. Source metadata intentionally sets `index: false, follow: true`; a production sample returned that tag. No priority commercial URL appeared. Keep the exclusions.
- The 8 discovered examples were flooring, marble countertops, materials, granite, quartzite, Canada shower-niche reference, hotel vanity drawing/component reference, and resources. All 8 currently returned 200, self-canonical and no noindex in HTTP checks.
- Vanity, countertops and custom fabrication were individually confirmed indexed, with Google selecting the inspected URL as canonical. Displayed smartphone crawl dates: October 19, October 17 and October 19.
- Integrated stone sinks was also indexed/self-canonical, with an October 19 smartphone crawl.
- Marble countertops was individually confirmed discovered/not indexed. Google live testing passed: available and eligible for indexing. One index-request attempt failed; the page reported a submission error and inability to connect to reCAPTCHA. No accepted request or later indexation was observed; no retry loop was used.
- Quartzite was not indexed; individual inspection said unknown to Google, without reported sitemap/referring-page sources. This differs from bulk-report wording and is retained separately. Production eligibility does not prove indexation.
- Other discovered examples were checked against current production configuration, without claiming individual current Google inspection for each.
- Main sitemap: Success, October 23 read, 30 discovered pages. Image sitemap: Success, October 19 read, 24 pages. No resubmission. An individual URL's temporary sitemap-processing message was not treated as a sitewide sitemap failure.

## 3. Implementation

The material-selection query is an existing opportunity near average position 11.1. The vanity page already had product images, a short material table, and case/video links. This iteration improves that existing comparison:

- appearance, care and approval considerations for marble, granite and quartzite;
- natural-stone versus manufactured-material category clarification;
- repeat-room lot, finish, basin, edge and spare-piece coordination;
- sourced distinction between staining and acid etching;
- a contextual link to the existing marble fabrication page.

No new service URL, fabricated installation, certification, price or lead-time promise. Existing images, cases, inquiry attribution and form handling remain. Vanity Title/Description stay unchanged through the October 24 checkpoint. Only its substantive-content sitemap date moves to October 23. Record this body change as a potential confounder when assessing the metadata experiment; current complete GSC data ends October 21.

Sources reviewed:

- https://www.naturalstoneinstitute.org/consumers/care/
- https://usenaturalstone.org/how-to-care-for-your-marble-countertops/
- https://usenaturalstone.org/caring-for-quartzite-countertops/

## Evidence and acceptance

Local evidence: `F:\Atelier-Marble-Site\outputs\seo-query-index-20261023\`. Exact-query tables and complete exclusion examples are saved as DOM evidence and normalized CSVs, with dates/filters. Native CSV download did not return a verified file: these CSVs are explicitly transcriptions of complete visible filtered tables. The marble query CSV contains headers only; separate metadata retains page totals and the undisclosed-query limitation. Relative 28-day report URLs must be read with the saved chart dates, not treated as frozen-date links.

Gates: production builds, public-route checks, existing metadata regression, SEO/asset audits, and real browser layouts. Final deployment, production screenshot and acceptance are recorded in local release evidence after publishing. Release/live-test/request status does not prove ranking, click or lead improvement. Google re-crawl/indexation and later comparable GSC assessment are external outcomes still to verify.
