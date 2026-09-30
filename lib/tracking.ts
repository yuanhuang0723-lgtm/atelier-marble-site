export type ConversionEventPayload = {
  page_path?: string;
  link_text?: string;
  link_type?: "whatsapp" | "email" | "other";
  method?: string;
  sourcePage?: string;
  projectType?: string;
  hasContact?: boolean;
  hasMessage?: boolean;
  hasBudget?: boolean;
  hasTimeline?: boolean;
  hasDrawings?: boolean;
  hasFiles?: boolean;
  fileCount?: number;
  country?: string;
  hasCompany?: boolean;
  hasDestination?: boolean;
  hasQuantity?: boolean;
  landingPage?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const adsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

export function readStoredCampaign() {
  try {
    const stored = window.sessionStorage.getItem("atelierCampaign");
    const parsed = stored ? JSON.parse(stored) : {};
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const campaign: Record<string, string> = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (/^(utm_source|utm_medium|utm_campaign|utm_term|utm_content|gclid)$/.test(key) && typeof value === "string") campaign[key] = value.slice(0, 300);
    }
    return campaign;
  } catch {
    return {};
  }
}

export function getStoredLandingPage() {
  try {
    const stored = window.sessionStorage.getItem("atelierLandingPage");
    return stored || window.location.pathname;
  } catch {
    return window.location.pathname;
  }
}

export function getStoredLandingPath() {
  const fallbackPath = window.location.pathname || "/";
  const landingPage = getStoredLandingPage();
  if (!landingPage.startsWith("/") || landingPage.startsWith("//")) return fallbackPath;

  try {
    const parsed = new URL(landingPage, window.location.origin);
    return parsed.origin === window.location.origin ? parsed.pathname.slice(0, 500) || "/" : fallbackPath;
  } catch {
    return fallbackPath;
  }
}

export function getStoredReferrerHost() {
  try {
    const host = window.sessionStorage.getItem("atelierReferrerHost") || "";
    return /^[a-z0-9.-]+$/i.test(host) ? host.slice(0, 255) : "";
  } catch {
    return "";
  }
}

export function appendLandingPathToContactUrl(href: string, landingPath: string) {
  if (!landingPath.startsWith("/") || landingPath.startsWith("//") || /[?#\s\\]/.test(landingPath)) return href;

  try {
    const url = new URL(href);
    const parameter = url.protocol === "mailto:"
      ? "body"
      : url.protocol === "https:" && (url.hostname === "wa.me" || url.hostname === "whatsapp.com" || url.hostname.endsWith(".whatsapp.com"))
        ? "text"
        : null;
    if (!parameter) return href;

    const message = url.searchParams.get(parameter) || "";
    const attributionLine = `Website page: ${landingPath}`;
    if (message.split(/\r?\n/).some((line) => line.trim() === attributionLine)) return href;
    url.searchParams.set(parameter, [message.trimEnd(), attributionLine].filter(Boolean).join("\n"));
    return url.toString();
  } catch {
    return href;
  }
}

export function trackPageviewEvent(payload: { page_path?: string; page_title?: string; referrer?: string }) {
  const pageViewPayload = {
    page_location: window.location.href,
    page_path: payload.page_path || window.location.pathname + window.location.search,
    page_title: payload.page_title || document.title,
    page_referrer: payload.referrer || document.referrer || undefined
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "page_view", ...pageViewPayload });
  window.gtag?.("event", "page_view", pageViewPayload);
}

export function trackConversionEvent(eventName: string, payload: ConversionEventPayload = {}) {
  const enrichedPayload = {
    ...readStoredCampaign(),
    ...payload,
    landingPage: payload.landingPage || getStoredLandingPage()
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...enrichedPayload });
  window.gtag?.("event", eventName, enrichedPayload);

  if (eventName === "generate_lead" && adsId && adsConversionLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${adsId}/${adsConversionLabel}`,
      event_category: "inquiry",
      event_label: eventName,
      value: 1,
      currency: "USD",
      ...enrichedPayload
    });
  }
}
