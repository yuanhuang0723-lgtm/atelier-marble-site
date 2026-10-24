import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import ProjectProcurementInfo from "../../components/ProjectProcurementInfo";
import { absoluteUrl } from "../../lib/seo";

export const metadata: Metadata = { title: "Stone Buyer Guides & Project Resources", description: "Buyer guides for stone materials, hotel pricing, project checklists, quality review, export packing, and choosing a supplier before you order.", alternates: { canonical: absoluteUrl("/resources") }, openGraph: { title: "Stone Buyer Resources", description: "Buyer guides for natural stone selection, hotel pricing, project checklists, quality control, export packing, and clearer project sourcing decisions.", url: absoluteUrl("/resources"), siteName: "Atelier Marble", images: [{ url: absoluteUrl("/generated/guides/buyer-guide-hero.webp") }] } };

const resources = [
  ["Supplier Profile (PDF)", "/atelier-marble-supplier-profile.pdf", "A one-page introduction to our natural stone scope, project inputs, and contact details."],
  ["Buyer Guide", "/guides/stone-supplier-china", "How to assess a stone supplier before sending project information."],
  ["Hotel Stone Pricing", "/guides/hotel-stone-pricing", "The project variables that shape a useful hotel stone quotation."],
  ["Project Checklist", "/guides/stone-project-checklist", "The dimensions, quantities, and destination details that help a review."],
  ["QC & Delivery", "/guides/quality-control-delivery", "Questions to ask about inspection, finishing, and delivery coordination."],
  ["Export Packing", "/guides/export-packing-standards", "A practical reference for protective packing and loading preparation."],
  ["Hotel Lobby Guide", "/guides/hotel-lobby-case-study", "A practical planning guide for hotel lobby stone scope, materials, and delivery."],
  ["How We Work", "/how-we-work", "From project review and material matching to quotation and export preparation."],
  ["Project Brief Template", "/project-brief-template.txt", "Download a simple brief template before requesting a quotation."]
];

const procurementStageRows = [
  {
    stage: "1. Material selection & early budgeting",
    decisions: "Compare marble, granite, and quartzite suitability, surface finishes, acid/stain maintenance, and provisional vs confirmed slab lots.",
    recommendedLinks: [
      { label: "Natural Stone Materials Hub", href: "/materials" },
      { label: "Cut-to-Size Marble Guide", href: "/materials/marble" },
      { label: "Commercial Granite Guide", href: "/materials/granite" },
      { label: "Quartzite Countertop Guide", href: "/materials/quartzite" },
      { label: "Hotel Stone Pricing Variables", href: "/guides/hotel-stone-pricing" }
    ]
  },
  {
    stage: "2. CAD shop drawings & quotation scope",
    decisions: "Align finished dimensions, sink/faucet cut-out templates, edge profiles, room schedules, mirrored units, and fixing responsibility.",
    recommendedLinks: [
      { label: "Hotel Bathroom Vanity Tops", href: "/countertops/vanity-tops" },
      { label: "Marble Countertop Fabrication", href: "/countertops/marble-countertops" },
      { label: "Architectural Stone Flooring", href: "/architectural-stone/flooring" },
      { label: "Custom Cut-to-Size Fabrication", href: "/custom-stone-fabrication-china" },
      { label: "Stone Project Checklist", href: "/guides/stone-project-checklist" }
    ]
  },
  {
    stage: "3. Inspection, crating & delivery planning",
    decisions: "Define pre-packing dimensional and dry-lay checks, room-by-room crate labels, export wooden crate protection, and delivery terms.",
    recommendedLinks: [
      { label: "Vanity Drawing & Component Case", href: "/projects/hotel-vanity-tops-fabrication-case" },
      { label: "Canada Shower Niches Case", href: "/projects/canada-shower-niches-2025" },
      { label: "Quality Control & Delivery Guide", href: "/guides/quality-control-delivery" },
      { label: "Export Packing Standards", href: "/guides/export-packing-standards" },
      { label: "Factory & Drawing Evidence", href: "/factory#factory-evidence" }
    ]
  }
];

const faqs = [["What should I send for a first quotation review?", "Send the project type, approximate quantity, dimensions or drawings, material direction, destination, and required timing. A rough brief is enough to start a practical review."], ["Do I need a finished CAD drawing?", "No. CAD, BOQ files, reference images, or rough dimensions can all help. The clearer the scope, the more specific the fabrication and quotation discussion can be."], ["Can you confirm the material before production?", "Material name, availability, thickness, finish, matching, and application suitability should be confirmed with the team before production is approved."], ["Do you support hotel and commercial projects?", "The site is structured for hotel, hospitality, commercial, residential, countertop, vanity, and custom stone inquiries. Scope and quantities are reviewed case by case."], ["How do I request pricing?", "Use the quotation form to send your project details and optional files, or contact the team through WhatsApp for an initial project conversation."]];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Natural Stone Buyer Guides & Technical Export Resources",
  url: absoluteUrl("/resources"),
  description: String(metadata.description),
  hasPart: resources.filter(([_, href]) => !href.endsWith(".pdf") && !href.endsWith(".txt")).map(([name, href]) => ({
    "@type": "Article",
    name,
    url: absoluteUrl(href)
  }))
};

export default function ResourcesPage() {
  const contactHref = "/contact?sourcePage=%2Fresources&projectType=Commercial%20Stone%20Projects";

  return (
    <PageShell>
      <main>
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Resources", item: absoluteUrl("/resources") }
              ]
            },
            collectionJsonLd,
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(([question, answer]) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: { "@type": "Answer", text: answer }
              }))
            }
          ]}
        />
        <PageHero
          eyebrow="Buyer resources"
          title="Useful references for specifying and sourcing natural stone."
          description="Use these guides to prepare a stronger brief, compare fabrication paths, and move toward a clearer project conversation."
          backgroundImage="/generated/guides/buyer-guide-hero.webp"
          backgroundImageAlt="Illustrative project team reviewing stone samples and a project brief."
          cta={{
            href: contactHref,
            label: "Send a Project Inquiry",
            note: "Start with a short project note; CAD drawings, BOQ schedules, and material references can follow."
          }}
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Sourcing reference library</p>
              <h2 className="heading-lg section-intro__title">Practical checklists for B2B stone procurement.</h2>
              <p className="body-luxury section-intro__copy">
                From Yunfu, China, our own processing and partner coordination support drawing-led natural stone orders. Use the guides and templates below to align material selection, CAD shop drawings, inspection checkpoints, and export packing responsibilities before production is approved.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {resources.map(([title, href, copy]) => (
                <Link
                  key={href}
                  href={href}
                  prefetch={href.endsWith(".pdf") ? false : undefined}
                  download={href.endsWith(".pdf") ? "atelier-marble-supplier-profile.pdf" : undefined}
                  className="card-luxury group flex min-h-[210px] flex-col justify-between p-7 transition hover:-translate-y-1"
                >
                  <div>
                    <p className="eyebrow-luxury">Reference note</p>
                    <h2 className="font-title mt-4 text-[1.65rem] leading-tight text-ink">{title}</h2>
                    <p className="body-luxury mt-4">{copy}</p>
                  </div>
                  <span className="text-cta-luxury mt-6">
                    {href.endsWith(".pdf") ? "Download profile" : href.endsWith(".txt") ? "Download template" : "View guide"}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-12 rounded-[14px] border border-ink/10 bg-stone p-6 md:p-8">
              <p className="eyebrow-luxury">Where to start by project phase</p>
              <h2 className="mt-3 font-title text-2xl text-ink md:text-3xl">Match buyer guides and product pages to your current stage.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
                Whether you are shortlisting stone families, preparing a room-by-room BOQ, or setting pre-shipment inspection rules, use the matrix below to open the relevant specification page directly.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-7">
                  <thead>
                    <tr className="border-b border-ink/20">
                      <th scope="col" className="w-[24%] py-3 pr-4 font-medium text-ink">Project stage</th>
                      <th scope="col" className="w-[40%] py-3 pr-4 font-medium text-ink">Key decisions to confirm</th>
                      <th scope="col" className="w-[36%] py-3 font-medium text-ink">Relevant specifications &amp; guides</th>
                    </tr>
                  </thead>
                  <tbody>
                    {procurementStageRows.map((row) => (
                      <tr key={row.stage} className="border-b border-ink/10 last:border-0">
                        <th scope="row" className="py-4 pr-4 align-top font-medium text-ink">{row.stage}</th>
                        <td className="py-4 pr-4 align-top text-ink/70">{row.decisions}</td>
                        <td className="py-4 align-top text-ink/70">
                          <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {row.recommendedLinks.map((link) => (
                              <Link key={link.href} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" href={link.href}>
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <nav aria-label="Project scope pages" className="container-luxury mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
            <Link className="transition-colors hover:text-ink" href="/countertops">Countertops</Link>
            <Link className="transition-colors hover:text-ink" href="/countertops/vanity-tops">Hotel Vanity Tops</Link>
            <Link className="transition-colors hover:text-ink" href="/countertops/marble-countertops">Marble Countertops</Link>
            <Link className="transition-colors hover:text-ink" href="/projects/hotel-stone-supply">Hotel Stone Supply</Link>
            <Link className="transition-colors hover:text-ink" href="/architectural-stone">Architectural Stone</Link>
            <Link className="transition-colors hover:text-ink" href="/architectural-stone/flooring">Stone Flooring</Link>
            <Link className="transition-colors hover:text-ink" href="/materials">Materials</Link>
            <Link className="transition-colors hover:text-ink" href="/materials/marble">Marble</Link>
            <Link className="transition-colors hover:text-ink" href="/materials/granite">Granite</Link>
            <Link className="transition-colors hover:text-ink" href="/materials/quartzite">Quartzite</Link>
            <Link className="transition-colors hover:text-ink" href="/custom-stone-fabrication-china">Custom Stone Fabrication</Link>
            <Link className="transition-colors hover:text-ink" href="/projects/hotel-vanity-tops-fabrication-case">Vanity Component Case</Link>
            <Link className="transition-colors hover:text-ink" href="/projects/canada-shower-niches-2025">Canada Shower Niches Case</Link>
          </nav>
        </section>
        <ProjectProcurementInfo
          materialOptions="Marble, granite, quartzite, and other approved natural stones. Confirm current slab lot, thickness, finish, and matching expectations before production."
          customCapability="Support one-piece custom prototypes, small MOQ orders, and multi-batch hotel or commercial stone scopes from CAD drawings and BOQ schedules."
        />
        <section className="section-luxury bg-stone">
          <div className="container-luxury max-w-4xl">
            <div className="section-intro">
              <p className="eyebrow-luxury">Frequently asked</p>
              <h2 className="heading-lg text-left">Before you send the brief.</h2>
            </div>
            <div className="grid gap-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-[14px] border border-ink/10 bg-paper px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 font-title text-[1.2rem] font-medium uppercase leading-tight tracking-[0.03em] text-ink">{question}</summary>
                  <p className="body-luxury mt-4 max-w-3xl">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
