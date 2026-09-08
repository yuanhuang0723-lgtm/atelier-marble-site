import Link from "next/link";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";
import PageHero from "./PageHero";
import PageShell from "./PageShell";

export type LocalizedInfoPageProps = {
  path: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  points: Array<[string, string]>;
  cta?: string;
};

export default function LocalizedInfoPage({ path, breadcrumb, eyebrow, title, description, heading, intro, points, cta = "提交项目资料" }: LocalizedInfoPageProps) {
  return (
    <PageShell locale="zh">
      <main>
        <BreadcrumbJsonLd items={[{ name: "首页", path: "/zh" }, { name: breadcrumb, path }]} />
        <PageHero eyebrow={eyebrow} title={title} description={description} />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center"><h2 className="heading-lg section-intro__title">{heading}</h2><p className="body-luxury section-intro__copy">{intro}</p></div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{points.map(([label, copy], index) => <article key={label} className="card-luxury bg-stone p-7"><p className="eyebrow-luxury">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 font-title text-2xl text-ink">{label}</h3><p className="mt-3 text-sm leading-7 text-ink/68">{copy}</p></article>)}</div>
            <div className="mt-12 flex flex-wrap gap-4"><Link className="btn-luxury-fill" href="/zh/contact">{cta}</Link><Link className="btn-luxury" href="/zh">返回中文首页</Link></div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
