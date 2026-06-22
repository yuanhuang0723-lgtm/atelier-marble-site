import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import PageShell from "../../../components/PageShell";
import { cleanDisplayTitle, getAssetBySlug, getCaseStudyForAsset, getProjectAssets, slugFromAsset } from "../../../lib/assets";
import { buildMailtoUrl, buildWhatsAppUrl } from "../../../lib/conversion";
import { absoluteUrl, projectPath } from "../../../lib/seo";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectAssets("all").map((asset) => ({ slug: slugFromAsset(asset) }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const asset = getAssetBySlug(slug);

  if (!asset) {
    return { title: "Project Not Found", robots: { index: false } };
  }

  const caseStudy = getCaseStudyForAsset(asset);
  const title = cleanDisplayTitle(caseStudy.title, caseStudy.label);
  const description = caseStudy.description.slice(0, 155);
  const path = projectPath(asset);

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      images: [{ url: absoluteUrl(caseStudy.hero.src), width: 1400, height: 1000 }]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const asset = getAssetBySlug(slug);

  if (!asset) {
    notFound();
  }

  const caseStudy = getCaseStudyForAsset(asset);
  const title = cleanDisplayTitle(caseStudy.title, caseStudy.label);
  const path = projectPath(asset);
  const inquiryContext = {
    sourcePage: path,
    intent: "Request similar project quote",
    projectType: caseStudy.label
  };

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: title,
          url: absoluteUrl(path),
          image: absoluteUrl(caseStudy.hero.src),
          description: caseStudy.description,
          about: [
            "architectural stone design studio",
            "bespoke natural stone manufacturer",
            asset.categoryLabel || asset.label,
            caseStudy.application
          ],
          hasPart: caseStudy.gallery.map((item) => ({
            "@type": "ImageObject",
            contentUrl: absoluteUrl(item.src),
            description: item.alt
          }))
        }}
      />
      <main>
        <section className="hero-architectural min-h-[78vh]">
          <img className="absolute inset-0 h-full w-full object-cover" src={caseStudy.hero.src} alt={caseStudy.hero.alt} />
          <div className="hero-overlay absolute inset-0" />
          <div className="hero-architectural__content container-luxury min-h-[78vh] pb-20 pt-36">
            <div className="mx-auto max-w-4xl text-center">
              <p className="hero-architectural__eyebrow">
                {asset.categoryLabel || asset.label}
              </p>
              <div className="title-wrapper">
                <h1 className="hero-architectural__title hero-architectural__title--wide">{title}</h1>
              </div>
              <p className="hero-architectural__copy mx-auto">{caseStudy.description}</p>
              <div className="hero-architectural__actions hero-architectural__actions--center">
                <a
                  className="btn-luxury-inverse border-white bg-white text-ink hover:bg-transparent hover:text-white"
                  href={buildWhatsAppUrl(inquiryContext)}
                >
                  Request Similar Project Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="mb-10 max-w-3xl">
              <h2 className="heading-lg">Gallery</h2>
            </div>
            <div className="grid auto-rows-fr gap-7 md:grid-cols-2 xl:grid-cols-3">
              {caseStudy.gallery.map((item) => (
                <figure key={`${item.category}-${item.filename}`} className="project-card">
                  <div className="project-card__media">
                    <img className="h-full w-full object-cover" src={item.src} alt={item.alt} loading="lazy" />
                  </div>
                  <figcaption className="project-card__body">
                    <p className="eyebrow-luxury">{asset.categoryLabel || caseStudy.label}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-luxury bg-ink text-center text-white">
          <div className="container-luxury">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">Inquiry</p>
            <h2 className="heading-lg mx-auto max-w-3xl text-white">Request Similar Project Pricing</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-8 text-white/60">
              Share drawings, sizes, budget, timeline, material preference, quantity, and destination market. Atelier
              Marble will suggest stone options and quote steps based on this project category.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a className="btn-luxury-inverse border-white bg-white text-ink hover:bg-transparent hover:text-white" href={buildWhatsAppUrl(inquiryContext)}>
                Discuss on WhatsApp
              </a>
              <a className="btn-luxury-inverse" href={buildMailtoUrl(inquiryContext)}>
                Start Project Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
