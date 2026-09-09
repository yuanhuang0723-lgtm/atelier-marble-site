"use client";

import { useEffect, useMemo, useState } from "react";
import { DndContext, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useRouter } from "next/navigation";
import { z } from "zod";
import VisualPageRenderer from "../../../components/VisualPageRenderer";
import { getSupabaseBrowserClient } from "../../../lib/supabase/browser";
import { defaultHomeBlocks, type EditorBlock } from "../../../lib/visual-editor";

const blockPayload = z.array(z.object({ id: z.string(), type: z.string() }).passthrough()).min(1);
const pageOptions = [
  { label: "首页", path: "/", template: "home" as const },
  { label: "工厂日常", path: "/factory", template: "factory" as const },
  { label: "项目参考", path: "/projects", template: "project" as const },
  { label: "关于我们", path: "/about", template: "article" as const },
  { label: "联系页面", path: "/contact", template: "article" as const }
];

function SortableBlock({ block, selected, onSelect }: { block: EditorBlock; selected: boolean; onSelect: () => void }) {
  const item = useSortable({ id: block.id });
  return <button ref={item.setNodeRef} style={{ transform: CSS.Transform.toString(item.transform), transition: item.transition }} {...item.attributes} {...item.listeners} onClick={onSelect} className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left text-sm ${selected ? "border-[#bf6c35] bg-[#fff8f1]" : "border-ink/10 bg-white hover:border-ink/25"} ${block.visible === false ? "opacity-45" : ""}`}><span className="cursor-grab text-ink/35">⋮⋮</span><span className="min-w-0 flex-1 truncate"><span className="block text-[10px] uppercase tracking-[0.14em] text-ink/45">{block.type}</span><span className="block truncate">{"title" in block ? block.title : "内容模块"}</span></span>{block.visible === false ? <span className="text-[10px] text-ink/40">隐藏</span> : null}</button>;
}

function createBlock(type: EditorBlock["type"]): EditorBlock {
  const id = `${type}-${crypto.randomUUID().slice(0, 8)}`;
  if (type === "hero") return { id, type, eyebrow: "New section", title: "Add a headline", body: "Add practical information for buyers.", image: "/materials/hero/atelier-marble-luxury-hero.webp", buttonLabel: "Learn more", buttonHref: "/contact" };
  if (type === "text") return { id, type, eyebrow: "Information", title: "Add a section title", body: "Add verified information here." };
  if (type === "card-grid") return { id, type, eyebrow: "References", title: "Add a card section", columns: 3, cards: [{ id: `${id}-card`, title: "New card", body: "Add a short description.", image: "/assets/home-top-cover.webp", href: "/contact" }] };
  if (type === "process") return { id, type, eyebrow: "Process", title: "Add a process", steps: [{ id: `${id}-step`, title: "Step one", body: "Add a short step description." }] };
  return { id, type: "cta", eyebrow: "Start a conversation", title: "Add a call to action", buttonLabel: "Contact us", buttonHref: "/contact" };
}

export default function VisualEditorPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(pageOptions[0]);
  const [locale, setLocale] = useState<"en" | "zh">("en");
  const [blocks, setBlocks] = useState<EditorBlock[]>(defaultHomeBlocks);
  const [selectedId, setSelectedId] = useState(defaultHomeBlocks[0].id);
  const [revision, setRevision] = useState(1);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [preview, setPreview] = useState(false);
  const [saveState, setSaveState] = useState("准备就绪");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
  const selected = useMemo(() => blocks.find((block) => block.id === selectedId) || blocks[0], [blocks, selectedId]);

  useEffect(() => { const path = new URLSearchParams(window.location.search).get("path"); const found = pageOptions.find((page) => page.path === path); if (found) setCurrentPage(found); }, []);
  useEffect(() => { void ensureAdminAndLoad(); }, [currentPage.path, locale]);
  useEffect(() => { if (loading) return; const timer = window.setTimeout(() => { void saveDraft(); }, 1000); return () => window.clearTimeout(timer); }, [blocks]);

  async function ensureAdminAndLoad() { const client = getSupabaseBrowserClient(); await client.rpc("claim_first_admin"); await loadDocument(client); }
  async function loadDocument(client = getSupabaseBrowserClient()) {
    setLoading(true); setMessage("");
    try {
      const result = await client.from("site_page_documents").select("draft_blocks,revision").eq("path", currentPage.path).eq("locale", locale).maybeSingle();
      if (result.error) throw result.error;
      const next = Array.isArray(result.data?.draft_blocks) ? result.data.draft_blocks as EditorBlock[] : currentPage.path === "/" && locale === "en" ? defaultHomeBlocks : [createBlock("text")];
      setBlocks(next); setSelectedId(next[0]?.id || ""); setRevision(result.data?.revision || 1); setSaveState(result.data ? "已载入草稿" : "新页面草稿");
    } catch (error) { setMessage(error instanceof Error ? error.message : "无法读取草稿；请确认已执行可视化编辑器迁移。"); } finally { setLoading(false); }
  }

  async function saveDraft() {
    if (!blockPayload.safeParse(blocks).success) return setSaveState("内容需要检查");
    setSaveState("保存中…"); const client = getSupabaseBrowserClient(); const result = await client.from("site_page_documents").upsert({ path: currentPage.path, locale, template: currentPage.template, draft_blocks: blocks, revision: revision + 1, updated_at: new Date().toISOString() }, { onConflict: "path,locale" }).select("revision").single();
    if (result.error) setSaveState("保存失败"); else { setRevision(result.data.revision); setSaveState("已保存草稿"); }
  }

  async function publish() { if (!blockPayload.safeParse(blocks).success) return setMessage("请先修正内容结构。"); setSaveState("发布中…"); const result = await getSupabaseBrowserClient().from("site_page_documents").update({ published_blocks: blocks, published_revision: revision, published_at: new Date().toISOString() }).eq("path", currentPage.path).eq("locale", locale); if (result.error) setMessage(result.error.message); else setSaveState("已发布"); }
  function updateSelected(patch: Partial<EditorBlock>) { if (selected) setBlocks((current) => current.map((block) => block.id === selected.id ? { ...block, ...patch } as EditorBlock : block)); }
  function dragEnd(event: DragEndEvent) { if (!event.over || event.active.id === event.over.id) return; setBlocks((current) => arrayMove(current, current.findIndex((block) => block.id === event.active.id), current.findIndex((block) => block.id === event.over?.id))); }
  function moveSelected(delta: number) { if (!selected) return; setBlocks((current) => { const from = current.findIndex((block) => block.id === selected.id); const to = from + delta; return to < 0 || to >= current.length ? current : arrayMove(current, from, to); }); }
  function removeSelected() { if (!selected || selected.type === "hero") return; const next = blocks.filter((block) => block.id !== selected.id); setBlocks(next); setSelectedId(next[0]?.id || ""); }
  async function uploadImage(file: File) { if (!selected || !/^image\/(jpeg|png|webp)$/.test(file.type) || file.size > 10 * 1024 * 1024) return setMessage("图片必须是 JPG、PNG 或 WebP，且不超过 10 MB。"); const client = getSupabaseBrowserClient(); const path = `editor/${crypto.randomUUID()}-${file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-")}`; const result = await client.storage.from("factory-media").upload(path, file, { contentType: file.type }); if (result.error) return setMessage(result.error.message); updateSelected({ image: client.storage.from("factory-media").getPublicUrl(path).data.publicUrl }); }
  function add(type: EditorBlock["type"]) { const block = createBlock(type); setBlocks((current) => [...current, block]); setSelectedId(block.id); }

  return <main className="flex h-screen min-h-[700px] flex-col overflow-hidden bg-[#f3eee6] text-ink"><header className="flex h-16 shrink-0 items-center justify-between border-b border-ink/10 bg-[#fbf8f2] px-4 md:px-6"><div className="flex items-center gap-4"><span className="font-title text-xl">Atelier Marble</span><span className="hidden rounded-full bg-stone px-3 py-1 text-xs text-ink/60 md:inline">可视化编辑器</span><span className="text-xs text-ink/45">/ {currentPage.label}</span></div><div className="flex items-center gap-2"><span className="mr-2 text-xs text-ink/55">{saveState}</span><button onClick={() => setLocale(locale === "en" ? "zh" : "en")} className="rounded-full border border-ink/15 px-3 py-2 text-xs">{locale === "en" ? "中文" : "English"}</button><button onClick={() => setDevice("desktop")} className={`rounded border px-3 py-2 text-xs ${device === "desktop" ? "bg-ink text-white" : "border-ink/15"}`}>电脑</button><button onClick={() => setDevice("mobile")} className={`rounded border px-3 py-2 text-xs ${device === "mobile" ? "bg-ink text-white" : "border-ink/15"}`}>手机</button><button onClick={() => setPreview(!preview)} className="rounded border border-ink/15 px-3 py-2 text-xs">{preview ? "编辑" : "预览"}</button><button onClick={() => void publish()} className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white">发布</button></div></header><div className="flex min-h-0 flex-1"><aside className="hidden w-60 shrink-0 overflow-y-auto border-r border-ink/10 bg-[#f8f4ed] p-4 md:block"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">页面</p><div className="grid gap-1">{pageOptions.map((page) => <button key={page.path} onClick={() => { setCurrentPage(page); router.replace(`/admin/editor?path=${encodeURIComponent(page.path)}`); }} className={`rounded-lg px-3 py-3 text-left text-sm ${page.path === currentPage.path ? "bg-ink text-white" : "hover:bg-white"}`}>{page.label}</button>)}</div><div className="mt-8 border-t border-ink/10 pt-5"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">模块大纲</p><DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={dragEnd}><SortableContext items={blocks.map((block) => block.id)} strategy={verticalListSortingStrategy}><div className="grid gap-2">{blocks.map((block) => <SortableBlock key={block.id} block={block} selected={selected?.id === block.id} onSelect={() => setSelectedId(block.id)} />)}</div></SortableContext></DndContext><select className="mt-4 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-xs" value="" onChange={(e) => e.target.value && add(e.target.value as EditorBlock["type"])}><option value="">＋ 添加模块</option><option value="text">图文介绍</option><option value="card-grid">卡片列表</option><option value="process">工作流程</option><option value="hero">主视觉</option><option value="cta">联系入口</option></select></div></aside><section className="min-w-0 flex-1 overflow-auto p-4 md:p-8"><div className={`mx-auto overflow-hidden rounded-xl border border-ink/10 bg-white shadow-xl ${device === "mobile" ? "max-w-[390px]" : "max-w-[1120px]"}`}><VisualPageRenderer blocks={blocks} selectedId={preview ? undefined : selected?.id} onSelect={preview ? undefined : setSelectedId} preview={preview} /></div></section><aside className="hidden w-80 shrink-0 overflow-y-auto border-l border-ink/10 bg-[#fbf8f2] p-5 lg:block"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">当前选中</p>{selected ? <><h2 className="mt-2 font-title text-2xl">{selected.type}</h2><div className="mt-4 flex flex-wrap gap-2"><button onClick={() => moveSelected(-1)} className="rounded border bg-white px-2 py-1 text-xs">上移</button><button onClick={() => moveSelected(1)} className="rounded border bg-white px-2 py-1 text-xs">下移</button><button onClick={() => updateSelected({ visible: selected.visible === false })} className="rounded border bg-white px-2 py-1 text-xs">{selected.visible === false ? "恢复" : "隐藏"}</button>{selected.type !== "hero" ? <button onClick={removeSelected} className="rounded border border-red-200 bg-white px-2 py-1 text-xs text-red-700">移除</button> : null}</div>{"eyebrow" in selected ? <label className="mt-6 block text-xs text-ink/60">眉题<input className="mt-2 w-full rounded border border-ink/15 bg-white p-3 text-sm" value={selected.eyebrow} onChange={(e) => updateSelected({ eyebrow: e.target.value })} /></label> : null}{"title" in selected ? <label className="mt-4 block text-xs text-ink/60">标题<textarea className="mt-2 min-h-20 w-full rounded border border-ink/15 bg-white p-3 text-sm" value={selected.title} onChange={(e) => updateSelected({ title: e.target.value })} /></label> : null}{"body" in selected ? <label className="mt-4 block text-xs text-ink/60">说明<textarea className="mt-2 min-h-28 w-full rounded border border-ink/15 bg-white p-3 text-sm" value={selected.body} onChange={(e) => updateSelected({ body: e.target.value })} /></label> : null}{selected.type === "hero" || selected.type === "cta" ? <label className="mt-4 block text-xs text-ink/60">按钮文字<input className="mt-2 w-full rounded border border-ink/15 bg-white p-3 text-sm" value={selected.buttonLabel} onChange={(e) => updateSelected({ buttonLabel: e.target.value })} /></label> : null}{"image" in selected ? <label className="mt-4 block text-xs text-ink/60">图片<input accept="image/jpeg,image/png,image/webp" type="file" className="mt-2 block w-full text-xs" onChange={(e) => { const file = e.target.files?.[0]; if (file) void uploadImage(file); }} /><input className="mt-2 w-full rounded border border-ink/15 bg-white p-3 text-sm" value={selected.image} onChange={(e) => updateSelected({ image: e.target.value })} /></label> : null}{selected.type === "card-grid" ? <div className="mt-5 border-t border-ink/10 pt-4"><p className="text-xs text-ink/60">卡片顺序</p>{selected.cards.map((card, index) => <div key={card.id} className="mt-2 flex items-center gap-2 rounded border border-ink/10 bg-white p-2 text-xs"><span className="min-w-0 flex-1 truncate">{card.title}</span><button disabled={index === 0} onClick={() => updateSelected({ cards: arrayMove(selected.cards, index, index - 1) })} className="rounded border px-2 py-1 disabled:opacity-30">↑</button><button disabled={index === selected.cards.length - 1} onClick={() => updateSelected({ cards: arrayMove(selected.cards, index, index + 1) })} className="rounded border px-2 py-1 disabled:opacity-30">↓</button></div>)}</div> : null}</> : <p className="mt-4 text-sm text-ink/55">点击中间页面中的模块开始编辑。</p>}{message ? <p className="mt-6 rounded bg-red-50 p-3 text-xs text-red-700">{message}</p> : null}</aside></div></main>;
}
