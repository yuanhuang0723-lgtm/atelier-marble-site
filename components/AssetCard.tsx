import Link from "next/link";
import { Asset, cleanCardCopy, cleanDisplayTitle } from "../lib/assets";
import { projectPath } from "../lib/seo";

type AssetCardProps = {
  asset: Asset;
  cta?: string;
  coverSrc?: string;
  coverAlt?: string;
  href?: string;
};

export default function AssetCard({
  asset,
  cta = "Request Pricing",
  coverSrc,
  coverAlt,
  href
}: AssetCardProps) {
  const targetHref = href || projectPath(asset);
  const title = cleanDisplayTitle(asset.title, asset.label);
  const contextByCategory: Record<string, string> = {
    "kitchen-countertop": "Kitchen project reference",
    "hotel-project": "Hospitality project reference",
    "coffee-table": "Furniture project reference",
    "carving-decor": "Decorative project reference",
    "factory": "Production reference",
    "materials": "Material selection reference",
    "projects": "Project archive reference"
  };
  const description = cleanCardCopy(asset.description, `${asset.label} reference`);

  return (
    <Link className="project-card project-card--vertical group" href={targetHref} aria-label={`Open ${title}`}>
      <div className="project-card__media">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
          src={coverSrc || asset.src}
          alt={coverAlt || asset.alt}
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <p className="project-card__category">
          {asset.categoryLabel || contextByCategory[asset.category] || asset.label}
        </p>
        <h3 className="project-card__title card-title">{title}</h3>
        <p className="project-card__copy">{description}</p>
        <span className="project-card__cta">{cta}</span>
      </div>
    </Link>
  );
}
