import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { cleanDisplayTitle, getAssets } from "../../lib/assets";
import { getPublishedFactoryJournalEntries } from "../../lib/factory-journal";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Stone Fabrication Factory in China",
  description:
    "Capability proof for a stone fabrication factory in Yunfu, China, including hotel stone work, CAD production, export packing, and quality review.",
  alternates: { canonical: absoluteUrl("/factory") },
  openGraph: {
    title: "Stone Fabrication Factory in China",
    description:
      "Capability proof for a stone fabrication factory in Yunfu, China, including hotel stone work, CAD production, export packing, and quality review.",
    url: absoluteUrl("/factory"),
    siteName
  }
};

export default async function FactoryPage() {
  const factoryJournalEntries = await getPublishedFactoryJournalEntries();
  const defaults = getAssets("factory");
  const sources = factoryJournalEntries.map((entry) => entry.image);
  const imageCount = sources.length || defaults.length;
  const images = Array.from({ length: imageCount }, (_, index) => {
    const fallback = defaults[index % defaults.length];
    const journal = factoryJournalEntries[index];
    return {
      ...fallback,
      filename: journal?.slug || `workshop-local-${index + 1}`,
      title: journal?.title || fallback.title,
      src: sources[index] ?? fallback.src,
      alt: journal?.alt || `Workshop production reference ${String(index + 1).padStart(2, "0")} for stone fabrication and export preparation`
    };
  });

  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Factory Capability", path: "/factory" }]} />
        <PageHero
          eyebrow="Capability proof"
          title="Stone fabrication factory in China with visible production proof."
          description="Real workshop, craftsmanship, production, and packing images support hotel stone fabrication and bespoke natural stone manufacturing while keeping authenticity and export credibility."
          backgroundImage="/assets/factory/factory-hero-workshop.webp"
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Export production with visible proof.</h2>
              <p className="body-luxury section-intro__copy">
                The workshop imagery shows how material review, fabrication, inspection, and packing connect across an
                export stone project. It gives buyers practical context beyond a product catalogue.
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Scope review", "Drawings, quantities, material direction, and destination are checked before a quotation path is proposed."],
                ["02", "Fabrication", "Cutting, shaping, edge finishing, and surface work are coordinated around the approved scope."],
                ["03", "Quality review", "Dimensions, finish, visible surface character, and project details are reviewed before packing."],
                ["04", "Export preparation", "Finished pieces are protected, grouped, and prepared for the agreed delivery plan."]
              ].map(([number, title, copy]) => (
                <article key={number} className="card-luxury bg-stone p-6">
                  <p className="eyebrow-luxury">{number}</p>
                  <h2 className="mt-4 text-left font-title text-[1.28rem] font-medium uppercase leading-tight tracking-[0.04em] text-ink">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mb-10 rounded-[14px] border border-ink/10 bg-stone p-7">
              <p className="eyebrow-luxury">Factory journal</p>
              <h2 className="mt-3 text-left font-title text-[1.8rem] font-medium uppercase leading-tight tracking-[0.03em] text-ink">Field notes, not customer case studies.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/68">These notes describe workshop references and production stages. They are separate from project case studies and do not identify a customer, order quantity, certification, or completed delivery unless that information is verified and published.</p>
            </div>
            <div className="factory-gallery grid gap-7 md:grid-cols-4">
              {images.map((asset, index) => {
                const journal = factoryJournalEntries[index];
                return (
                <article
                  key={asset.filename}
                  className={`card-luxury overflow-hidden p-3 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <div className={`media-luxury bg-[#f7f2ea] ${index === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                    <img className="block h-full w-full object-cover object-center" src={asset.src} alt={asset.alt} loading="lazy" />
                  </div>
                  <div className="px-4 py-5">
                    <p className="eyebrow-luxury mb-2">{journal?.category || "Workshop reference"} · {journal?.date || ""}</p>
                    <h3 className="heading-md factory-gallery__title card-title">{cleanDisplayTitle(asset.title, "Stone Workshop Reference")}</h3>
                    {journal ? <p className="mt-3 text-sm leading-7 text-ink/65">{journal.summary}</p> : null}
                  </div>
                </article>
                );
              })}
            </div>
          </div>
          <div className="container-luxury mt-16">
            <Link className="text-cta-luxury" href="/contact">
              Check Availability
            </Link>
            <Link className="text-cta-luxury ml-8" href="/projects">
              View Project References
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
