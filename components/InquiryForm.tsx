"use client";

import { FormEvent, useMemo, useState } from "react";
import { buildMailtoUrl, buildWhatsAppUrl, InquiryContext } from "../lib/conversion";
import { trackConversionEvent } from "../lib/tracking";

type InquiryFormProps = {
  context: InquiryContext;
  projectOptions?: string[];
  defaultProjectType?: string;
};

export default function InquiryForm({ context, projectOptions, defaultProjectType }: InquiryFormProps) {
  const [projectType, setProjectType] = useState(defaultProjectType || context.projectType || "Stone project");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

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

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setSubmitting(true);
    setSubmitState("idle");
    setSubmitError("");
    track("email");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          contact,
          budgetRange,
          timeline,
          message,
          projectType: hydratedContext.projectType,
          intent: hydratedContext.intent,
          sourcePage: hydratedContext.sourcePage
        })
      });

      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send inquiry right now.");
      }

      setSubmitState("success");
      setName("");
      setContact("");
      setBudgetRange("");
      setTimeline("");
      setMessage("");
    } catch (error) {
      setSubmitState("error");
      setSubmitError(error instanceof Error ? error.message : "Unable to send inquiry right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="card-luxury mx-auto grid w-full max-w-[44rem] gap-4 p-5 md:max-w-[48rem] md:gap-4 md:p-6"
      data-qualified-inquiry-form="true"
      onSubmit={submitInquiry}
    >
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          Contact Name
          <input
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/62">
          Email or WhatsApp
          <input
            className="h-12 w-full min-w-0 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-paper)] px-4 text-[15px] leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-[rgba(31,27,24,0.42)]"
            name="contact"
            type="text"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
          />
        </label>
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
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <div className="flex flex-wrap gap-3 pt-1">
        <button
          className="btn-luxury-fill h-12 justify-center px-6 text-[13px] tracking-[0.08em] md:h-[54px] md:text-[14px]"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Sending Inquiry..." : "Send Inquiry"}
        </button>
        <a className="btn-luxury h-12 justify-center px-6 text-[13px] tracking-[0.08em] md:h-[54px] md:text-[14px]" href={mailtoUrl} onClick={() => track("email")}>
          Discuss by Email
        </a>
      </div>
      {submitState === "success" ? (
        <p className="text-sm leading-6 text-emerald-700">
          Your inquiry was sent. We will reply by email and WhatsApp if you included contact details.
        </p>
      ) : null}
      {submitState === "error" ? (
        <p className="text-sm leading-6 text-rose-700">{submitError}</p>
      ) : null}
    </form>
  );
}
