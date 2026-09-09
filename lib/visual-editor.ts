export type EditorBlock =
  | { id: string; type: "hero"; eyebrow: string; title: string; body: string; image: string; buttonLabel: string; buttonHref: string }
  | { id: string; type: "text"; eyebrow: string; title: string; body: string }
  | { id: string; type: "card-grid"; eyebrow: string; title: string; columns: 2 | 3 | 4; cards: Array<{ id: string; title: string; body: string; image: string; href: string }> }
  | { id: string; type: "process"; eyebrow: string; title: string; steps: Array<{ id: string; title: string; body: string }> }
  | { id: string; type: "cta"; eyebrow: string; title: string; buttonLabel: string; buttonHref: string };

export type EditorDocument = { path: string; locale: "en" | "zh"; template: "home" | "factory" | "project" | "article"; blocks: EditorBlock[]; revision: number; publishedRevision?: number | null };

export const defaultHomeBlocks: EditorBlock[] = [
  { id: "hero-1", type: "hero", eyebrow: "Atelier Marble", title: "Custom Stone Fabrication & Project Supply from Yunfu, China", body: "A clear route for hotel contractors, architects, developers, and importers to review material, fabrication, and export requirements.", image: "/materials/hero/atelier-marble-luxury-hero.webp", buttonLabel: "Upload CAD / BOQ for Quote", buttonHref: "/contact" },
  { id: "cards-1", type: "card-grid", eyebrow: "Buyer intent categories", title: "Is this suitable for your project?", columns: 3, cards: [
    { id: "card-1", title: "Stone Countertop & Coffee Table", body: "Premium stone references for residential and hospitality sourcing.", image: "/assets/home-top-cover.webp", href: "/countertops" },
    { id: "card-2", title: "Cabinet Panels + Vanity Tops", body: "Finished stone details for kitchens and bathrooms.", image: "/assets/vanity-cabinet/cover.webp", href: "/countertops/vanity-tops" },
    { id: "card-3", title: "Custom Stone Sculptures", body: "Carved stone references for design-led interiors.", image: "/assets/carving-decor/cover.webp", href: "/custom-stone-fabrication-china" }
  ] },
  { id: "process-1", type: "process", eyebrow: "How we work", title: "Material, fabrication, quality, and export stay connected.", steps: [
    { id: "step-1", title: "Review", body: "CAD, BOQ, dimensions, quantity, and destination." },
    { id: "step-2", title: "Match", body: "Material direction, tone, finish, and application." },
    { id: "step-3", title: "Plan", body: "Fabrication details, edges, cut-outs, and scope." },
    { id: "step-4", title: "Inspect", body: "Dimensions, surface details, and finished work." },
    { id: "step-5", title: "Prepare", body: "Protective packing and delivery coordination." }
  ] },
  { id: "cta-1", type: "cta", eyebrow: "Start a conversation", title: "Share drawings, dimensions, budget, timing, or material direction.", buttonLabel: "Request Project Pricing", buttonHref: "/contact" }
];

export function normalizeEditorBlocks(value: unknown): EditorBlock[] {
  if (!Array.isArray(value)) return [];
  return value.filter((block): block is EditorBlock => Boolean(block && typeof block === "object" && typeof (block as { id?: unknown }).id === "string" && typeof (block as { type?: unknown }).type === "string"));
}

export async function getPublishedVisualDocument(path: string, locale: "en" | "zh" = "en") {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return undefined;
  try {
    const response = await fetch(`${url}/rest/v1/site_page_documents?select=path,locale,template,published_blocks,published_revision&path=eq.${encodeURIComponent(path)}&locale=eq.${locale}&published_blocks=not.is.null&limit=1`, { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 30 } });
    if (!response.ok) return undefined;
    const row = (await response.json() as Array<{ path: string; locale: "en" | "zh"; template: EditorDocument["template"]; published_blocks: unknown; published_revision: number }>)[0];
    if (!row) return undefined;
    return { path: row.path, locale: row.locale, template: row.template, blocks: normalizeEditorBlocks(row.published_blocks), revision: row.published_revision || 1 } satisfies EditorDocument;
  } catch { return undefined; }
}
