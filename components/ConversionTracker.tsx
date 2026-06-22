"use client";

import { useEffect } from "react";
import { trackConversionEvent } from "../lib/tracking";

function readCampaignParams() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
  const found: Record<string, string> = {};

  for (const key of keys) {
    const value = params.get(key);
    if (value) {
      found[key] = value;
    }
  }

  return found;
}

export default function ConversionTracker() {
  useEffect(() => {
    const campaign = readCampaignParams();
    if (Object.keys(campaign).length > 0) {
      sessionStorage.setItem("atelierCampaign", JSON.stringify(campaign));
    }

    const handler = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) {
        return;
      }

      if (link.closest("[data-qualified-inquiry-form='true']")) {
        return;
      }

      const href = link.getAttribute("href") || "";
      const isWhatsApp = href.includes("wa.me");
      const isMail = href.startsWith("mailto:");

      if (!isWhatsApp && !isMail) {
        return;
      }

      const eventName = isWhatsApp ? "whatsapp_inquiry_click" : "email_inquiry_click";
      trackConversionEvent(eventName, {
        page_path: window.location.pathname,
        link_text: link.textContent?.trim() || "",
        href
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
