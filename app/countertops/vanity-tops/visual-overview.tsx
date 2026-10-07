import Image from "next/image";
import Link from "next/link";
import { vanityProductReferences as productReferences, vanityDesignReferences as designReferences } from "../../../data/vanity-page-images";

export default function VanityTopVisualOverview({ contactHref }: { contactHref: string }) {
  return (
    <>
      <section id="vanity-products" className="section-luxury bg-paper">
        <div className="container-luxury">
          <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow-luxury">Vanity tops and basin components</p>
              <h2 className="mt-4 font-title text-3xl leading-tight md:text-5xl">See the stone, openings, and details.</h2>
              <p className="mt-4 text-base leading-7 text-ink/70">Product photographs for discussing your scope. Material, dimensions, and basin details are confirmed for each quotation.</p>
            </div>
            <Link className="text-cta-luxury shrink-0" href={contactHref}>Request Hotel Vanity Pricing</Link>
          </div>
          <div className="grid gap-x-6 gap-y-8 md:grid-cols-2">
            {productReferences.map((item) => (
              <figure key={item.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 640px" className="object-contain" />
                </div>
                <figcaption className="mt-3 text-base text-ink/80">{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-ink/60">Product references from our image archive; no specific hotel order or installation is attributed to these photographs.</p>

          <div className="mt-12 border-t border-ink/15 pt-9">
            <h3 className="font-title text-2xl md:text-3xl">Bathroom design directions</h3>
            <p className="mt-3 text-sm leading-6 text-ink/65">Illustrative interiors for comparing proportions, basin layouts, and surface direction.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {designReferences.map((item) => (
                <figure key={item.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone">
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1440px) 33vw, 420px" className="object-cover" />
                  </div>
                  <figcaption className="mt-3 text-sm text-ink/75">{item.title} · design concept</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-ink/15 pt-9 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="font-title text-2xl md:text-3xl">Start with the information you have.</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70">For hotels, multi-unit bathrooms, and trade buyers: share the room quantities, rough dimensions, basin layout, material direction, and destination. We work from Yunfu, China, with our own processing and partner coordination.</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-ink/75">
                <li>Vanity tops, basin openings, splash details, and edge profiles</li>
                <li>Matching cabinet panels and repeated room types</li>
                <li>Piece labels, packing groups, and export coordination</li>
              </ul>
            </div>
            <div className="self-start rounded-lg bg-stone p-6">
              <p className="text-base font-medium">Email and a short project note are enough to start.</p>
              <p className="mt-3 text-sm leading-6 text-ink/70">Drawings can follow when they are ready. Include the destination and approximate quantity if you know them.</p>
              <Link className="btn-luxury-fill mt-5" href={contactHref}>Request Hotel Vanity Pricing</Link>
              <Link className="mt-4 block text-sm underline underline-offset-4" href="/project-brief-template.txt">Download the project brief template</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-luxury-compact bg-stone">
        <div className="container-luxury">
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-luxury">Drawing review and workshop</p>
              <h2 className="mt-3 font-title text-2xl md:text-3xl">Review the working references.</h2>
            </div>
            <Link className="text-cta-luxury" href="/factory#factory-evidence">View redacted drawing-review example</Link>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-paper">
                <Image src="/assets/factory/evidence/redacted-stone-drawing-review-example.png" alt="Redacted stone drawing excerpt with plan and elevation views; project identifiers and dimension values removed." fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-ink/70">Drawing-review example with identifying details removed.</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-paper">
                <Image src="/assets/factory/workshop/stone-workshop-packing-area-b1a9572643.webp" alt="Workshop photo showing stone pieces and packing preparation areas." fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm leading-6 text-ink/70">Workshop reference showing stone and packing preparation.</figcaption>
            </figure>
          </div>
          <Link className="text-cta-luxury mt-7 inline-flex" href="/projects/canada-shower-niches-2025">Drawing-led case reference</Link>
        </div>
      </section>
    </>
  );
}
