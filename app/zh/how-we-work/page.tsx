import LocalizedInfoPage from "../../../components/LocalizedInfoPage";
import { zhMetadata, zhPages } from "../../../lib/zh-pages";
export const metadata = zhMetadata("石材项目工作流程", "了解 Atelier Marble 的石材项目审核、匹配、加工、检查与出口准备流程。", "/zh/how-we-work");
export default function Page() { return <LocalizedInfoPage {...zhPages.workflow} />; }
