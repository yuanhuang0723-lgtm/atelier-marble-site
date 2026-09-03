import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 25 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
  "image/jpeg",
  "image/png",
  "application/zip",
  "application/x-zip-compressed",
  "application/acad",
  "application/dxf",
  "application/octet-stream"
]);
const ALLOWED_EXTENSIONS = new Set(["pdf", "dwg", "dxf", "xlsx", "xls", "jpg", "jpeg", "png", "zip"]);

function getClient() {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    return null;
  }

  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey }
  });
}

export async function POST(request: Request) {
  let body: { name?: string; type?: string; size?: number };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid upload request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name : "";
  const type = typeof body.type === "string" ? body.type.toLowerCase() : "";
  const size = Number(body.size || 0);
  const extension = name.toLowerCase().split(".").pop() || "";

  if (!name || !ALLOWED_EXTENSIONS.has(extension) || !ALLOWED_TYPES.has(type)) {
    return NextResponse.json({ ok: false, message: "This file type is not supported." }, { status: 415 });
  }
  if (!Number.isFinite(size) || size <= 0 || size > MAX_FILE_SIZE) {
    return NextResponse.json({ ok: false, message: "Each file must be smaller than 25 MB." }, { status: 413 });
  }

  const client = getClient();
  const bucket = process.env.R2_BUCKET_NAME;
  if (!client || !bucket) {
    return NextResponse.json({ ok: false, message: "File upload is not configured yet." }, { status: 503 });
  }

  const key = `inquiries/${crypto.randomUUID()}.${extension}`;
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: type,
    ContentLength: size,
    Metadata: { originalName: name.slice(0, 180) }
  });
  let uploadUrl: string;
  try {
    uploadUrl = await getSignedUrl(client, command, { expiresIn: 900 });
  } catch (error) {
    console.error("R2 upload URL generation failed", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json({ ok: false, message: "File upload is temporarily unavailable. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, key, uploadUrl, expiresAt: new Date(Date.now() + 900000).toISOString() });
}
