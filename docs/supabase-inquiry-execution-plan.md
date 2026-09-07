# Atelier Marble: Private Inquiry Upload Replacement

## Objective and boundaries

Replace the blocked Cloudflare R2 attachment service with Supabase private Storage. Preserve https://atelier-marble-site.vercel.app, existing page paths, visual design, GitHub deployment source, and the current inquiry recipient. Do not activate paid services or invent billing information. Do not treat previous claims that only R2 remains as acceptance evidence.

Executor: gpt-5.6-luna, high reasoning. Complete and verify each stage before declaring it passed. Read current source and deployed state before editing. The user authorized implementation, GitHub push, and deployment of this scoped replacement.

## Stage 1: Establish current behavior

- Inspect InquiryForm, both inquiry API routes, tracking, thank-you, environment examples, setup docs, package scripts and CI.
- Record the current commit and production project identity. Use the existing Vercel project atelier-marble-site under huang8; never use automatic project creation.
- Inventory available Supabase integration/account access and verify current official pricing, private Storage, upload limits, signed URL and free-project inactivity behavior.
- Verify whether an existing suitable project can be reused. Registration/login must use the user's intended account. Do all local implementation work that does not require credentials before requesting an unavoidable account step.
- Document separate outstanding issues: Vercel Hobby commercial-use eligibility, GA4/GSC verification, and visual testing. Do not silently migrate hosting or purchase a plan.

## Stage 2: Implement private attachment service

- Use the official Supabase server SDK and browser direct-to-storage signed upload flow. File bytes must not pass through a Vercel function.
- Configure a private inquiry-files bucket, no public URL access and no anonymous list/read/write policies. Keep privileged credentials server-only.
- Variables: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (or currently recommended equivalent server secret), SUPABASE_INQUIRY_BUCKET. Preserve NEXT_PUBLIC_SITE_URL and INQUIRY_RECIPIENT.
- Preserve at most 5 attachments and 25 MiB per file. Allow PDF, DWG, DXF, XLS, XLSX, JPG/JPEG, PNG and ZIP. Reject empty files, illegal extensions and malformed sizes. Handle empty browser MIME for CAD safely with a shared extension/MIME policy; MIME alone does not prove file contents.
- Generate inquiries/{uuid}.{extension} keys. Sanitize display metadata. Avoid divergent client/server validation copies.
- Bind issued upload authorization to a server-verifiable inquiry/session receipt. Do not accept arbitrary syntactically valid object keys as ownership proof.
- Before emailing download links, verify each stored object's existence, actual size and association with the issued authorization. Reject forged metadata, mismatched extensions, duplicate keys and cross-inquiry attachment substitution.
- Generate private download links with a maximum 7-day expiry. Prefer creating them only after upload validation. Never expose privileged keys or signed links in analytics/logs.
- Enforce actual request-byte limits, including requests without Content-Length. Parse unknown JSON safely, including null, arrays and scalar inputs. Bound field lengths and rate-limit state. Document any per-instance rate-limit limitation.
- Remove unused R2-only dependencies/configuration after confirming no remaining usage. Update setup docs and .env.example; preserve unrelated Cloudflare fallback deployment tooling.

## Stage 3: Finish the inquiry transaction

- Keep Email, Project Type and Project Notes required; budget optional. Serialize the honeypot correctly.
- Implement duplicate-submission protection covering concurrent clicks and retries. Use durable idempotency if required; never claim an in-memory map prevents duplicates across serverless instances.
- Treat provider rejection, malformed provider response, upload failure and uncertain email delivery as failures or pending outcomes, never as confirmed success. Do not blindly retry an ambiguous email send.
- Email must contain project fields, file display names, private temporary links, source and campaign context. Verify provider activation and an actual received test message when explicitly authorized; otherwise mark delivery unverified.
- Keep form input on errors. Successful submission alone authorizes the thank-you state. Direct visits must not claim an inquiry was received; refresh must not count a second lead.
- Record the agreed seven GA4 events with consistent non-personal context. Preserve true first landing page and campaign attribution, not merely current pathname. Prevent duplicate global/component click tracking. Never send email, phone, notes, filenames or signed URLs to GA4.

## Stage 4: Test before production

- Add focused automated tests with mocked storage/email: successful no-file and attachment submissions, malformed JSON/field types, required fields, empty/oversize/unsupported files, missing MIME for supported CAD, forged receipt/key/size, missing object, storage failure, email rejection/non-JSON response and concurrent submission.
- Do not use production to send invalid requests that could accidentally deliver mail. No real customer files in tests.
- Browser-check 360, 390, 430, 1280 and 1440 px: file selection/removal/reselection, error recovery, submit lock, success navigation, refresh tracking, long names, floating buttons and footer. Capture screenshots and inspect them; reading CSS is not visual acceptance.
- Run type checking, relevant tests, asset audit and production build. Stop on failure; do not chain commit/push after checks without checking exit codes.

## Stage 5: Configure, deploy and verify

- If free Supabase account/project access is available, create/configure the scoped private bucket and required schema/policies using reviewed changes. No billing activation without the user's explicit approval.
- Write server secrets only to the verified Vercel project Production environment. Never print secret values or commit local credential files. Keep .vercel ignored and retain correct local project linkage.
- Push the tested code to the existing GitHub source. Verify CI and Vercel deployment for the exact commit and that the original production alias points to it. CI success alone does not gate Vercel unless configured to do so.
- Test PDF, JPG and XLSX upload, private unauthorized access denial, generated download expiry configuration, inquiry success and email delivery. Check GA4 DebugView where access permits.
- Recheck sitemap, robots and canonical remain on the original domain. This storage replacement does not require new URLs or Search Console property migration.

## If account setup remains impossible

Do not loop on login or claim completion. Prepare the code and tests, report the precise unavailable account/configuration step once. A temporary email-attachment workflow can use the existing mailbox: customers submit project details and send attachments separately. Clearly label this as an alternative, not fulfillment of website direct upload. Do not quietly enable a reduced fallback or change providers again.

## Handoff and final evidence

Report modified files, tests actually run, commit/deployment identity, private-storage verification and remaining failures/unverified requirements. Full acceptance requires real uploads and delivered mail, not just a green build. The broader website program also still requires independently evidenced material content, GSC/GA4 baseline and responsive/performance acceptance.
