import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import RelatedProjectLinks from "../../../components/RelatedProjectLinks";
import { contact } from "../../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../../lib/conversion";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Stone Project Checklist Before You Order",
  description:
    "A buyer checklist for overseas teams ordering stone from China, covering slabs, countertops, furniture, dimensions, quantities, timing, and delivery.",
  alternates: { canonical: absoluteUrl("/guides/stone-project-checklist") },
  openGraph: {
    title: "Stone Project Checklist Before You Order",
    description:
      "The checklist overseas buyers should use before requesting quotations for stone projects in China.",
    url: absoluteUrl("/guides/stone-project-checklist"),
    siteName,
    images: [{ url: absoluteUrl("/generated/guides/project-checklist-hero.webp") }]
  }
};

const inquiryContext = {
  sourcePage: "/guides/stone-project-checklist",
  intent: "Project checklist review",
  projectType: "Stone Project Checklist"
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stone Project Checklist Before You Order",
  description:
    "A buyer checklist for overseas teams ordering stone slabs, hotel projects, countertops, furniture, or sculptural stone work from China.",
  author: {
    "@type": "Organization",
    name: siteName
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/")
  },
  mainEntityOfPage: absoluteUrl("/guides/stone-project-checklist")
};

const checklist = [
  "Have you defined the project type and destination market?",
  "Are the rough dimensions, quantities, and drawings ready?",
  "Do you know whether you need slabs, finished products, or custom fabrication?",
  "Have you set a budget range and timing expectation?",
  "Do you know which material direction or reference images you prefer?",
  "Have you confirmed how packing and shipment should be handled?"
];

const faqs = [
                {
                  q: "Do I need all the details before I contact you?",
                  a: "No. Start with what you have and we can help you shape the rest of the inquiry."
                },
                {
                  q: "Should I send drawings or photos first?",
                  a: "Either works. Drawings improve quotation accuracy, but photos are enough to begin a discussion."
                },
                {
                  q: "Can you help me decide what to ask for?",
                  a: "Yes. We can help clarify scope, material direction, and shipment logic."
                }
              ];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question", name: q,
    acceptedAnswer: { "@type": "Answer", text: a }
  }))
};

export default function StoneProjectChecklistPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Buyer Resources", path: "/resources" }, { name: "Stone Project Checklist", path: "/guides/stone-project-checklist" }]} />
        <JsonLd data={articleSchema} />
        <JsonLd data={faqSchema} />
        <PageHero
          eyebrow="Buyer checklist"
          title="Stone Project Checklist Before You Order"
          description="Use this checklist before requesting quotations for slabs, hotel projects, countertops, furniture, or sculptural stone work."
          backgroundImage="/generated/guides/project-checklist-hero.webp"
        />

        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <article className="grid gap-8">
              <div className="card-luxury px-6 py-6 md:px-8">
                <p className="eyebrow-luxury mb-3">Before you send an inquiry</p>
                <p className="body-luxury">
                  Good buyers do not ask for a quote with only a product name. They send enough context for the
                  supplier to understand the project, evaluate the material, and decide whether the scope matches the
                  right fabrication and packing path.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Scope",
                    copy: "What are you building, where is it going, and what type of stone work do you need?"
                  },
                  {
                    title: "Dimensions",
                    copy: "Do you have rough sizes, room counts, or quantity estimates?"
                  },
                  {
                    title: "Material",
                    copy: "Do you have a finish preference, material reference, or stone tone direction?"
                  },
                  {
                    title: "Logistics",
                    copy: "What is your timeline, destination market, and packing expectation?"
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
                  Project checklist
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

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "If you are still planning",
                    copy:
                      "Send whatever you have. Even rough sketches, inspiration images, and a budget range can start a useful discussion."
                  },
                  {
                    title: "If you are ready to quote",
                    copy:
                      "Add drawings, dimensions, quantity, and shipping destination so the quotation reflects the real project scope."
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
                <p className="eyebrow-luxury mb-4">What to send first</p>
                <div className="grid gap-4 text-sm leading-7 text-ink/72">
                  <p>Project type and location</p>
                  <p>Reference images or sketches</p>
                  <p>Dimensions and rough quantity</p>
                  <p>Budget and timing</p>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-3">Ready to start?</p>
                <p className="text-sm leading-7 text-ink/68">
                  If you want us to review your project checklist and turn it into a quotation path, send the details
                  now.
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
              <h2 className="heading-lg section-intro__title">Common checklist questions from buyers.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {faqs.map((item) => (
                <div key={item.q} className="card-luxury px-5 py-4">
                  <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">{item.a}</p>
                </div>
              ))}
            </div>
            <RelatedProjectLinks links={[{ label: "Project References", href: "/projects" }, { label: "How We Work", href: "/how-we-work" }, { label: "Request Pricing", href: "/contact" }]} />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
