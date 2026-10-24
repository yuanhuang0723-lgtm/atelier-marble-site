import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import JsonLd from "../../components/JsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import ProjectProcurementInfo from "../../components/ProjectProcurementInfo";
import { cleanDisplayTitle, getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Natural Stone Materials for Projects",
  description:
    "Natural stone materials for hotel, commercial, residential, and custom fabrication projects, with marble selection and export supply from China.",
  alternates: { canonical: absoluteUrl("/materials") },
  openGraph: {
    title: "Natural Stone Materials for Projects",
    description:
      "Natural stone materials for hotel, commercial, residential, and custom fabrication projects, with marble selection and export supply from China.",
    url: absoluteUrl("/materials"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const materialComparisonRows = [
  {
    family: "Natural Marble",
    href: "/materials/marble",
    applications: "Hotel bathroom vanity tops, bookmatched feature walls, lobby flooring, integrated basins, and custom furniture.",
    finishAndCare: "Polished, honed, or brushed. Calcium-carbonate stone sensitive to acids (etching); match finish and sealer schedule to the room's cleaning plan.",
    quotationInputs: "Variety or reference photo, vein-cut vs cross-cut or bookmatch layout direction, room schedule, cut-out templates, and thickness."
  },
  {
    family: "Natural Granite",
    href: "/materials/granite",
    applications: "High-traffic commercial flooring, exterior paving and steps, food-service counters, reception tops, and repeatable hospitality packages.",
    finishAndCare: "Polished, honed, leathered, flamed, or bush-hammered. Select textured finishes where wet or exterior zones require added surface grip.",
    quotationInputs: "Grain and shade reference, finish by zone, module sizes or counter dimensions, stair nosing details, and multi-crate batch requirements."
  },
  {
    family: "Natural Quartzite",
    href: "/materials/quartzite",
    applications: "Kitchen countertops, waterfall islands, bar tops, hotel vanity surfaces, and statement architectural panels.",
    finishAndCare: "Polished, honed, or leathered natural metamorphic stone (distinct from resin-bound engineered quartz). Confirm lot hardness and cutting details.",
    quotationInputs: "Confirmed slab lot, countertop plan, sink and cooktop templates, mitered or profiled edges, and vein alignment across seams."
  }
];

const materialFaqs = [
  {
    question: "What natural stone materials can be reviewed?",
    answer: "The reference library includes marble, granite, quartzite, and other natural stone options for hotel, commercial, residential, countertop, and custom projects."
  },
  {
    question: "Can current slab availability be confirmed?",
    answer: "Yes. The online archive is a visual starting point; current material name, lot, thickness, finish, matching, and availability should be confirmed before quotation."
  },
  {
    question: "How should I choose stone for a project?",
    answer: "Share the application, dimensions, lighting or surrounding finishes, preferred tone, quantity, and destination so material suitability and fabrication can be reviewed together."
  }
];

export default function MaterialsPage() {
  const materials = getAssets("materials");
  const contactHref = "/contact?sourcePage=%2Fmaterials&projectType=Commercial%20Stone%20Projects";
  const applicationRoutes = [
    { title: "Countertops & Vanity", href: "/countertops", image: "/materials/featured-covers/kitchen-countertop.webp", alt: "Stone countertop and vanity application reference image" },
    { title: "Hotel & Hospitality", href: "/projects/hotel-stone-supply", image: "/materials/categories/hotel-projects.webp", alt: "Illustrative hotel interior with stone flooring and wall panels" },
    { title: "Custom Stone", href: "/custom-stone-fabrication-china", image: "/materials/featured-covers/carving-decor.webp", alt: "Decorative stone sculpture reference showing a carved tree form" }
  ];

  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Materials", path: "/materials" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Natural Stone Materials for Projects", url: absoluteUrl("/materials"), description: String(metadata.description), hasPart: [
          { "@type": "WebPage", name: "Marble Materials", url: absoluteUrl("/materials/marble") },
          { "@type": "WebPage", name: "Quartzite Materials", url: absoluteUrl("/materials/quartzite") },
          { "@type": "WebPage", name: "Granite Materials", url: absoluteUrl("/materials/granite") }
        ] }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: materialFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
        <PageHero
          eyebrow="Material reference library"
          title="Natural stone materials for hotel and commercial projects."
          description="Browse the current material reference archive by slab character, visual tone, and intended application. Share a reference image with your project brief so the fabrication review starts from the same visual direction."
          cta={{
            href: contactHref,
            label: "Send a Project Inquiry",
            note: "Start with a short brief or reference photo; CAD drawings and BOQ schedules can follow."
          }}
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Material references for project decisions.</h2>
              <p className="body-luxury section-intro__copy">
                The archive is a visual starting point, not a promise of stock or a substitute for a current slab
                check. From Yunfu, China, our own processing and partner coordination support lot verification,
                thickness and finish review, dry-lay matching, and cut-to-size fabrication.
              </p>
            </div>
            <div className="mb-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Marble",
                  href: "/materials/marble",
                  copy: "Review veining, tone, finish, matching direction, and application suitability before fabrication."
                },
                {
                  name: "Granite",
                  href: "/materials/granite",
                  copy: "Assess durability, finish, cut-outs, edge details, and project use before requesting a quote."
                },
                {
                  name: "Quartzite",
                  href: "/materials/quartzite",
                  copy: "Compare character, surface direction, thickness, and countertop or hospitality suitability."
                }
              ].map((family) => (
                <Link key={family.href} href={family.href} className="group rounded-[14px] border border-ink/10 bg-stone px-6 py-5 transition-colors hover:border-ink/25">
                  <p className="eyebrow-luxury">Material family</p>
                  <h2 className="mt-3 text-left font-title text-[1.45rem] font-medium uppercase tracking-[0.04em] text-ink">{family.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{family.copy}</p>
                  <span className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/70 group-hover:text-ink">Review material direction -&gt;</span>
                </Link>
              ))}
            </div>
            <div className="mb-12 rounded-[14px] border border-ink/10 bg-stone p-6 md:p-8">
              <p className="eyebrow-luxury">Specification comparison</p>
              <h2 className="mt-3 font-title text-2xl text-ink md:text-3xl">Compare marble, granite, and quartzite by project scope.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
                Each natural stone family carries different veining, surface finish options, and maintenance considerations. Confirm the actual slab lot and project drawings before approving production.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-7">
                  <thead>
                    <tr className="border-b border-ink/20">
                      <th scope="col" className="w-[18%] py-3 pr-4 font-medium text-ink">Stone family</th>
                      <th scope="col" className="w-[28%] py-3 pr-4 font-medium text-ink">Common project scopes</th>
                      <th scope="col" className="w-[27%] py-3 pr-4 font-medium text-ink">Finish &amp; care notes</th>
                      <th scope="col" className="w-[27%] py-3 font-medium text-ink">What to send for quotation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialComparisonRows.map((row) => (
                      <tr key={row.family} className="border-b border-ink/10 last:border-0">
                        <th scope="row" className="py-4 pr-4 align-top font-medium text-ink">
                          <Link className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink" href={row.href}>
                            {row.family}
                          </Link>
                        </th>
                        <td className="py-4 pr-4 align-top text-ink/70">{row.applications}</td>
                        <td className="py-4 pr-4 align-top text-ink/70">{row.finishAndCare}</td>
                        <td className="py-4 align-top text-ink/70">{row.quotationInputs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-12 grid gap-5 md:grid-cols-3">
              {applicationRoutes.map((route) => (
                <Link key={route.href} href={route.href} className="group overflow-hidden rounded-[14px] border border-ink/10 bg-stone p-2">
                  <img className="aspect-[16/9] w-full rounded-[10px] object-cover transition duration-500 group-hover:scale-[1.02]" src={route.image} alt={route.alt} title={route.title} loading="lazy" />
                  <span className="flex items-center justify-between px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/75"><span>{route.title}</span><span aria-hidden="true">-&gt;</span></span>
                </Link>
              ))}
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {materials.map((asset, index) => {
                const displayTitle = cleanDisplayTitle(asset.title, "Natural Stone Reference");
                return (
                <article key={asset.filename} className="card-luxury p-3">
                  <div className="media-luxury aspect-[4/3]">
                    <img className="h-full w-full object-cover" src={asset.src} alt={`${displayTitle} natural stone slab reference ${String(index + 1).padStart(2, "0")} for countertop, vanity, and interior project review`} title={displayTitle} loading="lazy" />
                  </div>
                  <div className="px-4 py-6">
                    <p className="eyebrow-luxury mb-3">Slab reference {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="heading-md card-title">{displayTitle}</h3>
                    <p className="mt-4 text-sm font-light leading-7 text-ink/60">Visual reference for tone, movement, and surface character. Confirm the current material name and technical details before production.</p>
                    <Link className="text-cta-luxury mt-5" href={contactHref}>Request material review</Link>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
          <div className="container-luxury mt-16 flex flex-wrap gap-x-8 gap-y-3">
            <Link className="text-cta-luxury" href={contactHref}>
              Get Material Suggestion
            </Link>
            <Link className="text-cta-luxury" href="/countertops/vanity-tops">
              Hotel Vanity Top Slabs
            </Link>
            <Link className="text-cta-luxury" href="/countertops/marble-countertops">
              Marble Countertop Fabrication
            </Link>
            <Link className="text-cta-luxury" href="/architectural-stone/flooring">
              Architectural Stone Flooring
            </Link>
            <Link className="text-cta-luxury" href="/custom-stone-fabrication-china">
              Cut-to-Size Fabrication
            </Link>
            <Link className="text-cta-luxury" href="/projects/hotel-vanity-tops-fabrication-case">
              Vanity Component Review Case
            </Link>
            <Link className="text-cta-luxury" href="/projects/canada-shower-niches-2025">
              Canada Shower Niches Case
            </Link>
            <Link className="text-cta-luxury" href="/materials/marble">
              Review Marble Materials
            </Link>
            <Link className="text-cta-luxury" href="/materials/quartzite">
              Review Quartzite Materials
            </Link>
            <Link className="text-cta-luxury" href="/materials/granite">
              Review Granite Materials
            </Link>
            <Link className="text-cta-luxury" href="/resources">
              Stone Buyer Guides
            </Link>
          </div>
        </section>
        <ProjectProcurementInfo
          materialOptions="The library includes marble, granite, and quartzite references. Confirm the current lot, thickness, finish, availability, and matching before approval."
          customCapability="One-piece custom prototypes and multi-container wholesale project scopes supported. Material selection reviewed alongside countertop, vanity, hotel, architectural, and custom fabrication requirements."
        />
        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Material questions</p>
              <h2 className="heading-lg section-intro__title">Choosing a natural stone material.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {materialFaqs.map((faq) => (
                <article key={faq.question} className="card-luxury bg-paper px-5 py-5">
                  <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">{faq.question}</h3>
                  <p className="mt-3 text-[0.93rem] leading-7 text-ink/68">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
