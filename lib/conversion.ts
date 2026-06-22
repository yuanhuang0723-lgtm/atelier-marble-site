import { contact } from "./assets";

export type InquiryContext = {
  sourcePage?: string;
  intent?: string;
  projectType?: string;
};

export type InquiryDetails = {
  name?: string;
  contact?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  drawingFiles?: string[];
};

function buildInquiryLines(context: InquiryContext = {}, details: InquiryDetails = {}) {
  return [
    "Hello Atelier Marble, I would like to discuss a project consultation.",
    context.projectType ? `Project type: ${context.projectType}` : "",
    context.intent ? `Inquiry intent: ${context.intent}` : "",
    context.sourcePage ? `Source page: ${context.sourcePage}` : "",
    details.name ? `Name: ${details.name}` : "",
    details.contact ? `Contact: ${details.contact}` : "",
    details.budgetRange ? `Budget range: ${details.budgetRange}` : "",
    details.timeline ? `Timeline: ${details.timeline}` : "",
    details.drawingFiles?.length ? `Drawing files: ${details.drawingFiles.join(", ")}` : "",
    details.message ? `Project notes: ${details.message}` : "",
    "Please advise material options, fabrication approach, and project pricing steps."
  ].filter(Boolean);
}

export function buildWhatsAppUrl(context: InquiryContext = {}, details: InquiryDetails = {}) {
  const lines = buildInquiryLines(context, details);

  return `${contact.whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function buildMailtoUrl(context: InquiryContext = {}, details: InquiryDetails = {}) {
  const subject = context.projectType
    ? `${context.projectType} Project Consultation`
    : "Atelier Marble Project Consultation";
  const lines = [
    "Hello Atelier Marble,",
    "",
    "I would like to discuss a project consultation.",
    context.projectType ? `Project type: ${context.projectType}` : "",
    context.intent ? `Inquiry intent: ${context.intent}` : "",
    context.sourcePage ? `Source page: ${context.sourcePage}` : "",
    details.name ? `Name: ${details.name}` : "",
    details.contact ? `Contact: ${details.contact}` : "",
    details.budgetRange ? `Budget range: ${details.budgetRange}` : "",
    details.timeline ? `Timeline: ${details.timeline}` : "",
    details.drawingFiles?.length ? `Drawing files: ${details.drawingFiles.join(", ")}` : "",
    "",
    "Project notes:",
    details.message || "- Dimensions / drawings:",
    "- Material preference:",
    "- Quantity:",
    "- Destination market:"
  ]
    .filter((line) => line !== "")
    .join("\n");

  return `mailto:${contact.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
}
