"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../../../lib/supabase/browser";

type CaseRow = { id: string; title: string; project_type: string; material: string; scope: string; description: string; image_url: string; image_alt: string; is_reference: boolean; status: string };

export default function AdminCasesPage() {
  const router = useRouter();
  const [rows, setRows] = useState<CaseRow[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", projectType: "Hotel project", material: "", scope: "", description: "", alt: "", status: "draft", reference: true });

  useEffect(() => { void loadRows(); }, []);
  async function loadRows() { const { data, error } = await getSupabaseBrowserClient().from("project_cases").select("id,title,project_type,material,scope,description,image_url,image_alt,is_reference,status").order("created_at", { ascending: false }); if (error) setMessage(error.message); else setRows((data || []) as CaseRow[]); }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!file && !editingId) return setMessage("Please choose an image."); setBusy(true); setMessage("");
    try {
      const client = getSupabaseBrowserClient();
      if (editingId) {
        const result = await client.from("project_cases").update({ title: form.title, project_type: form.projectType, material: form.material, scope: form.scope, description: form.description, image_alt: form.alt, is_reference: form.reference, status: form.status, published_at: form.status === "published" ? new Date().toISOString() : null, updated_at: new Date().toISOString() }).eq("id", editingId);
        if (result.error) throw result.error; setMessage("Updated."); setEditingId(null); setForm({ title: "", projectType: "Hotel project", material: "", scope: "", description: "", alt: "", status: "draft", reference: true }); await loadRows(); return;
      }
      if (!file) throw new Error("Please choose an image.");
      if (!/^image\/(jpeg|png|webp)$/.test(file.type) || file.size > 10 * 1024 * 1024) throw new Error("Use a JPG, PNG, or WebP image smaller than 10 MB.");
      const path = `cases/${crypto.randomUUID()}-${file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-")}`;
      const upload = await client.storage.from("factory-media").upload(path, file, { contentType: file.type }); if (upload.error) throw upload.error;
      const imageUrl = client.storage.from("factory-media").getPublicUrl(path).data.publicUrl;
      const slug = `${form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${crypto.randomUUID().slice(0, 8)}`;
      const result = await client.from("project_cases").insert({ slug, title: form.title, project_type: form.projectType, material: form.material, scope: form.scope, description: form.description, image_url: imageUrl, image_alt: form.alt, is_reference: form.reference, status: form.status, published_at: form.status === "published" ? new Date().toISOString() : null });
      if (result.error) throw result.error; setMessage("Saved."); setFile(null); setForm({ title: "", projectType: "Hotel project", material: "", scope: "", description: "", alt: "", status: "draft", reference: true }); await loadRows(); router.refresh();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to save case."); } finally { setBusy(false); }
  }
  async function archive(id: string) { const result = await getSupabaseBrowserClient().from("project_cases").update({ status: "archived", updated_at: new Date().toISOString() }).eq("id", id); if (result.error) setMessage(result.error.message); else await loadRows(); }
  async function signOut() { await getSupabaseBrowserClient().auth.signOut(); router.replace("/admin/login"); }

  return <main className="min-h-screen bg-paper px-5 py-12 md:px-12"><div className="mx-auto max-w-6xl"><div className="flex items-end justify-between"><div><p className="eyebrow-luxury">Project References</p><h1 className="mt-3 font-title text-4xl text-ink">Add a verified reference</h1></div><button onClick={signOut} className="text-sm text-ink/60 underline">Sign out</button></div><form onSubmit={submit} className="mt-10 grid gap-4 rounded-[14px] border border-ink/10 bg-stone p-7 md:grid-cols-2"><label className="text-sm">Title<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label><label className="text-sm">Project type<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} /></label><label className="text-sm">Material<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} /></label><label className="text-sm">Image alt text<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} /></label><label className="text-sm md:col-span-2">Scope<input required className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.scope} onChange={(e) => setForm({ ...form, scope: e.target.value })} /></label><label className="text-sm md:col-span-2">Description<textarea required minLength={10} className="mt-2 min-h-24 w-full rounded border border-ink/15 bg-white p-3" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></label><label className="text-sm">Status<select className="mt-2 w-full rounded border border-ink/15 bg-white p-3" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option value="draft">Draft</option><option value="published">Published</option></select></label><label className="text-sm">Image<input required={!editingId} accept="image/jpeg,image/png,image/webp" type="file" className="mt-2 block w-full text-sm" onChange={(e) => setFile(e.target.files?.[0] || null)} /></label><label className="flex items-center gap-2 text-sm md:col-span-2"><input type="checkbox" checked={form.reference} onChange={(e) => setForm({ ...form, reference: e.target.checked })} /> Mark as project reference unless independently verified as a completed customer case.</label><div className="md:col-span-2"><button disabled={busy} className="rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-50">{busy ? "Saving…" : editingId ? "Update reference" : "Save reference"}</button>{editingId ? <button type="button" className="ml-3 text-sm underline" onClick={() => setEditingId(null)}>Cancel edit</button> : null}{message ? <p className="mt-4 text-sm text-ink/70">{message}</p> : null}</div></form><section className="mt-12"><h2 className="font-title text-2xl text-ink">Existing records</h2><div className="mt-4 grid gap-3">{rows.map((row) => <article key={row.id} className="flex items-center justify-between gap-4 rounded border border-ink/10 bg-white p-4"><div><p className="text-xs uppercase tracking-[0.12em] text-ink/50">{row.status} · {row.project_type} · {row.is_reference ? "reference" : "case"}</p><h3 className="mt-1 font-medium">{row.title}</h3><p className="mt-1 text-sm text-ink/65">{row.material} · {row.scope}</p></div><div className="flex shrink-0 gap-3">{row.status !== "archived" ? <button onClick={() => { setEditingId(row.id); setFile(null); setForm({ title: row.title, projectType: row.project_type, material: row.material, scope: row.scope, description: row.description, alt: row.image_alt, status: row.status === "published" ? "published" : "draft", reference: row.is_reference }); }} className="text-sm text-ink/60 underline">Edit</button> : null}{row.status !== "archived" ? <button onClick={() => archive(row.id)} className="text-sm text-ink/60 underline">Archive</button> : null}</div></article>)}</div></section></div></main>;
}
