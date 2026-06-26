import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import { contact } from "../../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../../lib/conversion";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Quality Control and Delivery Standards for Stone Projects",
  description:
    "A practical quality control and delivery guide for overseas buyers sourcing stone slabs, hotel projects, countertops, and custom fabrication from China.",
  alternates: { canonical: absoluteUrl("/guides/quality-control-delivery") },
  openGraph: {
    title: "Quality Control and Delivery Standards for Stone Projects",
    description:
      "How inspection, approval, packing, and delivery standards reduce risk for overseas stone buyers.",
    url: absoluteUrl("/guides/quality-control-delivery"),
    siteName
  }
};

const inquiryContext = {
  sourcePage: "/guides/quality-control-delivery",
  intent: "Quality control review",
  projectType: "Quality Control and Delivery"
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quality Control and Delivery Standards for Stone Projects",
  description:
    "A practical quality control and delivery guide for overseas buyers sourcing stone slabs, hotel projects, countertops, and custom fabrication from China.",
  author: {
    "@type": "Organization",
    name: siteName
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/")
  },
  mainEntityOfPage: absoluteUrl("/guides/quality-control-delivery")
};

const checkpoints = [
  "Confirm drawings, dimensions, and finish requirements before production starts.",
  "Review material selection and color / vein matching before approval.",
  "Use inspection photos or sample confirmation at key steps.",
  "Verify export packing, labels, and shipment sequence before loading."
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why does quality control matter for stone projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stone projects are hard to correct after shipment. Good quality control reduces remakes, damage, and delays."
      }
    },
    {
      "@type": "Question",
      name: "What should be checked before delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check dimensions, finish quality, packing, labeling, and whether the shipment matches the approved scope."
      }
    },
    {
      "@type": "Question",
      name: "Can buyers request inspection updates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Buyers can request progress photos, inspection steps, and packing confirmation before shipment."
      }
    }
  ]
};

export default function QualityControlDeliveryPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <JsonLd data={articleSchema} />
        <JsonLd data={faqSchema} />
        <PageHero
          eyebrow="Quality control"
          title="Quality Control and Delivery Standards for Stone Projects"
          description="See how inspection, packing, and delivery standards protect overseas stone buyers before shipment leaves China."
          backgroundImage="/generated/guides/qc-delivery-hero.png"
        />

        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <article className="grid gap-8">
              <div className="card-luxury px-6 py-6 md:px-8">
                <p className="eyebrow-luxury mb-3">What buyers want to avoid</p>
                <p className="body-luxury">
                  The most expensive mistakes in stone sourcing happen after approval is assumed too early. Buyers need
                  a supplier that checks the work before it ships, not after damage or mismatch has already occurred.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Pre-production",
                    copy: "Confirm scope, material direction, dimensions, and finish requirements before production starts."
                  },
                  {
                    title: "In-process",
                    copy: "Review sample photos or progress updates so the project stays aligned with approval."
                  },
                  {
                    title: "Pre-packing",
                    copy: "Verify piece count, labels, protection, and shipment sequence before packing is closed."
                  },
                  {
                    title: "Pre-shipment",
                    copy: "Check that the packing and delivery route match the destination market and loading plan."
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
                  Quality checkpoints
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/70">
                  {checkpoints.map((item) => (
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
                    title: "Why this builds trust",
                    copy:
                      "A visible QC process makes the site feel like a real export partner, not just a gallery of images."
                  },
                  {
                    title: "Why this improves conversion",
                    copy:
                      "Buyers who understand your QC and delivery process are more likely to submit a serious inquiry."
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
                <p className="eyebrow-luxury mb-4">Request QC support</p>
                <div className="grid gap-4 text-sm leading-7 text-ink/72">
                  <p>Inspection photos and stage updates</p>
                  <p>Packing and labeling confirmation</p>
                  <p>Shipping sequence review</p>
                  <p>Project handover and delivery support</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-3">Need a project quote?</p>
                <p className="text-sm leading-7 text-ink/68">
                  If you are comparing suppliers, ask for their quality control and delivery standard before price alone
                  decides the project.
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
              <h2 className="heading-lg section-intro__title">Common questions about QC and delivery.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  q: "Do you send progress photos?",
                  a: "Yes. Buyers can request photo updates during production and packing."
                },
                {
                  q: "Can you review packing before loading?",
                  a: "Yes. Packing should be checked before shipment so damage risk is reduced."
                },
                {
                  q: "Does QC affect quotation?",
                  a: "Yes. Better QC and packing standards often improve accuracy and reduce later losses."
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
