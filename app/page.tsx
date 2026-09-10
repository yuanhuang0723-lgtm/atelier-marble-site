import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import { cleanCardCopy, cleanDisplayTitle, contact, getAssets } from "../lib/assets";
import { absoluteUrl, siteName } from "../lib/seo";

export const metadata: Metadata = {
  title: "Stone Supplier in China | Atelier Marble",
  description:
    "Custom stone fabrication and project supply from Yunfu, China for hotel contractors, architects, developers, and importers. Send your CAD or BOQ for review.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Stone Supplier & Fabrication China | Atelier Marble",
    description:
      "Custom stone fabrication and project supply from Yunfu, China for hotel contractors, architects, developers, and importers. Send your CAD or BOQ for review.",
    url: absoluteUrl("/"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp"), width: 1536, height: 1024 }]
  }
};

const buyerIntentCards = [
  {
    title: "Stone Countertop & Coffee Table",
    href: "/countertops",
    image: "/assets/home-top-cover.webp",
    alt: "Marble dining table and stone countertop in a contemporary interior",
    question: "STONE COUNTERTOP & COFFEE TABLE REFERENCE."
  },
  {
    title: "Cabinet Panels + Vanity Tops",
    href: "/countertops/vanity-tops",
    image: "/assets/vanity-cabinet/cover.webp",
    alt: "Luxury stone vanity top and cabinet panels in a premium bathroom interior",
    question: "STONE VANITY TOP AND CABINET PANEL REFERENCE."
  },
  {
    title: "Custom Stone Sculptures",
    href: "/custom-stone-fabrication-china",
    image: "/assets/carving-decor/cover.webp",
    alt: "Carved stone sculpture displayed in a contemporary interior",
    question: "CUSTOM STONE SCULPTURE REFERENCE FOR INTERIOR AND LOUNGE PROJECTS."
  },
  {
    title: "Hotel & Hospitality Projects",
    href: "/projects/hotel-stone-supply",
    image: "/materials/categories/hotel-projects.webp",
    alt: "Luxury hotel stone project with marble flooring and wall cladding",
    question: "HOTEL PROJECT SUPPLY FOR DEVELOPERS, CONTRACTORS, AND PROCUREMENT TEAMS."
  }
];

export default function HomePage() {
  const [kitchen] = getAssets("kitchen-countertop");
  const [coffee] = getAssets("coffee-table");
  const [sculpture] = getAssets("carving-decor");
  const [support] = getAssets("factory");

  const proofCards = [kitchen, coffee, sculpture, support].filter(Boolean).map((asset) => ({
    asset,
    coverSrc:
      asset.category === "kitchen-countertop"
        ? "/materials/featured-covers/kitchen-countertop.webp"
        : asset.category === "coffee-table"
          ? "/materials/featured-covers/coffee-table.webp"
          : asset.category === "carving-decor"
            ? "/materials/featured-covers/carving-decor.webp"
            : "/materials/featured-covers/project-support.webp",
    coverAlt: asset.alt
  }));

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: absoluteUrl("/"),
          description:
            "Custom stone fabrication and project supply from Yunfu, China for hotel contractors, architects, developers, and importers."
        }}
      />
      <main>
        <section className="hero-architectural min-h-screen">
          <Image
            className="object-cover"
            src="/materials/hero/atelier-marble-luxury-hero.webp"
            alt="Marble architectural interior with natural stone surfaces"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="hero-architectural__content hero-architectural__content--center container-luxury">
            <div className="mx-auto max-w-4xl">
              <p className="hero-architectural__eyebrow">
                Atelier Marble
              </p>
              <h1 className="hero-architectural__title hero-architectural__title--home">
                Custom Stone Fabrication &amp; Project Supply from Yunfu, China
              </h1>
              <p className="hero-architectural__copy mx-auto max-w-2xl">
                Atelier Marble is a stone supplier in China for hotel contractors, architects, developers, and
                importers. Send your CAD, BOQ, or dimensions for material review, fabrication planning, and export
                quotation.
              </p>
              <div className="hero-architectural__actions hero-architectural__actions--center">
                <Link className="btn-luxury-inverse border-white bg-white text-ink hover:bg-transparent hover:text-white" href="/contact">
                  Upload CAD / BOQ for Quote
                </Link>
                <Link className="btn-luxury-inverse" href="/projects">
                  View Project References
                </Link>
                <Link className="btn-luxury-inverse" href="/how-we-work">
                  How We Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Buyer intent categories</p>
              <h2 className="heading-lg buyer-intent-heading section-intro__title">Is this suitable for your project?</h2>
            </div>
            <div className="buyer-intent-layout">
              <div className="buyer-intent-top">
                {buyerIntentCards.slice(0, 3).map((card, index) => (
                  <Link
                    key={card.title}
                    className={`project-card buyer-intent-card buyer-intent-card--${index === 0 ? "featured" : index === 1 ? "medium" : "small"} group`}
                    href={card.href}
                  >
                    <div className="project-card__media">
                      <img
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                        src={card.image}
                        alt={card.alt}
                      />
                    </div>
                    <div className="project-card__body">
                      <p className="project-card__category">{card.question}</p>
                      <h3 className="project-card__title card-title">{card.title}</h3>
                      <p className="project-card__copy">
                        Premium stone references for residential, hospitality, and commercial project sourcing.
                      </p>
                      <span className="project-card__cta project-card__cta--ghost">Request Project Quote</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link className="buyer-intent-feature group" href="/projects/hotel-stone-supply">
                <div className="buyer-intent-feature__media">
                  <img
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                    src={buyerIntentCards[3].image}
                    alt={buyerIntentCards[3].alt}
                  />
                </div>
                <div className="buyer-intent-feature__overlay">
                  <p className="buyer-intent-feature__category">{buyerIntentCards[3].question}</p>
                  <h3 className="buyer-intent-feature__title">{buyerIntentCards[3].title}</h3>
                  <p className="buyer-intent-feature__copy">
                    Premium stone references for hotel lobbies, reception areas, and export-ready project delivery.
                  </p>
                  <span className="buyer-intent-feature__cta">Request Project Quote</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-luxury section-luxury--why-choose-us bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Why choose us</p>
              <h2 className="heading-lg section-intro__title why-choose-us__title">
                Built for international buyers who need reliability, not excuses.
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="card-luxury why-choose-us__media overflow-hidden bg-[#f3ede4] p-0">
                <img
                  className="block h-full w-full object-cover object-center"
                  src="/assets/why-choose-us/why-choose-us.webp"
                  alt="Trusted stone supply hub overview with factory, warehouse, and material capacity details"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-6">
                <p className="body-luxury max-w-2xl">
                  Atelier Marble helps overseas buyers reduce project risk with dependable lead times, stable quality,
                  clear communication, and export-ready support for kitchens, hospitality spaces, furniture, and custom
                  stone work.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Reliable Lead Times",
                      copy: "Production and shipment are planned to keep project timing under control."
                    },
                    {
                      title: "Consistent Quality",
                      copy: "Clear standards and accurate execution help avoid costly remakes."
                    },
                    {
                      title: "Clear Communication",
                      copy: "Detail confirmation and CAD support keep coordination efficient."
                    },
                    {
                      title: "Export-Ready Delivery",
                      copy: "Careful packing and loading support safer international delivery."
                    }
                  ].map((item) => (
                    <div key={item.title} className="card-luxury px-5 py-4">
                      <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">{item.copy}</p>
                    </div>
                  ))}
                </div>
                <p className="body-luxury max-w-2xl">
                  For buyers who value timing, quality, and trust, Atelier Marble is built to support real project
                  delivery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link className="btn-luxury" href="/contact">
                    Discuss Your Project
                  </Link>
                  <a className="text-cta-luxury self-center" href={contact.whatsappUrl}>
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title project-proof-heading">
                Project references that support pricing decisions.
              </h2>
              <p className="body-luxury section-intro__copy">
                These visual references help buyers compare material character, scale, and intended application before
                requesting a quotation. Confirm current material, dimensions, and production details with the team.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {proofCards.map((item) => (
                <Link
                  key={`${item.asset.category}-${item.asset.filename}`}
                  className="reference-card group"
                  href={item.asset.category === "factory" ? "/factory" : item.asset.category === "coffee-table" ? "/custom-stone-fabrication-china" : item.asset.category === "carving-decor" ? "/custom-stone-fabrication-china" : "/countertops"}
                >
                  <div className="reference-card__media">
                    <img
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      src={item.coverSrc}
                      alt={item.coverAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="reference-card__body">
                    <p className="reference-card__category">{item.asset.categoryLabel || item.asset.label}</p>
                    <h3 className="reference-card__title">{cleanDisplayTitle(item.asset.title, item.asset.label)}</h3>
                    <p className="reference-card__copy">{cleanCardCopy(item.asset.description, item.asset.label)}</p>
                    <span className="reference-card__cta">Request Pricing</span>
                  </div>
                </Link>
              ))}
            </div>
              <div className="mt-8">
                <div className="flex flex-wrap gap-4">
                  <Link className="text-cta-luxury" href="/contact">
                    Request Similar Project Pricing
                  </Link>
                  <Link className="text-cta-luxury" href="/how-we-work">
                    See How We Work
                  </Link>
                  <Link className="text-cta-luxury" href="/resources">
                    Buyer Resources
                  </Link>
                </div>
                <nav aria-label="Core project resources" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
                  <Link className="transition-colors hover:text-ink" href="/materials">Materials</Link>
                  <Link className="transition-colors hover:text-ink" href="/countertops">Countertops &amp; Vanity</Link>
                  <Link className="transition-colors hover:text-ink" href="/projects/hotel-stone-supply">Hotel Stone Supply</Link>
                  <Link className="transition-colors hover:text-ink" href="/factory">Factory &amp; QC</Link>
                </nav>
              </div>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
