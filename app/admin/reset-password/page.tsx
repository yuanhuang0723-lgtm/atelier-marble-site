"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../../../lib/supabase/browser";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void getSupabaseBrowserClient().auth.getSession().then(({ data }) => {
      if (!data.session) setMessage("This reset link is missing or has expired. Request a new one from Supabase.");
    }).catch(() => setMessage("Unable to validate this reset link."));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.length < 8) return setMessage("Password must be at least 8 characters.");
    if (password !== confirm) return setMessage("Passwords do not match.");
    setBusy(true); setMessage("");
    const { error } = await getSupabaseBrowserClient().auth.updateUser({ password });
    if (error) setMessage(error.message); else { setMessage("Password updated. Redirecting…"); setTimeout(() => router.replace("/admin"), 700); }
    setBusy(false);
  }

  return <main className="min-h-screen bg-paper px-5 py-20"><form onSubmit={submit} className="mx-auto max-w-md rounded-[14px] border border-ink/10 bg-stone p-8"><p className="eyebrow-luxury">Atelier Marble</p><h1 className="mt-3 font-title text-3xl text-ink">Set a new password</h1><label className="mt-7 block text-sm">New password<input required minLength={8} type="password" className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={password} onChange={(e) => setPassword(e.target.value)} /></label><label className="mt-4 block text-sm">Confirm password<input required minLength={8} type="password" className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={confirm} onChange={(e) => setConfirm(e.target.value)} /></label>{message ? <p className="mt-4 text-sm text-ink/70">{message}</p> : null}<button disabled={busy} className="mt-6 rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-50">{busy ? "Updating…" : "Update password"}</button></form></main>;
}
