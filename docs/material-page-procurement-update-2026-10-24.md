# Marble and quartzite procurement pages — 2026-10-24

Production domain: https://ateliermarblestone.com/ . Baseline: `e0ed6d98ca8cccf9474ff53f002e6696a404e3f4`, branch `codex/contact-simplify`, managed checkout `C:\Users\86580\.codex\worktrees\contact-simplify\Atelier-Marble-Site`.

## Reason for this iteration

The October 23 GSC review found marble countertops and quartzite unindexed, while their public pages returned 200, self-canonical, without noindex. Google live testing passed for marble countertops. This does not establish why Google has not indexed either page. The main sitemap was successfully read with 30 discovered pages. A working sitemap allows discovery while manual request indexing is unavailable.

The four exact commercial queries remain assigned to the existing vanity page in the observed September 24–October 21 sample. No new page or competing vanity target was created. The marble material page's five impressions had no disclosed queries; no query intent was invented from its average position.

## Changes

- Existing marble countertop and quartzite pages now show a hero inquiry link and the short-brief/drawings-can-follow note, using the existing sourcePage/projectType contact URL.
- Clearer product H1s, introductions, and procurement overview. Business identity remains own processing plus partner coordination; no machine ownership, stock, fixed production time, price, or completed installation was added.
- Marble's existing eight long guide cards become native expandable sections with concise summaries. All original detail paragraphs remain server-rendered and accessible by expanding each section.
- Quartzite explains natural quartzite versus manufactured engineered quartz, without unqualified performance or sealing promises. Source: https://usenaturalstone.org/natural-quartzite-and-engineered-quartz-whats-the-difference/ (Karin Kirk, December 6, 2019, reviewed during this task).
- Existing material, fabrication, and workshop evidence links support further review. Quartzite's existing image is explicitly a design reference, not proof of stone identity or available stock.
- Only these two substantive-content sitemap dates move to October 24. Their metadata titles/descriptions and the vanity page are unchanged.

## Acceptance and limits

- Pre-change and post-change production builds passed; 333 static pages generated.
- Pre-change and post-change public checks passed: 30 routes, 9 legacy redirects, 295 image redirects.
- Post-change SEO audit passed for 30 sitemap pages; 29 strict title/description checks (privacy page exempt); 24 image pages/248 image associations. Asset audit passed 202 records.
- Existing metadata regression: one test passed. No inquiry API, attachment service, SMTP configuration, or analytics code changed; no form submission or outreach sent.
- Actual English browser validation at 390×844: both hero buttons visible above the fold, no horizontal overflow; marble CTA begins at about 529px, quartzite about 560px. Desktop layout checked at 1440px. Native marble disclosure visibly expanded and exposed the retained paragraphs. Chrome auto-translation was also observed, so separate untranslated in-app-browser evidence was saved.
- Private evidence: `F:\Atelier-Marble-Site\outputs\seo-material-pages-20261024\`. Production deployment and main-domain checks are recorded there after publishing.
- Manual index requests remain unaccepted because of the observed reCAPTCHA connection/submission error. Verified ownership rules out missing owner permission; the exact network cause is unresolved. No proxy/node/security change was made. Do not claim that this content update fixes captcha, guarantees indexation, or improves rankings/clicks before later GSC evidence.
