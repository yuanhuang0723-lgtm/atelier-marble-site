import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "../../components/InquiryForm";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import { contact, inquiryProjectTypes } from "../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../lib/conversion";
import { absoluteUrl, organizationJsonLd, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Project Consultation for Stone Buyers",
  description:
    "Request consultation from Atelier Marble for hotel projects, stone slabs, kitchens, architectural interiors, furniture, or carved stone decor from China.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Project Consultation for Stone Buyers",
    description:
      "Request consultation from Atelier Marble for hotel projects, stone slabs, kitchens, architectural interiors, furniture, or carved stone decor from China.",
    url: absoluteUrl("/contact"),
    siteName,
    images: [{ url: absoluteUrl("/materials/featured-covers/kitchen-countertop.webp") }]
  }
};

const inquiryContext = {
  sourcePage: "/contact",
  intent: "Direct project consultation",
  projectType: inquiryProjectTypes[1]
};

const allowedSourcePath = /^\/(?:[a-z0-9-]+\/?)*$/;

function getInquiryContext(searchParams: { sourcePage?: string; projectType?: string }) {
  const sourcePage = typeof searchParams.sourcePage === "string" && allowedSourcePath.test(searchParams.sourcePage) ? searchParams.sourcePage : "/contact";
  const projectType = typeof searchParams.projectType === "string" && inquiryProjectTypes.includes(searchParams.projectType as (typeof inquiryProjectTypes)[number])
    ? searchParams.projectType
    : inquiryContext.projectType;
  return { ...inquiryContext, sourcePage, projectType };
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ sourcePage?: string; projectType?: string }> }) {
  const context = getInquiryContext(await searchParams);
  const emailUrl = buildMailtoUrl(context);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Project Consultation & Quotation Request",
    url: absoluteUrl("/contact"),
    description: String(metadata.description),
    mainEntity: organizationJsonLd()
  };

  return (
    <PageShell showFloatingWhatsApp={false}>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Project Consultation", path: "/contact" }]} />
        <JsonLd data={contactJsonLd} />
        <section className="bg-paper px-5 pb-16 pt-28 md:px-12 md:pb-24 md:pt-32">
          <div className="container-luxury">
            <header className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="eyebrow-luxury mb-3">Contact Atelier Marble</p>
              <h1 className="font-title text-[clamp(30px,4vw,48px)] font-medium leading-[1.1] tracking-[0.02em] text-ink">
                Tell us about your stone project.
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-ink/65">
                Your email and a short note are enough. Drawings and other details can follow by email.
              </p>
            </header>
            <div className="mx-auto grid max-w-5xl min-w-0 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] lg:items-start lg:gap-8">
              <InquiryForm context={context} defaultProjectType={context.projectType} projectOptions={[...inquiryProjectTypes]} simple />
              <aside className="min-w-0 rounded-[20px] border border-ink/10 bg-stone p-6 md:p-8">
                <h2 className="font-title text-2xl font-medium leading-tight text-ink">Prefer to talk directly?</h2>
                <p className="mt-3 text-sm leading-7 text-ink/65">Send a message or share drawings through WhatsApp or email.</p>
                <a className="btn-luxury mt-5 flex w-full justify-center" href={buildWhatsAppUrl(context)} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-ink/55">Email</p>
                  <a className="mt-2 inline-block break-all text-sm font-medium text-ink underline decoration-ink/25 underline-offset-4" href={emailUrl}>
                    {contact.emails[0]}
                  </a>
                  <p className="mt-2 text-xs leading-6 text-ink/55">Opens your email app. You can also copy this address.</p>
                </div>
                <div className="mt-5 text-sm leading-7 text-ink/65">
                  <p>{contact.companyName}</p>
                  <p>{contact.location}</p>
                  <p>{contact.whatsapp}</p>
                </div>
                <Link className="mt-6 inline-block text-sm text-ink/65 underline underline-offset-4" href="/how-we-work">How we work</Link>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
