"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSupabaseBrowserClient } from "../../../lib/supabase/browser";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const configurationMissing = searchParams.get("config") === "missing";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const { error: authError } = await getSupabaseBrowserClient().auth.signInWithPassword({ email, password });
      if (authError) throw authError;
      router.replace(searchParams.get("next") || "/admin");
      router.refresh();
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Unable to sign in.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-paper px-5 py-20">
      <form onSubmit={submit} className="mx-auto max-w-md rounded-[14px] border border-ink/10 bg-stone p-8 shadow-sm">
        <p className="eyebrow-luxury">Atelier Marble</p>
        <h1 className="mt-3 font-title text-3xl text-ink">Content management</h1>
        <p className="mt-3 text-sm leading-7 text-ink/65">Sign in to manage factory journal records and images.</p>
        <label className="mt-7 block text-sm text-ink/75">Email<input className="mt-2 w-full rounded border border-ink/15 bg-white p-3" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label>
        <label className="mt-4 block text-sm text-ink/75">Password<input className="mt-2 w-full rounded border border-ink/15 bg-white p-3" type="password" required value={password} onChange={(event) => setPassword(event.target.value)} /></label>
        {configurationMissing ? <p className="mt-4 text-sm text-red-700">后台尚未配置 Supabase。请先设置环境变量并运行项目迁移。</p> : null}
        {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}
        <button className="mt-6 rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-50" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      </form>
    </main>
  );
}

export default function AdminLoginPage() {
  return <Suspense fallback={<main className="min-h-screen bg-paper" />}><AdminLoginForm /></Suspense>;
}
