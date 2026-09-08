import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BreadcrumbJsonLd from "../../../../components/BreadcrumbJsonLd";
import PageShell from "../../../../components/PageShell";
import { getPublishedProjectCase } from "../../../../lib/content";
import { absoluteUrl, siteName } from "../../../../lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = await getPublishedProjectCase((await params).slug);
  if (!item) return { title: "Project reference" };
  return { title: item.title, description: item.description, alternates: { canonical: absoluteUrl(`/projects/cases/${item.slug}`) }, openGraph: { title: item.title, description: item.description, url: absoluteUrl(`/projects/cases/${item.slug}`), siteName } };
}

export default async function PublishedCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const item = await getPublishedProjectCase((await params).slug);
  if (!item) notFound();
  return <PageShell><main><BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Project References", path: "/projects" }, { name: item.title, path: `/projects/cases/${item.slug}` }]} /><section className="section-luxury bg-paper pt-40"><div className="container-luxury grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start"><div><p className="eyebrow-luxury">{item.projectType} · {item.isReference ? "Project reference" : "Project case"}</p><h1 className="mt-5 font-title text-5xl font-medium leading-tight text-ink">{item.title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-ink/68">{item.description}</p></div><img className="media-luxury aspect-[4/3] w-full object-cover" src={item.imageUrl} alt={item.imageAlt} /></div></section><section className="section-luxury bg-stone"><div className="container-luxury grid gap-6 md:grid-cols-3"><div><p className="eyebrow-luxury">Material</p><p className="mt-3 text-sm leading-7 text-ink/70">{item.material}</p></div><div><p className="eyebrow-luxury">Scope</p><p className="mt-3 text-sm leading-7 text-ink/70">{item.scope}</p></div><div><p className="eyebrow-luxury">Evidence boundary</p><p className="mt-3 text-sm leading-7 text-ink/70">This page is presented as a project reference unless the published record states otherwise.</p></div></div><div className="container-luxury mt-10"><Link className="text-cta-luxury" href="/contact">Discuss a similar project</Link></div></section></main></PageShell>;
}
