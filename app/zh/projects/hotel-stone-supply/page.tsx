import LocalizedInfoPage from "../../../../components/LocalizedInfoPage";
import { zhMetadata, zhPages } from "../../../../lib/zh-pages";
export const metadata = zhMetadata("酒店石材项目供应", "面向酒店项目整理石材材料、加工、批量协调和出口交付要求。", "/zh/projects/hotel-stone-supply");
export default function Page() { return <LocalizedInfoPage {...zhPages.hotel} />; }
