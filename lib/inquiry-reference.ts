export function isInquiryReference(value: unknown): value is string {
  return typeof value === "string" && /^AM-[A-F0-9]{12}$/.test(value);
}
