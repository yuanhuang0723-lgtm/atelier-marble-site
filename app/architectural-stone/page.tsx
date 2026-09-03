import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { absoluteUrl } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Architectural Stone Applications",
  description: "Architectural stone applications for hotel, commercial, residential, and design-led interiors, supported by fabrication and export project coordination.",
  alternates: { canonical: absoluteUrl("/architectural-stone") }
};

const applications = [
  ["Hotel & Commercial", "/projects/commercial-stone", "/materials/categories/hotel-projects.png", "Architectural stone surfaces for hotel lobbies, reception areas, retail, and public interiors.", "Hotel and commercial interior stone reference"],
  ["Countertops & Vanity", "/countertops", "/materials/featured-covers/kitchen-countertop.png", "Countertops, vanity tops, integrated basins, and cut-to-size stone packages.", "Natural stone countertop and vanity application reference"],
  ["Interior Surfaces", "/architectural-stone-interiors", "/assets/stone-table-coffee/hero-local-cover.png", "Wall, floor, furniture, and feature-surface references for considered interiors.", "Architectural stone interior surface reference"],
  ["Custom Stone", "/custom-stone-fabrication-china", "/materials/featured-covers/carving-decor.png", "Sculptural forms, furniture, and architectural accents developed from a clear design direction.", "Custom carved stone form for an architectural interior"]
];

export default function ArchitecturalStonePage() {
  return <PageShell><main><JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: metadata.title, url: absoluteUrl("/architectural-stone"), description: metadata.description, hasPart: applications.map(([name, href]) => ({ "@type": "WebPage", name, url: absoluteUrl(href) })) }} /><PageHero eyebrow="Architectural stone" title="Stone applications organized around the space you are sourcing." description="Explore architectural stone by project use, then send your drawings, BOQ, dimensions, or reference images for a practical fabrication and quotation review." backgroundImage="/materials/categories/hotel-projects.png" /><section className="section-luxury bg-paper"><div className="container-luxury"><div className="grid gap-5 md:grid-cols-2">{applications.map(([title, href, image, copy, alt]) => <Link key={href} href={href} className="group overflow-hidden rounded-[14px] border border-ink/10 bg-stone p-3"><img className="aspect-[16/9] w-full rounded-[10px] object-cover transition duration-500 group-hover:scale-[1.02]" src={image} alt={alt} loading="lazy" /><div className="flex items-start justify-between gap-5 px-3 py-5"><div><p className="eyebrow-luxury">Application</p><h2 className="mt-2 text-left font-title text-[1.55rem] font-medium uppercase leading-tight tracking-[0.03em] text-ink">{title}</h2><p className="mt-3 max-w-[42ch] text-sm leading-7 text-ink/65">{copy}</p></div><span aria-hidden="true" className="pt-1 text-lg text-ink/55">-&gt;</span></div></Link>)}</div></div></section><section className="section-luxury-compact bg-stone text-center"><p className="eyebrow-luxury">Project review</p><h2 className="heading-lg mx-auto mt-4 max-w-3xl">Have a scope to coordinate?</h2><p className="body-luxury mx-auto mt-4 max-w-2xl">Share what you already have. We can begin with the application, approximate quantity, material direction, and destination.</p><Link className="btn-luxury-fill mt-7" href="/contact">Upload CAD / BOQ for Quote</Link></section></main></PageShell>;
}
