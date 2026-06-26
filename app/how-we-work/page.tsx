import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, FileText, PackageCheck, ShieldCheck, MessageSquareQuote, Layers3 } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { contact } from "../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../lib/conversion";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "How We Work for Export Buyers",
  description:
    "How Atelier Marble handles stone quotation, material matching, technical review, fabrication, export packing, and project coordination for overseas buyers.",
  alternates: { canonical: absoluteUrl("/how-we-work") },
  openGraph: {
    title: "How We Work for Export Buyers",
    description:
      "A clear export-buyer workflow for stone quotation, material selection, fabrication review, and packing coordination.",
    url: absoluteUrl("/how-we-work"),
    siteName
  }
};

const inquiryContext = {
  sourcePage: "/how-we-work",
  intent: "Project workflow review",
  projectType: "Luxury Stone Supplier China"
};

const steps = [
  {
    icon: ClipboardList,
    title: "Request review",
    copy: "You send scope, drawings, dimensions, destination market, and the target material direction."
  },
  {
    icon: Layers3,
    title: "Match material and scale",
    copy: "We compare slab options, finished-product routes, and the fabrication scale that fits the project."
  },
  {
    icon: FileText,
    title: "Prepare quotation",
    copy: "We reply with the pricing direction, packing logic, and the information needed for a clean procurement decision."
  },
  {
    icon: PackageCheck,
    title: "Package for export",
    copy: "When the order moves forward, packing and loading are coordinated for safer international shipment."
  }
];

const trustPoints = [
  "Clear scope review before pricing",
  "Factory-direct communication",
  "Export packing prepared for shipment",
  "Support for hotel, kitchen, and custom stone projects"
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you quote overseas stone projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We review scope, drawings, dimensions, material direction, and destination market before preparing a project-oriented quotation."
      }
    },
    {
      "@type": "Question",
      name: "Do you support hotel and export buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atelier Marble supports hotel projects, stone slab supply, custom fabrication, and export packing for overseas buyers."
      }
    },
    {
      "@type": "Question",
      name: "What information helps you respond faster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project type, budget range, timeline, drawings, and destination market help us match the right material and prepare a quicker quotation."
      }
    }
  ]
};

export default function HowWeWorkPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <JsonLd data={faqSchema} />
        <PageHero
          eyebrow="Export buyer workflow"
          title="How we turn a project inquiry into a quotation."
          description="A direct workflow for overseas buyers comparing stone suppliers in China, hotel stone fabrication, and custom stone project pricing."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-start">
            <div className="grid gap-4 md:grid-cols-2">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <article key={step.title} className="card-luxury px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-accent)]">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <p className="font-title text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                        Step
                      </p>
                    </div>
                    <h2 className="mt-4 font-title text-[1.1rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-[0.94rem] leading-7 text-ink/68">{step.copy}</p>
                  </article>
                );
              })}
            </div>
            <aside className="space-y-6">
              <div className="rounded-[28px] border border-ink/10 bg-stone p-8 md:p-10">
                <p className="eyebrow-luxury mb-4">What buyers get</p>
                <div className="grid gap-4">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <ShieldCheck size={18} className="mt-1 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                      <p className="text-sm leading-7 text-ink/72">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-3">Fastest way to quote</p>
                <p className="text-sm leading-7 text-ink/68">
                  Send drawings, project type, budget range, and destination market. This gives us enough context to
                  recommend material, packing, and project scope with less back-and-forth.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a className="btn-luxury" href={whatsappUrl}>
                    Discuss on WhatsApp
                  </a>
                  <a className="text-cta-luxury self-center" href={emailUrl}>
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
              <p className="eyebrow-luxury">Why this helps</p>
              <h2 className="heading-lg section-intro__title">A clearer workflow usually means a faster quotation.</h2>
              <p className="body-luxury section-intro__copy">
                High-intent buyers want to know whether you can handle scope, timing, packing, and export coordination
                before they ask for price.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "Less friction",
                  copy: "Buyers get a direct path from inquiry to quotation without having to explain the project repeatedly."
                },
                {
                  title: "More trust",
                  copy: "The process reads like an export project team, not a generic contact form."
                },
                {
                  title: "Better leads",
                  copy: "People who submit after reading this page are usually closer to real purchasing decisions."
                }
              ].map((item) => (
                <div key={item.title} className="card-luxury px-6 py-6">
                  <MessageSquareQuote size={18} className="text-[var(--color-accent)]" aria-hidden="true" />
                  <h3 className="mt-4 font-title text-[1.04rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-7 text-ink/68">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-luxury-compact bg-paper text-center">
          <h2 className="heading-lg mx-auto max-w-3xl">Ready to discuss a project?</h2>
          <p className="body-luxury mx-auto mt-4 max-w-2xl">
            Send the project details and we will review the material path, pricing logic, and export support steps.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link className="btn-luxury" href="/contact">
              Request Project Pricing
            </Link>
            <a className="btn-luxury" href={whatsappUrl}>
              Discuss on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
