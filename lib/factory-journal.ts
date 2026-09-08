export type FactoryJournalCategory =
  | "Workshop"
  | "Material review"
  | "Fabrication"
  | "Quality review"
  | "Packing";

export type FactoryJournalEntry = {
  slug: string;
  title: string;
  category: FactoryJournalCategory;
  date: string;
  summary: string;
  image: string;
  alt: string;
};

// These are deliberately written as field notes. Replace or extend them with
// verified dated records once the admin workflow is connected to Supabase.
export const factoryJournalEntries: FactoryJournalEntry[] = [
  {
    slug: "workshop-floor-reference",
    title: "Workshop floor reference",
    category: "Workshop",
    date: "2026-06-01",
    summary: "A general workshop view for buyers reviewing the working environment behind stone fabrication and export preparation.",
    image: "/assets/factory/local/workshop-01.jpg",
    alt: "Stone fabrication workshop floor reference in Yunfu China"
  },
  {
    slug: "material-review-reference",
    title: "Material review reference",
    category: "Material review",
    date: "2026-06-02",
    summary: "Material handling and visual review are considered before dimensions, finish, and fabrication details are confirmed.",
    image: "/assets/factory/local/workshop-02.jpg",
    alt: "Natural stone material review reference in a fabrication workshop"
  },
  {
    slug: "cutting-and-shaping-reference",
    title: "Cutting and shaping reference",
    category: "Fabrication",
    date: "2026-06-03",
    summary: "A fabrication-stage reference showing the type of cutting and shaping work discussed during project planning.",
    image: "/assets/factory/local/workshop-03.jpg",
    alt: "Stone cutting and shaping fabrication reference"
  },
  {
    slug: "surface-finishing-reference",
    title: "Surface finishing reference",
    category: "Fabrication",
    date: "2026-06-04",
    summary: "Surface and edge details are reviewed against the agreed application and project requirements.",
    image: "/assets/factory/local/workshop-04.jpg",
    alt: "Stone surface and edge finishing reference"
  },
  {
    slug: "dimension-review-reference",
    title: "Dimension review reference",
    category: "Quality review",
    date: "2026-06-05",
    summary: "Finished dimensions and visible surface details are checked before pieces move to protective preparation.",
    image: "/assets/factory/local/workshop-05.jpg",
    alt: "Finished stone dimension review reference"
  },
  {
    slug: "protective-packing-reference",
    title: "Protective packing reference",
    category: "Packing",
    date: "2026-06-06",
    summary: "Packing references show how finished stone pieces can be grouped and protected for an agreed delivery plan.",
    image: "/assets/factory/local/workshop-06.jpg",
    alt: "Protective packing preparation reference for finished stone"
  }
];

export function getFactoryJournalEntry(slug: string) {
  return factoryJournalEntries.find((entry) => entry.slug === slug);
}

export async function getPublishedFactoryJournalEntries() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return factoryJournalEntries;

  try {
    const response = await fetch(`${url}/rest/v1/factory_journal_entries?select=slug,title,category,observed_at,summary,image_url,image_alt&status=eq.published&order=observed_at.desc`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      next: { revalidate: 60 }
    });
    if (!response.ok) return factoryJournalEntries;
    const rows = (await response.json()) as Array<{
      slug: string; title: string; category: FactoryJournalCategory; observed_at: string;
      summary: string; image_url: string; image_alt: string;
    }>;
    return rows.length ? rows.map((row) => ({
      slug: row.slug,
      title: row.title,
      category: row.category,
      date: row.observed_at,
      summary: row.summary,
      image: row.image_url,
      alt: row.image_alt
    })) : factoryJournalEntries;
  } catch {
    return factoryJournalEntries;
  }
}
