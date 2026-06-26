import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import { contact } from "../../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../../lib/conversion";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Hotel Lobby Stone Project Case Study",
  description:
    "A hotel lobby stone project case study showing how overseas buyers can review scope, quality, packing, and delivery before ordering.",
  alternates: { canonical: absoluteUrl("/guides/hotel-lobby-case-study") },
  openGraph: {
    title: "Hotel Lobby Stone Project Case Study",
    description:
      "A practical case study for buyers comparing hotel stone suppliers in China, with scope, quality, and delivery takeaways.",
    url: absoluteUrl("/guides/hotel-lobby-case-study"),
    siteName
  }
};

const inquiryContext = {
  sourcePage: "/guides/hotel-lobby-case-study",
  intent: "Case study review",
  projectType: "Hotel Lobby Case Study"
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hotel Lobby Stone Project Case Study",
  description:
    "A hotel lobby stone project case study showing how overseas buyers can review scope, quality, packing, and delivery before ordering.",
  author: {
    "@type": "Organization",
    name: siteName
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/")
  },
  mainEntityOfPage: absoluteUrl("/guides/hotel-lobby-case-study")
};

const takeaways = [
  "Clear scope review before pricing keeps decisions efficient.",
  "Material matching helps the buyer avoid mismatch across large public areas.",
  "Inspection and packing steps reduce risk before export.",
  "Project coordination keeps hotel procurement aligned with timing."
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why show a case study on a stone website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A case study helps buyers understand the supplier's real project process, not only the finished images."
      }
    },
    {
      "@type": "Question",
      name: "What should buyers learn from a hotel lobby project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyers should look at scope, technical review, quality control, packing, and delivery coordination."
      }
    },
    {
      "@type": "Question",
      name: "Can case study pages help with inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. They reduce uncertainty and help buyers move toward a more serious quotation request."
      }
    }
  ]
};

export default function HotelLobbyCaseStudyPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <JsonLd data={articleSchema} />
        <JsonLd data={faqSchema} />
        <PageHero
          eyebrow="Project case study"
          title="Hotel Lobby Stone Project Case Study"
          description="See how a hotel lobby stone project can move from inquiry to material matching, QC, packing, and delivery."
          backgroundImage="/generated/guides/case-study-hero.png"
        />

        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <article className="grid gap-8">
              <div className="card-luxury px-6 py-6 md:px-8">
                <p className="eyebrow-luxury mb-3">Case summary</p>
                <p className="body-luxury">
                  Hotel lobby projects need more than attractive stone. Buyers want a supplier that can hold visual
                  consistency across a public space, control fabrication quality, and keep the shipment process clean
                  enough for overseas delivery.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Project scope",
                    copy: "Lobby flooring, wall stone, reception area details, and related public-space elements."
                  },
                  {
                    title: "Buyer priority",
                    copy: "Keep the space visually consistent while protecting the project schedule."
                  },
                  {
                    title: "Supplier task",
                    copy: "Review drawings, match material, and coordinate fabrication and delivery logic."
                  },
                  {
                    title: "Delivery focus",
                    copy: "Inspect, pack, and label products so the shipment can be handled safely at destination."
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
                  What this case study shows buyers
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/70">
                  {takeaways.map((item) => (
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
                    title: "Before you request pricing",
                    copy:
                      "Send project type, drawings, quantity, budget range, and timing so the quotation path reflects the real lobby scope."
                  },
                  {
                    title: "After you review the case",
                    copy:
                      "Use the process to judge whether the supplier can handle hotel stone work with enough control and clarity."
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
                  <p>Can you show real hotel project references?</p>
                  <p>How do you match material across a large public area?</p>
                  <p>What is your QC and packing process before export?</p>
                  <p>How do you handle delivery timing and handover?</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-3">Need pricing for a hotel project?</p>
                <p className="text-sm leading-7 text-ink/68">
                  Use this case study as a reference point, then send your own drawings or scope so we can review the
                  project properly.
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
              <h2 className="heading-lg section-intro__title">Common case study questions from buyers.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  q: "Is this a finished project or a reference case?",
                  a: "It is a practical reference showing how buyers can think about the process before ordering."
                },
                {
                  q: "Can I use this page to compare suppliers?",
                  a: "Yes. Case studies help compare process maturity, not just product photos."
                },
                {
                  q: "Will this help me decide whether to inquire?",
                  a: "Yes. It gives buyers a clearer view of the project path and the supplier's working style."
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
