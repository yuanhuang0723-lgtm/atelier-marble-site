import Link from "next/link";
import type { PublishedProjectCase } from "../lib/content";

export default function PublishedCaseCard({ item }: { item: PublishedProjectCase }) {
  return <article className="card-luxury overflow-hidden bg-stone p-3"><img className="media-luxury aspect-[4/3] w-full object-cover" src={item.imageUrl} alt={item.imageAlt} loading="lazy" /><div className="px-4 py-5"><p className="eyebrow-luxury mb-2">{item.projectType} · {item.isReference ? "Project reference" : "Project case"}</p><h3 className="heading-md card-title">{item.title}</h3><p className="mt-3 text-sm leading-7 text-ink/65">{item.description}</p><Link className="mt-4 inline-block text-cta-luxury" href={`/projects/cases/${item.slug}`}>View details</Link></div></article>;
}
