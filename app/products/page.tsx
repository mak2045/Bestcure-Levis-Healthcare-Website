import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ContactMethods from "@/components/ContactMethods";
import CertificateCard from "@/components/CertificateCard";
import { productCategories } from "@/data/products";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Animal Nutrition Products",
  description:
    "Explore the Bestcure Levis Healthcare portfolio — cattle feed, mineral mixtures, organic feed supplements, feed additives, calcium supplements, mineral blocks and specialized livestock nutrition solutions.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* ---------------- Page hero ---------------- */}
      <section className="border-b border-forest-900/10 bg-forest-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            dark
            eyebrow="Product Portfolio"
            title="Animal nutrition products, built on scientific formulation."
            intro="Our portfolio is designed to improve livestock health, milk production, fertility, immunity, digestion and overall productivity — for dairy farmers, livestock owners, commercial dairy farms, cooperatives and institutional customers."
          />
        </div>
      </section>

      {/* ---------------- Product grid ---------------- */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Certifications & Registrations ---------------- */}
      <section className="border-t border-forest-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Trust"
            title="Certifications & Registrations"
            intro="Bestcure Levis Healthcare Private Limited operates with certified quality systems and government registrations, demonstrating commitment to compliance and customer trust."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Can't find ---------------- */}
      <section id="product-enquiry-help" className="scroll-mt-24 border-t border-forest-900/10 bg-cream-100/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-forest-950">
              Can&rsquo;t find what you&rsquo;re looking for?
            </h2>
            <p className="mt-3 text-base leading-7 text-stone-warm">
              Tell us what you need and our team can help you with your requirement.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-sm bg-forest-800 px-7 py-3.5 text-base font-semibold text-cream-50 transition-colors hover:bg-forest-900"
            >
              Send Product Enquiry
            </Link>
          </div>
          <div className="reveal mt-12">
            <ContactMethods />
          </div>
        </div>
      </section>
    </>
  );
}
