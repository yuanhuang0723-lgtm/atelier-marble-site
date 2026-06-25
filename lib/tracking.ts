export type ConversionEventPayload = {
  page_path?: string;
  link_text?: string;
  href?: string;
  method?: string;
  sourcePage?: string;
  projectType?: string;
  hasContact?: boolean;
  hasMessage?: boolean;
  hasBudget?: boolean;
  hasTimeline?: boolean;
  hasDrawings?: boolean;
};

export type VisitorEventPayload = {
  eventType: "pageview" | "conversion";
  page_path?: string;
  page_title?: string;
  referrer?: string;
  visitor_id?: string;
  session_id?: string;
  viewport_width?: number;
  viewport_height?: number;
  language?: string;
  user_agent?: string;
  event_name?: string;
  link_text?: string;
  href?: string;
  method?: string;
  sourcePage?: string;
  projectType?: string;
  hasContact?: boolean;
  hasMessage?: boolean;
  hasBudget?: boolean;
  hasTimeline?: boolean;
  hasDrawings?: boolean;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const adsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
const VISITOR_EVENTS_ENDPOINT = "/api/visitor-events";

export function readStoredCampaign() {
  try {
    const stored = window.sessionStorage.getItem("atelierCampaign");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function getOrCreateVisitorId(storageKey: string) {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      return stored;
    }

    const created = window.crypto?.randomUUID?.() || `visitor-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    window.localStorage.setItem(storageKey, created);
    return created;
  } catch {
    return `visitor-${Date.now()}`;
  }
}

export function getOrCreateSessionId(storageKey: string) {
  try {
    const stored = window.sessionStorage.getItem(storageKey);
    if (stored) {
      return stored;
    }

    const created = window.crypto?.randomUUID?.() || `session-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    window.sessionStorage.setItem(storageKey, created);
    return created;
  } catch {
    return `session-${Date.now()}`;
  }
}

function postVisitorEvent(payload: VisitorEventPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    const sent = navigator.sendBeacon(VISITOR_EVENTS_ENDPOINT, new Blob([body], { type: "application/json" }));
    if (sent) {
      return;
    }
  }

  fetch(VISITOR_EVENTS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body,
    keepalive: true
  }).catch(() => {});
}

export function trackPageviewEvent(payload: Omit<VisitorEventPayload, "eventType">) {
  const pageViewPayload = {
    page_location: window.location.href,
    page_path: payload.page_path || window.location.pathname + window.location.search,
    page_title: payload.page_title || document.title,
    page_referrer: payload.referrer || document.referrer || undefined
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "page_view", ...pageViewPayload });
  window.gtag?.("event", "page_view", pageViewPayload);

  postVisitorEvent({
    eventType: "pageview",
    ...payload
  });
}

export function trackConversionEvent(eventName: string, payload: ConversionEventPayload = {}) {
  const enrichedPayload = {
    ...readStoredCampaign(),
    ...payload
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...enrichedPayload });
  window.gtag?.("event", eventName, enrichedPayload);
  postVisitorEvent({
    eventType: "conversion",
    event_name: eventName,
    ...enrichedPayload
  });

  if (adsId && adsConversionLabel) {
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
