import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import { contact } from "../../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../../lib/conversion";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "How to Choose a Stone Supplier in China for Hotel Projects",
  description:
    "A practical buyer guide for overseas teams comparing a stone supplier in China for hotel projects, kitchens, interiors, and custom fabrication.",
  alternates: { canonical: absoluteUrl("/guides/stone-supplier-china") },
  openGraph: {
    title: "How to Choose a Stone Supplier in China for Hotel Projects",
    description:
      "What overseas buyers should check before selecting a stone supplier in China for hotel stone, slabs, countertops, and export projects.",
    url: absoluteUrl("/guides/stone-supplier-china"),
    siteName
  }
};

const inquiryContext = {
  sourcePage: "/guides/stone-supplier-china",
  intent: "Buyer guide review",
  projectType: "Stone Supplier China"
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose a Stone Supplier in China for Hotel Projects",
  description:
    "A practical buyer guide for overseas teams comparing a stone supplier in China for hotel projects, kitchens, interiors, and custom fabrication.",
  author: {
    "@type": "Organization",
    name: siteName
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/")
  },
  mainEntityOfPage: absoluteUrl("/guides/stone-supplier-china")
};

const checklist = [
  "Can the supplier show real project references, not only catalog images?",
  "Do they explain material matching, fabrication scope, and packing before pricing?",
  "Can they handle hotel, kitchen, interior, and export coordination for overseas buyers?",
  "Do they provide clear communication and a practical quotation path?"
];

const redFlags = [
  "Vague answers about material source or fabrication control",
  "No process for drawings, dimensions, or technical review",
  "No export packing explanation",
  "No trustworthy company information, address, or contact details"
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I check before choosing a stone supplier in China?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check project references, material matching ability, technical review process, export packing, company details, and communication speed."
      }
    },
    {
      "@type": "Question",
      name: "Can a stone supplier in China handle hotel projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the supplier can review drawings, coordinate fabrication, prepare export packing, and keep the buyer informed throughout the project."
      }
    },
    {
      "@type": "Question",
      name: "How can I get a faster quotation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send project type, dimensions, drawings, budget range, timeline, and destination market. Those details help match material and scope faster."
      }
    }
  ]
};

export default function StoneSupplierGuidePage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <JsonLd data={articleSchema} />
        <JsonLd data={faqSchema} />
        <PageHero
          eyebrow="Buyer guide"
          title="How to Choose a Stone Supplier in China for Hotel Projects"
          description="Use this checklist to compare suppliers for hotel stone, marble slabs, countertops, interiors, and custom fabrication before you request pricing."
          backgroundImage="/generated/guides/buyer-guide-hero.png"
        />

        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <article className="grid gap-8">
              <div className="card-luxury px-6 py-6 md:px-8">
                <p className="eyebrow-luxury mb-3">What buyers need first</p>
                <p className="body-luxury">
                  The best stone supplier is not the one with the lowest starting price. It is the one that can
                  understand scope, explain material suitability, and keep the project moving without avoidable
                  mistakes. For hotel buyers, that usually means the supplier can handle drawings, technical review,
                  export packing, and clear communication.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="card-luxury px-6 py-6">
                  <h2 className="font-title text-[1.05rem] font-semibold uppercase tracking-[0.04em] text-ink">
                    Buyer checklist
                  </h2>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/70">
                    {checklist.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-luxury px-6 py-6">
                  <h2 className="font-title text-[1.05rem] font-semibold uppercase tracking-[0.04em] text-ink">
                    Red flags to avoid
                  </h2>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-ink/70">
                    {redFlags.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Ask for project references",
                    copy:
                      "Real project references tell you more than polished product photos. Look for hospitality, residential, and export jobs similar to yours."
                  },
                  {
                    title: "Confirm technical review",
                    copy:
                      "A good supplier should ask for drawings, dimensions, quantities, and destination market before giving you a quote."
                  },
                  {
                    title: "Check packing logic",
                    copy:
                      "Export packing matters for slabs, countertops, furniture, and sculpture pieces. It protects both timing and finish quality."
                  },
                  {
                    title: "Judge communication speed",
                    copy:
                      "Fast, clear replies usually signal a stronger operational team. Slow or vague answers often become project risk later."
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
                <p className="eyebrow-luxury mb-3">What makes a quote better</p>
                <p className="body-luxury">
                  The more precise your inquiry, the more usable the quotation becomes. Share your project type, rough
                  dimensions, budget range, timeline, and target material direction. That lets us suggest a practical
                  route for selection, fabrication, and export delivery instead of sending a generic reply.
                </p>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-ink/10 bg-stone p-8 md:p-10">
                <p className="eyebrow-luxury mb-4">Best fit for</p>
                <div className="grid gap-4 text-sm leading-7 text-ink/72">
                  <p>Hotel developers and procurement teams</p>
                  <p>Designers specifying marble and natural stone</p>
                  <p>Importers comparing China suppliers</p>
                  <p>Buyers needing custom fabrication and export packing</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-3">Ready to talk?</p>
                <p className="text-sm leading-7 text-ink/68">
                  Send your project details and we will review whether the scope fits stone slab supply, hotel stone
                  fabrication, countertops, or custom fabrication.
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
              <h2 className="heading-lg section-intro__title">Common questions from overseas stone buyers.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  q: "Do I need drawings before I ask for pricing?",
                  a: "Drawings help a lot, but even rough dimensions, quantity, and project direction can start the conversation."
                },
                {
                  q: "Can you help with hotel and residential projects?",
                  a: "Yes. We support hotel, kitchen, interior, furniture, and custom stone work for export buyers."
                },
                {
                  q: "Can I ask about multiple materials at once?",
                  a: "Yes. It often helps to compare slab options, finish types, and fabrication routes in the same inquiry."
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
