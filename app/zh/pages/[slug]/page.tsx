import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BreadcrumbJsonLd from "../../../../components/BreadcrumbJsonLd";
import PageShell from "../../../../components/PageShell";
import { getPublishedSitePage } from "../../../../lib/content";
import { absoluteUrl, siteName } from "../../../../lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = await getPublishedSitePage((await params).slug, "zh");
  if (!page) return { title: "页面不存在", robots: { index: false, follow: false } };
  return { title: page.seoTitle, description: page.seoDescription, alternates: { canonical: absoluteUrl(`/zh/pages/${page.slug}`), languages: { en: absoluteUrl(`/pages/${page.slug}`), zh: absoluteUrl(`/zh/pages/${page.slug}`) } }, openGraph: { title: page.seoTitle, description: page.seoDescription, url: absoluteUrl(`/zh/pages/${page.slug}`), siteName } };
}

export default async function ManagedChinesePage({ params }: { params: Promise<{ slug: string }> }) {
  const page = await getPublishedSitePage((await params).slug, "zh");
  if (!page) notFound();
  return <PageShell locale="zh"><main><BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: page.title, path: `/zh/pages/${page.slug}` }]} /><section className="section-luxury bg-paper pt-40"><div className="container-luxury"><p className="eyebrow-luxury">Atelier Marble · 中文页面</p><h1 className="mt-5 max-w-4xl font-title text-5xl font-medium leading-tight text-ink">{page.title}</h1><p className="mt-6 max-w-3xl text-base leading-8 text-ink/68">{page.summary}</p></div></section><section className="section-luxury bg-stone"><div className="container-luxury grid gap-5 md:grid-cols-2">{page.blocks.map((block, index) => <article key={`${block.heading || "block"}-${index}`} className="card-luxury bg-paper p-7"><h2 className="font-title text-2xl text-ink">{block.heading || `第 ${index + 1} 部分`}</h2><p className="mt-3 whitespace-pre-line text-sm leading-7 text-ink/68">{block.body || ""}</p></article>)}</div><div className="container-luxury mt-10"><Link className="text-cta-luxury" href="/zh/contact">提交项目资料</Link></div></section></main></PageShell>;
}
