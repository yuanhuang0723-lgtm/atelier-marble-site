import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

import {
  DOWNLOAD_LINK_TTL_SECONDS,
  MAX_INQUIRY_FILE_SIZE,
  MAX_INQUIRY_FILES,
  getInquiryContentType,
  isAllowedInquiryFile,
  normalizeInquiryMimeType,
  sanitizeInquiryFileName
} from "../../../lib/inquiry-files";
import { getUploadReceiptSecret, verifyUploadReceipt } from "../../../lib/inquiry-receipts";
import { getInquiryBucket, getSupabaseAdmin } from "../../../lib/supabase-server";
import { contact } from "../../../lib/assets";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REQUEST_BYTES = 512 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const requestWindow = new Map<string, { count: number; startedAt: number }>();
const IDENTITY_KEY_PATTERN = /^[A-Za-z0-9_-]{16,100}$/;
const FILE_KEY_PATTERN = /^inquiries\/[0-9a-f-]{36}\.[a-z0-9]+$/i;
const CAMPAIGN_KEYS = new Set(["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"]);
const STRING_FIELDS = [
  "name", "contact", "budgetRange", "timeline", "message", "projectType", "intent", "sourcePage", "company",
  "country", "destinationPort", "stoneScope", "quantity", "deliveryDate", "materialPreference", "phone", "website", "sessionId"
] as const;

type InquiryFile = { key: string; name: string; type: string; size: number; receipt: string };
type InquiryRequestBody = Record<string, unknown> & { files?: InquiryFile[]; campaign?: Record<string, string> };
type IdempotencyRow = { request_hash: string; status: "processing" | "sent" | "pending" | "failed"; response_message: string | null };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function readJson(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) return { tooLarge: true } as const;
  const bytes = await request.arrayBuffer();
  if (bytes.byteLength > MAX_REQUEST_BYTES) return { tooLarge: true } as const;
  try {
    return { value: JSON.parse(new TextDecoder().decode(bytes)) as unknown } as const;
  } catch {
    return { invalid: true } as const;
  }
}

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function validateAndNormalizeBody(value: unknown): { body?: InquiryRequestBody; message?: string } {
  if (!isRecord(value)) return { message: "Invalid request body." };
  const body = { ...value } as InquiryRequestBody;

  for (const field of STRING_FIELDS) {
    if (field in body && body[field] !== undefined && typeof body[field] !== "string") return { message: "Invalid request fields." };
    if (typeof body[field] === "string" && body[field].length > (field === "sourcePage" ? 500 : 2000)) return { message: "One or more fields are too long." };
  }

  if (typeof body.campaign !== "undefined") {
    if (!isRecord(body.campaign) || Object.keys(body.campaign).some((key) => !CAMPAIGN_KEYS.has(key) || typeof body.campaign?.[key] !== "string" || String(body.campaign[key]).length > 300)) return { message: "Invalid campaign context." };
  }

  if (typeof body.files !== "undefined") {
    if (!Array.isArray(body.files)) return { message: "Invalid file metadata." };
    if (body.files.length > MAX_INQUIRY_FILES) return { message: "Please attach no more than 5 files." };
    for (const file of body.files) {
      if (!isRecord(file) || typeof file.key !== "string" || typeof file.name !== "string" || typeof file.type !== "string" || typeof file.receipt !== "string" || typeof file.size !== "number") return { message: "One or more files are invalid." };
      if (!FILE_KEY_PATTERN.test(file.key) || !isAllowedInquiryFile({ name: file.name, type: file.type, size: file.size }) || file.receipt.length > 4096) return { message: "One or more files are invalid." };
    }
  }

  if (typeof body.contact !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.contact.trim())) return { message: "Please provide a valid email address." };
  if (typeof body.projectType !== "string" || !body.projectType.trim()) return { message: "Please select a project type." };
  if (typeof body.message !== "string" || body.message.trim().length < 10) return { message: "Please add at least 10 characters about your project." };
  if (typeof body.idempotencyKey !== "string" || !IDENTITY_KEY_PATTERN.test(body.idempotencyKey)) return { message: "Invalid submission key." };
  if (typeof body.sessionId !== "string" || body.sessionId.length < 16 || body.sessionId.length > 100) return { message: "Invalid inquiry session." };
  if (typeof body.website === "string" && body.website.trim()) return { message: "Invalid submission." };

  const files = Array.isArray(body.files) ? body.files as InquiryFile[] : [];
  if (new Set(files.map((file) => file.key)).size !== files.length) return { message: "Duplicate files are not allowed." };
  return { body: { ...body, files } };
}

function buildRequestHash(body: InquiryRequestBody) {
  const normalized = Object.fromEntries(STRING_FIELDS.filter((field) => field !== "website").map((field) => [field, typeof body[field] === "string" ? body[field] : ""]));
  const files = (Array.isArray(body.files) ? body.files : []).map((file) => ({ key: file.key, name: file.name, type: file.type, size: file.size, receipt: file.receipt }));
  const campaign = isRecord(body.campaign) ? Object.fromEntries(Object.entries(body.campaign).sort(([a], [b]) => a.localeCompare(b))) : {};
  return createHash("sha256").update(JSON.stringify({ normalized, files, campaign })).digest("hex");
}

async function claimIdempotency(supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>, key: string, requestHash: string) {
  const inserted = await supabase.from("inquiry_idempotency").insert({ idempotency_key: key, request_hash: requestHash, status: "processing" });
  if (!inserted.error) return { kind: "claimed" as const };
  if (inserted.error.code !== "23505") return { kind: "unavailable" as const };
  const existing = await supabase.from("inquiry_idempotency").select("request_hash,status,response_message").eq("idempotency_key", key).maybeSingle<IdempotencyRow>();
  if (existing.error || !existing.data) return { kind: "unavailable" as const };
  if (existing.data.request_hash !== requestHash) return { kind: "conflict" as const };
  return { kind: existing.data.status, message: existing.data.response_message || undefined } as const;
}

async function setIdempotencyStatus(supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>, key: string, status: IdempotencyRow["status"], message: string) {
  await supabase.from("inquiry_idempotency").update({ status, response_message: message, completed_at: new Date().toISOString() }).eq("idempotency_key", key);
}

async function buildFileLinks(body: InquiryRequestBody, supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>) {
  const files = (body.files || []) as InquiryFile[];
  if (!files.length) return { links: [] as string[] };
  const receiptSecret = getUploadReceiptSecret();
  if (!receiptSecret) return { error: "File upload is not configured yet." };
  const bucket = getInquiryBucket();
  const links: string[] = [];

  for (const file of files) {
    const verifiedReceipt = verifyUploadReceipt(file.receipt, { key: file.key, name: file.name, type: file.type, size: file.size, sessionId: String(body.sessionId) }, receiptSecret);
    if (!verifiedReceipt) return { error: "One or more files are invalid." };

    const { data: info, error: infoError } = await supabase.storage.from(bucket).info(file.key);
    const storedSize = Number((info as { size?: unknown } | null)?.size);
    if (infoError || !info || !Number.isFinite(storedSize) || storedSize !== file.size || storedSize <= 0 || storedSize > MAX_INQUIRY_FILE_SIZE) return { error: "One or more uploaded files could not be verified." };

    const storedType = normalizeInquiryMimeType(String((info as { contentType?: unknown }).contentType || ""));
    const expectedType = getInquiryContentType(file.name, file.type);
    if (storedType && !new Set([expectedType, "application/octet-stream"]).has(storedType)) return { error: "One or more uploaded files could not be verified." };

    const signed = await supabase.storage.from(bucket).createSignedUrl(file.key, DOWNLOAD_LINK_TTL_SECONDS, { download: sanitizeInquiryFileName(file.name) });
    if (signed.error || !signed.data?.signedUrl) return { error: "One or more uploaded files could not be shared securely." };
    links.push(`${sanitizeInquiryFileName(file.name)}: ${signed.data.signedUrl}`);
  }
  return { links };
}

function buildMessage(body: InquiryRequestBody, fileLinks: string[]) {
  const campaign = isRecord(body.campaign) ? Object.entries(body.campaign).filter(([key]) => CAMPAIGN_KEYS.has(key)).map(([key, value]) => `${key}: ${String(value)}`) : [];
  return [
    "Hello Atelier Marble,", "", "I would like to discuss a project consultation.",
    body.projectType ? `Project type: ${body.projectType}` : "", body.intent ? `Inquiry intent: ${body.intent}` : "", body.sourcePage ? `Source page: ${body.sourcePage}` : "",
    body.company ? `Company: ${body.company}` : "", body.country ? `Country: ${body.country}` : "", body.destinationPort ? `Destination port: ${body.destinationPort}` : "",
    body.stoneScope ? `Product / stone scope: ${body.stoneScope}` : "", body.quantity ? `Approximate quantity: ${body.quantity}` : "", body.deliveryDate ? `Required delivery date: ${body.deliveryDate}` : "",
    body.materialPreference ? `Material preference: ${body.materialPreference}` : "", body.phone ? `WhatsApp / phone: ${body.phone}` : "", campaign.length ? `Campaign: ${campaign.join(" | ")}` : "",
    body.name ? `Name: ${body.name}` : "", `Contact: ${body.contact}`, body.budgetRange ? `Budget range: ${body.budgetRange}` : "", body.timeline ? `Timeline: ${body.timeline}` : "", "",
    "Project notes:", body.message, fileLinks.length ? `\nFiles:\n${fileLinks.map((link) => link.split(": ")[0]).join("\n")}` : "", "", "Please advise material options, fabrication approach, and project pricing steps."
  ].filter(Boolean).join("\n");
}

async function sendInquiryEmail(body: InquiryRequestBody, fileLinks: string[]) {
  const recipient = process.env.INQUIRY_RECIPIENT || contact.inquiryRecipient;
  const payload = new URLSearchParams({
    _subject: `${String(body.projectType)} Project Consultation`, _template: "table", _captcha: "false", _replyto: String(body.contact),
    name: String(body.name || ""), contact: String(body.contact), budgetRange: String(body.budgetRange || ""), timeline: String(body.timeline || ""), message: String(body.message),
    projectType: String(body.projectType), intent: String(body.intent || ""), sourcePage: String(body.sourcePage || ""), company: String(body.company || ""), country: String(body.country || ""),
    destinationPort: String(body.destinationPort || ""), stoneScope: String(body.stoneScope || ""), quantity: String(body.quantity || ""), deliveryDate: String(body.deliveryDate || ""),
    materialPreference: String(body.materialPreference || ""), phone: String(body.phone || ""), files: fileLinks.join("\n"), body: `${buildMessage(body, fileLinks)}${fileLinks.length ? `\n\nPrivate file links (expire in 7 days):\n${fileLinks.join("\n")}` : ""}`
  });

  let response: Response;
  try {
    response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, { method: "POST", headers: { Accept: "application/json" }, body: payload, signal: AbortSignal.timeout(15000) });
  } catch {
    return { kind: "pending" as const, message: "The inquiry was not confirmed by the email provider. Please try again later or use WhatsApp." };
  }

  let data: unknown;
  try { data = JSON.parse(await response.text()) as unknown; } catch { return { kind: "pending" as const, message: "The inquiry was not confirmed by the email provider. Please try again later or use WhatsApp." }; }
  if (!isRecord(data)) return { kind: "pending" as const, message: "The inquiry was not confirmed by the email provider. Please try again later or use WhatsApp." };
  const success = data.success === true || data.success === "true";
  if (!response.ok || !success) return { kind: "failed" as const, message: typeof data.message === "string" ? data.message : "The email provider rejected the inquiry." };
  return { kind: "sent" as const, message: typeof data.message === "string" ? data.message : "Inquiry sent." };
}

export async function POST(request: Request) {
  const sourceIp = getClientIp(request);
  const now = Date.now();
  const previous = requestWindow.get(sourceIp);
  if (previous && now - previous.startedAt < RATE_LIMIT_WINDOW_MS && previous.count >= 5) return NextResponse.json({ ok: false, message: "Please wait before sending another inquiry." }, { status: 429 });
  requestWindow.set(sourceIp, previous && now - previous.startedAt < RATE_LIMIT_WINDOW_MS ? { count: previous.count + 1, startedAt: previous.startedAt } : { count: 1, startedAt: now });

  const parsed = await readJson(request);
  if ("tooLarge" in parsed) return NextResponse.json({ ok: false, message: "Inquiry request is too large." }, { status: 413 });
  if ("invalid" in parsed) return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  const normalized = validateAndNormalizeBody(parsed.value);
  if (!normalized.body) return NextResponse.json({ ok: false, message: normalized.message }, { status: 400 });
  const body = normalized.body;
  const supabase = getSupabaseAdmin();
  if (!supabase) return NextResponse.json({ ok: false, message: "The inquiry service is not configured yet." }, { status: 503 });

  const idempotencyKey = String(body.idempotencyKey);
  const claim = await claimIdempotency(supabase, idempotencyKey, buildRequestHash(body));
  if (claim.kind === "unavailable") return NextResponse.json({ ok: false, message: "The inquiry service is temporarily unavailable." }, { status: 503 });
  if (claim.kind === "conflict") return NextResponse.json({ ok: false, message: "This submission key was already used for different data." }, { status: 409 });
  if (claim.kind === "sent") return NextResponse.json({ ok: true, message: claim.message || "Inquiry already sent." });
  if (claim.kind === "processing") return NextResponse.json({ ok: false, message: "This inquiry is already being processed. Please wait before trying again." }, { status: 409 });
  if (claim.kind === "pending") return NextResponse.json({ ok: false, message: claim.message || "The inquiry delivery could not be confirmed. Please contact us through WhatsApp." }, { status: 502 });
  if (claim.kind === "failed") return NextResponse.json({ ok: false, message: claim.message || "The email provider rejected this inquiry." }, { status: 502 });

  const fileResult = await buildFileLinks(body, supabase);
  if (fileResult.error) {
    await setIdempotencyStatus(supabase, idempotencyKey, "failed", fileResult.error);
    return NextResponse.json({ ok: false, message: fileResult.error }, { status: 400 });
  }
  const email = await sendInquiryEmail(body, fileResult.links || []);
  await setIdempotencyStatus(supabase, idempotencyKey, email.kind, email.message);
  if (email.kind !== "sent") return NextResponse.json({ ok: false, message: email.message }, { status: 502 });
  return NextResponse.json({ ok: true, message: email.message });
}

export function GET() {
  return NextResponse.json({ ok: false, message: "Method not allowed." }, { status: 405 });
}
