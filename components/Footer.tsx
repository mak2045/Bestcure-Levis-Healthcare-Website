import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt={`${site.legalName} logo`}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div className="leading-tight">
                <p className="font-display text-[15px] font-semibold tracking-wide text-white">BESTCURE</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-lime-400">
                  Levis Health Care
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-cream-100/70">
              {site.legalName} — an Indian agri-animal nutrition company focused on livestock
              health, productivity and farmer prosperity through scientifically formulated
              nutrition.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-400">Navigate</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="text-cream-100/80 transition-colors hover:text-white" href="/">Home</Link></li>
              <li><Link className="text-cream-100/80 transition-colors hover:text-white" href="/about">About</Link></li>
              <li><Link className="text-cream-100/80 transition-colors hover:text-white" href="/products">Products</Link></li>
              <li><Link className="text-cream-100/80 transition-colors hover:text-white" href="/contact">Contact</Link></li>
              <li><Link className="text-cream-100/80 transition-colors hover:text-white" href="/contact">Enquire Now</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-400">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-100/80">
              <li>
                <a className="transition-colors hover:text-white" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href={site.phoneHref2}>
                  +91 {site.phoneDisplay2}
                </a>
              </li>
              <li>
                <a className="break-all transition-colors hover:text-white" href={site.emailHref}>
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-sm bg-lime-500 px-4 py-2 text-sm font-semibold text-forest-950 transition-colors hover:bg-lime-400"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-cream-100/50">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
