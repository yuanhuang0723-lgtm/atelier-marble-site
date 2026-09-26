type ProjectProcurementInfoProps = {
  materialOptions: string;
  customCapability: string;
};

export default function ProjectProcurementInfo({ materialOptions, customCapability }: ProjectProcurementInfoProps) {
  const items = [
    {
      label: "Minimum order (MOQ)",
      detail: "Single-piece custom requests and small MOQs can be reviewed. Feasibility depends on material, fabrication, finish, and export packing."
    },
    {
      label: "Lead time",
      detail: "The project schedule is confirmed after material, approved drawings, quantity, finish, QC checkpoints, and packing are agreed."
    },
    { label: "Material options", detail: materialOptions },
    {
      label: "Destination & delivery",
      detail: "Delivery route, packing, loading sequence, and terms are reviewed for the stated destination. Confirm whether the requested route and scope can be included in the project quotation."
    },
    { label: "Custom capability", detail: customCapability }
  ];

  return (
    <section className="section-luxury bg-stone" aria-labelledby="project-procurement-title">
      <div className="container-luxury">
        <div className="section-intro section-intro--center">
          <p className="eyebrow-luxury">Procurement information</p>
          <h2 id="project-procurement-title" className="heading-lg section-intro__title">
            Plan quantity, timing, materials, and delivery.
          </h2>
          <p className="body-luxury max-w-3xl">
            The exact quote depends on the confirmed scope. These checkpoints help buyers prepare a useful first brief.
          </p>
        </div>
        <dl className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => (
            <div key={item.label} className="card-luxury bg-paper p-5">
              <dt className="eyebrow-luxury">{item.label}</dt>
              <dd className="mt-3 text-sm leading-6 text-ink/72">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
