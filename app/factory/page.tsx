import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { cleanDisplayTitle, getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Stone Fabrication Capability",
  description:
    "Capability proof for hotel stone fabrication, custom CAD production, export packing, and bespoke natural stone manufacturing in Yunfu.",
  alternates: { canonical: absoluteUrl("/factory") },
  openGraph: {
    title: "Stone Fabrication Capability",
    description:
      "Real fabrication, craftsmanship, packing, and export capability behind a premium architectural stone design studio.",
    url: absoluteUrl("/factory"),
    siteName
  }
};

function getWorkshopImageSources() {
  const assetDir = path.join(process.cwd(), "public", "assets", "factory", "local");

  if (!fs.existsSync(assetDir)) {
    return [];
  }

  return fs
    .readdirSync(assetDir)
    .filter((file) => /^workshop-\d+\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/assets/factory/local/${file}`);
}

export default function FactoryPage() {
  const defaults = getAssets("factory");
  const sources = getWorkshopImageSources();
  const imageCount = Math.max(defaults.length, sources.length);
  const images = Array.from({ length: imageCount }, (_, index) => {
    const fallback = defaults[index % defaults.length];
    return {
      ...fallback,
      filename: `workshop-local-${index + 1}`,
      src: sources[index] ?? fallback.src,
      alt: fallback.alt
    };
  });

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Capability proof"
          title="Factory direct supply, presented with restraint."
          description="Real workshop, craftsmanship, production, and packing images support hotel stone fabrication and bespoke natural stone manufacturing while keeping authenticity and export credibility."
          backgroundImage="/assets/factory/factory-hero-workshop.png"
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Export production with visible proof.</h2>
              <p className="body-luxury section-intro__copy">
                The workshop imagery supports Google and buyers understanding Atelier Marble as a high-quality stone
                design studio with export manufacturing capability, not a thin catalog site.
              </p>
            </div>
            <div className="factory-gallery grid gap-7 md:grid-cols-4">
              {images.map((asset, index) => (
                <article
                  key={asset.filename}
                  className={`card-luxury overflow-hidden p-3 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <div className={`media-luxury bg-[#f7f2ea] ${index === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                    <img className="block h-full w-full object-cover object-center" src={asset.src} alt={asset.alt} loading="lazy" />
                  </div>
                  <div className="px-4 py-5">
                    <p className="eyebrow-luxury mb-2">{asset.label}</p>
                    <h3 className="heading-md factory-gallery__title card-title">{cleanDisplayTitle(asset.title, asset.label)}</h3>
                  </div>
                </article>
              ))}
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
