import LocalizedInfoPage from "../../../components/LocalizedInfoPage";
import { zhMetadata, zhPages } from "../../../lib/zh-pages";
export const metadata = zhMetadata("关于 Atelier Marble", "了解 Atelier Marble 如何协助国际项目推进石材选材、加工和出口协调。", "/zh/about");
export default function Page() { return <LocalizedInfoPage {...zhPages.about} />; }
