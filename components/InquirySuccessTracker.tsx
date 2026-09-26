"use client";

import { useEffect, useRef } from "react";
import { trackConversionEvent, type ConversionEventPayload } from "../lib/tracking";

function parseInquiryContext(serialized: string): ConversionEventPayload {
  if (serialized === "1") return { sourcePage: "/contact" };

  try {
    const value: unknown = JSON.parse(serialized);
    if (!value || typeof value !== "object" || Array.isArray(value)) return { sourcePage: "/contact" };

    const record = value as Record<string, unknown>;
    const context: ConversionEventPayload = { sourcePage: "/contact" };
    for (const key of ["sourcePage", "projectType", "country", "landingPage"] as const) {
      const item = record[key];
      if (typeof item === "string" && item.length <= 500) context[key] = item;
    }
    for (const key of ["hasContact", "hasMessage", "hasBudget", "hasTimeline", "hasDrawings", "hasFiles", "hasCompany", "hasDestination", "hasQuantity"] as const) {
      const item = record[key];
      if (typeof item === "boolean") context[key] = item;
    }
    if (typeof record.fileCount === "number" && Number.isInteger(record.fileCount) && record.fileCount >= 0 && record.fileCount <= 5) {
      context.fileCount = record.fileCount;
    }
    return context;
  } catch {
    return { sourcePage: "/contact" };
  }
}

export default function InquirySuccessTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) {
      return;
    }

    let serialized: string | null = null;
    try {
      serialized = window.sessionStorage.getItem("atelierInquirySubmitted");
      if (serialized) window.sessionStorage.removeItem("atelierInquirySubmitted");
    } catch {
      return;
    }
    if (!serialized) {
      return;
    }

    tracked.current = true;
    trackConversionEvent("generate_lead", {
      ...parseInquiryContext(serialized),
      method: "api",
      page_path: "/contact/thank-you"
    });
  }, []);

  return null;
}
