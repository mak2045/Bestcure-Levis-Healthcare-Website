import type { Director } from "@/data/directors";

interface DirectorCardProps {
  director: Director;
}

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function DirectorCard({ director }: DirectorCardProps) {
  return (
    <article className="reveal group flex h-full flex-col rounded-2xl border border-forest-900/10 bg-cream-50 p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-800 text-sm font-semibold tracking-wide text-lime-400"
          aria-hidden="true"
        >
          {initialsFor(director.name)}
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold leading-snug text-forest-950">
            {director.name}
          </h3>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-leaf-600">
            {director.role}
          </p>
        </div>
      </div>

      {director.bio ? (
        <p className="mt-4 flex-1 text-[14.5px] leading-7 text-stone-warm">{director.bio}</p>
      ) : null}

      {director.phoneHref && director.phoneDisplay ? (
        <a
          href={director.phoneHref}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-forest-900/10 bg-white px-4 py-2 text-sm font-semibold text-forest-800 transition-colors hover:border-forest-700/40 hover:bg-forest-800 hover:text-cream-50"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {director.phoneDisplay}
        </a>
      ) : null}
    </article>
  );
}
