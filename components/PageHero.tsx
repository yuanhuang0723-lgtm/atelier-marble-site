type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage?: string;
};

export default function PageHero({ eyebrow, title, description, backgroundImage }: PageHeroProps) {
  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(25, 20, 17, 0.72), rgba(25, 20, 17, 0.72)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }
    : undefined;

  return (
    <section className="hero-architectural" style={sectionStyle}>
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
