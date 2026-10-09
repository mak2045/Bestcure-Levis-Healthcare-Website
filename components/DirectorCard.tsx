import Link from "next/link";
import type { Director } from "@/data/directors";
import { site } from "@/data/site";

interface DirectorCardProps {
  director: Director;
  showPhone?: boolean;
}

export default function DirectorCard({ director, showPhone = false }: DirectorCardProps) {
  return (
    <div className="reveal flex flex-col rounded-sm border border-forest-900/10 bg-cream-50 p-6">
      <span className="inline-flex w-fit rounded-full bg-forest-800/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-800">
        {director.role}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-forest-950">
        {director.name}
      </h3>
      {showPhone && director.name === "Gulab Chand Kumawat" && (
        <a
          href={site.phoneHref}
          className="mt-2 flex items-center gap-2 text-sm font-semibold text-leaf-600 hover:text-leaf-500"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {site.phoneDisplay}
        </a>
      )}
      {showPhone && director.name === "Suraj Kumar Kumawat" && (
        <a
          href={site.phoneHref2}
          className="mt-2 flex items-center gap-2 text-sm font-semibold text-leaf-600 hover:text-leaf-500"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +91 {site.phoneDisplay2}
        </a>
      )}
      {director.bio && (
        <p className="mt-2.5 text-[15px] leading-7 text-stone-warm">{director.bio}</p>
      )}
    </div>
  );
}
