import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "中国定制石材加工与工程供应",
  description: "Atelier Marble 为酒店、建筑、室内和定制家具项目提供中国石材选材、加工、质检与出口协调支持。",
  alternates: {
    canonical: absoluteUrl("/zh"),
    languages: { en: absoluteUrl("/"), zh: absoluteUrl("/zh") }
  },
  openGraph: { title: "中国定制石材加工与工程供应", description: "面向国际项目的石材选材、定制加工、质量检查与出口协调。", url: absoluteUrl("/zh"), siteName }
};

export default function ChineseHomePage() {
  return (
    <PageShell>
      <main>
        <section className="section-luxury bg-paper pt-40 md:pt-52">
          <div className="container-luxury grid gap-12 lg:grid-cols-[1.05fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow-luxury">Atelier Marble · 中文版</p>
              <h1 className="mt-5 max-w-4xl font-title text-5xl font-medium leading-[1.04] text-ink md:text-7xl">面向国际项目的定制石材加工与供应。</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">从材料方向、尺寸和图纸审核，到加工、检查、包装与出口协调，帮助采购方更清楚地推进石材项目。</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link className="btn-luxury-fill" href="/zh/contact">提交项目资料</Link><Link className="btn-luxury" href="/factory">查看工厂现场记录</Link></div>
            </div>
            <div className="rounded-[18px] border border-ink/10 bg-stone p-7"><p className="eyebrow-luxury">适合</p><div className="mt-5 grid gap-3 text-sm leading-7 text-ink/72"><p>酒店与商业空间</p><p>建筑与室内石材</p><p>厨房台面、浴室台面</p><p>石材家具与雕刻定制</p></div></div>
          </div>
        </section>
        <section className="section-luxury bg-stone"><div className="container-luxury"><p className="eyebrow-luxury">工作方式</p><h2 className="mt-4 max-w-3xl font-title text-4xl font-medium leading-tight text-ink">先把项目要求说清楚，再确定材料和加工路径。</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{[["01", "审核", "图纸、BOQ、尺寸、数量和目的地"], ["02", "匹配", "材料方向、色调、表面和应用"], ["03", "执行", "加工细节、检查、包装和交付协调"]].map(([number, title, copy]) => <article key={number} className="card-luxury bg-paper p-6"><p className="eyebrow-luxury">{number}</p><h3 className="mt-4 font-title text-2xl text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-ink/65">{copy}</p></article>)}</div><Link className="mt-9 inline-block text-cta-luxury" href="/how-we-work">查看完整工作流程（英文）</Link></div></section>
        <section className="section-luxury bg-paper"><div className="container-luxury flex flex-wrap items-center justify-between gap-7"><div><p className="eyebrow-luxury">开始讨论</p><h2 className="mt-3 font-title text-3xl text-ink">分享你的图纸、尺寸、预算或材料方向。</h2></div><Link className="btn-luxury-fill" href="/zh/contact">申请项目报价</Link></div></section>
      </main>
    </PageShell>
  );
}
