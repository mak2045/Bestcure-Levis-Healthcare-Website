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
  title = "Looking for the right nutrition solution for your livestock?",
  body = "Tell us your requirement and our team will help you choose the right product for your animals and your farm.",
  buttonLabel = "Send an Enquiry",
  product,
}: CTASectionProps) {
  const href = product
    ? `/contact?product=${encodeURIComponent(product)}`
    : "/contact";

  return (
    <section className="bg-forest-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="reveal flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-cream-100/75">{body}</p>
            <p className="mt-5 text-sm text-cream-100/60">
              Prefer to talk? Call us on{" "}
              <a href={site.phoneHref} className="font-semibold text-lime-400 hover:text-lime-300">
                {site.phoneDisplay}
              </a>{" "}
              or{" "}
              <a href={site.phoneHref2} className="font-semibold text-lime-400 hover:text-lime-300">
                +91 {site.phoneDisplay2}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href={href}
              className="rounded-sm bg-lime-500 px-7 py-3.5 text-center text-base font-semibold text-forest-950 transition-colors hover:bg-lime-400"
            >
              {buttonLabel}
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-sm border border-white/25 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
