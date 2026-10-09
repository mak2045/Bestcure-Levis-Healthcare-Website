import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { directors } from "@/data/directors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bestcure Levis Health Care Private Limited is an Indian agri-animal nutrition company focused on livestock health, dairy productivity and farmer profitability.",
  alternates: { canonical: "/about" },
};

const focusPoints = [
  "Improve livestock health & productivity",
  "Enhance milk production",
  "Support immunity & fertility",
  "Promote sustainable dairy farming",
  "Improve farmer profitability",
];

const missionPoints = [
  "Improve livestock health & productivity",
  "Deliver scientifically formulated nutrition solutions",
  "Support sustainable dairy & livestock farming",
  "Empower farmers through knowledge & innovation",
  "Ensure quality, safety & customer satisfaction",
  "Contribute to rural economic development",
];

export default function AboutPage() {
  return (
    <>
      {/* ---------------- Intro ---------------- */}
      <section className="bg-cream-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Bestcure Levis Health Care Private Limited"
              intro="An Indian agri-animal nutrition company focused on improving livestock health, productivity and farmer profitability through scientifically formulated nutritional solutions. The company develops and manufactures cattle feed, mineral mixtures, organic feed supplements, feed additives, calcium supplements and mineral blocks."
            />
            <div className="reveal mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-600">Our Focus</h3>
              <ul className="mt-4 grid gap-2.5">
                {focusPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl bg-cream-50 px-3.5 py-2.5 text-[14.5px] leading-6 text-forest-950"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/30">
                      <svg viewBox="0 0 24 24" className="h-3 w-3 text-forest-800" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]">
            <Image
              src="/dpr/about-farmer.jpg"
              alt="Farmer tending to cattle in a livestock shed"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Leadership ---------------- */}
      <section className="border-t border-forest-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Leadership" title="The people behind Bestcure." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {directors.map((d) => (
              <article
                key={d.name}
                className="reveal flex flex-col rounded-2xl border border-forest-900/10 bg-cream-50 p-7 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="inline-flex w-fit rounded-full bg-forest-800/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-800">
                  {d.role}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-forest-950">
                  {d.name}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-stone-warm">{d.bio}</p>
              </article>
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
              {missionPoints.map((m) => (
                <li key={m} className="flex items-start gap-3 text-[15px] leading-6 text-cream-100/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="border-t border-forest-900/10 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Connect with our team."
            intro="Whether you need product information, dealership enquiries or technical guidance, our team is ready to help."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-600">Contact Numbers</h3>
              <ul className="mt-4 space-y-3 text-[15px] text-stone-warm">
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/25">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-forest-800" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <a href={site.phoneHref} className="font-semibold text-forest-950 hover:text-forest-700">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/25">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-forest-800" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <a href={site.phoneHref2} className="font-semibold text-forest-950 hover:text-forest-700">
                    +91 {site.phoneDisplay2}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/25">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-forest-800" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <a
                    href={site.emailHref}
                    className="font-semibold text-forest-950 [overflow-wrap:anywhere] hover:text-forest-700"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/25">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 text-forest-800" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {site.location}
                </li>
              </ul>
            </div>
            <div className="min-w-0 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-600">Quick Links</h3>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/" className="text-forest-950 hover:text-forest-700">Home</Link></li>
                <li><Link href="/products" className="text-forest-950 hover:text-forest-700">Products</Link></li>
                <li><Link href="/contact" className="text-forest-950 hover:text-forest-700">Contact</Link></li>
                <li><Link href="/contact" className="text-forest-950 hover:text-forest-700">Enquire Now</Link></li>
              </ul>
            </div>
          </div>
          <div className="reveal mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-forest-800 px-7 py-3.5 text-[15px] font-semibold text-cream-50 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-900"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CTASection
        title="Want to know more about our work?"
        body="Reach out to our team for product information, dealership enquiries or technical guidance."
        buttonLabel="Contact Us"
      />
    </>
  );
}
