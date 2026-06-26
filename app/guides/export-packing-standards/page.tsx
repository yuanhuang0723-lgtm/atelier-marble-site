import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import { contact } from "../../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../../lib/conversion";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Export Packing Standards for Stone Projects",
  description:
    "A practical guide to export packing standards for stone slabs, countertops, furniture, and sculptural stone projects.",
  alternates: { canonical: absoluteUrl("/guides/export-packing-standards") },
  openGraph: {
    title: "Export Packing Standards for Stone Projects",
    description:
      "How export packing, crating, and shipment preparation reduce risk for overseas stone buyers.",
    url: absoluteUrl("/guides/export-packing-standards"),
    siteName
  }
};

const inquiryContext = {
  sourcePage: "/guides/export-packing-standards",
  intent: "Packing standards review",
  projectType: "Export Packing Standards"
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Export Packing Standards for Stone Projects",
  description:
    "A practical guide to export packing standards for stone slabs, countertops, furniture, and sculptural stone projects.",
  author: {
    "@type": "Organization",
    name: siteName
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/")
  },
  mainEntityOfPage: absoluteUrl("/guides/export-packing-standards")
};

const standards = [
  "Confirm edge protection and face protection before packing.",
  "Use crate or frame logic matched to slab, countertop, or finished-piece dimensions.",
  "Separate fragile parts and label the project clearly for loading teams.",
  "Review destination market and shipping path before final packing decisions."
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does export packing matter for stone projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stone is heavy, brittle, and easy to damage if the packing logic is weak. Good packing reduces breakage, claims, and project delays."
      }
    },
    {
      "@type": "Question",
      name: "Can you pack slabs and finished products differently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slabs, countertops, furniture, and sculptures usually need different protection, support, and labeling."
      }
    },
    {
      "@type": "Question",
      name: "Do you review packing before quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Packing logic is part of the project review so the quotation path reflects real export requirements."
      }
    }
  ]
};

export default function ExportPackingStandardsPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <JsonLd data={articleSchema} />
        <JsonLd data={faqSchema} />
        <PageHero
          eyebrow="Buyer guide"
          title="Export Packing Standards for Stone Projects"
          description="Understand the packing logic behind slabs, countertops, furniture, and sculptural stone projects before you order."
        />

        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <article className="grid gap-8">
              <div className="card-luxury px-6 py-6 md:px-8">
                <p className="eyebrow-luxury mb-3">Why this matters</p>
                <p className="body-luxury">
                  A quote is only useful if the project can also be packed and shipped safely. For overseas stone
                  buyers, the packing standard should match the project type, finish quality, destination market, and
                  route to port or site.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Stone slabs",
                    copy: "Need strong face protection, corner control, and crate logic that prevents movement during transport."
                  },
                  {
                    title: "Countertops",
                    copy: "Require careful edge support and clear part labeling so fabricated pieces arrive in the right order."
                  },
                  {
                    title: "Furniture",
                    copy: "Need packing that protects finish quality and prevents pressure marks, scratches, and breakage."
                  },
                  {
                    title: "Sculptures",
                    copy: "Need custom support and safer handling because shape, balance, and surface detail are more fragile."
                  }
                ].map((item) => (
                  <div key={item.title} className="card-luxury px-6 py-6">
                    <h2 className="font-title text-[1.02rem] font-semibold uppercase tracking-[0.04em] text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-ink/70">{item.copy}</p>
                  </div>
                ))}
              </div>

              <div className="card-luxury px-6 py-6 md:px-8">
                <h2 className="font-title text-[1.05rem] font-semibold uppercase tracking-[0.04em] text-ink">
                  Packing standards checklist
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/70">
                  {standards.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Inspect before shipment",
                    copy:
                      "Good buyers ask for packing photos, crate structure, and loading logic before final shipment confirmation."
                  },
                  {
                    title: "Match route to packing",
                    copy:
                      "Packing should reflect the destination, transit time, and handling style, not just the item dimensions."
                  }
                ].map((item) => (
                  <div key={item.title} className="card-luxury px-6 py-6">
                    <h2 className="font-title text-[1.02rem] font-semibold uppercase tracking-[0.04em] text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-ink/70">{item.copy}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-ink/10 bg-stone p-8 md:p-10">
                <p className="eyebrow-luxury mb-4">What buyers should ask</p>
                <div className="grid gap-4 text-sm leading-7 text-ink/72">
                  <p>How will the product be fixed inside the crate or frame?</p>
                  <p>What protection is used on edges, faces, and fragile parts?</p>
                  <p>How is the shipment labeled and sequenced?</p>
                  <p>Are packing photos available before loading?</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-3">Need a project quote?</p>
                <p className="text-sm leading-7 text-ink/68">
                  If you are comparing stone suppliers in China, ask us to review the product, packing, and shipment
                  path together before pricing.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link className="btn-luxury" href="/contact">
                    Request Project Pricing
                  </Link>
                  <a className="text-cta-luxury self-center" href={whatsappUrl}>
                    Discuss on WhatsApp
                  </a>
                </div>
                <div className="mt-4">
                  <a className="text-cta-luxury" href={emailUrl}>
                    Email Project Details
                  </a>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8 text-sm font-light leading-8 text-ink/60">
                <p>{contact.companyName}</p>
                <p>{contact.address}</p>
                <p>{contact.location}</p>
                <p>{contact.whatsapp}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">FAQ</p>
              <h2 className="heading-lg section-intro__title">Common questions about export packing.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  q: "Do all stone products use the same packing method?",
                  a: "No. Slabs, countertops, furniture, and sculptures usually need different support and protection."
                },
                {
                  q: "Is packing included in the quotation process?",
                  a: "It should be. Packing logic affects price, transport risk, and lead time."
                },
                {
                  q: "Can you help overseas buyers review shipment risk?",
                  a: "Yes. We can discuss product fit, packing path, and project delivery before you commit."
                }
              ].map((item) => (
                <div key={item.q} className="card-luxury px-5 py-4">
                  <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
