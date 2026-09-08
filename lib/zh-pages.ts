import type { Metadata } from "next";
import { absoluteUrl, siteName } from "./seo";
import type { LocalizedInfoPageProps } from "../components/LocalizedInfoPage";

export function zhMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: absoluteUrl(path), languages: { en: absoluteUrl(path.replace(/^\/zh/, "") || "/"), zh: absoluteUrl(path) } }, openGraph: { title, description, url: absoluteUrl(path), siteName } };
}

export const zhPages: Record<string, LocalizedInfoPageProps> = {
  about: { path: "/zh/about", breadcrumb: "关于 Atelier Marble", eyebrow: "关于我们", title: "为国际项目整理石材选材与加工路径。", description: "Atelier Marble 面向建筑师、承包商、采购团队和进口商，协助推进定制石材项目。", heading: "从项目要求开始，而不是从空泛承诺开始。", intro: "我们关注材料方向、加工细节、质量检查和出口准备，让采购方在询价前获得更清晰的信息。", points: [["项目沟通", "先了解应用、尺寸、数量、预算和目的地，再判断适合的供应路径。"], ["加工协调", "围绕图纸、边型、开孔、表面和包装要求整理生产范围。"], ["信息边界", "工厂现场记录、项目参考和已核验事实分开呈现，不混淆宣传内容。"]] },
  materials: { path: "/zh/materials", breadcrumb: "石材材料", eyebrow: "材料方向", title: "为不同应用比较石材材料与表面。", description: "从大板、台面到定制构件，先确认色调、纹理、厚度、表面和使用场景，再进入报价。", heading: "材料选择需要结合应用和加工。", intro: "同一种材料在酒店、厨房、浴室和家具中的要求可能不同，样品、尺寸和完成面应一起讨论。", points: [["大板与色调", "关注批次、纹理方向、可用尺寸和项目所需的视觉一致性。"], ["台面与浴室", "提前确认厚度、边型、水槽或龙头开孔及安装配合。"], ["定制构件", "雕刻、家具和建筑构件需要更早确认图纸、节点和包装方式。"]], cta: "讨论材料方向" },
  fabrication: { path: "/zh/custom-stone-fabrication-china", breadcrumb: "定制石材加工", eyebrow: "定制加工", title: "从图纸到成品的定制石材加工。", description: "支持厨房、浴室、酒店、建筑内装、家具和雕刻类石材的项目沟通与加工协调。", heading: "把加工范围写清楚，报价才有依据。", intro: "图纸、尺寸、数量、边型、开孔、表面和交付要求越清楚，越容易匹配实际生产路径。", points: [["图纸审核", "核对尺寸、数量、节点、重复单元和需要确认的技术问题。"], ["加工细节", "明确切割、磨边、倒角、开孔、拼接和表面处理范围。"], ["交付准备", "根据成品保护、分组、标识和目的地讨论包装与运输协调。"]], cta: "提交加工要求" },
  workflow: { path: "/zh/how-we-work", breadcrumb: "工作流程", eyebrow: "工作流程", title: "一条清晰的石材项目推进路径。", description: "从审核、匹配到加工、检查和出口准备，逐步连接项目材料、制造和交付信息。", heading: "五个环节，减少信息遗漏。", intro: "每个项目的范围不同，但采购方通常需要先解决材料、规格、加工和交付之间的衔接。", points: [["审核", "CAD、BOQ、尺寸、数量和目的地。"], ["匹配", "材料方向、色调、表面和应用。"], ["计划", "边型、开孔、加工范围和包装要求。"], ["检查", "尺寸、表面细节和成品状态。"], ["准备", "保护性包装与交付协调。"]], cta: "开始项目沟通" },
  hotel: { path: "/zh/projects/hotel-stone-supply", breadcrumb: "酒店石材项目", eyebrow: "酒店与商业空间", title: "酒店石材项目的材料、加工与交付协调。", description: "面向酒店承包商、设计团队和采购方，整理大板、台面、墙面、地面及定制构件的项目要求。", heading: "先核对项目范围，再判断供应匹配度。", intro: "酒店项目通常涉及重复单元、批量尺寸、完成面、包装分组和现场配合，需要在报价前整理清楚。", points: [["应用范围", "大堂、公共区域、浴室、台面、墙面和定制细节。"], ["批量协调", "重复尺寸、编号、图纸拆分和加工批次。"], ["交付信息", "包装、装柜、目的地和项目时间节点。"]], cta: "提交酒店项目资料" }
};
