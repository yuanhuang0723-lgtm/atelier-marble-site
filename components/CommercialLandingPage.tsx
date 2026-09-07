import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "./JsonLd";
import PageHero from "./PageHero";
import PageShell from "./PageShell";
import { contact } from "../lib/assets";
import { absoluteUrl } from "../lib/seo";

type CommercialLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  details: string[];
  faqs?: { question: string; answer: string }[];
  metadata: Metadata;
};

export default function CommercialLandingPage({
  eyebrow, title, description, image, imageAlt, bullets, details, faqs, metadata
}: CommercialLandingPageProps) {
  const faqJsonLd = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }
    : null;

  return (
    <PageShell>
      <main>
        <JsonLd data={[
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: eyebrow, item: metadata.alternates && typeof metadata.alternates.canonical === "string" ? metadata.alternates.canonical : absoluteUrl("/") }] },
          { "@context": "https://schema.org", "@type": "Service", name: title, serviceType: eyebrow, description, provider: { "@type": "Organization", name: contact.companyName, url: absoluteUrl("/") }, areaServed: "Worldwide" },
          ...(faqJsonLd ? [faqJsonLd] : [])
        ]} />
        <PageHero eyebrow={eyebrow} title={title} description={description} backgroundImage={image} />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="card-luxury overflow-hidden bg-stone p-0">
              <img className="block aspect-[4/3] h-auto w-full object-cover" src={image} alt={imageAlt} />
              <div className="grid gap-4 p-7 md:p-9">
                <p className="eyebrow-luxury">Project supply scope</p>
                {details.map((detail) => <p key={detail} className="body-luxury border-b border-ink/10 pb-4 last:border-0 last:pb-0">{detail}</p>)}
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="eyebrow-luxury">Built around your drawings</p>
                <h2 className="heading-lg mt-4">A clear path from material direction to export delivery.</h2>
                <p className="body-luxury mt-5">Share the scope, dimensions, material direction, and destination. We can review the practical fabrication path before pricing.</p>
              </div>
              <ul className="grid gap-4 border-y border-ink/10 py-6">
                {bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-[0.98rem] leading-7 text-ink/75"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />{bullet}</li>)}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link className="btn-luxury-fill" href="/contact">Upload CAD / BOQ for Quote</Link>
                <a className="btn-luxury" href={contact.whatsappUrl}>Discuss on WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
        {faqs?.length ? (
          <section className="section-luxury bg-paper">
            <div className="container-luxury">
              <div className="section-intro section-intro--center">
                <p className="eyebrow-luxury">Buyer questions</p>
                <h2 className="heading-lg section-intro__title">Bathroom vanity top details, answered clearly.</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {faqs.map((faq) => (
                  <article key={faq.question} className="card-luxury px-5 py-5">
                    <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-[0.93rem] leading-7 text-ink/68">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        <section className="section-luxury-compact bg-stone text-center">
          <p className="eyebrow-luxury">Next step</p>
          <h2 className="heading-lg mx-auto mt-4 max-w-3xl">Have a drawing, BOQ, or reference image?</h2>
          <p className="body-luxury mx-auto mt-4 max-w-2xl">Send the information you already have. A complete project brief is helpful, but a practical first review can start with rough dimensions.</p>
          <Link className="btn-luxury mt-7" href="/contact">Request Project Pricing</Link>
        </section>
      </main>
    </PageShell>
  );
}
