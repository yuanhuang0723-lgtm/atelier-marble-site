import Link from "next/link";
import InquiryForm from "./InquiryForm";
import PageShell from "./PageShell";
import TrustStrip from "./TrustStrip";
import { Asset, cleanCardCopy } from "../lib/assets";
import { buildWhatsAppUrl } from "../lib/conversion";

type AdsLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  keywords: string[];
  proofTitle: string;
  proofCopy: string;
  gallery: Asset[];
  projectType: string;
  sourcePath: string;
  galleryImageFit?: "cover" | "contain";
};

export default function AdsLandingPage({
  eyebrow,
  title,
  description,
  heroImage,
  heroAlt,
  keywords,
  proofTitle,
  proofCopy,
  gallery,
  projectType,
  sourcePath,
  galleryImageFit = "cover"
}: AdsLandingPageProps) {
  const removedProofSections = new Set([
    "Built for high-value kitchen and villa projects.",
    "Custom stone furniture for premium interiors.",
    "Stone art pieces with export production support.",
    "Real countertop and coffee table references.",
    "Finished stone references for vanity tops and cabinet panels."
  ]);
  const inquiryContext = {
    sourcePage: sourcePath,
    intent: "Google Ads landing page inquiry",
    projectType
  };

  return (
    <PageShell>
      <main>
        <section className="hero-architectural min-h-[86vh]">
          <img className="absolute inset-0 h-full w-full object-cover" src={heroImage} alt={heroAlt} />
          <div className="hero-overlay absolute inset-0" />
          <div className="hero-architectural__content hero-architectural__content--center container-luxury min-h-[86vh] pb-24 pt-40">
            <div className="mx-auto max-w-4xl text-center">
              <p className="hero-architectural__eyebrow">{eyebrow}</p>
              <div className="title-wrapper">
                <h1
                  className={`hero-architectural__title hero-architectural__title--wide ${
                    sourcePath === "/stone-sculptures"
                      ? "hero-architectural__title--singleline hero-architectural__title--stretch"
                      : sourcePath === "/kitchen-countertops"
                        ? "hero-architectural__title--singleline hero-architectural__title--countertop"
                        : ""
                  }`}
                >
                  {title}
                </h1>
              </div>
              <p className="hero-architectural__copy mx-auto">{description}</p>
              <div className="hero-architectural__actions hero-architectural__actions--center">
                <a className="btn-luxury-inverse border-white bg-white text-ink hover:bg-transparent hover:text-white" href={buildWhatsAppUrl(inquiryContext)}>
                  Discuss Your Project
                </a>
                <Link className="btn-luxury-inverse" href="#inquiry">
                  Request Project Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
        <TrustStrip />

        {removedProofSections.has(proofTitle) ? null : (
          <section className="section-luxury bg-paper">
            <div className="container-luxury grid gap-14 md:grid-cols-[0.8fr_1fr] md:items-start">
              <div className="section-intro section-intro--center md:justify-items-start md:text-left">
                <p className="eyebrow-luxury mb-4">Project fit</p>
                <h2 className="heading-lg project-proof-heading section-intro__title md:mx-0">{proofTitle}</h2>
                <p className="body-luxury section-intro__copy md:mx-0">{proofCopy}</p>
                <Link className="text-cta-luxury mt-8" href="/projects">
                  Review Real Project References
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {keywords.map((keyword) => (
                  <div key={keyword} className="card-luxury px-6 py-5">
                    <p className="text-sm font-light leading-7 text-ink/70">{keyword}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Real material and production references.</h2>
            </div>
              <div className={galleryImageFit === "contain" ? "gallery-fit-contain grid gap-7 md:grid-cols-3" : "grid gap-7 md:grid-cols-3"}>
                {gallery.map((asset, index) => (
                <article
                  key={`${asset.category}-${asset.filename}`}
                  className={`project-card project-card--vertical ${projectType === "Custom Furniture & Sculptures" && index === 1 ? "project-card--layered" : ""}`}
                >
                  <div className="project-card__media">
                    {projectType === "Custom Furniture & Sculptures" && index === 1 ? (
                      <>
                        <img
                          className="project-card__media-bg"
                          src="/assets/carving-decor/local/7b7cb542-0dbc-4626-b9cc-f663dbee6d06.png"
                          alt="real carved stone workshop background with finished sculptural pieces"
                          loading="lazy"
                        />
                        <img
                          className="project-card__media-fg"
                          src={asset.src}
                          alt={asset.alt}
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <img className="h-full w-full object-cover" src={asset.src} alt={asset.alt} loading="lazy" />
                    )}
                  </div>
                  <div className={`project-card__body ${projectType === "Custom Furniture & Sculptures" && index === 1 ? "project-card__body--center" : ""}`}>
                    <p className="project-card__category">{projectType}</p>
                    <h3 className={`project-card__title card-title ${projectType === "Custom Furniture & Sculptures" && index === 1 ? "project-card__title--center" : ""}`}>{asset.label || `Reference ${String(index + 1).padStart(2, "0")}`}</h3>
                    <p className={`project-card__copy ${projectType === "Custom Furniture & Sculptures" && index === 1 ? "project-card__copy--center" : ""}`}>{cleanCardCopy(asset.description, asset.label)}</p>
                    <span className="project-card__cta">Request Project Quote</span>
                  </div>
                </article>
                ))}
              </div>
          </div>
        </section>

        <section id="inquiry" className="section-luxury bg-paper">
          <div className="container-luxury grid gap-12 md:grid-cols-[0.8fr_1fr] md:items-start">
            <div className="section-intro section-intro--center md:justify-items-start md:text-left">
              <p className="eyebrow-luxury mb-4">Short inquiry</p>
              <h2 className="heading-lg section-intro__title md:mx-0">Start project consultation.</h2>
              <p className="body-luxury section-intro__copy md:mx-0">
                Share drawings, approximate sizes, material direction, quantity, budget, and destination market.
                Atelier Marble can respond with stone suggestions and production guidance.
              </p>
              <a className="text-cta-luxury mt-8" href={buildWhatsAppUrl(inquiryContext)}>
                Discuss Project Requirements
              </a>
            </div>
            <InquiryForm context={inquiryContext} defaultProjectType={projectType} />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
