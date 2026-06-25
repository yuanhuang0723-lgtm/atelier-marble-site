import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Atelier Marble covering contact form submissions, analytics, and inquiry handling.",
  alternates: { canonical: absoluteUrl("/privacy-policy") },
  openGraph: {
    title: "Privacy Policy",
    description:
      "How Atelier Marble handles contact requests, analytics data, and project inquiry information.",
    url: absoluteUrl("/privacy-policy"),
    siteName
  }
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow="Privacy Policy"
          title="How we handle inquiry data."
          description="We collect only the information needed to respond to project requests, operate the website, and measure traffic and conversion performance."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-6">
            <div className="space-y-4 rounded-[28px] border border-ink/10 bg-stone p-8 md:p-10">
              <h2 className="heading-lg">Information we collect</h2>
              <p className="body-luxury">
                When you submit an inquiry, we may collect your name, email address, phone number, project details,
                drawings, budget range, and timeline so we can respond accurately.
              </p>
              <p className="body-luxury">
                We also use Google Analytics 4 to measure page views and traffic sources. This helps us understand
                which pages are useful and how buyers find the site.
              </p>
              <p className="body-luxury">
                We do not sell personal information. Inquiry data is used only for project communication, quotation,
                and service follow-up.
              </p>
              <p className="body-luxury">
                For privacy questions, contact us through the inquiry page or the email addresses listed in the footer.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
