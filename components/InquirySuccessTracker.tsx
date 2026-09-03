"use client";

import { useEffect, useRef } from "react";
import { trackConversionEvent } from "../lib/tracking";

export default function InquirySuccessTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) {
      return;
    }

    if (window.sessionStorage.getItem("atelierInquirySubmitted") !== "1") {
      return;
    }

    tracked.current = true;
    window.sessionStorage.removeItem("atelierInquirySubmitted");
    trackConversionEvent("generate_lead", {
      method: "api",
      sourcePage: "/contact",
      page_path: "/contact/thank-you"
    });
  }, []);

  return null;
}
