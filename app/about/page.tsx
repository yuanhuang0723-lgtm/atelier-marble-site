import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { contact } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Atelier Marble, a Yunfu-based luxury stone design studio focused on export-ready natural stone projects.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Us",
    description:
      "Atelier Marble develops bespoke stone solutions for hotels, kitchens, interiors, furniture, and sculptural projects.",
    url: absoluteUrl("/about"),
    siteName
  }
};

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Company profile"
          title="Built for export buyers who need dependable stone supply."
          description="Atelier Marble is a Yunfu-based stone design studio focused on hotel projects, kitchen surfaces, interiors, furniture, and custom sculptural work with clear communication and export-ready execution."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5">
              <h2 className="heading-lg">What we do</h2>
              <p className="body-luxury">
                We support buyers with project references, material guidance, quotation preparation, and practical
                production coordination so the stone scope is easier to specify and deliver.
              </p>
              <p className="body-luxury">
                The site is structured to help international clients review product categories, compare references,
                and contact the team quickly.
              </p>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-stone p-8 text-sm leading-8 text-ink/70">
              <p>{contact.companyName}</p>
              <p>{contact.address}</p>
              <p>{contact.location}</p>
              <p>{contact.whatsapp}</p>
              {contact.emails.map((email) => (
                <p key={email}>{email}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
