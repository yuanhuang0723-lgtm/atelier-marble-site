"use client";

import { useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import { buildMailtoUrl, buildWhatsAppUrl, InquiryContext } from "../lib/conversion";
import { readStoredCampaign, trackConversionEvent } from "../lib/tracking";

type InquiryFormProps = {
  context: InquiryContext;
  projectOptions?: string[];
  defaultProjectType?: string;
  locale?: "en" | "zh";
};

const allowedFileExtensions = new Set(["pdf", "dwg", "dxf", "xlsx", "xls", "jpg", "jpeg", "png", "zip"]);
const allowedFileTypes = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
  "image/jpeg",
  "image/png",
  "application/zip",
  "application/x-zip-compressed",
  "application/acad",
  "application/dxf",
  "application/octet-stream"
]);

export default function InquiryForm({ context, projectOptions, defaultProjectType, locale = "en" }: InquiryFormProps) {
  const zh = locale === "zh";
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
  const startedRef = useRef(false);

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

  function handleFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackConversionEvent("inquiry_form_started", {
      method: "api",
      sourcePage: hydratedContext.sourcePage,
      projectType: hydratedContext.projectType,
      landingPage: window.location.pathname
    });
  }

  async function requestWithRetry(input: RequestInfo | URL, init: RequestInit, attempts = 2) {
    let lastError: unknown;
    for (let attempt = 0; attempt < attempts; attempt += 1) {
      try {
        const response = await fetch(input, init);
        if (response.ok || attempt === attempts - 1) return response;
      } catch (error) {
        lastError = error;
        if (attempt === attempts - 1) throw error;
      }
      await new Promise((resolve) => window.setTimeout(resolve, 500 * (attempt + 1)));
    }
    throw lastError instanceof Error ? lastError : new Error("Request failed.");
  }

  async function uploadFiles() {
    if (!files.length) return [];
    const fileEventContext = {
      sourcePage: hydratedContext.sourcePage,
      projectType,
      hasDrawings: true,
      hasFiles: true,
      fileCount: files.length,
      country,
      hasCompany: Boolean(company),
      hasDestination: Boolean(destinationPort),
      hasQuantity: Boolean(quantity),
      landingPage: window.location.pathname
    };
    trackConversionEvent("file_upload_started", fileEventContext);
    const uploaded: Array<{ key: string; name: string; size: number }> = [];
    for (const file of files) {
      setStatus(`Uploading ${file.name}...`);
      const response = await requestWithRetry("/api/inquiry/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: file.name, type: file.type, size: file.size })
      });
      const signed = (await response.json()) as { ok?: boolean; message?: string; key?: string; uploadUrl?: string };
      if (!response.ok || !signed.ok || !signed.key || !signed.uploadUrl) throw new Error(signed.message || "File upload failed.");
      const upload = await requestWithRetry(signed.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file
      });
      if (!upload.ok) throw new Error(`Could not upload ${file.name}.`);
      uploaded.push({ key: signed.key, name: file.name, size: file.size });
    }
    setStatus("Files uploaded. Sending your inquiry...");
    trackConversionEvent("file_upload_completed", fileEventContext);
    return uploaded;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("Preparing your inquiry...");
    try {
      const uploadedFiles = await uploadFiles();
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, company, contact, country, destinationPort, stoneScope, quantity, deliveryDate,
          materialPreference, phone, budgetRange, timeline, message, projectType,
          intent: hydratedContext.intent, sourcePage: hydratedContext.sourcePage, language: window.location.pathname.startsWith("/zh") ? "zh" : "en", files: uploadedFiles
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
    const resetFileInput = () => {
      if (fileInputRef.current) fileInputRef.current.value = "";
    };
    if (selected.length > 5) { resetFileInput(); setStatus("Please select no more than 5 files."); return; }
    if (selected.some((file) => {
      const extension = file.name.toLowerCase().split(".").pop() || "";
      return !allowedFileExtensions.has(extension) || !allowedFileTypes.has(file.type.toLowerCase());
    })) { resetFileInput(); setStatus("Please choose PDF, DWG, DXF, XLS, XLSX, JPG, PNG, or ZIP files only."); return; }
    if (selected.some((file) => file.size > 25 * 1024 * 1024)) { resetFileInput(); setStatus("Each file must be smaller than 25 MB."); return; }
    setFiles(selected);
    setStatus("");
  }

  function removeFile(index: number) {
    setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <form
      className="card-luxury mx-auto grid w-full max-w-[44rem] gap-4 p-5 md:max-w-[48rem] md:gap-4 md:p-6"
      data-qualified-inquiry-form="true"
      onSubmit={handleSubmit}
      onFocusCapture={handleFormStart}
    >
      <div className="rounded-[18px] border border-ink/10 bg-stone/40 px-5 py-4">
        <p className="eyebrow-luxury mb-2">{zh ? "申请项目报价" : "Request a quotation"}</p>
        <p className="text-sm leading-7 text-ink/68">
          {zh ? "请提供项目范围、图纸、预算、目的地和时间要求，我们会据此匹配材料、加工范围和包装要求。" : "Share project scope, drawings, budget, destination market, and timing. We use these details to match material selection, fabrication scale, and packing requirements."}
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          {zh ? "联系人姓名" : "Contact Name"}
          <input
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
            name="name"
            type="text"
            placeholder={zh ? "姓名" : "Your name"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          {zh ? "邮箱" : "Email"}
          <input
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
            name="contact"
            type="email"
            placeholder={zh ? "邮箱地址" : "Your email address"}
            required
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          {zh ? "公司" : "Company"}
          <input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="company" placeholder={zh ? "公司名称" : "Company name"} value={company} onChange={(event) => setCompany(event.target.value)} />
        </label>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "国家" : "Country"}<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="country" placeholder={zh ? "国家" : "Country"} value={country} onChange={(event) => setCountry(event.target.value)} /></label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "目的港" : "Destination Port"}<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="destinationPort" placeholder={zh ? "港口或城市" : "Port or city"} value={destinationPort} onChange={(event) => setDestinationPort(event.target.value)} /></label>
      </div>
      <div className={`grid gap-3 ${projectOptions?.length ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
        {projectOptions?.length ? (
          <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
            {zh ? "项目类型" : "Project Type"}
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
          {zh ? "预算范围" : "Budget Range"}
          <select
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition focus:border-[rgba(31,27,24,0.42)]"
            name="budgetRange"
            value={budgetRange}
            onChange={(event) => setBudgetRange(event.target.value)}
          >
            <option value="">{zh ? "选择预算范围" : "Select budget range"}</option>
            <option>Under USD 10,000</option><option>USD 10,000 - 30,000</option><option>USD 30,000 - 80,000</option><option>USD 80,000 - 200,000</option><option>USD 200,000+</option>
          </select>
        </label>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "产品 / 石材范围" : "Product / Stone Scope"}<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="stoneScope" placeholder={zh ? "台面、浴室台面、大板……" : "Countertops, vanity tops, slabs..."} value={stoneScope} onChange={(event) => setStoneScope(event.target.value)} /></label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "大致数量" : "Approximate Quantity"}<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="quantity" placeholder={zh ? "件数、房间或平方米" : "Pieces, rooms, or m²"} value={quantity} onChange={(event) => setQuantity(event.target.value)} /></label>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "要求交付日期" : "Required Delivery Date"}<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none" name="deliveryDate" type="date" value={deliveryDate} onChange={(event) => setDeliveryDate(event.target.value)} /></label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "材料偏好" : "Material Preference"}<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="materialPreference" placeholder={zh ? "大理石、石英岩……" : "Marble, quartzite..."} value={materialPreference} onChange={(event) => setMaterialPreference(event.target.value)} /></label>
      </div>
      <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "WhatsApp / 电话" : "WhatsApp / Phone"}<input className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none placeholder:text-ink/35" name="phone" placeholder={zh ? "请包含国家代码" : "Country code included"} value={phone} onChange={(event) => setPhone(event.target.value)} /></label>
      <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">{zh ? "CAD / BOQ / 参考文件" : "CAD / BOQ / Reference Files"}
        <input ref={fileInputRef} className="sr-only" type="file" multiple accept=".pdf,.dwg,.dxf,.xlsx,.xls,.jpg,.jpeg,.png,.zip" onChange={handleFiles} />
        <button type="button" className="flex min-h-12 items-center justify-between rounded-[12px] border border-dashed border-ink/25 bg-[var(--color-paper)] px-4 text-left text-[14px] font-normal normal-case tracking-normal text-ink/65 hover:border-ink/50" onClick={() => fileInputRef.current?.click()}><span>{files.length ? `${files.length} file${files.length > 1 ? "s" : ""} selected` : zh ? "最多选择 5 个文件" : "Choose up to 5 files"}</span><span className="text-xs uppercase tracking-[0.12em]">{zh ? "浏览" : "Browse"}</span></button>
        <span className="text-xs font-normal normal-case tracking-normal text-ink/50">{zh ? "支持 PDF、DWG、DXF、XLSX、JPG、PNG 或 ZIP，每个文件不超过 25 MB。" : "PDF, DWG, DXF, XLSX, JPG, PNG or ZIP. 25 MB per file."}</span>
        {files.length ? <ul className="grid gap-2" aria-label="Selected files">{files.map((file, index) => <li key={`${file.name}-${file.lastModified}`} className="flex min-w-0 items-center justify-between gap-3 rounded-[10px] border border-ink/10 bg-stone/50 px-3 py-2 text-xs text-ink/70"><span className="min-w-0 truncate">{file.name} <span className="text-ink/45">({(file.size / 1024 / 1024).toFixed(1)} MB)</span></span><button type="button" className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink/55 hover:border-ink/30 hover:text-ink" aria-label={`Remove ${file.name}`} title={`Remove ${file.name}`} onClick={() => removeFile(index)}><X className="h-3.5 w-3.5" aria-hidden="true" /></button></li>)}</ul> : null}
      </label>
      <div className="grid gap-3 md:grid-cols-1">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          {zh ? "时间要求" : "Timeline Expectation"}
          <select
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition focus:border-[rgba(31,27,24,0.42)]"
            name="timeline"
            value={timeline}
            onChange={(event) => setTimeline(event.target.value)}
          >
            <option value="">{zh ? "选择时间要求" : "Select timeline"}</option>
            <option>{zh ? "尽快" : "Immediate"}</option><option>{zh ? "1 个月内" : "Within 1 month"}</option>
            <option>{zh ? "1–3 个月" : "1-3 months"}</option>
            <option>{zh ? "3–6 个月" : "3-6 months"}</option>
            <option>{zh ? "时间灵活" : "Flexible"}</option>
          </select>
        </label>
      </div>
      <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
        {zh ? "项目备注" : "Project Notes"}
        <textarea
          className="min-h-[160px] w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 py-3 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
          name="message"
          placeholder={zh ? "材料偏好、数量、图纸、目的地及特殊要求。" : "Material preference, quantities, drawings, destination market, and any special requirements."}
          required
          minLength={10}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <div className="flex flex-wrap gap-3 pt-1">
        <button disabled={submitting} className="btn-luxury-fill h-12 justify-center px-6 text-[13px] tracking-[0.08em] disabled:cursor-wait disabled:opacity-60 md:h-[54px] md:text-[14px]" type="submit">
          {submitting ? (zh ? "提交中……" : "Sending...") : zh ? "申请项目报价" : "Request Project Pricing"}
        </button>
        <a className="btn-luxury h-12 justify-center px-6 text-[13px] tracking-[0.08em] md:h-[54px] md:text-[14px]" href={mailtoUrl} onClick={() => track("email")}>
          {zh ? "通过邮箱发送项目资料" : "Email Project Details"}
        </a>
        <a className="btn-luxury h-12 justify-center px-6 text-[13px] tracking-[0.08em] md:h-[54px] md:text-[14px]" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => track("whatsapp")}>
          {zh ? "通过 WhatsApp 沟通" : "Discuss on WhatsApp"}
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
