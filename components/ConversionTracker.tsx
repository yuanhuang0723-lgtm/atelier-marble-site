"use client";

import { useEffect } from "react";
import { appendLandingPathToContactUrl, getStoredLandingPath, trackConversionEvent } from "../lib/tracking";

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
    if (!sessionStorage.getItem("atelierLandingPage")) {
      sessionStorage.setItem("atelierLandingPage", `${window.location.pathname}${window.location.search}`.slice(0, 500));
    }
    if (!sessionStorage.getItem("atelierReferrerHost") && document.referrer) {
      try {
        const referrer = new URL(document.referrer);
        if (referrer.origin !== window.location.origin) sessionStorage.setItem("atelierReferrerHost", referrer.hostname.slice(0, 255));
      } catch {
        // Ignore malformed referrers; the inquiry remains attributable by landing page.
      }
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

      const attributedHref = appendLandingPathToContactUrl(href, getStoredLandingPath());
      if (attributedHref !== href) link.setAttribute("href", attributedHref);

      const eventName = isWhatsApp ? "whatsapp_inquiry_click" : "email_inquiry_click";
      trackConversionEvent(eventName, {
        page_path: window.location.pathname,
        link_text: link.textContent?.trim() || "",
        link_type: isWhatsApp ? "whatsapp" : "email"
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
