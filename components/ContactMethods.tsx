import { site } from "@/data/site";

interface ContactMethodsProps {
  /** Pre-fills the WhatsApp message with the product context */
  product?: string;
}

function Card({
  label,
  value,
  hint,
  href,
  children,
  external = false,
}: {
  label: string;
  value: string;
  hint: string;
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex h-full min-w-0 items-start gap-4 rounded-2xl border border-forest-900/10 bg-white p-5 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-leaf-500/30 hover:shadow-[var(--shadow-lift)]"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-800/8 text-forest-800 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-lime-400">
        {children}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-warm">
          {label}
        </span>
        <span className="mt-1 block text-[15px] font-semibold text-forest-950 [overflow-wrap:anywhere]">
          {value}
        </span>
        <span className="mt-0.5 block text-xs text-stone-warm/80">{hint}</span>
      </span>
    </a>
  );
}

export default function ContactMethods({ product }: ContactMethodsProps) {
  const waText =
    product && product !== "General Enquiry"
      ? `Hello ${site.legalName}, I am interested in ${product} and would like more information.`
      : `Hello ${site.legalName}, I would like to enquire about your animal nutrition products.`;
  const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card
        label="Call Us"
        value={site.phoneDisplay}
        hint="Mon–Sat, business hours"
        href={site.phoneHref}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Card>
      <Card
        label="WhatsApp Us"
        value={site.phoneDisplay}
        hint="Fastest response"
        href={waHref}
        external
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.87L2 22l5.27-1.38A9.9 9.9 0 1 0 12.04 2Zm0 18.06a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.06.8.82-2.98-.2-.31a8.16 8.16 0 1 1 6.89 3.81Zm4.52-6.09c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06a6.66 6.66 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.24-.86.84-.86 2.05 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
        </svg>
      </Card>
      <Card label="Email Us" value={site.email} hint="Detailed enquiries" href={site.emailHref}>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </Card>
    </div>
  );
}
