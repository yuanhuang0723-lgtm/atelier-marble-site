import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "./PageHero";
import PageShell from "./PageShell";
import { contact } from "../lib/assets";

type CommercialLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  details: string[];
  metadata: Metadata;
};

export default function CommercialLandingPage({
  eyebrow, title, description, image, imageAlt, bullets, details, metadata
}: CommercialLandingPageProps) {
  return (
    <PageShell>
      <main>
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
