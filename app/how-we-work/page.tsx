import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import { ClipboardList, FileText, PackageCheck, ShieldCheck, MessageSquareQuote, Layers3 } from "lucide-react";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import ProjectProcurementInfo from "../../components/ProjectProcurementInfo";
import { contact } from "../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../lib/conversion";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Stone Project Workflow for Overseas Buyers",
  description:
    "Stone workflow for overseas buyers. Share scope, drawings, materials, and quantities to review quotation, inspection, packing, and delivery requirements.",
  alternates: { canonical: absoluteUrl("/how-we-work") },
  openGraph: {
    title: "How We Work with Overseas Buyers",
    description:
      "A project workflow for stone quotations, drawing review, material selection, inspection checkpoints, packing, and destination-specific delivery planning.",
    url: absoluteUrl("/how-we-work"),
    siteName,
    images: [{ url: absoluteUrl("/generated/guides/buyer-guide-hero.webp") }]
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
    title: "Project brief",
    copy: "Share material, application, location, estimated volume, and preferred delivery term."
  },
  {
    icon: FileText,
    title: "Drawing review",
    copy: "Dimensions, thickness, finish, edges, cut-outs, and quantities are reviewed together."
  },
  {
    icon: Layers3,
    title: "Material proposal",
    copy: "Current slab or lot options are matched to the confirmed application and specification."
  },
  {
    icon: MessageSquareQuote,
    title: "Quotation",
    copy: "Material, fabrication, packing, and the agreed delivery scope are brought into one quotation."
  },
  {
    icon: ShieldCheck,
    title: "Production checkpoints",
    copy: "Agree which production updates or inspection records the project requires, and confirm what evidence is available before quotation."
  },
  {
    icon: PackageCheck,
    title: "Packing & delivery questions",
    copy: "List wooden-crate requirements and shipment documents to discuss. Confirm responsibilities for the stated delivery term before quotation."
  }
];

const trustPoints = [
  "Clear scope review before pricing",
  "Project communication around agreed review points",
  "Packing and delivery responsibilities confirmed per project",
  "Support for hotel, commercial, kitchen, and custom stone projects"
];

export default function HowWeWorkPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);
  const whatsappUrl = buildWhatsAppUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "How We Work", path: "/how-we-work" }]} />
        <PageHero
          eyebrow="Overseas buyer workflow"
          title="A clear stone project workflow for overseas buyers."
          description="A six-step RFQ workflow for overseas buyers covering project briefs, drawing review, material proposal, quotation, production checkpoints, and delivery planning."
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
              <h2 className="heading-lg section-intro__title">A clearer workflow helps buyers prepare a useful quotation request.</h2>
              <p className="body-luxury section-intro__copy">
                Before comparing prices, buyers should clarify scope, timing, packing, and the responsibilities attached
                to the proposed delivery term.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "Scope clarity",
                  copy: "The brief keeps project type, dimensions, materials, and timing in one place."
                },
                {
                  title: "Process checkpoints",
                  copy: "Drawing review, material confirmation, quotation, production, QC, and packing are addressed in sequence."
                },
                {
                  title: "Usable project briefs",
                  copy: "A structured brief gives the team the information needed to review fabrication and delivery."
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
            <nav aria-label="Project scope pages" className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-ink/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
              <Link className="transition-colors hover:text-ink" href="/countertops">Countertops &amp; Vanity</Link>
              <Link className="transition-colors hover:text-ink" href="/projects/hotel-stone-supply">Hotel Stone Supply</Link>
              <Link className="transition-colors hover:text-ink" href="/architectural-stone">Architectural Stone</Link>
              <Link className="transition-colors hover:text-ink" href="/custom-stone-fabrication-china">Custom Stone</Link>
              <Link className="transition-colors hover:text-ink" href="/materials">Materials</Link>
            </nav>
          </div>
        </section>
        <ProjectProcurementInfo
          materialOptions="Material direction and current lot are reviewed against the application, quantity, finish, and project reference."
          customCapability="Discuss drawing review, material confirmation, inspection scope, packing requirements, and delivery responsibilities for the project."
        />

        <section className="section-luxury-compact bg-paper text-center">
          <h2 className="heading-lg mx-auto max-w-3xl">Ready to discuss a project?</h2>
          <p className="body-luxury mx-auto mt-4 max-w-2xl">
            Send the project details so scope, materials, quotation inputs, and delivery requirements can be reviewed.
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
