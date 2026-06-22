import { NextResponse } from "next/server";
import { contact } from "../../../lib/assets";

type InquiryRequestBody = {
  name?: string;
  contact?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  projectType?: string;
  intent?: string;
  sourcePage?: string;
};

function buildMessage(body: InquiryRequestBody) {
  return [
    "Hello Atelier Marble,",
    "",
    "I would like to discuss a project consultation.",
    body.projectType ? `Project type: ${body.projectType}` : "",
    body.intent ? `Inquiry intent: ${body.intent}` : "",
    body.sourcePage ? `Source page: ${body.sourcePage}` : "",
    body.name ? `Name: ${body.name}` : "",
    body.contact ? `Contact: ${body.contact}` : "",
    body.budgetRange ? `Budget range: ${body.budgetRange}` : "",
    body.timeline ? `Timeline: ${body.timeline}` : "",
    "",
    "Project notes:",
    body.message || "-",
    "",
    "Please advise material options, fabrication approach, and project pricing steps."
  ].join("\n");
}

export async function POST(request: Request) {
  let body: InquiryRequestBody;

  try {
    body = (await request.json()) as InquiryRequestBody;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const recipient = contact.emails[0];
  const cc = contact.emails.slice(1).join(",");
  const subject = body.projectType
    ? `${body.projectType} Project Consultation`
    : "Atelier Marble Project Consultation";

  const payload = new URLSearchParams();
  payload.set("_subject", subject);
  payload.set("_template", "table");
  payload.set("_captcha", "false");
  if (cc) {
    payload.set("_cc", cc);
  }
  if (body.contact && body.contact.includes("@")) {
    payload.set("_replyto", body.contact);
  }
  payload.set("name", body.name || "");
  payload.set("contact", body.contact || "");
  payload.set("budgetRange", body.budgetRange || "");
  payload.set("timeline", body.timeline || "");
  payload.set("message", body.message || "");
  payload.set("projectType", body.projectType || "");
  payload.set("intent", body.intent || "");
  payload.set("sourcePage", body.sourcePage || "");
  payload.set("body", buildMessage(body));

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: payload
  });

  const text = await response.text();

  try {
    const data = JSON.parse(text) as { success?: boolean; message?: string };
    if (!response.ok || data.success === false) {
      return NextResponse.json(
        {
          ok: false,
          message:
            data.message ||
            "The inquiry could not be sent yet. Please confirm the recipient email once if FormSubmit asks for activation."
        },
        { status: response.status || 502 }
      );
    }

    return NextResponse.json({ ok: true, message: data.message || "Inquiry sent." });
  } catch {
    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "The inquiry could not be sent yet. Please confirm the recipient email once if FormSubmit asks for activation."
        },
        { status: response.status || 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Inquiry sent." });
  }
}

export function GET() {
  return NextResponse.json({ ok: false, message: "Method not allowed." }, { status: 405 });
}
