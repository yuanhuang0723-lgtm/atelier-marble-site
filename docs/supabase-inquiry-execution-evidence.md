# Supabase Inquiry Replacement: Execution Evidence

Date: 2026-09-07 (Asia/Shanghai)

## Verified repository and production identity

- Repository: `yuanhuang0723-lgtm/atelier-marble-site`
- Existing Vercel project: `huang8/atelier-marble-site`
- Production alias: `https://atelier-marble-site.vercel.app`
- Baseline commit before this work: `cc8c80e`
- Safe homepage-only deployment: `00dcb0a723720a9dd6acdc3d6b81ca5894386daa`
- GitHub CI for `00dcb0a` completed successfully.
- Vercel production deployment for `00dcb0a` reached Ready and the production alias no longer contains the removed workflow/duplicate CTA sections.

## Stage results

### Stage 1: current behavior and account check

- Baseline source used Cloudflare R2 signing routes and FormSubmit email delivery.
- Baseline upload validation rejected supported CAD files when the browser MIME was empty.
- Baseline inquiry validation accepted a non-JSON 2xx FormSubmit response as success and trusted syntactically valid R2 keys.
- Vercel access and the existing project were verified with the CLI. Production variables currently include the site URL, inquiry recipient, and GA measurement ID only; no R2 or Supabase variables are present.
- No Supabase CLI login, local Supabase project configuration, Supabase environment variable, or usable Supabase account session was found on this machine. No paid service or billing action was attempted.
- Official Supabase pages were reachable and checked: [pricing](https://supabase.com/pricing), [Storage access control](https://supabase.com/docs/guides/storage/access-control), [standard uploads](https://supabase.com/docs/guides/storage/uploads/standard-uploads), and [billing FAQ](https://supabase.com/docs/guides/platform/billing-faq). The current pricing page states that free projects are paused after one week of inactivity and the free plan has two active projects; this is a remaining operational risk for a production site.

### Stages 2–3: local implementation

- Added shared extension/MIME/size policy with empty-MIME CAD handling.
- Replaced R2 routes with Supabase private Storage signed upload/download flow. File bytes go directly from the browser to Supabase.
- Added HMAC upload receipts bound to the generated object key, sanitized display name, normalized content type, exact size, and browser session ID.
- Final inquiry submission verifies the receipt, object metadata, actual stored size, duplicate keys, and private signed download URL before email construction.
- Added durable `inquiry_idempotency` schema with RLS and server-role-only access. `processing`, `sent`, `pending`, and `failed` outcomes prevent blind duplicate sends.
- Provider success now requires an HTTP-success JSON response with an explicit `success: true` or `success: "true"`; rejection, malformed response, timeout, and uncertain delivery never become confirmed success.
- Fixed honeypot serialization before the async upload step so React's cleared `currentTarget` cannot break submission.
- Removed direct R2 SDK dependencies and the R2-only configuration helper while preserving unrelated Cloudflare/OpenNext tooling.
- Homepage information architecture was corrected separately: the five-step workflow and duplicate project-requirements CTA were removed from `/`; detail remains on `/how-we-work` and the form remains on `/contact`.

### Stage 4: tests and browser evidence

- `npx tsc --noEmit` passed.
- `npm run test:inquiry` passed: 8 tests covering shared policy, receipts, no-file submission, durable retry deduplication, malformed JSON/scalars, CAD empty MIME, forged receipt, object metadata verification, provider rejection/non-JSON response, missing storage, and concurrent requests.
- `npm run audit:assets` passed for 202 records.
- `npm run check:public` passed for 24 routes and 9 redirects.
- `npm audit --audit-level=high --registry=https://registry.npmjs.org` passed with 0 vulnerabilities.
- `npm run build` passed and produced dynamic inquiry API routes.
- `npm run test:browser` passed in real local Chromium at 360, 390, 430, 1280, and 1440 px. It verified horizontal overflow, file selection/removal/reselection, submit lock, success navigation, and no duplicate lead on refresh. Screenshots were captured and visually inspected.

## Explicitly not completed

- Supabase project/bucket migration was not applied because there is no verified Supabase account/project credential available.
- Supabase secrets were not added to Vercel.
- The Supabase implementation was not pushed to GitHub or deployed, because doing so before configuration would make the production inquiry endpoint return an explicit 503 instead of silently pretending to work.
- No real customer file was used and no real inquiry email was sent. Provider activation and mailbox receipt remain unverified.
- Vercel Hobby commercial-use eligibility, GA4/GSC baselines, and full production responsive/performance acceptance remain separate outstanding items.

