# GSC Live Read: 2026-10-11

Source: Authenticated Search Console for `https://ateliermarblestone.com/`, English UI, read-only browser interaction. Screenshot: `gsc-pages.jpg`. Numbers below are transcribed from visible report state, not an exported raw CSV.

## Report Parameters & Aggregations

- **Filters**: Search type: Web; UI date range: 3 months; actual chart range: September 9, 2026 to October 8, 2026; no page/query/country/device filter shown.
- **Last Update**: 58.5 hours ago.
- **Whole-Property Aggregation**:
  - Impressions: 273
  - Clicks: 2
  - Average CTR: 0.7%
  - Average Position: 26.1
  - *Note*: User reported 274 impressions / 2 clicks; the live read differs by 1 impression. Do not infer a growth or drop rate from this single-impression variation or compare unequal cumulative time windows.

---

## Page Aggregates (Independent Dimension)

| Page | Clicks | Impressions | Average Position |
|---|---:|---:|---:|
| `/` | 2 | 16 | 7.7 |
| `/countertops/vanity-tops` | 0 | 192 | 24.2 |
| `/countertops` | 0 | 10 | 19.7 |
| `/custom-stone-fabrication-china` | 0 | 6 | 133.5 |

*Guardrails*:
- Both recorded clicks are attributed to the homepage (`/`) in the visible page table.
- Do not infer queries for those clicks; visible query rows can omit anonymized queries.
- Page-impression totals should not be added to query totals or assumed identical to whole-property totals.

---

## Query Aggregates (Whole Property, Not Query × Page)

| Query | Clicks | Impressions | Average Position |
|---|---:|---:|---:|
| `marble vanities tops` | 0 | 82 | 29.9 |
| `luxury hotel vanity top materials` | 0 | 39 | 20.7 |
| `hotel bathroom countertop` | 0 | 23 | 20.7 |
| `marble vanity tops` | 0 | 21 | 18.6 |
| `hotel countertops` | 0 | 16 | 19.6 |
| `atelier marble` | 0 | 9 | 8.4 |

*Guardrails*:
- Do not join these independent aggregates to assign a query to a specific landing page.
- Most higher-impression nonbrand queries visible in this read have average positions 18–30; these averages span dates, countries, and devices, not a fixed live search rank.

---

## Technical Context & Diagnosis

1. **Audit & Build Status**:
   - Production `npm run audit:seo` passed for 29 sitemap routes, 28 strict snippets, and 239 displayed image associations across 23 pages.
   - This verifies the audit's checks only, not Google rankings, complete index coverage, or Core Web Vitals.
2. **Indexation Overview**:
   - GSC Overview shows 19 indexed / 28 not indexed.
   - Exclusion reasons and the three priority URL inspections were not rechecked in this view, so do not label all 28 non-indexed URLs as errors.
3. **Repository State**:
   - Remote `origin/main` commit: `02bb51da8e8737b05ea97353e1f9aa9f6d00e69f`.
   - Local checkout baseline was `4f965e7`.
   - No edits or deployment of site code were performed on the inspecting computer during this read.
4. **Strategic Priorities & Guardrails**:
   - Current evidence supports prioritizing commercial pages' search visibility and existing nonbrand query opportunities.
   - It does not establish the precise weighting of content, citations, competitor strength, or crawl latency.
   - October 7 visual/content changes are very recent relative to the report period ending October 8.
   - **Preserve the October 24, 2026 vanity metadata checkpoint** (`/countertops/vanity-tops` Title and Meta Description remain strictly locked).
   - Complete indexation/crawl review and procurement evidence work.
   - Relevant query-by-page filters, comparable windows, Canada geo-splits, and device splits should determine next implementations.
   - At only 2 recorded organic clicks, there is insufficient traffic to estimate a conversion rate. Form delivery acceptance remains completely separate from search exposure/ranking.
