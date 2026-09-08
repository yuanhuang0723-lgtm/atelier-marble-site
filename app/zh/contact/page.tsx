import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "../../../components/InquiryForm";
import PageShell from "../../../components/PageShell";
import PageHero from "../../../components/PageHero";
import { inquiryProjectTypes } from "../../../lib/assets";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "提交石材项目资料",
  description: "提交石材项目的图纸、尺寸、数量、预算和目的地，获取定制加工与出口供应的项目沟通建议。",
  alternates: { canonical: absoluteUrl("/zh/contact"), languages: { en: absoluteUrl("/contact"), zh: absoluteUrl("/zh/contact") } },
  openGraph: { title: "提交石材项目资料", description: "提交图纸、尺寸、数量、预算和目的地，开始项目沟通。", url: absoluteUrl("/zh/contact"), siteName }
};

export default function ChineseContactPage() {
  const context = { sourcePage: "/zh/contact", intent: "Chinese project consultation", projectType: "Commercial Stone Projects" };
  return <PageShell><main><PageHero eyebrow="项目咨询" title="提交图纸、尺寸和项目要求。" description="表单字段暂保持统一，便于我们用同一套项目信息进行审核；你也可以直接使用 WhatsApp 或邮箱沟通。" /><section className="section-luxury bg-paper"><div className="container-luxury"><div className="mb-8 rounded-[18px] border border-ink/10 bg-stone p-6 text-sm leading-7 text-ink/70">中文页面目前先开放核心咨询入口。项目详情表单字段使用统一国际项目格式，提交后会标记来源为中文页面。<Link className="ml-2 underline" href="/zh">返回中文首页</Link></div><InquiryForm context={context} defaultProjectType={inquiryProjectTypes[1]} projectOptions={[...inquiryProjectTypes]} /></div></section></main></PageShell>;
}
