import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import { cleanCardCopy, cleanDisplayTitle, contact, getAssets } from "../lib/assets";
import { absoluteUrl, siteName } from "../lib/seo";

export const metadata: Metadata = {
  title: "Luxury Stone Supplier China for Hotel Projects",
  description:
    "Atelier Marble is a luxury stone supplier in China for hotel projects, stone slab supply, custom fabrication, marble countertops, coffee tables, and sculptures.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Atelier Marble | Luxury Stone Supplier China",
    description:
      "Architectural stone supplier in China for hotel projects, stone slabs, countertops, coffee tables, and custom stone fabrication.",
    url: absoluteUrl("/"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.png"), width: 1536, height: 1024 }]
  }
};

const buyerIntentCards = [
  {
    title: "Stone Countertop & Coffee Table",
    href: "/architectural-stone-interiors",
    image: "/assets/home-top-cover.png",
    alt: "Ultra realistic luxury stone dining table and stone countertop in a premium modern interior",
    question: "STONE COUNTERTOP & COFFEE TABLE REFERENCE."
  },
  {
    title: "Cabinet Panels + Vanity Tops",
    href: "/luxury-residential-kitchens",
    image: "/assets/vanity-cabinet/cover.png",
    alt: "Luxury stone vanity top and cabinet panels in a premium bathroom interior",
    question: "STONE VANITY TOP AND CABINET PANEL REFERENCE."
  },
  {
    title: "Custom Stone Sculptures",
    href: "/custom-furniture-sculptures",
    image: "/assets/carving-decor/cover.png",
    alt: "Ultra realistic luxury stone carving sculpture in a premium showroom setting",
    question: "CUSTOM STONE SCULPTURE REFERENCE FOR INTERIOR AND LOUNGE PROJECTS."
  },
  {
    title: "Hotel & Hospitality Projects",
    href: "/hotel-hospitality-projects",
    image: "/materials/categories/hotel-projects.png",
    alt: "Luxury hotel stone project with marble flooring and wall cladding",
    question: "HOTEL PROJECT SUPPLY FOR DEVELOPERS, CONTRACTORS, AND PROCUREMENT TEAMS."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you supply stone slabs from China?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atelier Marble supports stone slab selection, matching, and export supply for overseas buyers who need a reliable stone slab supplier China."
      }
    },
    {
      "@type": "Question",
      name: "Can you fabricate hotel stone projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support hotel stone fabrication for lobbies, reception areas, bathrooms, corridors, and other hospitality spaces."
      }
    },
    {
      "@type": "Question",
      name: "Do you make custom stone countertops and sculptures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We produce custom stone countertops, coffee tables, and carved stone sculptures with export-ready project support."
      }
    }
  ]
};

export default function HomePage() {
  const [kitchen] = getAssets("kitchen-countertop");
  const [coffee] = getAssets("coffee-table");
  const [sculpture] = getAssets("carving-decor");
  const [support] = getAssets("factory");

  const proofCards = [kitchen, coffee, sculpture, support].filter(Boolean).map((asset) => ({
    asset,
    coverSrc:
      asset.category === "kitchen-countertop"
        ? "/materials/featured-covers/kitchen-countertop.png"
        : asset.category === "coffee-table"
          ? "/materials/featured-covers/coffee-table.png"
          : asset.category === "carving-decor"
            ? "/materials/featured-covers/carving-decor.png"
            : "/materials/featured-covers/project-support.png",
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
            "Luxury marble supplier and architectural stone design studio for bespoke natural stone manufacturing and export projects."
        }}
      />
      <main>
        <JsonLd data={faqSchema} />
        <section className="hero-architectural min-h-screen">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/materials/hero/atelier-marble-luxury-hero.png"
            alt="Ultra realistic luxury marble architectural interior for Atelier Marble"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="hero-architectural__content hero-architectural__content--center container-luxury">
            <div className="mx-auto max-w-4xl">
              <p className="hero-architectural__eyebrow">
                Atelier Marble
              </p>
              <h1 className="hero-architectural__title hero-architectural__title--home">
                Luxury Stone Supplier China for Architecture &amp; Hotel Projects
              </h1>
              <p className="hero-architectural__copy mx-auto max-w-2xl">
                A project-focused marble partner for developers, architects, designers, and contractors who need
                premium stone slab supply, hotel stone fabrication, custom stone countertops, coffee tables, and
                export-ready execution.
              </p>
              <div className="hero-architectural__actions hero-architectural__actions--center">
                <Link className="btn-luxury-inverse border-white bg-white text-ink hover:bg-transparent hover:text-white" href="/contact">
                  Discuss Your Project
                </Link>
                <Link className="btn-luxury-inverse" href="/projects">
                  Request Project Pricing
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
              <Link className="buyer-intent-feature group" href="/hotel-hospitality-projects">
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
                  src="/assets/why-choose-us/why-choose-us.png"
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

        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Export project support</p>
              <h2 className="heading-lg section-intro__title">What buyers get when they request pricing.</h2>
              <p className="body-luxury section-intro__copy">
                The site is built to help overseas buyers move from browsing to a qualified quotation with fewer
                back-and-forth messages.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Material Matching",
                  copy: "We help buyers compare stone tone, veining, slab selection, and product suitability before quotation."
                },
                {
                  title: "Technical Review",
                  copy: "Drawings, dimensions, and project scope are reviewed so pricing reflects the actual fabrication work."
                },
                {
                  title: "Export Packing",
                  copy: "Project goods are prepared with export packing logic for safer long-distance delivery."
                },
                {
                  title: "Project Coordination",
                  copy: "We keep communication focused on scope, timing, and destination market so procurement stays clear."
                }
              ].map((item) => (
                <div key={item.title} className="card-luxury px-5 py-5">
                  <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">{item.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link className="text-cta-luxury" href="/guides/export-packing-standards">
                Read export packing standards
              </Link>
            </div>
          </div>
        </section>

        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Quotation process</p>
              <h2 className="heading-lg section-intro__title">How project pricing moves from inquiry to quote.</h2>
              <p className="body-luxury section-intro__copy">
                Clear structure helps overseas buyers get faster and more accurate pricing for stone slabs, hotel
                projects, countertops, and custom fabrication.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Share scope",
                  copy: "Send project type, drawings, dimensions, budget range, and destination market so we can qualify the request."
                },
                {
                  step: "02",
                  title: "Review material fit",
                  copy: "We compare stone options, fabrication scale, and project timing to suggest a practical production path."
                },
                {
                  step: "03",
                  title: "Receive quotation",
                  copy: "You get a project-oriented quotation path with material direction, packing approach, and next steps."
                }
              ].map((item) => (
                <div key={item.step} className="card-luxury px-6 py-6">
                  <p className="font-title text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 font-title text-[1.05rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-7 text-ink/68">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Search terms we support</p>
              <h2 className="heading-lg section-intro__title">Keywords buyers actually search for.</h2>
              <p className="body-luxury section-intro__copy">
                This site is structured around practical search phrases that overseas buyers use when looking for a
                stone supplier in China, hotel stone fabrication, marble slabs, custom countertops, and sculptural
                stone work.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "stone supplier China",
                "stone slab supplier China",
                "hotel stone fabrication supplier",
                "custom stone countertops and coffee tables"
              ].map((item) => (
                <div key={item} className="card-luxury px-5 py-4">
                  <p className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                    {item}
                  </p>
                  <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">
                    Buyers can use these phrases to find the product and project pages that match their intent.
                  </p>
                </div>
              ))}
              <Link className="card-luxury px-5 py-4 transition hover:-translate-y-0.5" href="/guides/stone-supplier-china">
                <p className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                  How to choose a stone supplier in China
                </p>
                <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">
                  A practical buyer guide that supports higher-intent search traffic and helps overseas buyers qualify
                  your site faster.
                </p>
              </Link>
              <Link className="card-luxury px-5 py-4 transition hover:-translate-y-0.5" href="/guides/hotel-stone-pricing">
                <p className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                  Hotel stone pricing guide
                </p>
                <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">
                  A pricing-focused guide that helps buyers understand scope, budget, and quotation logic before they
                  ask for a quote.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">FAQ</p>
              <h2 className="heading-lg section-intro__title">Questions buyers ask before they contact us.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  q: "Do you supply stone slabs from China?",
                  a: "Yes. We help with slab selection, matching, and export supply for overseas projects."
                },
                {
                  q: "Can you handle hotel stone fabrication?",
                  a: "Yes. We support hotel lobbies, reception desks, bathrooms, corridors, and hospitality stone details."
                },
                {
                  q: "Do you make custom stone countertops and sculptures?",
                  a: "Yes. We produce custom countertops, coffee tables, and carved stone sculptures for project buyers."
                }
              ].map((item) => (
                <div key={item.q} className="card-luxury px-5 py-4">
                  <h3 className="font-title text-[1.02rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-[0.93rem] leading-7 text-ink/68">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-luxury bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title project-proof-heading">
                Project proof that supports pricing decisions.
              </h2>
              <p className="body-luxury section-intro__copy">
                Enhanced from local source images, these references preserve real stone texture, fabrication evidence,
                and the context buyers need before requesting similar project pricing.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {proofCards.map((item) => (
                <Link
                  key={`${item.asset.category}-${item.asset.filename}`}
                  className="reference-card group"
                  href={item.asset.category === "factory" ? "/factory" : item.asset.category === "coffee-table" ? "/marble-coffee-tables" : item.asset.category === "carving-decor" ? "/stone-sculptures" : "/kitchen-countertops"}
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
              </div>
            </div>
          </div>
        </section>

        <section className="section-luxury-compact bg-paper text-center">
          <h2 className="heading-lg mx-auto max-w-3xl">Discuss your project requirements.</h2>
          <p className="body-luxury mx-auto mt-4 max-w-2xl">
            Share drawings, dimensions, budget, timing, or material direction. Atelier Marble will suggest a practical
            path for selection, fabrication, and export delivery.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link className="btn-luxury" href="/contact">
              Request Project Pricing
            </Link>
            <a className="btn-luxury" href={contact.whatsappUrl}>
              Discuss on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
