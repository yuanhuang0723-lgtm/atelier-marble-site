import { redirect } from "next/navigation";
import { getAssetBySlug, getProjectAssets, slugFromAsset } from "../../../lib/assets";
import { projectPath } from "../../../lib/seo";

type LegacyProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectAssets("all").map((asset) => ({ slug: slugFromAsset(asset) }));
}

export default async function LegacyProjectDetailPage({ params }: LegacyProjectDetailProps) {
  const { slug } = await params;
  const asset = getAssetBySlug(slug);

  redirect(asset ? projectPath(asset) : "/projects");
}
