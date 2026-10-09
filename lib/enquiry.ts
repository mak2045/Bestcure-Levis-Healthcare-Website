import { generalEnquiryLabel, findCategoryByName } from "@/data/products";
import { site } from "@/data/site";

export interface EnquiryData {
  name: string;
  phone: string;
  email: string;
  product: string;
  business: string;
  message: string;
}

/**
 * Builds the pre-filled WhatsApp message for an enquiry.
 * The selected product/category is always included so the team knows
 * exactly what the customer is asking about.
 */
export function buildWhatsAppMessage(data: EnquiryData): string {
  const lines: string[] = [];

  lines.push(`Hello ${site.legalName},`);
  lines.push("");

  if (data.product && data.product !== generalEnquiryLabel) {
    lines.push(`I am interested in ${data.product} and would like more information.`);
  } else {
    lines.push("I would like to enquire about your animal nutrition products.");
  }

  lines.push("");
  lines.push("My details:");
  lines.push(`- Name: ${data.name}`);
  lines.push(`- Phone: ${data.phone}`);
  if (data.email.trim()) lines.push(`- Email: ${data.email.trim()}`);
  if (data.business.trim()) lines.push(`- Business / Farm: ${data.business.trim()}`);
  if (data.message.trim()) {
    lines.push("");
    lines.push(`Requirement: ${data.message.trim()}`);
  }

  return lines.join("\n");
}

export function whatsappUrlForProduct(product: string): string {
  const text =
    product && product !== generalEnquiryLabel
      ? `Hello ${site.legalName}, I am interested in ${product} and would like more information.`
      : `Hello ${site.legalName}, I would like to enquire about your animal nutrition products.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function whatsappUrlForEnquiry(data: EnquiryData): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    buildWhatsAppMessage(data),
  )}`;
}

/**
 * Submission handoff. There is no backend/database by design — enquiries are
 * delivered by opening WhatsApp with the full enquiry pre-filled.
 *
 * To switch to Formspree / Web3Forms / Resend / a custom API later, replace
 * only this function — no component changes required.
 */
export async function submitEnquiry(data: EnquiryData): Promise<void> {
  const url = whatsappUrlForEnquiry(data);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}
