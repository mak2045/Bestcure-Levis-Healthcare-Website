import Link from "next/link";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="reveal flex h-full flex-col rounded-2xl border border-forest-900/10 bg-cream-50 p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-[var(--shadow-lift)]">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-800/10 text-forest-800">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="9" r="5" />
          <path d="M9 14.5 8 22l4-2 4 2-1-7.5" />
        </svg>
      </span>
      <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-forest-950">
        {certificate.name}
      </h3>
      <p className="mt-2 flex-1 text-[14.5px] leading-6 text-stone-warm">
        {certificate.description}
      </p>
      <div className="mt-5">
        <Link
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-4 py-2 text-[13.5px] font-semibold text-cream-50 transition-all duration-300 hover:bg-forest-900"
        >
          View Certificate
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" x2="21" y1="14" y2="3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
