"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../../../lib/supabase/browser";
import { recordContentAudit } from "../../../lib/admin-audit";
import type { FactoryJournalCategory } from "../../../lib/factory-journal";

const categories: FactoryJournalCategory[] = ["Workshop", "Material review", "Fabrication", "Quality review", "Packing"];
type Row = { id: string; title: string; category: FactoryJournalCategory; observed_at: string; summary: string; image_url: string; image_alt: string; status: string };

export default function AdminFactoryPage() {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", category: "Workshop" as FactoryJournalCategory, date: new Date().toISOString().slice(0, 10), summary: "", alt: "", status: "draft" });

  useEffect(() => { void loadRows(); }, []);

  async function loadRows() {
    const client = getSupabaseBrowserClient();
    const { data, error } = await client.from("factory_journal_entries").select("id,title,category,observed_at,summary,image_url,image_alt,status").order("observed_at", { ascending: false });
    if (error) setMessage(error.message); else setRows((data || []) as Row[]);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file && !editingId) return setMessage("Please choose an image.");
    setBusy(true); setMessage("");
    try {
      const client = getSupabaseBrowserClient();
      if (editingId) {
        const update = await client.from("factory_journal_entries").update({ title: form.title, category: form.category, observed_at: form.date, summary: form.summary, image_alt: form.alt, status: form.status, published_at: form.status === "published" ? new Date().toISOString() : null, updated_at: new Date().toISOString() }).eq("id", editingId);
        if (update.error) throw update.error;
        await recordContentAudit(client, "factory_journal_entries", editingId, "update", { status: form.status });
        setMessage("Updated."); setEditingId(null); setForm({ title: "", category: "Workshop", date: new Date().toISOString().slice(0, 10), summary: "", alt: "", status: "draft" }); await loadRows(); return;
      }
      if (!file) throw new Error("Please choose an image.");
      const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
      const path = `${crypto.randomUUID()}-${safeName}`;
      const upload = await client.storage.from("factory-media").upload(path, file, { contentType: file.type, upsert: false });
      if (upload.error) throw upload.error;
      const imageUrl = client.storage.from("factory-media").getPublicUrl(path).data.publicUrl;
      const slug = `${form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${crypto.randomUUID().slice(0, 8)}`;
      const insert = await client.from("factory_journal_entries").insert({ slug, title: form.title, category: form.category, observed_at: form.date, summary: form.summary, image_url: imageUrl, image_alt: form.alt, status: form.status, published_at: form.status === "published" ? new Date().toISOString() : null });
      if (insert.error) throw insert.error;
      await recordContentAudit(client, "factory_journal_entries", undefined, form.status === "published" ? "publish" : "create");
      setMessage("Saved."); setFile(null); setForm({ title: "", category: "Workshop", date: new Date().toISOString().slice(0, 10), summary: "", alt: "", status: "draft" });
      await loadRows(); router.refresh();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to save record."); }
    finally { setBusy(false); }
  }

  async function signOut() { await getSupabaseBrowserClient().auth.signOut(); router.replace("/admin/login"); }

  return (
    <main className="min-h-screen bg-paper px-5 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4"><div><p className="eyebrow-luxury">Factory Journal</p><h1 className="mt-3 font-title text-4xl text-ink">Add a field record</h1></div><button onClick={signOut} className="text-sm text-ink/60 underline">Sign out</button></div>
        <form onSubmit={submit} className="mt-10 grid gap-4 rounded-[14px] border border-ink/10 bg-stone p-7 md:grid-cols-2">
          <label className="text-sm">Title<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label>
          <label className="text-sm">Observed date<input required type="date" className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
          <label className="text-sm">Category<select className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as FactoryJournalCategory })}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
          <label className="text-sm">Status<select className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option value="draft">Draft</option><option value="published">Published</option></select></label>
          <label className="text-sm md:col-span-2">Field note<textarea required minLength={10} className="mt-2 min-h-28 w-full rounded border border-ink/15 bg-white p-3" value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} /></label>
          <label className="text-sm">Image alt text<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} /></label>
          <label className="text-sm">Image<input required={!editingId} accept="image/jpeg,image/png,image/webp" type="file" className="mt-2 block w-full text-sm" onChange={(e) => setFile(e.target.files?.[0] || null)} /></label>
          <div className="md:col-span-2"><button disabled={busy} className="rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-50">{busy ? "Saving…" : editingId ? "Update record" : "Save record"}</button>{editingId ? <button type="button" className="ml-3 text-sm underline" onClick={() => { setEditingId(null); setFile(null); }}>Cancel edit</button> : null}{message ? <p className="mt-4 text-sm text-ink/70">{message}</p> : null}</div>
        </form>
        <section className="mt-12"><h2 className="font-title text-2xl text-ink">Existing records</h2><div className="mt-4 grid gap-3">{rows.map((row) => <article key={row.id} className="flex gap-4 rounded border border-ink/10 bg-white p-4"><img src={row.image_url} alt="" className="h-20 w-24 rounded object-cover" /><div className="min-w-0 flex-1"><p className="text-xs uppercase tracking-[0.12em] text-ink/50">{row.status} · {row.category} · {row.observed_at}</p><h3 className="mt-1 font-medium">{row.title}</h3><p className="mt-1 text-sm text-ink/65">{row.summary}</p></div><button className="shrink-0 text-sm text-ink/60 underline" onClick={() => { setEditingId(row.id); setFile(null); setForm({ title: row.title, category: row.category, date: row.observed_at, summary: row.summary, alt: row.image_alt, status: row.status === "published" ? "published" : "draft" }); }}>Edit</button></article>)}</div></section>
      </div>
    </main>
  );
}
