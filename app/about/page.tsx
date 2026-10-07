import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { contact } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "About Atelier Marble Stone Supply",
  description:
    "Meet Atelier Marble in Yunfu, China. Our own processing and partner coordination support custom natural stone parts, drawing review, and export planning.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Atelier Marble Stone Supply",
    description:
      "Meet Atelier Marble in Yunfu, China. Our own processing and partner coordination support custom natural stone parts, drawing review, and export planning.",
    url: absoluteUrl("/about"),
    siteName,
  }
};

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
        <PageHero
          eyebrow="Company profile"
          title="Natural stone project supply from Yunfu, China."
          description="Our own processing and partner coordination support drawing-based stone components for trade and project buyers. Share drawings, quantities, material direction, and destination details."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-12">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-5">
                <p className="eyebrow-luxury">Yunfu-based project supply</p>
                <h2 className="heading-lg text-left">A practical stone partner for international projects.</h2>
                <p className="body-luxury max-w-2xl">
                  Atelier Marble combines our own processing with partner coordination from Yunfu for overseas buyers. We support material guidance, quotation preparation, and practical production coordination. The
                  working brief can begin with a drawing, BOQ,
                  dimensions, or a clear material direction.
                </p>
                <p className="body-luxury max-w-2xl">
                  Our scope includes custom countertops, hotel vanity tops, and cut-to-size architectural components. Material lots, finished dimensions, tolerances, inspection points, and delivery responsibilities are confirmed for each project.
                </p>
                <p className="body-luxury max-w-2xl">
                  Our role is to make the stone scope easier to review: connect the intended application with material
                  character, fabrication details, quality checks, packing, and the next project decision.
                </p>
              </div>
              <div className="card-luxury bg-stone p-8 text-sm leading-7 text-ink/70">
                Project reviews begin with the buyer&apos;s drawings, quantities, material direction, finish requirements, and destination. Specific production and inspection evidence should be confirmed for each order.
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Project review", "Scope, dimensions, quantities, and destination are brought into one practical brief."],
                ["Material direction", "Reference images and material preferences are reviewed before a production route is proposed."],
                ["Fabrication coordination", "Finished stone details are discussed against the intended application and project requirements."],
                ["Quality and packing", "Inspection scope and packing requirements are discussed against the confirmed order."]
              ].map(([title, copy]) => (
                <article key={title} className="card-luxury bg-stone p-6">
                  <h2 className="text-left font-title text-[1.22rem] font-medium uppercase leading-tight tracking-[0.04em] text-ink">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <p className="eyebrow-luxury">For the right project brief</p>
                <h2 className="heading-lg text-left">Bring the information you already have.</h2>
                <p className="body-luxury">A complete package is useful, but a first review can start with rough dimensions, a reference image, or the product scope you need to source.</p>
              </div>
              <div className="rounded-[14px] border border-ink/10 bg-stone p-8 text-sm leading-8 text-ink/70">
              <p>{contact.companyName}</p>
              <p>{contact.address}</p>
              <p>{contact.location}</p>
              <p>{contact.whatsapp}</p>
              {contact.emails.map((email) => (
                <p key={email}>{email}</p>
              ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 border-t border-ink/10 pt-8">
              <Link className="btn-luxury-fill" href="/contact">Upload CAD / BOQ for Quote</Link>
              <Link className="btn-luxury" href="/factory">Review Workshop Capability</Link>
              <a className="btn-luxury" href="/atelier-marble-supplier-profile.pdf" download>Download Supplier Profile (PDF)</a>
              <Link className="text-cta-luxury self-center" href="/custom-stone-fabrication-china">Review cut-to-size fabrication scope</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
