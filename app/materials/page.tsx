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

const materialsProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Natural Stone Materials & Slabs Collection Wholesale",
  description: "Direct quarry sourcing and factory supply of architectural natural stone from Yunfu, China. Comprehensive collection of Calacatta, Carrara, Statuario, Nero Marquina, Luxury Quartzite, and commercial granite slabs with ASTM physical testing compliance, ±1mm calibration, and fumigated export crate packing.",
  category: "Building Materials > Natural Stone > Stone Slabs & Materials",
  material: "Natural Stone (Marble, Quartzite, Granite, Limestone)",
  brand: {
    "@type": "Brand",
    name: "Atelier Marble"
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Material Categories", value: "Natural Marble, Luxury Quartzite, Commercial Granite, Limestone" },
    { "@type": "PropertyValue", name: "Standard Slab Thickness", value: "18mm, 20mm, 30mm (calibrated ±1mm tolerance)" },
    { "@type": "PropertyValue", name: "Surface Finishes Available", value: "Polished, Honed, Leathered, Flamed, Acid-Washed, Bush-Hammered" },
    { "@type": "PropertyValue", name: "Quality Assurance", value: "Dry-Lay Vein Matching, High-Res Slab Video, Pre-Shipment Inspection" },
    { "@type": "PropertyValue", name: "Physical Properties", value: "ASTM C97 density ~2.7 g/cm³, absorption <0.20%, ASTM C170 compressive strength >100 MPa" },
    { "@type": "PropertyValue", name: "Export Packaging", value: "Fumigated Sturdy Wooden Bundles / Crates for 20GP Ocean Containers" }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceType: "https://schema.org/InvoicePrice",
      unitText: "Wholesale & Project RFQ Quotation Based on Material Lot & Volume"
    },
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Atelier Marble",
      url: absoluteUrl("/")
    }
  }
};

export default function MaterialsPage() {
  const materials = getAssets("materials");
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
        <JsonLd data={materialsProductJsonLd} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: materialFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
        <PageHero
          eyebrow="Material reference library"
          title="Natural stone materials for hotel and commercial projects."
          description="Browse the current material reference archive by slab character, visual tone, and intended application. Share a reference image with your project brief so the fabrication review starts from the same visual direction."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Material references for project decisions.</h2>
              <p className="body-luxury section-intro__copy">
                The archive is a visual starting point, not a promise of stock or a substitute for a current slab
                check. Ask us to confirm availability, thickness, finish, matching, and fabrication suitability.
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
                    <Link className="text-cta-luxury mt-5" href="/contact">Request material review</Link>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
          <div className="container-luxury mt-16">
            <Link className="text-cta-luxury" href="/contact">
              Get Material Suggestion
            </Link>
            <Link className="text-cta-luxury ml-8" href="/projects">
              See Stone Project Uses
            </Link>
            <Link className="text-cta-luxury ml-8" href="/materials/marble">
              Review Marble Materials
            </Link>
            <Link className="text-cta-luxury ml-8" href="/materials/quartzite">
              Review Quartzite Materials
            </Link>
            <Link className="text-cta-luxury ml-8" href="/materials/granite">
              Review Granite Materials
            </Link>
          </div>
        </section>
        <ProjectProcurementInfo
          materialOptions="Natural marble, granite, and quartzite references (ASTM C97 density ~2.7 g/cm³, absorption <0.20%, ASTM C170 compressive strength >100 MPa). Confirm current lot, 18mm/20mm/30mm thickness (±1mm tolerance), finish, availability, and vein matching."
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
