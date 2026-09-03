"use client";

import { useMemo, useRef, useState } from "react";
import { buildMailtoUrl, buildWhatsAppUrl, InquiryContext } from "../lib/conversion";
import { readStoredCampaign, trackConversionEvent } from "../lib/tracking";

type InquiryFormProps = {
  context: InquiryContext;
  projectOptions?: string[];
  defaultProjectType?: string;
};

export default function InquiryForm({ context, projectOptions, defaultProjectType }: InquiryFormProps) {
  const [projectType, setProjectType] = useState(defaultProjectType || context.projectType || "Stone project");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [destinationPort, setDestinationPort] = useState("");
  const [stoneScope, setStoneScope] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [materialPreference, setMaterialPreference] = useState("");
  const [phone, setPhone] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hydratedContext = useMemo(
    () => ({
      ...context,
      projectType
    }),
    [context, projectType]
  );

  const details = { name, contact, budgetRange, timeline, message };
  const whatsappUrl = buildWhatsAppUrl(hydratedContext, details);
  const mailtoUrl = buildMailtoUrl(hydratedContext, details);

  function track(method: "whatsapp" | "email") {
    trackConversionEvent(method === "whatsapp" ? "whatsapp_inquiry_click" : "email_inquiry_click", {
      method,
      sourcePage: hydratedContext.sourcePage,
      projectType: hydratedContext.projectType,
      hasContact: Boolean(contact),
      hasMessage: Boolean(message),
      hasFiles: files.length > 0,
      fileCount: files.length,
      country,
      hasCompany: Boolean(company),
      hasDestination: Boolean(destinationPort),
      hasQuantity: Boolean(quantity),
      landingPage: window.location.pathname
    });
    trackConversionEvent("qualified_inquiry_form_submit", {
      method,
      sourcePage: hydratedContext.sourcePage,
      projectType: hydratedContext.projectType,
      hasContact: Boolean(contact),
      hasMessage: Boolean(message),
      hasBudget: Boolean(budgetRange),
      hasTimeline: Boolean(timeline)
    });
  }

  function submitInquiry() {
    trackConversionEvent("qualified_inquiry_form_started", {
      method: "api",
      sourcePage: hydratedContext.sourcePage,
      projectType: hydratedContext.projectType,
      hasContact: Boolean(contact),
      hasMessage: Boolean(message),
      hasBudget: Boolean(budgetRange),
      hasTimeline: Boolean(timeline),
      hasFiles: files.length > 0,
      fileCount: files.length,
      country,
      hasCompany: Boolean(company),
      hasDestination: Boolean(destinationPort),
      hasQuantity: Boolean(quantity),
      landingPage: window.location.pathname
    });
  }

  async function uploadFiles() {
    if (!files.length) return [];
    trackConversionEvent("file_upload_started", { sourcePage: hydratedContext.sourcePage, projectType, hasDrawings: true });
    const uploaded: Array<{ key: string; name: string; size: number }> = [];
    for (const file of files) {
      const response = await fetch("/api/inquiry/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: file.name, type: file.type, size: file.size })
      });
      const signed = (await response.json()) as { ok?: boolean; message?: string; key?: string; uploadUrl?: string };
      if (!response.ok || !signed.ok || !signed.key || !signed.uploadUrl) throw new Error(signed.message || "File upload failed.");
      const upload = await fetch(signed.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file
      });
      if (!upload.ok) throw new Error(`Could not upload ${file.name}.`);
      uploaded.push({ key: signed.key, name: file.name, size: file.size });
    }
    trackConversionEvent("file_upload_completed", { sourcePage: hydratedContext.sourcePage, projectType, hasDrawings: true });
    return uploaded;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("");
    submitInquiry();
    try {
      const uploadedFiles = await uploadFiles();
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, company, contact, country, destinationPort, stoneScope, quantity, deliveryDate,
          materialPreference, phone, budgetRange, timeline, message, projectType,
          intent: hydratedContext.intent, sourcePage: hydratedContext.sourcePage, files: uploadedFiles
          , campaign: readStoredCampaign()
        })
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "The inquiry could not be sent yet.");
      trackConversionEvent("qualified_inquiry_submitted", { sourcePage: hydratedContext.sourcePage, projectType, hasContact: true, hasMessage: Boolean(message), hasBudget: Boolean(budgetRange), hasTimeline: Boolean(timeline), hasDrawings: uploadedFiles.length > 0, hasFiles: uploadedFiles.length > 0, fileCount: uploadedFiles.length, country, hasCompany: Boolean(company), hasDestination: Boolean(destinationPort), hasQuantity: Boolean(quantity), landingPage: window.location.pathname });
      window.sessionStorage.setItem("atelierInquirySubmitted", "1");
      window.location.assign("/contact/thank-you");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The inquiry could not be sent yet.");
      setSubmitting(false);
    }
  }

  function handleFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files || []);
    if (selected.length > 5) { setStatus("Please select no more than 5 files."); return; }
    if (selected.some((file) => file.size > 25 * 1024 * 1024)) { setStatus("Each file must be smaller than 25 MB."); return; }
    setFiles(selected);
    setStatus("");
  }

  return (
    <form
      className="card-luxury mx-auto grid w-full max-w-[44rem] gap-4 p-5 md:max-w-[48rem] md:gap-4 md:p-6"
      data-qualified-inquiry-form="true"
      onSubmit={handleSubmit}
    >
      <div className="rounded-[18px] border border-ink/10 bg-stone/40 px-5 py-4">
        <p className="eyebrow-luxury mb-2">Request a quotation</p>
        <p className="text-sm leading-7 text-ink/68">
          Share project scope, drawings, budget, destination market, and timing. We use these details to match
          material selection, fabrication scale, and packing requirements.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          Contact Name
          <input
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
            name="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          Email
          <input
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
            name="contact"
            type="email"
            placeholder="Your email address"
            required
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          Company
          <input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="company" placeholder="Company name" value={company} onChange={(event) => setCompany(event.target.value)} />
        </label>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">Country<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="country" placeholder="Country" value={country} onChange={(event) => setCountry(event.target.value)} /></label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">Destination Port<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="destinationPort" placeholder="Port or city" value={destinationPort} onChange={(event) => setDestinationPort(event.target.value)} /></label>
      </div>
      <div className={`grid gap-3 ${projectOptions?.length ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
        {projectOptions?.length ? (
          <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
            Project Type
            <select
              className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition focus:border-[rgba(31,27,24,0.42)]"
              name="projectType"
              value={projectType}
              onChange={(event) => setProjectType(event.target.value)}
            >
              {projectOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ) : null}
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          Budget Range
          <select
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition focus:border-[rgba(31,27,24,0.42)]"
            name="budgetRange"
            value={budgetRange}
            onChange={(event) => setBudgetRange(event.target.value)}
          >
            <option value="">Select budget range</option>
            <option>Under USD 10,000</option>
            <option>USD 10,000 - 30,000</option>
            <option>USD 30,000 - 80,000</option>
            <option>USD 80,000 - 200,000</option>
            <option>USD 200,000+</option>
          </select>
        </label>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">Product / Stone Scope<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="stoneScope" placeholder="Countertops, vanity tops, slabs..." value={stoneScope} onChange={(event) => setStoneScope(event.target.value)} /></label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">Approximate Quantity<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="quantity" placeholder="Pieces, rooms, or m²" value={quantity} onChange={(event) => setQuantity(event.target.value)} /></label>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">Required Delivery Date<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none" name="deliveryDate" type="date" value={deliveryDate} onChange={(event) => setDeliveryDate(event.target.value)} /></label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">Material Preference<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="materialPreference" placeholder="Marble, quartzite..." value={materialPreference} onChange={(event) => setMaterialPreference(event.target.value)} /></label>
      </div>
      <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">WhatsApp / Phone<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="phone" placeholder="Country code included" value={phone} onChange={(event) => setPhone(event.target.value)} /></label>
      <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">CAD / BOQ / Reference Files
        <input ref={fileInputRef} className="sr-only" type="file" multiple accept=".pdf,.dwg,.dxf,.xlsx,.xls,.jpg,.jpeg,.png,.zip" onChange={handleFiles} />
        <button type="button" className="flex min-h-12 items-center justify-between rounded-[12px] border border-dashed border-ink/25 bg-[var(--color-paper)] px-4 text-left text-[14px] font-normal normal-case tracking-normal text-ink/65 hover:border-ink/50" onClick={() => fileInputRef.current?.click()}><span>{files.length ? `${files.length} file${files.length > 1 ? "s" : ""} selected` : "Choose up to 5 files"}</span><span className="text-xs uppercase tracking-[0.12em]">Browse</span></button>
        <span className="text-xs font-normal normal-case tracking-normal text-ink/50">PDF, DWG, DXF, XLSX, JPG, PNG or ZIP. 25 MB per file.</span>
      </label>
      <div className="grid gap-3 md:grid-cols-1">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          Timeline Expectation
          <select
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition focus:border-[rgba(31,27,24,0.42)]"
            name="timeline"
            value={timeline}
            onChange={(event) => setTimeline(event.target.value)}
          >
            <option value="">Select timeline</option>
            <option>Immediate</option>
            <option>Within 1 month</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
            <option>Flexible</option>
          </select>
        </label>
      </div>
      <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
        Project Notes
        <textarea
          className="min-h-[160px] w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 py-3 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
          name="message"
          placeholder="Material preference, quantities, drawings, destination market, and any special requirements."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <div className="flex flex-wrap gap-3 pt-1">
        <button disabled={submitting} className="btn-luxury-fill h-12 justify-center px-6 text-[13px] tracking-[0.08em] disabled:cursor-wait disabled:opacity-60 md:h-[54px] md:text-[14px]" type="submit">
          {submitting ? "Sending..." : "Request Project Pricing"}
        </button>
        <a className="btn-luxury h-12 justify-center px-6 text-[13px] tracking-[0.08em] md:h-[54px] md:text-[14px]" href={mailtoUrl} onClick={() => track("email")}>
          Email Project Details
        </a>
        <a className="btn-luxury h-12 justify-center px-6 text-[13px] tracking-[0.08em] md:h-[54px] md:text-[14px]" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => track("whatsapp")}>
          Discuss on WhatsApp
        </a>
      </div>
      <input aria-label="Website" className="absolute -left-[9999px] h-px w-px opacity-0" tabIndex={-1} autoComplete="off" name="website" />
      {status ? <p role="alert" className="text-sm leading-6 text-red-700">{status}</p> : null}
      <p className="text-[11px] leading-6 tracking-[0.08em] text-ink/52">
        Best for architects, procurement teams, importers, and buyers comparing stone options for export projects.
      </p>
    </form>
  );
}
