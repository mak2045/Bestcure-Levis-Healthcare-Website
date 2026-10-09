import Link from "next/link";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="reveal flex flex-col overflow-hidden rounded-sm border border-forest-900/10 bg-cream-50 p-6">
      <h3 className="font-display text-lg font-semibold tracking-tight text-forest-950">
        {certificate.name}
      </h3>
      <p className="mt-2 text-[15px] leading-6 text-stone-warm">{certificate.description}</p>
      <div className="mt-5">
        <Link
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-forest-800 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-900"
        >
          View Certificate
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" x2="21" y1="14" y2="3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
