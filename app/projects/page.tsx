import type { Metadata } from "next";
import Link from "next/link";
import AssetCard from "../../components/AssetCard";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { cleanCardCopy, cleanDisplayTitle, getMediaAssets, getProjectAssets, ProjectFilter } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Stone Projects for Hotels & High-Value Interiors",
  description:
    "Real project references for hotel stone fabrication, custom stone countertops China, architectural interiors, and carved stone decor.",
  alternates: { canonical: absoluteUrl("/projects") },
  openGraph: {
    title: "Stone Projects for Hotels & High-Value Interiors",
    description:
      "Explore real enhanced project references from an architectural stone design studio and bespoke natural stone manufacturer.",
    url: absoluteUrl("/projects"),
    siteName
  }
};

const filters: { label: string; value: ProjectFilter }[] = [
  { label: "All", value: "all" },
  { label: "Kitchens", value: "kitchen" },
  { label: "Hospitality", value: "hotel" },
  { label: "Furniture", value: "furniture" },
  { label: "Sculpture", value: "sculpture" }
];

export default async function ProjectsPage({
  searchParams
}: {
  searchParams?: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const active = filters.some((filter) => filter.value === params?.filter) ? (params?.filter as ProjectFilter) : "all";
  const projects = getProjectAssets(active);

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Project references"
          title="Project references that qualify fit before pricing."
          description="Browse real references across hospitality stone work, luxury kitchens, architectural interiors, furniture, and carved stone decor."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">Browse real stone project references.</h2>
            </div>
            <div className="mb-12 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <Link
                  key={filter.value}
                  className={`btn-luxury ${
                    active === filter.value ? "border-ink bg-ink text-paper" : "border-ink/20"
                  }`}
                  href={filter.value === "all" ? "/projects" : `/projects?filter=${filter.value}`}
                >
                  {filter.label}
                </Link>
              ))}
            </div>
            <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((asset) => (
                <AssetCard
                  key={`${asset.category}-${asset.filename}`}
                  asset={asset}
                />
              ))}
            </div>
            {getMediaAssets("projects").filter((asset) => asset.mediaType === "video").length ? (
              <div className="mt-16">
                <div className="section-intro section-intro--center">
                  <h2 className="heading-lg section-intro__title">Production process videos.</h2>
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                  {getMediaAssets("projects")
                    .filter((asset) => asset.mediaType === "video")
                    .map((asset) => (
                      <figure key={`${asset.category}-${asset.filename}`} className="card-luxury p-3">
                        <video
                          className="media-luxury aspect-[4/3] w-full object-cover"
                          controls
                          playsInline
                          preload="metadata"
                        >
                          <source src={asset.src} />
                        </video>
                        <figcaption className="px-4 py-5">
                          <p className="eyebrow-luxury mb-2">{asset.label}</p>
                          <h3 className="heading-md card-title">{cleanDisplayTitle(asset.title, asset.label)}</h3>
                          <p className="mt-4 text-sm font-light leading-7 text-ink/60">{cleanCardCopy(asset.description, asset.label)}</p>
                        </figcaption>
                      </figure>
                    ))}
                </div>
              </div>
            ) : null}
            <div className="mt-14">
              <Link className="text-cta-luxury" href="/contact">
                Request Project Pricing
              </Link>
              <Link className="text-cta-luxury ml-8" href="/materials">
                Compare Stone Materials
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
