"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getOrCreateSessionId, getOrCreateVisitorId, trackPageviewEvent } from "../lib/tracking";

const VISITOR_ID_KEY = "atelierVisitorId";
const SESSION_ID_KEY = "atelierSessionId";

export default function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;
    const visitorId = getOrCreateVisitorId(VISITOR_ID_KEY);
    const sessionId = getOrCreateSessionId(SESSION_ID_KEY);

    trackPageviewEvent({
      page_path: pagePath,
      page_title: document.title,
      referrer: document.referrer || undefined,
      visitor_id: visitorId,
      session_id: sessionId,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      language: navigator.language,
      user_agent: navigator.userAgent
    });
  }, [pathname, searchParams]);

  return null;
}
