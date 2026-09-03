import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { contact } from "../../../lib/assets";

export const runtime = "nodejs";

const requestWindow = new Map<string, { count: number; startedAt: number }>();

type InquiryRequestBody = {
  name?: string;
  contact?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  projectType?: string;
  intent?: string;
  sourcePage?: string;
  company?: string;
  country?: string;
  destinationPort?: string;
  stoneScope?: string;
  quantity?: string;
  deliveryDate?: string;
  materialPreference?: string;
  phone?: string;
  files?: Array<{ key?: string; name?: string; size?: number }>;
  website?: string;
};

function buildMessage(body: InquiryRequestBody) {
  return [
    "Hello Atelier Marble,",
    "",
    "I would like to discuss a project consultation.",
    body.projectType ? `Project type: ${body.projectType}` : "",
    body.intent ? `Inquiry intent: ${body.intent}` : "",
    body.sourcePage ? `Source page: ${body.sourcePage}` : "",
    body.company ? `Company: ${body.company}` : "",
    body.country ? `Country: ${body.country}` : "",
    body.destinationPort ? `Destination port: ${body.destinationPort}` : "",
    body.stoneScope ? `Product / stone scope: ${body.stoneScope}` : "",
    body.quantity ? `Approximate quantity: ${body.quantity}` : "",
    body.deliveryDate ? `Required delivery date: ${body.deliveryDate}` : "",
    body.materialPreference ? `Material preference: ${body.materialPreference}` : "",
    body.phone ? `WhatsApp / phone: ${body.phone}` : "",
    body.name ? `Name: ${body.name}` : "",
    body.contact ? `Contact: ${body.contact}` : "",
    body.budgetRange ? `Budget range: ${body.budgetRange}` : "",
    body.timeline ? `Timeline: ${body.timeline}` : "",
    "",
    "Project notes:",
    body.message || "-",
    "",
    body.files?.length ? `Files: ${body.files.map((file) => file.name || file.key).join(", ")}` : "",
    "Please advise material options, fabrication approach, and project pricing steps."
  ].join("\n");
}

function getStorageClient() {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  if (!accountId || !accessKeyId || !secretAccessKey) return null;
  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey }
  });
}

async function buildFileLinks(files: InquiryRequestBody["files"]) {
  if (!files?.length) return [];
  const client = getStorageClient();
  const bucket = process.env.R2_BUCKET_NAME;
  if (!client || !bucket) return [];

  return Promise.all(
    files.slice(0, 5).flatMap(async (file) => {
      if (!file.key || !/^inquiries\/[a-f0-9-]+\.[a-z0-9]+$/i.test(file.key)) return [];
      const url = await getSignedUrl(client, new GetObjectCommand({ Bucket: bucket, Key: file.key }), { expiresIn: 604800 });
      return [`${file.name || file.key}: ${url}`];
    })
  ).then((items) => items.flat());
}

function validateBody(body: InquiryRequestBody) {
  const fields = [body.name, body.company, body.contact, body.country, body.destinationPort, body.stoneScope, body.quantity, body.deliveryDate, body.materialPreference, body.phone, body.message];
  if (fields.some((value) => typeof value === "string" && value.length > 2000)) return "One or more fields are too long.";
  if (body.files && !Array.isArray(body.files)) return "Invalid file metadata.";
  if (Array.isArray(body.files) && body.files.length > 5) return "Please attach no more than 5 files.";
  if (Array.isArray(body.files) && body.files.some((file) => !file || typeof file.key !== "string" || typeof file.name !== "string" || !Number.isFinite(Number(file.size)) || Number(file.size) <= 0 || Number(file.size) > 25 * 1024 * 1024)) return "One or more files are invalid.";
  return null;
}

export async function POST(request: Request) {
  const sourceIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const previous = requestWindow.get(sourceIp);
  if (previous && now - previous.startedAt < 10 * 60 * 1000 && previous.count >= 5) {
    return NextResponse.json({ ok: false, message: "Please wait before sending another inquiry." }, { status: 429 });
  }
  requestWindow.set(sourceIp, previous && now - previous.startedAt < 10 * 60 * 1000 ? { count: previous.count + 1, startedAt: previous.startedAt } : { count: 1, startedAt: now });

  let body: InquiryRequestBody;

  try {
    body = (await request.json()) as InquiryRequestBody;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true, message: "Inquiry sent." });
  }

  const validationError = validateBody(body);
  if (validationError) return NextResponse.json({ ok: false, message: validationError }, { status: 400 });

  const fileLinks = await buildFileLinks(body.files);

  const recipient = contact.inquiryRecipient;
  const subject = body.projectType
    ? `${body.projectType} Project Consultation`
    : "Atelier Marble Project Consultation";

  const payload = new URLSearchParams();
  payload.set("_subject", subject);
  payload.set("_template", "table");
  payload.set("_captcha", "false");
  if (body.contact && body.contact.includes("@")) {
    payload.set("_replyto", body.contact);
  }
  payload.set("name", body.name || "");
  payload.set("contact", body.contact || "");
  payload.set("budgetRange", body.budgetRange || "");
  payload.set("timeline", body.timeline || "");
  payload.set("message", body.message || "");
  payload.set("projectType", body.projectType || "");
  payload.set("intent", body.intent || "");
  payload.set("sourcePage", body.sourcePage || "");
  payload.set("company", body.company || "");
  payload.set("country", body.country || "");
  payload.set("destinationPort", body.destinationPort || "");
  payload.set("stoneScope", body.stoneScope || "");
  payload.set("quantity", body.quantity || "");
  payload.set("deliveryDate", body.deliveryDate || "");
  payload.set("materialPreference", body.materialPreference || "");
  payload.set("phone", body.phone || "");
  payload.set("files", fileLinks.join("\n"));
  payload.set("body", `${buildMessage(body)}${fileLinks.length ? `\n\nPrivate file links (expire in 7 days):\n${fileLinks.join("\n")}` : ""}`);

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: payload
  });

  const text = await response.text();

  try {
    const data = JSON.parse(text) as { success?: boolean; message?: string };
    if (!response.ok || data.success === false) {
      return NextResponse.json(
        {
          ok: false,
          message:
            data.message ||
            "The inquiry could not be sent yet. Please confirm the recipient email once if FormSubmit asks for activation."
        },
        { status: response.status || 502 }
      );
    }

    return NextResponse.json({ ok: true, message: data.message || "Inquiry sent." });
  } catch {
    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "The inquiry could not be sent yet. Please confirm the recipient email once if FormSubmit asks for activation."
        },
        { status: response.status || 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Inquiry sent." });
  }
}

export function GET() {
  return NextResponse.json({ ok: false, message: "Method not allowed." }, { status: 405 });
}
