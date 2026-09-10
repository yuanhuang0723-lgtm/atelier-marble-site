import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { absoluteUrl } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Architectural Stone Supplier in China",
  description:
    "Architectural stone supply and fabrication for hotel and commercial interiors, with material review, project coordination, and export support from China.",
  alternates: { canonical: absoluteUrl("/architectural-stone") }
};

const applications = [
  ["Hotel & Commercial", "/projects/commercial-stone", "/materials/categories/hotel-projects.webp", "Architectural stone surfaces for hotel lobbies, reception areas, retail, and public interiors.", "Hotel and commercial interior stone reference"],
  ["Countertops & Vanity", "/countertops", "/materials/featured-covers/kitchen-countertop.webp", "Countertops, vanity tops, integrated basins, and cut-to-size stone packages.", "Natural stone countertop and vanity application reference"],
  ["Interior & Feature Stone", "/projects/commercial-stone", "/assets/stone-table-coffee/hero-local-cover.png", "Wall, floor, furniture, and feature-surface references for considered interiors.", "Architectural stone interior surface reference"],
  ["Wall Cladding", "/architectural-stone/wall-cladding", "/materials/categories/hotel-projects.webp", "Panelized stone surfaces for hotel lobbies, commercial interiors, and feature walls.", "Architectural stone wall cladding reference for hotel and commercial interiors"],
  ["Architectural Flooring", "/architectural-stone/flooring", "/materials/categories/hotel-projects.webp", "Stone flooring references for hotel, commercial, and public interior applications.", "Architectural stone flooring reference for hotel and commercial interiors"],
  ["Custom Stone", "/custom-stone-fabrication-china", "/materials/featured-covers/carving-decor.webp", "Sculptural forms, furniture, and architectural accents developed from a clear design direction.", "Custom carved stone form for an architectural interior"]
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Architectural Stone", item: absoluteUrl("/architectural-stone") }
  ]
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Architectural Stone Supplier in China",
  url: absoluteUrl("/architectural-stone"),
  description: metadata.description,
  hasPart: applications.map(([name, href]) => ({ "@type": "WebPage", name, url: absoluteUrl(href) }))
};

const faqs = [
  {
    question: "What architectural stone applications can be reviewed?",
    answer: "Architectural stone scopes can include hotel and commercial wall cladding, flooring, countertops, vanity packages, feature surfaces, and custom interior elements."
  },
  {
    question: "Can architectural stone projects start from drawings or a BOQ?",
    answer: "Yes. Drawings, BOQ files, dimensions, quantities, material direction, and destination information provide a practical starting point for fabrication and quotation review."
  },
  {
    question: "What should be confirmed before architectural stone fabrication?",
    answer: "Confirm the application, material, thickness, finish, module or panel dimensions, edge details, quantities, quality checkpoints, and export packing requirements before production."
  }
];

export default function ArchitecturalStonePage() {
  return (
    <PageShell>
      <main>
        <JsonLd data={[breadcrumbJsonLd, collectionJsonLd, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }]} />
        <PageHero
          eyebrow="Architectural stone"
          title="Architectural stone supply for hotel and commercial interiors."
          description="For buyers comparing architectural stone suppliers, review applications by project use, then send your drawings, BOQ, dimensions, or reference images for a practical fabrication and quotation review."
          backgroundImage="/materials/categories/hotel-projects.webp"
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="grid gap-5 md:grid-cols-2">
              {applications.map(([title, href, image, copy, alt]) => (
                <Link key={title} href={href} className="group overflow-hidden rounded-[14px] border border-ink/10 bg-stone p-3">
                  <img className="aspect-[16/9] w-full rounded-[10px] object-cover transition duration-500 group-hover:scale-[1.02]" src={image} alt={alt} loading="lazy" />
                  <div className="flex items-start justify-between gap-5 px-3 py-5">
                    <div>
                      <p className="eyebrow-luxury">Application</p>
                      <h2 className="mt-2 text-left font-title text-[1.55rem] font-medium uppercase leading-tight tracking-[0.03em] text-ink">{title}</h2>
                      <p className="mt-3 max-w-[42ch] text-sm leading-7 text-ink/65">{copy}</p>
                    </div>
                    <span aria-hidden="true" className="pt-1 text-lg text-ink/55">-&gt;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Buyer questions</p>
              <h2 className="heading-lg section-intro__title">Architectural stone project details, answered clearly.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="card-luxury px-6 py-6">
                  <h3 className="font-title text-[1.05rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">{faq.question}</h3>
                  <p className="mt-4 text-[0.94rem] leading-7 text-ink/68">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-luxury-compact bg-stone text-center">
          <p className="eyebrow-luxury">Project review</p>
          <h2 className="heading-lg mx-auto mt-4 max-w-3xl">Have a scope to coordinate?</h2>
          <p className="body-luxury mx-auto mt-4 max-w-2xl">Share what you already have. We can begin with the application, approximate quantity, material direction, and destination.</p>
          <Link className="btn-luxury-fill mt-7" href="/contact">Upload CAD / BOQ for Quote</Link>
        </section>
      </main>
    </PageShell>
  );
}
