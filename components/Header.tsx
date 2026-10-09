"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-cream-50/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.legalName} — home`}>
          <Image
            src="/logo.png"
            alt={`${site.legalName} logo`}
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-wide text-forest-900">
              BESTCURE
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-leaf-600">
              Levis Health Care
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-forest-800 ${
                  active ? "text-forest-800 underline decoration-lime-500 decoration-2 underline-offset-8" : "text-stone-warm"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-sm bg-forest-800 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-900"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-forest-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-forest-900/10 bg-cream-50 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-sm px-3 py-2.5 text-base font-medium text-forest-900 hover:bg-cream-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 block rounded-sm bg-forest-800 px-3 py-2.5 text-center text-base font-semibold text-cream-50"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
