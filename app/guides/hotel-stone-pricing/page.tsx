import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import { contact } from "../../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../../lib/conversion";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Hotel Stone Pricing Guide for Overseas Buyers",
  description:
    "A practical pricing guide for overseas buyers comparing hotel stone projects, marble supply, fabrication scope, and export coordination.",
  alternates: { canonical: absoluteUrl("/guides/hotel-stone-pricing") },
  openGraph: {
    title: "Hotel Stone Pricing Guide for Overseas Buyers",
    description:
      "Understand what affects hotel stone project pricing before requesting a quotation from a supplier in China.",
    url: absoluteUrl("/guides/hotel-stone-pricing"),
    siteName
  }
};

const inquiryContext = {
  sourcePage: "/guides/hotel-stone-pricing",
  intent: "Pricing guide review",
  projectType: "Hotel Stone Pricing"
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hotel Stone Pricing Guide for Overseas Buyers",
  description:
    "A practical pricing guide for overseas buyers comparing hotel stone projects, marble supply, fabrication scope, and export coordination.",
  author: {
    "@type": "Organization",
    name: siteName
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/")
  },
  mainEntityOfPage: absoluteUrl("/guides/hotel-stone-pricing")
};

const factors = [
  "Project scope: lobby, reception, rooms, bathrooms, corridors, or public areas.",
  "Material choice: marble, slab type, finish, and visual consistency requirements.",
  "Fabrication detail: custom cuts, edges, patterns, and installation complexity.",
  "Project logistics: quantity, timeline, destination market, and export packing needs."
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What affects hotel stone project pricing the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scope, material selection, fabrication detail, quantity, and export packing all affect the final project price."
      }
    },
    {
      "@type": "Question",
      name: "Why does a clear scope help with pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clear scope lets the supplier estimate real fabrication and packing work instead of giving a generic price range."
      }
    },
    {
      "@type": "Question",
      name: "Can you review hotel stone drawings before quoting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Drawings help us estimate material fit, fabrication complexity, and packing needs before we prepare pricing."
      }
    }
  ]
};

export default function HotelStonePricingPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <JsonLd data={articleSchema} />
        <JsonLd data={faqSchema} />
        <PageHero
          eyebrow="Pricing guide"
          title="Hotel Stone Pricing Guide for Overseas Buyers"
          description="Know what affects hotel stone project pricing before you request a quotation from a supplier in China."
          backgroundImage="/generated/guides/pricing-guide-hero.png"
        />

        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <article className="grid gap-8">
              <div className="card-luxury px-6 py-6 md:px-8">
                <p className="eyebrow-luxury mb-3">Start here</p>
                <p className="body-luxury">
                  Hotel stone pricing is not only about material cost. Buyers need to account for fabrication complexity,
                  project schedule, packaging, and the number of rooms or public areas being supplied. A supplier that
                  understands these factors can quote more accurately and reduce avoidable back-and-forth.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Lobby and reception",
                    copy:
                      "These spaces usually require stronger visual consistency, larger pieces, and more careful fabrication review."
                  },
                  {
                    title: "Guest rooms",
                    copy:
                      "Room quantities can make pricing sensitive to repetition, dimensions, and efficient production planning."
                  },
                  {
                    title: "Bathrooms",
                    copy:
                      "Vanity tops, wall panels, and niche details need accurate drawings and clear edge and finish instructions."
                  },
                  {
                    title: "Public areas",
                    copy:
                      "Corridors, restaurants, and common spaces may need a different balance of durability, finish, and visual impact."
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
                  Main pricing factors
                </h2>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/70">
                  {factors.map((item) => (
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
                    title: "Ask for a scope-based quote",
                    copy:
                      "The strongest quotes are based on drawings, dimensions, quantities, and destination market rather than a vague project description."
                  },
                  {
                    title: "Compare the right supplier",
                    copy:
                      "A premium supplier should explain material fit, fabrication method, and export packing before asking for commitment."
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
                <p className="eyebrow-luxury mb-4">Use this before requesting pricing</p>
                <div className="grid gap-4 text-sm leading-7 text-ink/72">
                  <p>Project type and location</p>
                  <p>Quantity and rough dimensions</p>
                  <p>Budget range and timing</p>
                  <p>Material preference and reference images</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-3">Need a real quotation?</p>
                <p className="text-sm leading-7 text-ink/68">
                  Send your hotel project details and we will review the scope, material path, and export packing
                  requirements together.
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
              <h2 className="heading-lg section-intro__title">Common pricing questions from hotel buyers.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  q: "Can I get a price from a concept drawing?",
                  a: "Yes. Concept drawings are enough to begin a discussion, but detailed drawings improve accuracy."
                },
                {
                  q: "Do hotel projects need packing review?",
                  a: "Yes. Packing affects risk, loading, and delivery. It should be discussed before the final price is confirmed."
                },
                {
                  q: "Can you support multiple hotel zones at once?",
                  a: "Yes. Many hotel projects combine lobby, room, bathroom, and public-area stone supply."
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
