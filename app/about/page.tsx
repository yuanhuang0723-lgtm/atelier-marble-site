import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { contact, getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Atelier Marble, a Yunfu-based luxury stone design studio focused on export-ready natural stone projects.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Us",
    description:
      "Atelier Marble develops bespoke stone solutions for hotels, kitchens, interiors, furniture, and sculptural projects.",
    url: absoluteUrl("/about"),
    siteName
  }
};

export default function AboutPage() {
  const workshopImages = getAssets("factory", 4);

  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
        <PageHero
          eyebrow="Company profile"
          title="Built for export buyers who need dependable stone supply."
          description="Atelier Marble is a Yunfu-based stone design studio focused on hotel projects, kitchen surfaces, interiors, furniture, and custom sculptural work with clear communication and export-ready execution."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-12">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-5">
                <p className="eyebrow-luxury">Yunfu-based project supply</p>
                <h2 className="heading-lg text-left">A practical stone partner for international projects.</h2>
                <p className="body-luxury max-w-2xl">
                  Atelier Marble supports overseas buyers with project references, material guidance, quotation
                  preparation, and practical production coordination. The working brief can begin with a drawing, BOQ,
                  dimensions, or a clear material direction.
                </p>
                <p className="body-luxury max-w-2xl">
                  Our role is to make the stone scope easier to review: connect the intended application with material
                  character, fabrication details, quality checks, packing, and the next project decision.
                </p>
              </div>
              <div className="card-luxury overflow-hidden bg-stone p-3">
                <img className="aspect-[4/3] w-full object-cover" src="/assets/factory/factory-hero-workshop.png" alt="Stone workshop environment used for fabrication and export preparation review" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Project review", "Scope, dimensions, quantities, and destination are brought into one practical brief."],
                ["Material direction", "Reference images and material preferences are reviewed before a production route is proposed."],
                ["Fabrication coordination", "Finished stone details are discussed against the intended application and project requirements."],
                ["Quality and packing", "Inspection and protective export preparation remain part of the project conversation."]
              ].map(([title, copy]) => (
                <article key={title} className="card-luxury bg-stone p-6">
                  <h2 className="text-left font-title text-[1.22rem] font-medium uppercase leading-tight tracking-[0.04em] text-ink">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workshopImages.map((asset, index) => (
                <figure key={asset.filename} className="overflow-hidden rounded-[14px] border border-ink/10 bg-stone p-2">
                  <img className="aspect-[4/3] w-full rounded-[10px] object-cover" src={asset.src} alt={`Stone workshop reference ${String(index + 1).padStart(2, "0")} for fabrication and project preparation`} loading="lazy" />
                  <figcaption className="px-2 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/50">Workshop reference {String(index + 1).padStart(2, "0")}</figcaption>
                </figure>
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
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
