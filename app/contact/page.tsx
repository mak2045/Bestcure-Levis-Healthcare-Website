import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import DirectorCard from "@/components/DirectorCard";
import EnquiryForm from "@/components/EnquiryForm";
import ContactMethods from "@/components/ContactMethods";
import { findCategoryByValue, generalEnquiryLabel } from "@/data/products";
import { site } from "@/data/site";
import CertificateCard from "@/components/CertificateCard";
import { certificates } from "@/data/certificates";
import { directors } from "@/data/directors";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bestcure Levis Healthcare for product enquiries, dealership and bulk supply — call 7014697012 or +91 8233341717. Jaipur, Rajasthan.",
  alternates: { canonical: "/contact" },
};

function FormFallback() {
  return (
    <div
      className="animate-pulse space-y-5 rounded-2xl border border-forest-900/10 bg-white p-8"
      aria-hidden="true"
    >
      <div className="h-5 w-1/3 rounded bg-forest-900/10" />
      <div className="h-11 w-full rounded bg-forest-900/10" />
      <div className="h-11 w-full rounded bg-forest-900/10" />
      <div className="h-32 w-full rounded bg-forest-900/10" />
    </div>
  );
}

export default async function ContactPage(props: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await props.searchParams;
  const preselectedProduct = product
    ? findCategoryByValue(product)?.name ?? generalEnquiryLabel
    : generalEnquiryLabel;

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden border-b border-forest-900/10 bg-forest-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_120%_at_85%_0%,rgba(168,207,63,0.16),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeading
            dark
            eyebrow="Contact"
            title="Let’s talk about your requirement."
            intro="Whether you need a product for your dairy farm, want to become a dealer, or have a bulk requirement — send an enquiry and our team will get in touch."
          />
        </div>
      </section>

      {/* ---------------- Contact methods ---------------- */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <ContactMethods />
          <div className="stagger mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-forest-900/10 bg-white p-5 shadow-[var(--shadow-soft)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-leaf-600">
                Primary Contact
              </p>
              <p className="mt-2 text-[15px] font-semibold text-forest-950">{site.phoneDisplay}</p>
              <a
                href={site.phoneHref}
                className="mt-1 inline-block text-sm font-medium text-forest-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-forest-900"
              >
                Call now
              </a>
            </div>
            <div className="rounded-2xl border border-forest-900/10 bg-white p-5 shadow-[var(--shadow-soft)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-leaf-600">
                Alternate Contact
              </p>
              <p className="mt-2 text-[15px] font-semibold text-forest-950">
                +91 {site.phoneDisplay2}
              </p>
              <a
                href={site.phoneHref2}
                className="mt-1 inline-block text-sm font-medium text-forest-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-forest-900"
              >
                Call now
              </a>
            </div>
          </div>
          <p className="reveal mt-5 text-sm text-stone-warm">
            {site.legalName} · {site.location}
          </p>
        </div>
      </section>

      {/* ---------------- Directors ---------------- */}
      <section className="border-t border-forest-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind Bestcure."
            intro="Reach out to our directors for product information, dealership enquiries or technical guidance."
          />
          <div className="stagger mt-10 grid gap-6 md:grid-cols-3">
            {directors.map((director) => (
              <DirectorCard key={director.name} director={director} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Certifications ---------------- */}
      <section className="border-t border-forest-900/10 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Trust"
            title="Certifications & Registrations"
            intro="Bestcure Levis Health Care Private Limited operates with certified quality systems and government registrations, demonstrating commitment to compliance and customer trust."
          />
          <div className="stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, i) => (
              <div key={certificate.id} style={{ ["--d" as string]: i % 3 }}>
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Enquiry form ---------------- */}
      <section className="border-t border-forest-900/10 bg-cream-100/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Enquiry"
            title="Send your enquiry."
            intro="Fill in the details below. Fields marked * are required."
          />
          <div className="reveal mt-10 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <Suspense fallback={<FormFallback />}>
              <EnquiryForm initialProduct={preselectedProduct} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
