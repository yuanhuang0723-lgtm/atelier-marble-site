import assert from "node:assert/strict";
import test from "node:test";

import {
  MAX_INQUIRY_FILE_SIZE,
  getInquiryContentType,
  isAllowedInquiryFile,
  sanitizeInquiryFileName
} from "../lib/inquiry-files";
import { createUploadReceipt, verifyUploadReceipt } from "../lib/inquiry-receipts";

const secret = "test-only-receipt-secret";
const sessionId = "session-1234567890123456";

test("shared file policy accepts normal files and CAD with empty MIME", () => {
  assert.equal(isAllowedInquiryFile({ name: "scope.pdf", type: "application/pdf", size: 12 }), true);
  assert.equal(isAllowedInquiryFile({ name: "layout.DWG", type: "", size: 12 }), true);
  assert.equal(isAllowedInquiryFile({ name: "layout.dxf", type: "application/octet-stream", size: 12 }), true);
  assert.equal(isAllowedInquiryFile({ name: "scope.pdf", type: "image/png", size: 12 }), false);
  assert.equal(isAllowedInquiryFile({ name: "scope.pdf", type: "application/pdf", size: 0 }), false);
  assert.equal(isAllowedInquiryFile({ name: "scope.pdf", type: "application/pdf", size: MAX_INQUIRY_FILE_SIZE + 1 }), false);
});

test("display names are sanitized and content types have safe CAD defaults", () => {
  assert.equal(sanitizeInquiryFileName("../plan\u0000final.dwg"), ".._plan_final.dwg");
  assert.equal(getInquiryContentType("plan.dwg", ""), "application/acad");
  assert.equal(getInquiryContentType("plan.dxf", ""), "application/dxf");
});

test("upload receipt binds key, metadata, and session and expires", () => {
  const claims = { key: "inquiries/123e4567-e89b-12d3-a456-426614174000.dwg", name: "plan.dwg", type: "application/acad", size: 12, sessionId };
  const receipt = createUploadReceipt(claims, secret, 1_000_000);
  assert.ok(verifyUploadReceipt(receipt, claims, secret, 1_000_001));
  assert.equal(verifyUploadReceipt(receipt, { ...claims, size: 13 }, secret, 1_000_001), null);
  assert.equal(verifyUploadReceipt(receipt, { ...claims, sessionId: "another-session-123456" }, secret, 1_000_001), null);
  assert.equal(verifyUploadReceipt(receipt, { ...claims, key: "inquiries/123e4567-e89b-12d3-a456-426614174000.pdf" }, secret, 1_000_001), null);
  assert.equal(verifyUploadReceipt(receipt, claims, secret, 1_000_000 + 15 * 60 * 1000 + 1), null);
});
