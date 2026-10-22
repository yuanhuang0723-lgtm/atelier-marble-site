import type { Metadata } from "next";
import Link from "next/link";
import InquirySuccessTracker from "../../../components/InquirySuccessTracker";
import PageShell from "../../../components/PageShell";
import { absoluteUrl } from "../../../lib/seo";
import { isInquiryReference } from "../../../lib/inquiry-reference";

export const metadata: Metadata = {
  title: "Inquiry Received",
  description: "Your Atelier Marble project inquiry has been received.",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl("/contact/thank-you") }
};

export default async function InquiryThankYouPage({ searchParams }: { searchParams?: Promise<{ ref?: string | string[] }> } = {}) {
  const reference = (await searchParams)?.ref;
  return (
    <PageShell>
      <main className="section-luxury bg-paper">
        <InquirySuccessTracker />
        <div className="container-luxury mx-auto max-w-3xl text-center">
          <p className="eyebrow-luxury mb-4">Inquiry received</p>
          <h1 className="heading-xl">Thank you. We have received your project request.</h1>
          <p className="body-luxury mx-auto mt-6 max-w-2xl">
            Atelier Marble will review your scope and reply with the next practical step for material selection,
            fabrication, and project pricing.
          </p>
          {isInquiryReference(reference) && <p className="mt-5 text-sm font-medium tracking-[0.04em] text-ink/70">
            Your inquiry reference: <span className="whitespace-nowrap">{reference}</span>
          </p>}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link className="btn-luxury-fill" href="/projects">
              Review Project References
            </Link>
            <Link className="btn-luxury" href="/">
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
