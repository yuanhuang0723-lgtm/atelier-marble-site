"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../../../lib/supabase/browser";

type PageRow = { id: string; slug: string; locale: string; title: string; seo_title: string; status: string };
const initialBlocks = JSON.stringify([{ heading: "What buyers should know", body: "Add verified project information here." }], null, 2);

export default function AdminPagesPage() {
  const router = useRouter();
  const [rows, setRows] = useState<PageRow[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ slug: "", locale: "en", title: "", seoTitle: "", seoDescription: "", summary: "", blocks: initialBlocks, status: "draft" });

  useEffect(() => { void loadRows(); }, []);
  async function loadRows() { const result = await getSupabaseBrowserClient().from("site_pages").select("id,slug,locale,title,seo_title,status").order("created_at", { ascending: false }); if (result.error) setMessage(result.error.message); else setRows((result.data || []) as PageRow[]); }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const blocks = JSON.parse(form.blocks); if (!Array.isArray(blocks)) throw new Error("Content modules must be a JSON array.");
      const slug = form.slug.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
      const result = await getSupabaseBrowserClient().from("site_pages").insert({ slug, locale: form.locale, title: form.title, seo_title: form.seoTitle, seo_description: form.seoDescription, summary: form.summary, blocks, status: form.status, published_at: form.status === "published" ? new Date().toISOString() : null });
      if (result.error) throw result.error;
      setMessage("Saved."); setForm({ slug: "", locale: "en", title: "", seoTitle: "", seoDescription: "", summary: "", blocks: initialBlocks, status: "draft" }); await loadRows(); router.refresh();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to save page."); } finally { setBusy(false); }
  }
  async function signOut() { await getSupabaseBrowserClient().auth.signOut(); router.replace("/admin/login"); }
  return <main className="min-h-screen bg-paper px-5 py-12 md:px-12"><div className="mx-auto max-w-6xl"><div className="flex items-end justify-between"><div><p className="eyebrow-luxury">Pages</p><h1 className="mt-3 font-title text-4xl text-ink">Create a structured page</h1></div><button onClick={signOut} className="text-sm text-ink/60 underline">Sign out</button></div><form onSubmit={submit} className="mt-10 grid gap-4 rounded-[14px] border border-ink/10 bg-stone p-7 md:grid-cols-2"><label className="text-sm">URL slug<input required pattern="[a-z0-9-]+" className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} /></label><label className="text-sm">Language<select className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.locale} onChange={(e) => setForm({ ...form, locale: e.target.value })}><option value="en">English</option><option value="zh">中文</option></select></label><label className="text-sm">Page title<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label><label className="text-sm">SEO title<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.seoTitle} onChange={(e) => setForm({ ...form, seoTitle: e.target.value })} /></label><label className="text-sm md:col-span-2">SEO description<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.seoDescription} onChange={(e) => setForm({ ...form, seoDescription: e.target.value })} /></label><label className="text-sm md:col-span-2">Summary<textarea required className="mt-2 min-h-24 w-full rounded border border-ink/15 bg-white p-3" value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} /></label><label className="text-sm md:col-span-2">Text modules (JSON array)<textarea required className="mt-2 min-h-40 w-full rounded border border-ink/15 bg-white p-3 font-mono text-xs" value={form.blocks} onChange={(e) => setForm({ ...form, blocks: e.target.value })} /></label><label className="text-sm">Status<select className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option value="draft">Draft</option><option value="published">Published</option></select></label><div className="flex items-end"><button disabled={busy} className="rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-50">{busy ? "Saving…" : "Save page"}</button></div>{message ? <p className="text-sm text-ink/70 md:col-span-2">{message}</p> : null}</form><section className="mt-12"><h2 className="font-title text-2xl text-ink">Existing pages</h2><div className="mt-4 grid gap-3">{rows.map((row) => <article key={row.id} className="rounded border border-ink/10 bg-white p-4"><p className="text-xs uppercase tracking-[0.12em] text-ink/50">{row.status} · {row.locale} · /pages/{row.slug}</p><h3 className="mt-1 font-medium">{row.title}</h3><p className="mt-1 text-sm text-ink/65">{row.seo_title}</p></article>)}</div></section></div></main>;
}
