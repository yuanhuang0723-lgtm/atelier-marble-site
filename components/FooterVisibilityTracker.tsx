"use client";

import { useEffect } from "react";

export default function FooterVisibilityTracker() {
  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer) {
      return;
    }

    const setVisible = (visible: boolean) => {
      document.documentElement.dataset.footerVisible = visible ? "true" : "false";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0, 0.1, 0.25] }
    );

    observer.observe(footer);
    setVisible(false);

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.footerVisible;
    };
  }, []);

  return null;
}
