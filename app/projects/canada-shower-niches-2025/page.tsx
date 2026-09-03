import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Canada Custom Stone Shower Niches Project Reference",
  description: "2025 Canada project reference for several thousand custom stone shower niches with CAD detailing, shop drawings, cut lists, and multi-batch coordination.",
  alternates: { canonical: absoluteUrl("/projects/canada-shower-niches-2025") },
  openGraph: {
    title: "Canada Custom Stone Shower Niches Project Reference",
    description: "2025 Canada project reference for several thousand custom stone shower niches with CAD detailing, shop drawings, cut lists, and multi-batch coordination.",
    url: absoluteUrl("/projects/canada-shower-niches-2025"),
    siteName,
    images: [{ url: absoluteUrl("/assets/factory/factory-hero-workshop.png") }]
  }
};

const facts = [
  ["Project reference", "Canada · 2025"],
  ["Scope", "Several thousand custom stone shower niches"],
  ["Documentation", "CAD detailing, drawing breakdown, shop drawings, and cut lists"],
  ["Production model", "Repeat-unit coordination for a multi-batch fabrication program"]
];

export default function CanadaShowerNichesPage() {
  return <PageShell><main><JsonLd data={[{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") }, { "@type": "ListItem", position: 3, name: "Canada Shower Niches Reference", item: absoluteUrl("/projects/canada-shower-niches-2025") }] }, { "@context": "https://schema.org", "@type": "CreativeWork", name: "Canada Custom Stone Shower Niches Project Reference", description: metadata.description, url: absoluteUrl("/projects/canada-shower-niches-2025"), image: absoluteUrl("/assets/factory/factory-hero-workshop.png") }]} /><PageHero eyebrow="Selected project reference" title="Canada · 2025 custom stone shower niches." description="A catalogue reference for a multi-batch fabrication program involving several thousand custom stone shower niches and drawing-led project coordination." backgroundImage="/assets/factory/factory-hero-workshop.png" /><section className="section-luxury bg-paper"><div className="container-luxury grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div className="space-y-5"><p className="eyebrow-luxury">Reference context</p><h2 className="heading-lg text-left">Repeat-unit coordination for a large project scope.</h2><p className="body-luxury">The catalogue records a Canada 2025 program for several thousand custom stone shower niches. The reference highlights the documentation and coordination required when repeat units move through multiple fabrication batches.</p><p className="body-luxury">It is presented as a project reference. Confirm the current material, dimensions, quantities, finish, delivery term, and production requirements for any new scope.</p><Link className="btn-luxury-fill" href="/contact">Discuss a Similar Project</Link></div><div className="grid gap-4 sm:grid-cols-2">{facts.map(([label, value]) => <article key={label} className="card-luxury bg-stone p-6"><p className="eyebrow-luxury">{label}</p><p className="mt-4 text-[1.05rem] leading-7 text-ink/78">{value}</p></article>)}</div></div></section><section className="section-luxury bg-stone"><div className="container-luxury grid gap-5 md:grid-cols-3"><article className="card-luxury bg-paper p-6"><p className="eyebrow-luxury">01</p><h2 className="mt-3 text-left font-title text-[1.35rem] uppercase tracking-[0.03em] text-ink">CAD detailing</h2><p className="mt-3 text-sm leading-7 text-ink/65">Break the scope into drawing-defined components that can be reviewed before fabrication.</p></article><article className="card-luxury bg-paper p-6"><p className="eyebrow-luxury">02</p><h2 className="mt-3 text-left font-title text-[1.35rem] uppercase tracking-[0.03em] text-ink">Cut lists</h2><p className="mt-3 text-sm leading-7 text-ink/65">Keep repeat-unit quantities and component details visible during quotation and production planning.</p></article><article className="card-luxury bg-paper p-6"><p className="eyebrow-luxury">03</p><h2 className="mt-3 text-left font-title text-[1.35rem] uppercase tracking-[0.03em] text-ink">Batch coordination</h2><p className="mt-3 text-sm leading-7 text-ink/65">Use layout confirmation, production records, and packing discussion to keep multi-batch work aligned.</p></article></div></section></main></PageShell>;
}
