import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CertificateCard from "@/components/CertificateCard";
import CTASection from "@/components/CTASection";
import DirectorCard from "@/components/DirectorCard";
import { productCategories } from "@/data/products";
import { certificates } from "@/data/certificates";
import { directors } from "@/data/directors";
import { site } from "@/data/site";

/** Genuine portfolio categories named in the company description. */
const categories = [
  { name: "Cattle Feed", image: "/dpr/cattle-feed.jpg", alt: "Cattle feeding on fodder" },
  {
    name: "Mineral Mixtures",
    image: "/dpr/mineral-mixtures.jpg",
    alt: "Mineral mixture nutrition for livestock",
  },
  {
    name: "Organic Feed Supplements",
    image: "/dpr/organic-supplements.jpg",
    alt: "Organic feed supplements for dairy animals",
  },
  {
    name: "Feed Additives",
    image: "/dpr/feed-additives.jpg",
    alt: "Feed additives for livestock nutrition",
  },
  {
    name: "Calcium Supplements",
    image: "/dpr/calcium-supplements.jpg",
    alt: "Calcium supplements for cattle",
  },
  { name: "Mineral Blocks", image: "/dpr/mineral-blocks.jpg", alt: "Mineral licks for livestock" },
  {
    name: "Specialized Nutrition",
    image: "/dpr/specialized-nutrition.jpg",
    alt: "Specialised livestock nutrition solutions",
  },
];

const focusPoints = [
  "Improve livestock health & productivity",
  "Enhance milk production",
  "Support immunity & fertility",
  "Promote sustainable dairy farming",
  "Improve farmer profitability",
];

const pillars = [
  {
    title: "Scientific Nutrition",
    body: "Products formulated with a scientific approach to animal health, digestion and performance.",
  },
  {
    title: "Quality & Reliability",
    body: "A consistent focus on product quality that farmers and dairy farms can rely on, day after day.",
  },
  {
    title: "Farmer Engagement",
    body: "Direct engagement with dairy farmers and livestock owners to understand real field needs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================= Hero ============================= */}
      <section className="relative isolate overflow-hidden bg-forest-950">
        <Image
          src="/dpr/about-barn.jpg"
          alt="Dairy cows inside a livestock barn"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-center opacity-65"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forest-950/90 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <p className="reveal text-[11px] font-semibold uppercase tracking-[0.3em] text-lime-400">
            Agri-Animal Nutrition Company · India
          </p>
          <h1 className="reveal mt-5 max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.65rem]">
            Nutrition that turns livestock into livelihood.
          </h1>
          <p className="reveal mt-6 max-w-xl text-[15px] leading-7 text-cream-100/80 sm:text-lg sm:leading-8">
            {site.legalName} develops and manufactures scientifically formulated cattle feed,
            mineral mixtures, supplements and additives for healthier animals and more productive
            dairy farms.
          </p>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-lime-500 px-8 py-3.5 text-center text-[15px] font-semibold text-forest-950 shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-center text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
            >
              Enquire Now
            </Link>
          </div>

          {/* Trust chips — factual labels only */}
          <ul className="reveal mt-12 flex flex-wrap gap-2.5 text-[12.5px] font-medium text-cream-100/75">
            {["ISO 9001:2015", "WHO-GMP", "GST Registered", "Udyam Registered"].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================= Product showcase ========================= */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our Products"
              title="Scientifically formulated animal nutrition."
              intro="Developed for dairy farmers, livestock owners, commercial farms and institutions — each formulated to support livestock health, milk production and overall productivity."
            />
            <Link
              href="/products"
              className="reveal hidden shrink-0 rounded-full border border-forest-800 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors duration-300 hover:bg-forest-800 hover:text-cream-50 sm:inline-block"
            >
              View All Products
            </Link>
          </div>

          <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, i) => (
              <div key={category.slug} style={{ ["--d" as string]: i }}>
                <ProductCard category={category} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-block rounded-full border border-forest-800 px-6 py-3 text-sm font-semibold text-forest-800"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ============================= About ============================= */}
      <section className="border-t border-forest-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="reveal relative aspect-[5/4] overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]">
            <Image
              src="/dpr/about-farmer.jpg"
              alt="Farmer tending cattle in a livestock shed"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Committed to animal nutrition and livestock productivity."
              intro="We are an Indian agri-animal nutrition company focused on improving livestock health, productivity and farmer profitability through scientifically formulated nutritional solutions — cattle feed, mineral mixtures, organic feed supplements, feed additives, calcium supplements and mineral blocks."
            />
            <div className="reveal mt-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-leaf-600">
                Our Focus
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {focusPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl bg-cream-50 px-3.5 py-2.5 text-[14.5px] leading-6 text-forest-950"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/30">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3 text-forest-800"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-[15px] font-semibold text-cream-50 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-900"
              >
                More About Us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= Leadership ========================= */}
      <section className="border-t border-forest-900/10 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Our Leadership"
            title="The people behind Bestcure."
            intro="Reach out to our directors for product information, dealership enquiries or technical guidance."
          />
          <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {directors.map((director, i) => (
              <div key={director.name} style={{ ["--d" as string]: i }} className="h-full">
                <DirectorCard director={director} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= Category showcase ======================= */}
      <section className="bg-cream-100/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow="Product Categories"
            title="A complete portfolio for livestock nutrition."
            intro="From everyday cattle feed to specialised mineral and calcium nutrition — our range is built around the real needs of dairy and livestock farming."
          />

          {/* Row height is fixed by the grid, so every card is exactly the same
              height regardless of how many columns it spans. The image fills
              the card (no nested aspect box), which removes the empty strip
              that used to sit below the neighbours of the wide featured card. */}
          <div className="stagger mt-12 grid auto-rows-[11rem] gap-5 sm:grid-cols-2 md:auto-rows-[14rem] lg:auto-rows-[15rem] lg:grid-cols-4">
            {categories.map((category, i) => (
              <div
                key={category.name}
                style={{ ["--d" as string]: i }}
                className={`group relative h-full overflow-hidden rounded-2xl bg-forest-950 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover object-center transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute inset-x-4 bottom-4 font-display text-[15px] font-semibold leading-snug text-white">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= Why Bestcure ========================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Why Bestcure" title="What we stand for in the field." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((point) => (
              <div
                key={point.title}
                className="reveal rounded-2xl border border-forest-900/10 bg-cream-50 p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="block h-1 w-10 rounded-full bg-lime-500" aria-hidden="true" />
                <h3 className="mt-5 font-display text-[1.15rem] font-semibold text-forest-950">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-7 text-stone-warm">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Certifications & registrations ==================== */}
      <section className="border-t border-forest-900/10 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Trust"
            title="Certifications & Registrations"
            intro="Bestcure Levis Health Care Private Limited operates with certified quality systems and government registrations, demonstrating commitment to compliance and customer trust."
          />
          <div className="stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.slice(0, 3).map((certificate, i) => (
              <div key={certificate.id} style={{ ["--d" as string]: i }}>
                <CertificateCard certificate={certificate} />
              </div>
            ))}
          </div>
          <div className="reveal mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-800 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-forest-900"
            >
              View all certifications
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================= Enquiry ============================= */}
      <CTASection
        title="Looking for the right nutrition for your livestock?"
        body="Tell us your requirement and our team will help you choose the right product for your animals and your farm."
      />
    </>
  );
}
