import assert from "node:assert/strict";
import test, { afterEach, beforeEach } from "node:test";

import { createUploadReceipt } from "../lib/inquiry-receipts";

const originalFetch = globalThis.fetch;
const originalUrl = process.env.SUPABASE_URL;
const originalKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const originalBucket = process.env.SUPABASE_INQUIRY_BUCKET;
const originalRecipient = process.env.INQUIRY_RECIPIENT;

let emailCalls = 0;
let emailMode: "success" | "rejection" | "malformed" = "success";
let storageMode: "success" | "missing" | "failure" = "success";
let lastEmailPayload = "";
let idempotencyRows = new Map<string, { request_hash: string; status: string; response_message: string | null }>();

function response(body: unknown, status = 200) {
  return new Response(body === undefined ? null : JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

function installMockFetch() {
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (url.startsWith("https://formsubmit.co/")) {
      emailCalls += 1;
      lastEmailPayload = String(init?.body || "");
      if (emailMode === "malformed") return new Response("accepted", { status: 200 });
      if (emailMode === "rejection") return response({ success: false, message: "provider rejected" }, 400);
      return response({ success: true, message: "accepted" });
    }
    if (url.includes("/rest/v1/inquiry_idempotency")) {
      const method = init?.method || "GET";
      if (method === "POST") {
        const payload = JSON.parse(String(init?.body || "{}")) as { idempotency_key: string; request_hash: string };
        if (idempotencyRows.has(payload.idempotency_key)) return response({ code: "23505", message: "duplicate key" }, 409);
        idempotencyRows.set(payload.idempotency_key, { request_hash: payload.request_hash, status: "processing", response_message: null });
        return response([], 201);
      }
      if (method === "PATCH") {
        const key = new URL(url).searchParams.get("idempotency_key")?.replace("eq.", "") || "";
        const payload = JSON.parse(String(init?.body || "{}")) as { status: string; response_message: string };
        const row = idempotencyRows.get(key);
        if (row) Object.assign(row, payload);
        return response([], 204);
      }
      const key = new URL(url).searchParams.get("idempotency_key")?.replace("eq.", "") || "";
      const row = idempotencyRows.get(key);
      return response(row ? [{ ...row }] : [], 200);
    }
    if (url.includes("/storage/v1/object/info/")) {
      if (storageMode === "missing") return response({ message: "not found" }, 404);
      if (storageMode === "failure") return response({ message: "storage failure" }, 500);
      return response({ size: 12, contentType: "application/pdf" });
    }
    if (url.includes("/storage/v1/object/sign/")) return response({ signedURL: "/object/sign/inquiry-files/inquiries/file.pdf?token=test" });
    if (url.includes("/storage/v1/object/upload/sign/")) return response({ url: "/object/upload/sign/inquiry-files/inquiries/file.pdf?token=test" });
    throw new Error(`Unexpected mocked request: ${url}`);
  };
}

function validBody(overrides: Record<string, unknown> = {}) {
  return {
    contact: "buyer@example.com",
    projectType: "Hotel stone",
    message: "Need a quotation for a hotel vanity package.",
    idempotencyKey: "123e4567-e89b-12d3-a456-426614174000",
    sessionId: "session-1234567890123456",
    files: [],
    ...overrides
  };
}

beforeEach(() => {
  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-role-key";
  process.env.SUPABASE_INQUIRY_BUCKET = "inquiry-files";
  process.env.INQUIRY_RECIPIENT = "ding@atelier-marble.ltd";
  emailCalls = 0;
  emailMode = "success";
  storageMode = "success";
  lastEmailPayload = "";
  idempotencyRows = new Map();
  installMockFetch();
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  process.env.SUPABASE_URL = originalUrl;
  process.env.SUPABASE_SERVICE_ROLE_KEY = originalKey;
  process.env.SUPABASE_INQUIRY_BUCKET = originalBucket;
  process.env.INQUIRY_RECIPIENT = originalRecipient;
});

test("inquiry route accepts a provider-confirmed no-file submission and deduplicates retry", async () => {
  const { POST } = await import("../app/api/inquiry/route");
  const body = validBody();
  const first = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.1" }, body: JSON.stringify(body) }));
  assert.equal(first.status, 200);
  assert.equal((await first.json()).ok, true);
  const retry = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.2" }, body: JSON.stringify(body) }));
  assert.equal(retry.status, 200);
  assert.equal((await retry.json()).ok, true);
  assert.equal(emailCalls, 1);
});

test("inquiry route rejects malformed JSON, scalar bodies, and forged file receipts", async () => {
  const { POST } = await import("../app/api/inquiry/route");
  const malformed = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.3" }, body: "{" }));
  assert.equal(malformed.status, 400);
  const scalar = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.4" }, body: "null" }));
  assert.equal(scalar.status, 400);
  const forged = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.5" }, body: JSON.stringify(validBody({ files: [{ key: "inquiries/123e4567-e89b-12d3-a456-426614174000.pdf", name: "file.pdf", type: "application/pdf", size: 12, receipt: "not-a-server-receipt" }] })) }));
  assert.equal(forged.status, 400);
  assert.equal(emailCalls, 0);
});

test("upload URL accepts CAD with an empty browser MIME and final submission verifies private object metadata", async () => {
  const { POST: issueUploadUrl } = await import("../app/api/inquiry/upload-url/route");
  const uploadUrlResponse = await issueUploadUrl(new Request("https://site.test/api/inquiry/upload-url", {
    method: "POST", headers: { "x-forwarded-for": "10.0.0.6" },
    body: JSON.stringify({ name: "layout.dwg", type: "", size: 12, sessionId: "session-1234567890123456" })
  }));
  assert.equal(uploadUrlResponse.status, 200);
  const uploadResult = await uploadUrlResponse.json() as { contentType: string; receipt: string; key: string; name: string };
  assert.equal(uploadResult.contentType, "application/acad");

  const { POST } = await import("../app/api/inquiry/route");
  const key = "inquiries/123e4567-e89b-12d3-a456-426614174000.pdf";
  const file = { key, name: "scope.pdf", type: "application/pdf", size: 12, receipt: createUploadReceipt({ key, name: "scope.pdf", type: "application/pdf", size: 12, sessionId: "session-1234567890123456" }, "test-service-role-key") };
  const result = await POST(new Request("https://site.test/api/inquiry", {
    method: "POST", headers: { "x-forwarded-for": "10.0.0.7" },
    body: JSON.stringify(validBody({ idempotencyKey: "123e4567-e89b-12d3-a456-426614174001", files: [file] }))
  }));
  assert.equal(result.status, 200);
  assert.match(lastEmailPayload, /scope\.pdf/);
  assert.match(lastEmailPayload, /Private\+file\+links/);
});

test("provider rejection, malformed response, and missing storage never report success", async () => {
  const { POST } = await import("../app/api/inquiry/route");
  emailMode = "rejection";
  const rejected = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.8" }, body: JSON.stringify(validBody({ idempotencyKey: "123e4567-e89b-12d3-a456-426614174002" })) }));
  assert.equal(rejected.status, 502);
  assert.equal((await rejected.json()).ok, false);

  emailMode = "malformed";
  const malformed = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.9" }, body: JSON.stringify(validBody({ idempotencyKey: "123e4567-e89b-12d3-a456-426614174003" })) }));
  assert.equal(malformed.status, 502);
  assert.equal((await malformed.json()).ok, false);

  storageMode = "missing";
  const key = "inquiries/123e4567-e89b-12d3-a456-426614174004.pdf";
  const file = { key, name: "missing.pdf", type: "application/pdf", size: 12, receipt: createUploadReceipt({ key, name: "missing.pdf", type: "application/pdf", size: 12, sessionId: "session-1234567890123456" }, "test-service-role-key") };
  const missing = await POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.10" }, body: JSON.stringify(validBody({ idempotencyKey: "123e4567-e89b-12d3-a456-426614174005", files: [file] })) }));
  assert.equal(missing.status, 400);
  assert.equal((await missing.json()).ok, false);
});

test("concurrent requests with one idempotency key do not send two emails", async () => {
  const { POST } = await import("../app/api/inquiry/route");
  const body = validBody({ idempotencyKey: "123e4567-e89b-12d3-a456-426614174006" });
  const [first, second] = await Promise.all([
    POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.11" }, body: JSON.stringify(body) })),
    POST(new Request("https://site.test/api/inquiry", { method: "POST", headers: { "x-forwarded-for": "10.0.0.12" }, body: JSON.stringify(body) }))
  ]);
  assert.deepEqual([first.status, second.status].sort(), [200, 409]);
  assert.equal(emailCalls, 1);
});
