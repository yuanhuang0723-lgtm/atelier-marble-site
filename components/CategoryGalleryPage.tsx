import Link from "next/link";
import PageHero from "./PageHero";
import PageShell from "./PageShell";
import TrustStrip from "./TrustStrip";
import { contact } from "../lib/assets";
import { buildWhatsAppUrl } from "../lib/conversion";
import { CategoryGalleryPageData } from "../lib/category-galleries";

type CategoryGalleryPageProps = {
  page: CategoryGalleryPageData;
};

export default function CategoryGalleryPage({ page }: CategoryGalleryPageProps) {
  return (
    <PageShell>
      <main>
        {page.heroImage ? (
          <section className="hero-architectural min-h-[78vh]">
            <img
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={page.heroImage}
              alt={page.heroAlt || page.title}
            />
            <div className="hero-overlay absolute inset-0" />
            <div className="hero-architectural__content hero-architectural__content--center container-luxury min-h-[78vh] pb-24 pt-40">
              <div className="mx-auto max-w-4xl text-center">
                <p className="hero-architectural__eyebrow">{page.eyebrow}</p>
                <h1 className="hero-architectural__title hero-architectural__title--wide hero-architectural__title--singleline">
                  {page.title}
                </h1>
                <p className="hero-architectural__copy mx-auto max-w-2xl">{page.description}</p>
              </div>
            </div>
          </section>
        ) : (
          <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
        )}
        <TrustStrip />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="body-luxury section-intro__copy">{page.intro}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {page.items.map((item) => (
                <figure
                  key={item.src}
                  className="card-luxury group overflow-hidden p-3"
                >
                  <div className="media-luxury aspect-[4/3] overflow-hidden">
                    <img
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </div>
                </figure>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link className="btn-luxury" href="/contact">
                Request Project Pricing
              </Link>
              <a className="text-cta-luxury" href={buildWhatsAppUrl({ sourcePage: page.slug, intent: page.eyebrow, projectType: page.eyebrow })}>
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </section>
        <section className="section-luxury-compact bg-stone">
          <div className="container-luxury flex flex-col gap-3 text-sm font-light leading-7 text-ink/60 md:flex-row md:items-center md:justify-between">
            <p>{contact.location}</p>
            <p>{contact.whatsapp}</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
