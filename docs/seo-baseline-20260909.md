# SEO baseline: 2026-09-09

## Verified live state

Direct HTTP inspection confirmed https://ateliermarblestone.com returns 200. Its robots.txt references sitemaps on that domain. Six core routes on the Vercel alias return 200 and declare canonicals on ateliermarblestone.com, without a noindex directive: /, /countertops, /countertops/vanity-tops, /projects/hotel-stone-supply, /materials, /resources.

This supersedes the earlier assumption that the Vercel hostname remains the canonical domain. Do not revert the domain based on old task notes. Search-engine cached page extracts were stale compared with direct HTTP responses and must not be used as current deployment evidence.

## Keyword ownership

These are proposed targeting terms, not measured search volume or ranking claims.

| Primary intent | Owner | Supporting topics |
| --- | --- | --- |
| stone supplier China | / | Yunfu stone supply, custom fabrication, overseas project sourcing |
| custom stone countertops China | /countertops | cutouts, edge profiles, drawing review, material suitability |
| hotel marble vanity tops | /countertops/vanity-tops | repeat bathroom units, basin cutouts, installation dimensions |
| hotel stone supplier China | /projects/hotel-stone-supply | BOQ packages, lobby surfaces, QC and export packing |
| custom stone fabrication China | /custom-stone-fabrication-china | shaped components, furniture, drawing-led fabrication |
| natural stone materials for projects | /materials | verified material identification, finish, application, lot confirmation |
| how to choose a stone supplier in China | /guides/stone-supplier-china | procurement checks, references, fabrication scope |

Keep broad supplier intent on the homepage. Put technical procurement detail on the corresponding commercial page or guide. Do not add more homepage sections solely to repeat keywords.

## Next acceptance gates

1. Obtain Search Console data for the current canonical domain: last complete 28 days versus previous 28 days, query/page/country/device, clicks, impressions, CTR and average position. Record extraction date, search type and property. Until obtained, rankings and traffic baseline remain unavailable, not zero.
2. Audit every sitemap URL using GET: status 200, self-canonical, indexability, unique title/description, internal discovery and published-content status. Audit CMS-managed routes and Chinese alternates against actual publication state.
3. Verify both hosts and www/http variants for canonical consistency and redirects. Review domain migration history before changing routing; a cross-domain canonical is not proof a redirect exists.
4. Select pages for improvement using impressions plus intent fit. High-impression, low-CTR pages need snippet review; relevant queries around positions 8-30 need better page answers and internal links. No fabricated search volumes or promised ranks.
5. Review existing commercial content before expanding it. Add verified fabrication/request requirements, relevant images and explicit reference status. Preserve the user's simplified homepage and existing editor changes.
6. Run browser inspection at 360/390/430/1280/1440 px and measured performance checks. CSS inspection and successful builds do not prove layout quality or Core Web Vitals.
7. Deploy only scoped, reviewed changes, verify the exact production commit, then inspect current-domain GSC sitemap/index status. Compare subsequent complete periods before reporting improvement.

## Unverified

## Full sitemap HTTP pass

The sitemap returned 30 URLs during this pass (23 English routes and 7 Chinese routes). All 30 GET requests returned 200, declared the canonical domain ateliermarblestone.com and showed no robots meta noindex. Titles were distinct in this sample. This proves HTTP accessibility and declared indexability only, not Google indexing or rankings. Root canonical omits a trailing slash; other inspected canonical paths match the requested paths.

One scoped on-page change was prepared: /guides/stone-supplier-china title becomes "How to Choose a Stone Supplier in China", matching its existing instructional Open Graph title and Article headline. TypeScript checking passed. The change has not yet been deployed; the checkout contains an unrelated app/layout.tsx edit that must be preserved.

Current GSC property access, submitted sitemap status, Google index coverage, keyword rankings, search volume, organic conversions, live mobile layout and field Core Web Vitals have not been established by this audit. Storage and inquiry delivery acceptance remain separate workstreams.
