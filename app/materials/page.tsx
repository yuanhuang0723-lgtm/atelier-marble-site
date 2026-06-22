import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { cleanDisplayTitle, getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Bespoke Natural Stone Materials",
  description:
    "Texture-focused marble materials for architectural stone design studio projects, custom countertops, hotels, and bespoke natural stone manufacturing.",
  alternates: { canonical: absoluteUrl("/materials") },
  openGraph: {
    title: "Bespoke Natural Stone Materials",
    description:
      "Review marble textures and stone surfaces for bespoke natural stone manufacturing and international architectural projects.",
    url: absoluteUrl("/materials"),
    siteName
  }
};

export default function MaterialsPage() {
  const materials = getAssets("materials");

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Texture and stone character"
          title="Materials selected for architectural stone design."
          description="Enhanced material images help buyers review veining, tone, surface finish, and visual consistency before custom stone countertops China, hotel interiors, or architectural projects."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Review texture, tone, and finish.</h2>
              <p className="body-luxury section-intro__copy">
                These enhanced material images support architectural stone design studio decisions before buyers
                request samples, matching, or bespoke natural stone manufacturing options.
              </p>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {materials.map((asset) => (
                <article key={asset.filename} className="card-luxury p-3">
                  <div className="media-luxury aspect-[4/3]">
                    <img className="h-full w-full object-cover" src={asset.src} alt={asset.alt} loading="lazy" />
                  </div>
                  <div className="px-4 py-6">
                    <p className="eyebrow-luxury mb-3">{asset.label}</p>
                    <h3 className="heading-md card-title">{cleanDisplayTitle(asset.title, asset.label)}</h3>
                    <p className="mt-4 text-sm font-light leading-7 text-ink/60">{asset.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="container-luxury mt-16">
            <Link className="text-cta-luxury" href="/contact">
              Get Material Suggestion
            </Link>
            <Link className="text-cta-luxury ml-8" href="/projects">
              See Stone Project Uses
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
