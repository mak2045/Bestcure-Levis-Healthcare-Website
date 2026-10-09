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
  const [scrolled, setScrolled] = useState(false);
  // Remember which route the menu was opened on. Once the route changes the
  // menu closes by itself, so no setState-in-effect synchronisation is needed.
  const [openedOn, setOpenedOn] = useState(pathname);
  const isOpen = open && openedOn === pathname;

  function toggleMenu() {
    setOpen(!open);
    setOpenedOn(pathname);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-forest-900/10 bg-cream-50/90 shadow-[0_10px_30px_-24px_rgba(8,34,24,0.7)] backdrop-blur-md"
          : "border-transparent bg-cream-50/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.legalName} — home`}
        >
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-forest-900/10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt={`${site.legalName} logo`}
              width={44}
              height={44}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-[0.02em] text-forest-900">
              BESTCURE
            </span>
            <span className="block text-[9.5px] font-medium uppercase tracking-[0.24em] text-leaf-600">
              Levis Health Care
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                  active
                    ? "text-forest-900"
                    : "text-stone-warm hover:bg-forest-900/5 hover:text-forest-800"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-lime-500 transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-forest-800 px-5 py-2.5 text-[14.5px] font-semibold text-cream-50 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-900 hover:shadow-[var(--shadow-lift)]"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-forest-900 transition-colors hover:bg-forest-900/5 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* `inert` keeps the collapsed panel out of the tab order and the
          accessibility tree — it is only visually clipped, not hidden. */}
      <div
        id="mobile-menu"
        inert={!isOpen}
        className={`overflow-hidden border-forest-900/10 bg-cream-50 transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? "max-h-[420px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Mobile">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                  active
                    ? "bg-forest-900/5 text-forest-900"
                    : "text-forest-900 hover:bg-cream-100"
                }`}
              >
                {item.label}
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-lime-500 transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 block rounded-xl bg-forest-800 px-4 py-3 text-center text-[15px] font-semibold text-cream-50"
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
