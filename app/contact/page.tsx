import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "../../components/InquiryForm";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { contact, inquiryProjectTypes } from "../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../lib/conversion";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Project Consultation for Stone Buyers",
  description:
    "Request project consultation from Atelier Marble for hotel projects, stone slabs, kitchens, architectural interiors, furniture, or carved stone decor.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Project Consultation for Stone Buyers",
    description:
      "Discuss project pricing, material suggestions, and export production with a luxury stone supplier in China.",
    url: absoluteUrl("/contact"),
    siteName
  }
};

const inquiryContext = {
  sourcePage: "/contact",
  intent: "Direct project consultation",
  projectType: "Luxury Vanity Tops & Cabinet Panels"
};

export default function ContactPage() {
  const emailUrl = buildMailtoUrl(inquiryContext);

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Project inquiry system"
          title="Request a quotation for hotel stone, slabs, and custom fabrication."
          description="Atelier Marble uses a structured consultation flow for hotel projects, stone slab supply, kitchens, interiors, and custom stone work so buyers can move toward accurate pricing faster."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-12 lg:grid-cols-[1.1fr_0.72fr] lg:items-start">
            <InquiryForm
              context={inquiryContext}
              defaultProjectType={inquiryProjectTypes[1]}
              projectOptions={[...inquiryProjectTypes]}
            />
            <aside className="space-y-7">
              <div className="space-y-4 rounded-[28px] border border-ink/10 bg-stone p-8 md:p-10">
                <p className="eyebrow-luxury">Before you submit</p>
                <h2 className="heading-lg">Help us quote the right solution.</h2>
                <p className="body-luxury">
                  The more clearly you describe scope, timeline, budget, and drawings, the faster we can return a
                  practical project path and pricing range.
                </p>
                <div className="grid gap-4 pt-2 text-sm leading-7 text-ink/70">
                  <p>Project type: hotel, kitchen, commercial interior, or sculpture</p>
                  <p>Budget range: helps us match fabrication scale</p>
                  <p>Timeline: keeps procurement and production aligned</p>
                  <p>Drawings: useful for technical review and quote preparation</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a className="btn-luxury" href={buildWhatsAppUrl(inquiryContext)}>
                    Discuss Project Requirements
                  </a>
                  <a className="text-cta-luxury self-center" href={emailUrl}>
                    Email Project Details
                  </a>
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-4">What a strong inquiry includes</p>
                <div className="grid gap-4">
                  {[
                    "Project scope: hotel, villa, residence, or commercial interior",
                    "Material direction: marble, slab selection, finished product, or sculpture",
                    "Scale: rough dimensions, quantities, and destination market",
                    "Files: drawings, inspiration references, or BOQ"
                  ].map((item) => (
                    <p key={item} className="text-sm leading-7 text-ink/70">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8 text-sm font-light leading-8 text-ink/60">
                <p>{contact.companyName}</p>
                <p>{contact.address}</p>
                <p>{contact.location}</p>
                <p>{contact.whatsapp}</p>
                {contact.emails.map((email) => (
                  <p key={email}>{email}</p>
                ))}
              </div>
              <div className="rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="eyebrow-luxury mb-4">Review before inquiry</p>
                <div className="flex flex-col gap-4">
                  <Link className="text-cta-luxury" href="/projects">
                    Review Project References
                  </Link>
                  <Link className="text-cta-luxury" href="/materials">
                    Compare Material Options
                  </Link>
                  <Link className="text-cta-luxury" href="/hotel-projects">
                    Check Hotel Project Fit
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
