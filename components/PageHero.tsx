type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage?: string;
};

export default function PageHero({ eyebrow, title, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="hero-architectural">
      {backgroundImage ? <><img className="absolute inset-0 h-full w-full object-cover object-center" src={backgroundImage} alt={`${title} visual reference`} fetchPriority="high" decoding="async" /><div className="hero-overlay absolute inset-0" /></> : null}
      <div className="hero-architectural__content hero-architectural__content--center">
        <div className="container-luxury text-center">
          <p className="hero-architectural__eyebrow">{eyebrow}</p>
          <div className="title-wrapper">
            <h1 className="hero-architectural__title hero-architectural__title--wide">{title}</h1>
          </div>
          <p className="hero-architectural__copy mx-auto">{description}</p>
        </div>
      </div>
    </section>
  );
}
