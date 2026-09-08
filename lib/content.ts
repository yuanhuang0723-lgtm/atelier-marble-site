export type PublishedProjectCase = {
  slug: string;
  title: string;
  projectType: string;
  material: string;
  scope: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isReference: boolean;
};

export async function getPublishedProjectCases(): Promise<PublishedProjectCase[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];
  try {
    const response = await fetch(`${url}/rest/v1/project_cases?select=slug,title,project_type,material,scope,description,image_url,image_alt,is_reference&status=eq.published&order=published_at.desc`, { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 60 } });
    if (!response.ok) return [];
    const rows = await response.json() as Array<{ slug: string; title: string; project_type: string; material: string; scope: string; description: string; image_url: string; image_alt: string; is_reference: boolean }>;
    return rows.map((row) => ({ slug: row.slug, title: row.title, projectType: row.project_type, material: row.material, scope: row.scope, description: row.description, imageUrl: row.image_url, imageAlt: row.image_alt, isReference: row.is_reference }));
  } catch { return []; }
}

export async function getPublishedProjectCase(slug: string) {
  const cases = await getPublishedProjectCases();
  return cases.find((item) => item.slug === slug);
}

export type PublishedSitePage = { slug: string; locale: "en" | "zh"; title: string; seoTitle: string; seoDescription: string; summary: string; blocks: Array<{ heading?: string; body?: string }> };

export async function getPublishedSitePage(slug: string, locale: "en" | "zh" = "en") {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return undefined;
  try {
    const response = await fetch(`${url}/rest/v1/site_pages?select=slug,locale,title,seo_title,seo_description,summary,blocks&slug=eq.${encodeURIComponent(slug)}&locale=eq.${locale}&status=eq.published&limit=1`, { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 60 } });
    if (!response.ok) return undefined;
    const row = (await response.json() as Array<{ slug: string; locale: "en" | "zh"; title: string; seo_title: string; seo_description: string; summary: string; blocks: Array<{ heading?: string; body?: string }> }>)[0];
    return row ? { slug: row.slug, locale: row.locale, title: row.title, seoTitle: row.seo_title, seoDescription: row.seo_description, summary: row.summary, blocks: Array.isArray(row.blocks) ? row.blocks : [] } : undefined;
  } catch { return undefined; }
}

export async function getPublishedSitePageRoutes() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [] as Array<{ slug: string; locale: "en" | "zh" }>;
  try {
    const response = await fetch(`${url}/rest/v1/site_pages?select=slug,locale&status=eq.published`, { headers: { apikey: key, Authorization: `Bearer ${key}` }, next: { revalidate: 60 } });
    if (!response.ok) return [];
    return await response.json() as Array<{ slug: string; locale: "en" | "zh" }>;
  } catch { return []; }
}
