# Inquiry delivery and deduplication acceptance — 2026-10-10

Status: Verified live on production website `https://ateliermarblestone.com`. Supabase recovery, private file attachment upload, anonymous access prevention, GA4 single-event dispatch, reload/direct-visit deduplication, and durable request idempotency verified. Mailbox receipt pending owner visual check in `ding@atelier-marble.ltd`.

## 1. Test configuration & identity

- **Execution timestamp**: 2026-10-10 05:47:48 UTC (13:47 Asia/Shanghai)
- **Unique marker**: `INTERNAL_DELIVERY_TEST_20261010_WEB_369f86`
- **Sender / Reply-To**: `songyano544@gmail.com` (verified owner test address)
- **Recipient**: `ding@atelier-marble.ltd`
- **Subject line generated**: `Luxury Vanity Tops & Cabinet Panels Project Consultation`
- **Source page & landing page**: `/countertops/vanity-tops`
- **Internal UTM campaign**:
  - `utm_source=internal_verification`
  - `utm_medium=internal_test`
  - `utm_campaign=inquiry_delivery_validation_20261010`
- **Synthetic attachment**:
  - Path: `outputs/inquiry-validation-20261010/synthetic-internal-spec.pdf`
  - Size: 486 bytes
  - SHA-256: `36b1806c8b83b0e640900481b9b363c172a400e5c7d7dcb473b19ad807e5f2f9`
- **Test execution script**: `scripts/verify-production-inquiry-20261010.mjs`
- **Machine evidence**: `outputs/inquiry-validation-20261010/inquiry-validation-report.json` and `outputs/inquiry-validation-20261010/website-thank-you.png`

## 2. Evidence by criteria

### (1) Website submission & email delivery
- Browser navigated from vanity page CTA to `/contact?sourcePage=%2Fcountertops%2Fvanity-tops&projectType=Luxury%20Vanity%20Tops%20%26%20Cabinet%20Panels`.
- Form filled with required email and message, optional project details, and synthetic PDF attachment.
- Submission request to `POST /api/inquiry` returned **HTTP 200** with:
  `{ "ok": true, "message": "Inquiry accepted by the email server." }`
- Confirms production Aliyun SMTP server (`smtp.qiye.aliyun.com:465`) authenticated with user `ding@atelier-marble.ltd` and accepted delivery.
- **Outstanding manual check**: Because Windows Credential Manager passwords do not migrate across machines, read-only IMAP was not executed automatically. The owner should verify in `ding@atelier-marble.ltd` that exactly one matching email was received with the subject, marker, and Reply-To matching above.

### (2) Attachment upload, private bucket & download security
- Client requested signed upload URL via `POST /api/inquiry/upload-url`, receiving key `inquiries/494facef-2f8b-4fcc-bc4a-d2cf6c6597f7.pdf` and short-lived upload token.
- Client uploaded synthetic PDF via `PUT` with Bearer token directly to Supabase storage URL: returned **HTTP 200**.
- **Anonymous public access probe**: Direct GET to `https://wdrolyfczxmphbglgana.supabase.co/storage/v1/object/public/inquiry-files/inquiries/494facef-2f8b-4fcc-bc4a-d2cf6c6597f7.pdf` returned **HTTP 400 Bad Request**. Public access is denied; files are accessible only via time-limited (7-day TTL) signed download tokens issued in the notification email.

### (3) Formal GA4 DebugView & deduplication
- Formal Measurement ID verified: `G-6B99HTXZF9`.
- **First submit**: After redirect to `/contact/thank-you`, exactly **1** `generate_lead` request was dispatched to Google Analytics with:
  - `en=generate_lead`
  - `debug_mode=true` (routed directly into GA4 DebugView)
  - `traffic_type=internal`
  - `landingPage=/countertops/vanity-tops`
  - `sourcePage=/countertops/vanity-tops`
- **Reload deduplication**: Reloading `/contact/thank-you` yielded exactly **0** additional `generate_lead` requests.
- **Direct visit deduplication**: Navigating directly to `/contact/thank-you` in a fresh page context yielded exactly **0** additional `generate_lead` requests.
- `InquirySuccessTracker` one-time consumption of `sessionStorage.getItem("atelierInquirySubmitted")` verified.

### (4) Durable idempotency & replay protection
- Idempotency key: `736e1108-6461-4e31-a761-d916e68477df`.
- **Identical replay**: Replaying the identical request payload to `POST /api/inquiry` returned **HTTP 200**, `{ "ok": true, "message": "Inquiry accepted by the email server." }`. Supabase `inquiry_idempotency` table matched the existing status `sent` and did not invoke duplicate SMTP sending.
- **Conflict replay**: Submitting the same idempotency key with modified message text returned **HTTP 409 Conflict**, `{ "ok": false, "message": "This submission key was already used for different data." }`.
- Verifies durable idempotency across requests on the resumed Supabase project.

### (5) Internal traffic exclusion
- Both URL parameters and sessionStorage retained `utm_source=internal_verification` and `utm_medium=internal_test`.
- All analytics hits emitted `traffic_type: "internal"`.
- Under the GA4 Internal Traffic filter (Testing mode or Active), these verification events are segregated from regular business inquiry and organic traffic metrics.
