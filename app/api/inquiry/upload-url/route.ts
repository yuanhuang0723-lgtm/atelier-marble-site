import { NextResponse } from "next/server";

import {
  MAX_INQUIRY_FILE_SIZE,
  isAllowedInquiryFile,
  getInquiryContentType,
  getInquiryFileExtension,
  sanitizeInquiryFileName
} from "../../../../lib/inquiry-files";
import { createUploadReceipt, getUploadReceiptSecret } from "../../../../lib/inquiry-receipts";
import { getInquiryBucket, getSupabaseAdmin } from "../../../../lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REQUEST_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const uploadRequestWindow = new Map<string, { count: number; startedAt: number }>();

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
async function readJson(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) return null;
  const bytes = await request.arrayBuffer();
  if (bytes.byteLength === 0 || bytes.byteLength > MAX_REQUEST_BYTES) return null;
  try {
    return JSON.parse(new TextDecoder().decode(bytes)) as unknown;
  } catch {
    return null;
  }
}

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const now = Date.now();
  const sourceIp = getClientIp(request);
  const previous = uploadRequestWindow.get(sourceIp);
  if (previous && now - previous.startedAt < RATE_LIMIT_WINDOW_MS && previous.count >= 10) {
    return NextResponse.json({ ok: false, message: "Please wait before uploading more files." }, { status: 429 });
  }
  uploadRequestWindow.set(
    sourceIp,
    previous && now - previous.startedAt < RATE_LIMIT_WINDOW_MS
      ? { count: previous.count + 1, startedAt: previous.startedAt }
      : { count: 1, startedAt: now }
  );

  const rawBody = await readJson(request);
  if (!isRecord(rawBody)) return NextResponse.json({ ok: false, message: "Invalid upload request." }, { status: 400 });

  const name = rawBody.name;
  const type = rawBody.type;
  const size = rawBody.size;
  const sessionId = rawBody.sessionId;
  if (
    typeof name !== "string" || typeof type !== "string" || typeof size !== "number" ||
    !Number.isInteger(size) || typeof sessionId !== "string" || sessionId.length < 16 || sessionId.length > 100
  ) {
    return NextResponse.json({ ok: false, message: "Invalid upload request." }, { status: 400 });
  }

  if (!isAllowedInquiryFile({ name, type, size })) {
    const sizeError = size <= 0 || size > MAX_INQUIRY_FILE_SIZE;
    return NextResponse.json(
      { ok: false, message: sizeError ? "Each file must be smaller than 25 MB." : "This file type is not supported." },
      { status: sizeError ? 413 : 415 }
    );
  }

  const supabase = getSupabaseAdmin();
  const receiptSecret = getUploadReceiptSecret();
  if (!supabase || !receiptSecret) {
    return NextResponse.json({ ok: false, message: "File upload is not configured yet." }, { status: 503 });
  }

  const extension = getInquiryFileExtension(name);
  const sanitizedName = sanitizeInquiryFileName(name);
  const contentType = getInquiryContentType(name, type);
  const key = `inquiries/${crypto.randomUUID()}.${extension}`;
  const bucket = getInquiryBucket();
  const { data, error } = await supabase.storage.from(bucket).createSignedUploadUrl(key, { upsert: false });
  if (error || !data?.signedUrl) {
    console.error("Supabase upload URL generation failed", error?.message || "unknown error");
    return NextResponse.json({ ok: false, message: "File upload is temporarily unavailable. Please try again." }, { status: 502 });
  }

  const receipt = createUploadReceipt({ key, name: sanitizedName, type: contentType, size, sessionId }, receiptSecret, now);
  return NextResponse.json({
    ok: true,
    key,
    name: sanitizedName,
    contentType,
    uploadUrl: data.signedUrl,
    receipt,
    expiresAt: new Date(now + 2 * 60 * 60 * 1000).toISOString()
  });
}
