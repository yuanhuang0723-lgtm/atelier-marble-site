"use client";

import { useEffect, useRef } from "react";
import { trackConversionEvent } from "../lib/tracking";

export default function InquirySuccessTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) {
      return;
    }

    tracked.current = true;
    trackConversionEvent("generate_lead", {
      method: "formsubmit",
      sourcePage: "/contact",
      page_path: "/contact/thank-you"
    });
  }, []);

  return null;
}
