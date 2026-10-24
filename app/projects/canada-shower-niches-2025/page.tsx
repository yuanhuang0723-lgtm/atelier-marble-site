import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import ProjectProcurementInfo from "../../../components/ProjectProcurementInfo";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Custom Stone Shower Niches in Canada",
  description: "See a Canada project reference for custom stone shower niches, with CAD detailing, shop drawings, cut lists, and multi-batch coordination across the program.",
  alternates: { canonical: absoluteUrl("/projects/canada-shower-niches-2025") },
  openGraph: {
    title: "Custom Stone Shower Niches Project in Canada",
    description: "2025 Canada project reference for several thousand custom stone shower niches with CAD detailing, shop drawings, cut lists, and multi-batch coordination.",
    url: absoluteUrl("/projects/canada-shower-niches-2025"),
    siteName,
  }
};

const facts = [
  ["Project reference", "Canada · 2025"],
  ["Scope", "Several thousand custom stone shower niches"],
  ["Documentation", "CAD detailing, drawing breakdown, shop drawings, and cut lists"],
  ["Production model", "Repeat-unit coordination for a multi-batch fabrication program"]
];

const nicheScopeRows = [
  {
    component: "Finished internal opening vs rough wall recess",
    inputs: "Inside width, height, and depth of the finished stone niche, plus the framed and waterproofed wall opening dimensions supplied by the site team."
  },
  {
    component: "Bottom sill slope and water-shedding detail",
    inputs: "Sill projection, front overhang, and drainage pitch direction confirmed on the project section drawing so water drains toward the shower area."
  },
  {
    component: "Corner joints, returns, and intermediate shelves",
    inputs: "Mitered or butt-joint construction, exposed edge finish, shelf thickness, shelf height positions, and surround flange width where applicable."
  },
  {
    component: "Multi-batch room schedules and crate labels",
    inputs: "Unit type codes, quantity per building floor or phase, spare-part allowance, and crate markings matched to the receiving sequence."
  }
];

const nichePlanningSections = [
  {
    heading: "Separate rough framing openings from finished stone niche dimensions",
    summary: "Clarify inner clear dimensions, stone thickness, and waterproof substrate build-up on shop drawings.",
    paragraphs: [
      "A recessed stone shower niche consists of a back panel, top and bottom horizontals, two vertical jambs, and optional intermediate shelves or perimeter trim returns. When preparing a multi-unit quotation, the drawing must distinguish the finished interior clear opening from the outer assembly footprint and the rough framed recess prepared on site.",
      "Because waterproofing membranes, backer boards, and setting mortar occupy space inside the wall cavity, the project architect and site installer should confirm the required clearance around the stone assembly before final shop drawings and cut lists are locked."
    ]
  },
  {
    heading: "Define sill drainage pitch, corner joints, and exposed edges",
    summary: "Show how horizontal pieces shed water and how perimeter edges meet surrounding wall tile or slab panels.",
    paragraphs: [
      "Horizontal bottom sills and intermediate shelves in wet zones require a consistent forward pitch defined by the design team so standing water does not collect in corners. Section details should state whether the bottom sill sits flush with the wall plane, projects slightly with a drip edge, or connects to a mitered surround frame.",
      "Specify whether corner intersections use mitered edges or rabbeted/butt joints, which faces are honed or polished, and how the outer perimeter interfaces with adjacent bathroom wall cladding. Keeping every piece mark linked to a clear section view reduces ambiguity when thousands of sub-components are cut across multiple production batches."
    ]
  },
  {
    heading: "Standardize cut lists and piece marks across repeat batches",
    summary: "Group identical unit types, mirrored layouts, and phased crate deliveries under one revision log.",
    paragraphs: [
      "Large residential, apartment, or hospitality programs often repeat a small number of standard shower niche sizes across hundreds or thousands of bathrooms. Grouping components by unit type code and assigning fixed part marks to each top, bottom, side, back, and shelf piece makes both cutting schedules and pre-packing checks traceable.",
      "When a project releases fabrication in phases, link each batch to the approved drawing revision and material lot decision. Labeling crates by building zone, floor, and unit type helps receiving crews distribute kits on site without opening and sorting mixed pallets."
    ]
  }
];

const nicheFaqs = [
  {
    question: "What drawings or dimensions are needed to quote custom stone shower niches?",
    answer: "Share the plan, elevation, and section views showing finished inner dimensions, stone thickness, sill pitch, joint style, material preference, unit quantities by type, and the delivery destination. Rough dimensions can start an initial review."
  },
  {
    question: "Are custom shower niches shipped as loose cut-to-size panels or pre-assembled units?",
    answer: "That depends on the project specification, stone selection, handling risk, and site installation method. Confirm in the quotation whether the order requires labeled cut-to-size component kits or pre-fitted assemblies, along with crate grouping by floor or phase."
  },
  {
    question: "Does this Canada 2025 reference establish fixed lead times or tolerances for new orders?",
    answer: "No. It is a catalogue reference illustrating CAD breakdown, cut-list organization, and multi-batch coordination. Material lot, tolerances, inspection checkpoints, packing details, and delivery schedules are confirmed individually for each new project quotation."
  }
];

const canadaShowerNichesHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Multi-Batch Custom Stone Shower Niche Fabrication Protocol",
  description: "A 3-stage repeat-unit commercial fabrication protocol for high-volume custom stone shower niches, detailing CAD component breakdown, cut lists, and multi-batch quality control.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "CAD Detailing & Component Breakdown",
      text: "Break the scope into drawing-defined components that can be reviewed before fabrication."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Cut Lists & Repeat-Unit Standardization",
      text: "Keep repeat-unit quantities and component details visible during quotation and production planning."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Batch Coordination & Phased Crating",
      text: "Use layout confirmation, production records, and packing discussion to keep multi-batch work aligned."
    }
  ]
};

export default function CanadaShowerNichesPage() {
  const contactHref = "/contact?sourcePage=%2Fprojects%2Fcanada-shower-niches-2025&projectType=Commercial%20Stone%20Projects";

  return (
    <PageShell>
      <main>
        <JsonLd data={[
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") }, { "@type": "ListItem", position: 3, name: "Canada Shower Niches Reference", item: absoluteUrl("/projects/canada-shower-niches-2025") }] },
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Canada Custom Stone Shower Niches Project Reference",
            description: metadata.description,
            url: absoluteUrl("/projects/canada-shower-niches-2025"),
            spatialCoverage: "Canada",
            countryOfOrigin: "China",
            provider: {
              "@type": "Organization",
              name: siteName,
              url: absoluteUrl("/")
            }
          },
          canadaShowerNichesHowToJsonLd,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: nicheFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer }
            }))
          }
        ]} />
        <PageHero
          eyebrow="Selected project reference"
          title="Canada · 2025 custom stone shower niches."
          description="A catalogue reference for a multi-batch fabrication program involving several thousand custom stone shower niches and drawing-led project coordination."
          cta={{
            href: contactHref,
            label: "Discuss a Similar Project",
            note: "Start with unit quantities and rough dimensions; CAD details can follow."
          }}
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="eyebrow-luxury">Reference context</p>
              <h2 className="heading-lg text-left">Repeat-unit coordination for a large project scope.</h2>
              <p className="body-luxury">The catalogue records a Canada 2025 program for several thousand custom stone shower niches. From Yunfu, China, our own processing and partner coordination support the documentation, component breakdown, and batch scheduling required when repeat bathroom units move through phased fabrication.</p>
              <p className="body-luxury">It is presented as a project reference. Confirm the current material lot, finished dimensions, quantities, surface finish, delivery term, and production requirements for any new scope.</p>
              <Link className="btn-luxury-fill" href={contactHref}>Discuss a Similar Project</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">{facts.map(([label, value]) => <article key={label} className="card-luxury bg-stone p-6"><p className="eyebrow-luxury">{label}</p><p className="mt-4 text-[1.05rem] leading-7 text-ink/78">{value}</p></article>)}</div>
          </div>
        </section>
        <section className="section-luxury bg-stone">
          <div className="container-luxury grid gap-5 md:grid-cols-3">
            <article className="card-luxury bg-paper p-6"><p className="eyebrow-luxury">01</p><h2 className="mt-3 text-left font-title text-[1.35rem] uppercase tracking-[0.03em] text-ink">CAD detailing</h2><p className="mt-3 text-sm leading-7 text-ink/65">Break the scope into drawing-defined components that can be reviewed before fabrication.</p></article>
            <article className="card-luxury bg-paper p-6"><p className="eyebrow-luxury">02</p><h2 className="mt-3 text-left font-title text-[1.35rem] uppercase tracking-[0.03em] text-ink">Cut lists</h2><p className="mt-3 text-sm leading-7 text-ink/65">Keep repeat-unit quantities and component details visible during quotation and production planning.</p></article>
            <article className="card-luxury bg-paper p-6"><p className="eyebrow-luxury">03</p><h2 className="mt-3 text-left font-title text-[1.35rem] uppercase tracking-[0.03em] text-ink">Batch coordination</h2><p className="mt-3 text-sm leading-7 text-ink/65">Use layout confirmation, production records, and packing discussion to keep multi-batch work aligned.</p></article>
          </div>
        </section>
        <section className="section-luxury-compact bg-paper">
          <div className="container-luxury">
            <h2 className="font-title text-2xl md:text-3xl">What to specify for a repeat shower-niche or bathroom stone package.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">Send the architectural details or rough schedule you already have. Final dimensions, joint construction, tolerances, and packing groups are agreed before production release.</p>
            <table className="mt-6 w-full table-fixed border-collapse text-left text-sm leading-7">
              <thead><tr className="border-b border-ink/20"><th scope="col" className="w-1/3 py-3 pr-4 font-medium">Specification item</th><th scope="col" className="py-3 font-medium">Useful drawing and BOQ inputs</th></tr></thead>
              <tbody>{nicheScopeRows.map((row) => <tr key={row.component} className="border-b border-ink/10"><th scope="row" className="py-4 pr-4 align-top font-medium">{row.component}</th><td className="py-4 align-top text-ink/70">{row.inputs}</td></tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Drawing and batch guide</p>
              <h2 className="heading-lg section-intro__title">Coordinate recessed bathroom stone from shop drawing to crate label.</h2>
            </div>
            <div className="mx-auto max-w-4xl divide-y divide-ink/15 border-y border-ink/15">
              {nichePlanningSections.map((section) => (
                <details key={section.heading} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="block text-lg font-medium leading-7 text-ink">{section.heading}</span>
                      <span className="mt-2 block text-sm leading-6 text-ink/65">{section.summary}</span>
                    </span>
                    <span aria-hidden="true" className="shrink-0 text-2xl leading-7 text-ink/60 group-open:rotate-45">+</span>
                  </summary>
                  <div className="max-w-3xl pb-2 pt-2">
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-ink/70">{paragraph}</p>)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <ProjectProcurementInfo
          materialOptions="Marble, granite, quartzite, and other approved natural stones. Confirm the selected lot, thickness, finish, and wet-area care requirements before production."
          customCapability="Support single-piece prototype review and multi-batch repeat component schedules from CAD drawings, cut lists, and room-by-room packing plans."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Buyer questions</p>
              <h2 className="heading-lg section-intro__title">Questions buyers ask about repeat bathroom stone components.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {nicheFaqs.map((faq) => (
                <article key={faq.question} className="card-luxury px-5 py-5">
                  <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">{faq.question}</h3>
                  <p className="mt-3 text-[0.93rem] leading-7 text-ink/68">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <nav aria-label="Related project resources" className="container-luxury mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
          <Link className="transition-colors hover:text-ink" href="/custom-stone-fabrication-china">Cut-to-Size Fabrication</Link>
          <Link className="transition-colors hover:text-ink" href="/countertops/vanity-tops">Hotel Vanity Tops</Link>
          <Link className="transition-colors hover:text-ink" href="/projects/hotel-vanity-tops-fabrication-case">Vanity Component Review</Link>
          <Link className="transition-colors hover:text-ink" href="/architectural-stone/wall-cladding">Stone Wall Cladding</Link>
          <Link className="transition-colors hover:text-ink" href="/materials/marble">Marble Materials</Link>
          <Link className="transition-colors hover:text-ink" href="/factory#factory-evidence">Factory &amp; Drawing Evidence</Link>
          <Link className="transition-colors hover:text-ink" href="/projects/commercial-stone">Commercial Stone</Link>
          <Link className="transition-colors hover:text-ink" href="/how-we-work">How We Work</Link>
        </nav>
      </main>
    </PageShell>
  );
}
