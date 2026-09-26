import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import PageShell from "../components/PageShell";
import WorkshopVideoCard from "../components/WorkshopVideoCard";
import { cleanCardCopy, cleanDisplayTitle, contact, getAssets } from "../lib/assets";
import { absoluteUrl, siteName } from "../lib/seo";
import { featuredWorkshopVideo, workshopVideos } from "../data/workshop-videos";

export const metadata: Metadata = {
  title: "Custom Stone Fabrication from China | Atelier Marble",
  description:
    "Custom marble and stone components from Yunfu, China. Send CAD, BOQ, or dimensions for one-piece orders, small MOQs, factory-direct work, and global shipping.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Custom Stone Fabrication from China | Atelier Marble",
    description:
      "Custom marble and stone components from Yunfu, China. Send CAD, BOQ, or dimensions for one-piece orders, small MOQs, factory-direct work, and global shipping.",
    url: absoluteUrl("/"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp"), width: 1536, height: 1024 }]
  }
};

const buyerPathways = [
  {
    audience: "Interior Design Studios",
    title: "Turn finish ideas into stone details",
    href: "/countertops/vanity-tops",
    image: "/assets/vanity-cabinet/cover.webp",
    alt: "Illustrative stone vanity top and cabinet panels in a bathroom interior concept",
    copy: "Develop finish direction, component details, and room-ready vanity or countertop packages.",
    cta: "Explore design project support"
  },
  {
    audience: "Architecture Firms",
    title: "Coordinate architectural components",
    href: "/architectural-stone",
    image: "/materials/categories/hotel-projects.webp",
    alt: "Illustrative hotel interior concept with stone flooring and wall panels",
    copy: "Review wall cladding, flooring, and custom stone components from drawings and schedules.",
    cta: "View architectural stone"
  },
  {
    audience: "Stone Importers",
    title: "Plan repeatable supply packages",
    href: "/how-we-work",
    image: "/assets/home-top-cover.webp",
    alt: "Illustrative stone dining table in a dining-room concept",
    copy: "Scope quantities, material review, protective packing, and export planning together.",
    cta: "Explore the supply workflow"
  },
  {
    audience: "Stone Fabricators",
    title: "Add drawing-led production support",
    href: "/custom-stone-fabrication-china",
    image: "/assets/carving-decor/cover.webp",
    alt: "Illustrative carved stone sculpture in a modern interior concept",
    copy: "Use shop drawings for custom stone parts when an external fabrication partner is useful.",
    cta: "See custom fabrication"
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
        <section className="hero-architectural hero-architectural--home relative min-h-[calc(100svh-4rem)]">
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-8 px-5 py-24 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:px-12 md:pb-20 md:pt-32">
            <div className="max-w-4xl">
              <p className="hero-architectural__eyebrow mb-4 max-w-3xl tracking-[0.18em] md:tracking-[0.24em]">
                For interior design studios, architecture firms, stone importers &amp; fabricators
              </p>
              <h1 className="hero-architectural__title hero-architectural__title--home !mx-0 !max-w-[18ch] !text-left">
                CAD Drawing to Real Stone Fabrication
              </h1>
              <p className="mt-5 font-title text-lg font-medium uppercase tracking-[0.08em] text-white md:text-xl">
                Custom Marble &amp; Stone Components Manufacturer
              </p>
              <p className="hero-architectural__copy mt-3 max-w-2xl !text-left">
                Send a CAD drawing, BOQ, or rough dimensions for a project-specific review of custom stone components
                from Yunfu, China.
              </p>
              <ul aria-label="Fabrication and fulfillment capabilities" className="mt-5 flex max-w-3xl flex-wrap gap-2">
                {["One Piece Custom", "CAD Support", "Factory Direct", "Small MOQ", "Global Shipping"].map((capability) => (
                  <li key={capability} className="rounded-full border border-white/35 bg-black/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white md:text-[11px]">
                    {capability}
                  </li>
                ))}
              </ul>
              <div className="hero-architectural__actions !justify-start">
                <Link className="btn-luxury-inverse border-white bg-white text-ink hover:bg-transparent hover:text-white" href="/contact">
                  Upload CAD / BOQ for Quote
                </Link>
                <Link className="btn-luxury-inverse" href="/factory#workshop-videos">
                  Watch Workshop Videos
                </Link>
              </div>
            </div>

            <aside aria-labelledby="quote-brief-title" className="rounded-2xl border border-white/25 bg-black/45 p-6 text-white shadow-2xl backdrop-blur-sm md:p-8">
              <p className="eyebrow-luxury text-white/65">Start with the information you have</p>
              <h2 id="quote-brief-title" className="mt-3 font-title text-2xl font-medium uppercase leading-tight tracking-[0.04em] text-white">
                What to send for a project review
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                A complete drawing helps, but a practical first review can start with a rough brief.
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/90">
                <li className="border-t border-white/20 pt-3">Project type, pieces, and approximate quantities</li>
                <li className="border-t border-white/20 pt-3">CAD, BOQ, marked-up references, or dimensions</li>
                <li className="border-t border-white/20 pt-3">Material direction, finish, and delivery destination</li>
              </ul>
            </aside>
          </div>
        </section>

        <section aria-labelledby="home-workshop-video-title" className="section-luxury home-workshop-section bg-stone">
          <div className="home-workshop-grid grid items-center">
            <div>
              <p className="eyebrow-luxury">From the workshop</p>
              <h2 id="home-workshop-video-title" className="heading-lg mt-4 text-left">
                See a stone cutting operation in progress.
              </h2>
              <p className="body-luxury mt-5 max-w-xl">
                A short, unedited clip gives a closer look at a stone workpiece being cut. Explore the full gallery for
                more workshop and basin footage.
              </p>
              <Link className="text-cta-luxury mt-6 inline-flex" href="/factory#workshop-videos">
                View all {workshopVideos.length} workshop videos
              </Link>
            </div>
            <WorkshopVideoCard video={featuredWorkshopVideo} featured />
          </div>
        </section>

        <section id="buyer-pathways" aria-labelledby="buyer-pathways-title" className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Project support by buyer type</p>
              <h2 id="buyer-pathways-title" className="heading-lg section-intro__title">
                Start with the work your team needs to deliver.
              </h2>
              <p className="body-luxury max-w-3xl">
                From design development to repeat supply and custom production, choose the route that matches your role in the project.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {buyerPathways.map((card) => (
                <Link key={card.audience} href={card.href} className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" src={card.image} alt={card.alt} title={card.title} loading="lazy" />
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="eyebrow-luxury">{card.audience}</p>
                    <h3 className="mt-3 font-title text-xl font-medium uppercase leading-tight tracking-[0.03em] text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ink/68">{card.copy}</p>
                    <span className="mt-5 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] text-ink underline decoration-ink/30 underline-offset-4 group-hover:decoration-ink">
                      {card.cta}
                    </span>
                  </div>
                </Link>
              ))}
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
                  alt="Stone supply overview graphic with product and workshop images; not documentary proof of facility or capacity"
                  title="Stone supply overview graphic"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-6">
                <p className="body-luxury max-w-2xl">
                  Project scope, materials, inspection points, packing, and delivery requirements are reviewed against
                  the buyer's drawings and destination before a quotation is prepared.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Schedule Review",
                      copy: "Confirm material, approved drawings, quantity, finish, and packing before setting a project schedule."
                    },
                    {
                      title: "Inspection Scope",
                      copy: "Agree the checks, tolerances, visible-face expectations, and records required for each order."
                    },
                    {
                      title: "Drawing Coordination",
                      copy: "Review CAD, BOQ, dimensions, and open questions before a quotation is prepared."
                    },
                    {
                      title: "Destination Planning",
                      copy: "Confirm destination, route options, packing, loading, and delivery terms for the project."
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
                  Share the latest drawings and project brief so scope, open decisions, and delivery responsibilities
                  can be reviewed together.
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
                      title={cleanDisplayTitle(item.asset.title, item.asset.label)}
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
                  <Link className="transition-colors hover:text-ink" href="/countertops/vanity-tops">Hotel Vanity Tops</Link>
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
