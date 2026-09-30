import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  cta?: { href: string; label: string; note?: string };
};

export default function PageHero({ eyebrow, title, description, backgroundImage, backgroundImageAlt, cta }: PageHeroProps) {
  return (
    <section className="hero-architectural">
      {backgroundImage ? <><Image className="object-cover object-center" src={backgroundImage} alt={backgroundImageAlt || `${title} visual reference`} title={backgroundImageAlt || title} fill priority sizes="100vw" /><div className="hero-overlay absolute inset-0" /></> : null}
      <div className="hero-architectural__content hero-architectural__content--center">
        <div className="container-luxury text-center">
          <p className="hero-architectural__eyebrow">{eyebrow}</p>
          <div className="title-wrapper">
            <h1 className="hero-architectural__title hero-architectural__title--wide">{title}</h1>
          </div>
          <p className="hero-architectural__copy mx-auto">{description}</p>
          {cta ? (
            <div className="mt-7 flex flex-col items-center gap-2">
              <Link className="btn-luxury-fill" href={cta.href}>{cta.label}</Link>
              {cta.note ? <p className="max-w-xl text-xs leading-6 text-white/75">{cta.note}</p> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
