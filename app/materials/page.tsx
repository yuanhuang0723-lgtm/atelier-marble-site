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
          eyebrow="Material reference library"
          title="Review stone character before specifying a project."
          description="Browse the current material reference archive by slab character, visual tone, and intended application. Share a reference image with your project brief so the fabrication review starts from the same visual direction."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Material references for project decisions.</h2>
              <p className="body-luxury section-intro__copy">
                The archive is a visual starting point, not a promise of stock or a substitute for a current slab
                check. Ask us to confirm availability, thickness, finish, matching, and fabrication suitability.
              </p>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {materials.map((asset, index) => (
                <article key={asset.filename} className="card-luxury p-3">
                  <div className="media-luxury aspect-[4/3]">
                    <img className="h-full w-full object-cover" src={asset.src} alt={`Natural stone slab reference ${String(index + 1).padStart(2, "0")} for countertop, vanity, and interior project review`} loading="lazy" />
                  </div>
                  <div className="px-4 py-6">
                    <p className="eyebrow-luxury mb-3">Slab reference {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="heading-md card-title">{cleanDisplayTitle(asset.title, "Natural Stone Reference")}</h3>
                    <p className="mt-4 text-sm font-light leading-7 text-ink/60">Visual reference for tone, movement, and surface character. Confirm the current material name and technical details before production.</p>
                    <Link className="text-cta-luxury mt-5" href="/contact">Request material review</Link>
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
