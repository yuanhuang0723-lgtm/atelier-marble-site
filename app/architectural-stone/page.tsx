import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import ProjectProcurementInfo from "../../components/ProjectProcurementInfo";
import { absoluteUrl } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Architectural Stone Fabrication from China",
  description:
    "Architectural stone for hotel and commercial interiors, made from project drawings. Share wall or floor layouts, quantities, finish, and destination for review.",
  alternates: { canonical: absoluteUrl("/architectural-stone") }
};

const applications = [
  ["Hotel & Commercial", "/projects/commercial-stone", "/materials/categories/hotel-projects.webp", "Architectural stone surfaces for hotel lobbies, reception areas, retail, and public interiors.", "Illustrative hotel interior concept with stone flooring and wall panels"],
  ["Countertops & Vanity", "/countertops", "/materials/featured-covers/kitchen-countertop.webp", "Countertops, vanity tops, integrated basins, and cut-to-size stone packages.", "Natural stone countertop and vanity application reference"],
  ["Interior & Feature Stone", "/projects/commercial-stone", "/assets/stone-table-coffee/hero-local-cover.png", "Wall, floor, furniture, and feature-surface references for considered interiors.", "Illustrative stone table and interior concept"],
  ["Wall Cladding", "/architectural-stone/wall-cladding", "/materials/categories/hotel-projects.webp", "Panelized stone surfaces for hotel lobbies, commercial interiors, and feature walls.", "Illustrative hotel wall cladding and stone interior concept"],
  ["Architectural Flooring", "/architectural-stone/flooring", "/materials/categories/hotel-projects.webp", "Stone flooring references for hotel, commercial, and public interior applications.", "Illustrative hotel flooring and wall panel concept"],
  ["Custom Stone", "/custom-stone-fabrication-china", "/materials/featured-covers/carving-decor.webp", "Sculptural forms, furniture, and architectural accents developed from a clear design direction.", "Illustrative carved stone sculpture in an interior concept"]
];

const architecturalContentSections = [
  {
    heading: "Build the review set from plans and schedules",
    paragraphs: [
      "Begin with the latest architectural plans, elevations, sections, finish schedule, and BOQ. Identify the building, floor, area, and drawing revision for each stone package. Include dimensions, units, quantities, thickness where specified, visible faces, and the relationship between the stone and adjacent materials. For a wall cladding package, link each elevation to a panel schedule so openings, corners, returns, reveals, and feature zones can be traced to individual parts.",
      "Mark what is fixed and what remains under design review. If elevations, schedules, and room names do not use the same references, provide a crosswalk. A preliminary review can flag missing information, but it cannot resolve conflicting dimensions by itself. State which document governs the quote and who approves a later revision. This keeps an estimate from being mistaken for a final production or installation drawing.",
      "For large elevations, note the datum, scale, dimension units, and where a measurement begins or ends. Show whether a dimension includes a joint, return, trim, or adjacent finish. If the same surface appears on a plan and elevation, use a shared room or panel mark to connect them. This reduces the chance that a buyer, designer, and supplier will describe the same stone element by different names or measure it from different reference points."
    ]
  },
  {
    heading: "Coordinate wall panel layouts and openings",
    paragraphs: [
      "For cladding, show the intended panel modules, joint locations, edge returns, corners, reveals, door and window openings, and transitions to other finishes. Note any visible alignment with flooring, ceiling lines, lighting, or furniture. A dimensioned elevation helps explain the pattern; a section is useful where thickness, depth, or the relationship to the wall substrate matters. Identify panels that repeat and those that are unique to one location.",
      "List the parts by elevation or zone and assign stable panel marks that match the BOQ. Clarify whether openings are part of the stone scope or supplied by another trade, and share the relevant templates or coordinated dimensions. Confirm which dimensions are nominal and which are final. If a substrate or adjacent construction can move or change, identify the owner of the final measurement before the stone sizes are approved."
    ]
  },
  {
    heading: "Plan the flooring module and transition",
    paragraphs: [
      "A flooring review should show the room outline, module dimensions, layout direction, datum or starting point, borders, thresholds, stairs, columns, floor boxes, and interfaces with other finishes. Note any pattern, vein direction, or joint alignment that carries from one space into another. If the floor includes multiple stone types or formats, separate their quantities and identify how the boundary between them should appear on the plan.",
      "Confirm transitions, level changes, drainage or slope requirements, and code-related details with the responsible architect or site team. These requirements depend on the building design and local rules; a product page or generic stone description cannot establish them. For repeat modules, define which pieces can be cut from standard sizes and which need individual dimensions, then tie the cut list to the current layout drawing."
    ]
  },
  {
    heading: "Confirm fixing details with the responsible design team",
    paragraphs: [
      "Stone panels and architectural parts connect to substrates, supports, adjoining trades, and site conditions that must be defined for the actual project. Share any available substrate information, support locations, fixing zones, movement joints, and coordination drawings. Confirm fixing details with the responsible design team, structural engineer, and installer. Their approved design governs anchors, adhesives, loads, safety factors, and any code requirements.",
      "The fabrication quote can identify the dimensions and edge or opening details it is based on, while fixing design and site installation remain separate responsibilities unless they are specifically included in writing. Show where the fabricator's scope ends and where the engineer or installer takes over. If support conditions change, mark which part drawings and quantities need review before the estimate is treated as final."
    ]
  },
  {
    heading: "Review material lot, finish, and visible faces",
    paragraphs: [
      "State the preferred stone or material direction, thickness, finish, and visible face for each application. Natural stone can vary between pieces and lots. If a lobby wall, reception feature, or connected floor needs a coordinated appearance, show which pieces should be reviewed together and what variation is acceptable. For bookmatched or directional patterns, mark the relationship between panels on the elevation and panel schedule.",
      "Agree the sample, material lot approval, finish approval, and approval owner before production release. Record the approved reference and the date so changes can be traced. A digital image or material name may not show every piece in a later batch. If the project changes supplier, finish, or panel size, confirm whether the approval remains valid and whether the quotation or schedule needs to be updated."
    ]
  },
  {
    heading: "Control drawing revisions and inspection points",
    paragraphs: [
      "Keep an issue list for plans, elevations, finish schedules, and BOQs. For every change, note which levels, rooms, elevations, panels, quantities, or material decisions are affected. Mark items as provisional, approved, or awaiting clarification so the buyer can distinguish open design questions from confirmed scope. If a mock-up or sample is needed, state what it must demonstrate and who gives the approval.",
      "Define the checks required before packing, such as panel dimensions, opening locations, exposed edges, finish, piece marks, and visible surface character. Agree what photographs or records are needed and when they are supplied. Inspection scope should match the project quotation and the evidence the parties actually provide. Do not assume that a specific test, certification, or structural sign-off is included unless it is documented.",
      "If a revision changes a panel count or finish after a quotation is prepared, update the affected BOQ lines and schedule rather than leaving the change only in an email thread. Confirm whether the old approval is superseded and who releases the new version for pricing or fabrication review. A simple dated revision record helps teams reconcile the amount requested, the parts shown on the drawings, and the materials approved for the same scope."
    ]
  },
  {
    heading: "Group packages for delivery and site sequence",
    paragraphs: [
      "Stone should be identified in a way the receiving team can reconcile with the drawings. Use labels that carry the building, floor, area, elevation, panel or piece mark, and package number where those identifiers are available. If the project is delivered in phases, show the requested release sequence and which areas must arrive together. Share site storage, unloading, access, lift, or delivery-hour constraints before the packing plan is confirmed.",
      "State the destination, delivery term, packing requirements, and who arranges freight, insurance, customs clearance, unloading, and local handling. The fabrication scope does not automatically include site measurement, structural design, or installation. These responsibilities should be agreed with the contractor and design team. The final quotation can then describe the actual supply and export scope without implying a fixed transit time or a construction service that has not been confirmed."
    ]
  }
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
          backgroundImageAlt="Illustrative hotel interior concept with stone flooring, wall panels, and lounge seating"
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="grid gap-5 md:grid-cols-2">
              {applications.map(([title, href, image, copy, alt]) => (
                <Link key={title} href={href} className="group overflow-hidden rounded-[14px] border border-ink/10 bg-stone p-3">
                  <img className="aspect-[16/9] w-full rounded-[10px] object-cover transition duration-500 group-hover:scale-[1.02]" src={image} alt={alt} title={title} loading="lazy" />
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
              <p className="eyebrow-luxury">Architectural stone coordination</p>
              <h2 className="heading-lg section-intro__title">Coordinate architectural stone by system and elevation.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {architecturalContentSections.map((section) => (
                <article key={section.heading} className="card-luxury bg-stone p-7">
                  <h3 className="font-title text-[1.12rem] font-semibold uppercase leading-tight tracking-[0.04em] text-ink">{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-ink/70">{paragraph}</p>)}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Fabrication information</p>
              <h2 className="heading-lg section-intro__title">Keep architectural stone details tied to the drawing.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Application", "Wall cladding, flooring, stairs, feature surfaces, and custom architectural parts."],
                ["Documents", "Latest drawings, BOQ, dimensions, units, quantities, labels, and revision notes."],
                ["Finish", "Material direction, thickness, exposed face, surface finish, edges, joints, and modules."],
                ["Handover", "Inspection points, packing groups, labels, loading requirements, and destination details."]
              ].map(([title, copy]) => <article key={title} className="card-luxury bg-paper p-6"><h2 className="font-title text-[1.05rem] font-semibold uppercase tracking-[0.04em] text-ink">{title}</h2><p className="mt-3 text-sm leading-7 text-ink/70">{copy}</p></article>)}
            </div>
          </div>
        </section>
        <ProjectProcurementInfo
          materialOptions="Marble, granite, quartzite, and other approved stone can be reviewed by application. Confirm current lot, finish, thickness, and matching."
          customCapability="Coordinate wall cladding, flooring, stairs, feature surfaces, and custom architectural parts from current drawings and schedules."
        />
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
