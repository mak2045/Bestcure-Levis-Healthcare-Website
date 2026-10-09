import Link from "next/link";
import { site } from "@/data/site";

interface CTASectionProps {
  title?: string;
  body?: string;
  buttonLabel?: string;
  /** Optional product to preselect on the contact page form */
  product?: string;
}

export default function CTASection({
  title = "Looking for the right nutrition for your livestock?",
  body = "Tell us your requirement and our team will help you choose the right product for your animals and your farm.",
  buttonLabel = "Send an Enquiry",
  product,
}: CTASectionProps) {
  const href = product ? `/contact?product=${encodeURIComponent(product)}` : "/contact";

  return (
    <section className="relative overflow-hidden bg-forest-900">
      {/* Decorative depth — purely visual, ignored by assistive tech. */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(168,207,63,0.18),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="reveal flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-cream-100/75 sm:text-base">{body}</p>
            <p className="mt-5 text-sm text-cream-100/60">
              Prefer to talk? Call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-lime-400 underline decoration-lime-400/30 underline-offset-4 hover:text-lime-300"
              >
                {site.phoneDisplay}
              </a>{" "}
              or{" "}
              <a
                href={site.phoneHref2}
                className="font-semibold text-lime-400 underline decoration-lime-400/30 underline-offset-4 hover:text-lime-300"
              >
                +91 {site.phoneDisplay2}
              </a>
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
            <Link
              href={href}
              className="rounded-full bg-lime-500 px-7 py-3.5 text-center text-[15px] font-semibold text-forest-950 shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400"
            >
              {buttonLabel}
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-white/25 px-7 py-3.5 text-center text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
