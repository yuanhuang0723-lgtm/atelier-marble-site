import LocalizedInfoPage from "../../../components/LocalizedInfoPage";
import { zhMetadata, zhPages } from "../../../lib/zh-pages";
export const metadata = zhMetadata("石材材料与表面", "比较石材材料、色调、表面和应用，开始项目选材沟通。", "/zh/materials");
export default function Page() { return <LocalizedInfoPage {...zhPages.materials} />; }
