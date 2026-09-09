"use client";

import { useEffect } from "react";

export default function RecoveryRedirect() {
  useEffect(() => {
    const current = new URL(window.location.href);
    if (current.hash.includes("type=recovery")) window.location.replace(`/admin/reset-password${current.hash}`);
    else if (current.searchParams.has("code")) window.location.replace(`/auth/callback?code=${encodeURIComponent(current.searchParams.get("code") || "")}&next=/admin/reset-password`);
  }, []);
  return null;
}
