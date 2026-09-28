"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageviewEvent } from "../lib/tracking";

export default function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    trackPageviewEvent({
      page_path: pagePath,
      page_title: document.title,
      referrer: document.referrer || undefined
    });
  }, [pathname, searchParams]);

  return null;
}
