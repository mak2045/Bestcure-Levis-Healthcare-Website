import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CertificateCard from "@/components/CertificateCard";
import CTASection from "@/components/CTASection";
import { productCategories } from "@/data/products";
import { certificates } from "@/data/certificates";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-forest-950">
        <Image
          src="/dpr/about-barn.jpg"
          alt="Farmer caring for dairy cows inside a livestock barn"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/70 to-forest-950/30" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-400">
            Agri-Animal Nutrition Company · India
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nutrition that turns livestock into livelihood.
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-cream-100/85 sm:text-base">
            Animal Nutrition <span className="mx-1 text-lime-400">|</span> Livestock Health{" "}
            <span className="mx-1 text-lime-400">|</span> Dairy Productivity
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-cream-100/80 sm:text-lg">
            {site.legalName} develops and manufactures scientifically formulated cattle feed,
            mineral mixtures, supplements and additives for healthier animals and more
            productive dairy farms.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-sm bg-lime-500 px-7 py-3.5 text-center text-base font-semibold text-forest-950 transition-colors hover:bg-lime-400"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-white/30 bg-white/5 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/15"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Featured Products ---------------- */}
      <section className="border-t border-forest-900/10 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Our Products"
            title=" Scientifically formulated animal nutrition products."
            intro="Our products are developed for dairy farmers, livestock owners, commercial farms and institutions — each formulated to support livestock health, milk production and overall productivity."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCard key={category.slug} category={category} />
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              href="/products"
              className="inline-block rounded-sm border border-forest-800 px-7 py-3 text-base font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream-50"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Why Bestcure ---------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Why Bestcure"
            title="What we stand for in the field."
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Scientific Nutrition",
                body: "Nutrition products formulated with a scientific approach to animal health and performance.",
              },
              {
                title: "Quality & Reliability",
                body: "A consistent focus on product quality that farmers and dairy farms can rely on, day after day.",
              },
              {
                title: "Farmer Engagement",
                body: "Direct engagement with dairy farmers and livestock owners to understand real field needs.",
              },
            ].map((point) => (
              <div key={point.title} className="reveal border-t-2 border-lime-500 pt-5">
                <h3 className="font-display text-xl font-semibold tracking-tight text-forest-950">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-7 text-stone-warm">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Vision & Mission ---------------- */}
      <section className="bg-forest-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-400">Vision</p>
            <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight text-cream-50 sm:text-[1.7rem]">
              To become a trusted and leading animal nutrition company in India by delivering
              innovative, scientifically formulated and sustainable livestock nutrition
              solutions that improve animal health, enhance productivity and increase farmer
              prosperity.
            </p>
          </div>
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-400">Mission</p>
            <ul className="mt-5 space-y-3.5">
              {[
                "Improve livestock health & productivity",
                "Deliver scientifically formulated nutrition solutions",
                "Support sustainable dairy & livestock farming",
                "Empower farmers through knowledge & innovation",
                "Ensure quality, safety & customer satisfaction",
                "Contribute to rural economic development",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3 text-[15px] leading-6 text-cream-100/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
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
            {certificates.slice(0, 3).map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <CTASection />
    </>
  );
}
