# S0 Baseline Evidence

## Scope and baseline

- Date: 2026-09-14 (Asia/Shanghai)
- Commit checked: `eac84303573ab36a28d66253caf8a22ee9820e29`
- Scope: SEO audit configuration and local browser inquiry smoke-test portability only.
- No publish, push, database, Supabase, or page-copy changes were authorized or made.

## Evidence

- `git diff --check` — exit `0` (passed).
- `node --check scripts/audit-seo.mjs` — exit `0` (passed).
- `node --check scripts/browser-inquiry-smoke.mjs` — exit `0` (passed).
- `SEO_AUDIT_URL=http://localhost:3100 SEO_CANONICAL_ORIGIN=https://ateliermarblestone.com npm run audit:seo` — exit `0`; passed for 29 sitemap pages against the local build with production canonical URLs.
- `npm run test:inquiry` — exit `0`; 8/8 tests passed.
- `npm run test:browser` with local Next server on `http://localhost:3100` — exit `0`; passed 360, 390, 430, 1280, and 1440px, file reselection, submit lock, success navigation, and refresh tracking.

No dependency or lock-file changes were made.

## Known limitations / BLOCKED

Production indexing, Search Console state, real GA4 receipt, real inquiry email delivery, private-file access, and field Core Web Vitals remain unverified. Local build and mocked inquiry checks do not prove those external behaviors.

## Unique next step

S0 is ready for independent review. S1 must remain a separate gated task before page-copy, indexing, deployment, or external-service action.
