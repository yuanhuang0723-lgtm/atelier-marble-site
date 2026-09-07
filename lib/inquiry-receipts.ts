import { createHmac, timingSafeEqual } from "node:crypto";

import { getInquiryContentType, getInquiryFileExtension, sanitizeInquiryFileName } from "./inquiry-files";

export type UploadReceiptClaims = {
  key: string;
  name: string;
  type: string;
  size: number;
  sessionId: string;
  issuedAt: number;
};

function encode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function signature(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function getUploadReceiptSecret() {
  return process.env.INQUIRY_UPLOAD_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || null;
}

export function createUploadReceipt(claims: Omit<UploadReceiptClaims, "issuedAt">, secret: string, now = Date.now()) {
  const payload = encode(JSON.stringify({ ...claims, issuedAt: now } satisfies UploadReceiptClaims));
  return `${payload}.${signature(payload, secret)}`;
}

export function verifyUploadReceipt(
  receipt: unknown,
  expected: { key: string; name: string; type: string; size: number; sessionId: string },
  secret: string,
  now = Date.now()
) {
  if (typeof receipt !== "string") return null;
  const [payload, providedSignature] = receipt.split(".");
  if (!payload || !providedSignature) return null;

  const expectedSignature = signature(payload, secret);
  const providedBuffer = Buffer.from(providedSignature);
  const expectedBuffer = Buffer.from(expectedSignature);
  if (providedBuffer.length !== expectedBuffer.length || !timingSafeEqual(providedBuffer, expectedBuffer)) return null;

  try {
    const claims = JSON.parse(decode(payload)) as Partial<UploadReceiptClaims>;
    const normalizedName = sanitizeInquiryFileName(expected.name);
    const normalizedType = getInquiryContentType(expected.name, expected.type);
    if (
      typeof claims.key !== "string" || claims.key !== expected.key ||
      typeof claims.name !== "string" || claims.name !== normalizedName ||
      typeof claims.type !== "string" || claims.type !== normalizedType ||
      typeof claims.size !== "number" || claims.size !== expected.size ||
      typeof claims.sessionId !== "string" || claims.sessionId !== expected.sessionId ||
      typeof claims.issuedAt !== "number" || now - claims.issuedAt < 0 || now - claims.issuedAt > 15 * 60 * 1000
    ) return null;
    if (getInquiryFileExtension(claims.name) !== getInquiryFileExtension(expected.name)) return null;
    return claims as UploadReceiptClaims;
  } catch {
    return null;
  }
}
