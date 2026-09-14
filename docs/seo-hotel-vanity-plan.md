# Atelier Marble SEO S0 — Hotel Vanity

## Scope

S0 records the SEO baseline and makes the audit/browser checks reproducible. It does not enter S1/S2, publish, push, change database/Supabase state, or change page copy.

## Baseline

- Repository: `seo-luna-s0-20260914`
- Baseline commit: `eac84303573ab36a28d66253caf8a22ee9820e29`
- Execution date: 2026-09-14 (Asia/Shanghai)
- Request source: `SEO_AUDIT_URL` (defaults to `https://ateliermarblestone.com`)
- Expected canonical origin: `SEO_CANONICAL_ORIGIN` (defaults to the request origin)

## S0 status

- [x] Separate audit request origin and canonical origin controls.
- [x] Make browser inquiry smoke test portable with `BASE_URL` and an in-memory synthetic PDF.
- [x] Keep browser API calls local and mocked; no real inquiry service is called.
- [x] Record command evidence in `docs/seo-evidence/s0-baseline.md`; local inquiry/browser execution passed after installing the existing lockfile dependencies.

## Known limitations

The SEO audit and browser smoke test require a reachable target/local server. This S0 does not validate production indexing, search-console state, copy quality, database/Supabase configuration, or deployment behavior.

## Unique next step

After this S0 is reviewed and accepted, decide whether to authorize S1; no S1/S2 work is included here.
