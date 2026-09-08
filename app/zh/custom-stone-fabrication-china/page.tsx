import LocalizedInfoPage from "../../../components/LocalizedInfoPage";
import { zhMetadata, zhPages } from "../../../lib/zh-pages";
export const metadata = zhMetadata("中国定制石材加工", "从图纸、尺寸到成品和出口准备，沟通定制石材加工要求。", "/zh/custom-stone-fabrication-china");
export default function Page() { return <LocalizedInfoPage {...zhPages.fabrication} />; }
