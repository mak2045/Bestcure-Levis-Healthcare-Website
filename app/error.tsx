"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="border-t border-forest-900/10 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
            Something went wrong
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
            We encountered an error.
          </h1>
          <p className="mt-4 text-base leading-7 text-stone-warm">
            Please try refreshing the page. If the problem persists, reach out to us directly.
          </p>
          <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row sm:justify-center">
            <button
              onClick={() => reset()}
              className="rounded-sm bg-forest-800 px-7 py-3 text-base font-semibold text-cream-50 transition-colors hover:bg-forest-900"
            >
              Try again
            </button>
            <a
              href={site.phoneHref}
              className="rounded-sm border border-forest-800 px-7 py-3 text-base font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream-50"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
