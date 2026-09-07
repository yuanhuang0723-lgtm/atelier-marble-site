export const MAX_INQUIRY_FILES = 5;
export const MAX_INQUIRY_FILE_SIZE = 25 * 1024 * 1024;
export const UPLOAD_AUTHORIZATION_TTL_SECONDS = 15 * 60;
export const DOWNLOAD_LINK_TTL_SECONDS = 7 * 24 * 60 * 60;

const MIME_TYPES_BY_EXTENSION: Record<string, ReadonlySet<string>> = {
  pdf: new Set(["application/pdf"]),
  dwg: new Set(["", "application/octet-stream", "application/acad"]),
  dxf: new Set(["", "application/octet-stream", "application/dxf"]),
  xlsx: new Set(["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]),
  xls: new Set(["application/vnd.ms-excel"]),
  jpg: new Set(["image/jpeg"]),
  jpeg: new Set(["image/jpeg"]),
  png: new Set(["image/png"]),
  zip: new Set(["application/zip", "application/x-zip-compressed"])
};

export const ALLOWED_INQUIRY_EXTENSIONS = new Set(Object.keys(MIME_TYPES_BY_EXTENSION));

export type InquiryFileMetadata = {
  name: string;
  type: string;
  size: number;
};

export function getInquiryFileExtension(name: string) {
  return name.trim().toLowerCase().split(".").pop() || "";
}

export function normalizeInquiryMimeType(type: string) {
  return type.trim().toLowerCase().split(";", 1)[0] || "";
}

export function isAllowedInquiryFile(metadata: Partial<InquiryFileMetadata>) {
  if (typeof metadata.name !== "string" || !metadata.name.trim() || metadata.name.length > 255) return false;
  if (typeof metadata.type !== "string") return false;
  if (typeof metadata.size !== "number" || !Number.isInteger(metadata.size) || metadata.size <= 0 || metadata.size > MAX_INQUIRY_FILE_SIZE) return false;

  const extension = getInquiryFileExtension(metadata.name);
  const mimeType = normalizeInquiryMimeType(metadata.type);
  return Boolean(MIME_TYPES_BY_EXTENSION[extension]?.has(mimeType));
}

export function sanitizeInquiryFileName(name: string) {
  return name.replace(/[\\/\u0000-\u001f\u007f]/g, "_").trim().slice(0, 180);
}

export function getInquiryContentType(name: string, type: string) {
  const extension = getInquiryFileExtension(name);
  const normalized = normalizeInquiryMimeType(type);
  if (normalized) return normalized;
  return extension === "dwg" ? "application/acad" : extension === "dxf" ? "application/dxf" : "application/octet-stream";
}

