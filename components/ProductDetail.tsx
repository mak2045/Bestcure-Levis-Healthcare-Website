import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";
import { productCategories } from "@/data/products";
import { site } from "@/data/site";
import ProductCard from "@/components/ProductCard";

interface ProductDetailProps {
  product: ProductCategory;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const related = productCategories.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* ---------------- Breadcrumb ---------------- */}
      <nav aria-label="Breadcrumb" className="border-b border-forest-900/10 bg-cream-100/70">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <li>
            <Link href="/" className="text-stone-warm transition-colors hover:text-forest-800">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-stone-warm/50">/</li>
          <li>
            <Link href="/products" className="text-stone-warm transition-colors hover:text-forest-800">
              Products
            </Link>
          </li>
          <li aria-hidden="true" className="text-stone-warm/50">/</li>
          <li aria-current="page" className="truncate font-medium text-forest-950">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* ---------------- Product hero ---------------- */}
      <section className="border-b border-forest-900/10 bg-forest-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Product image — contained, centered, consistent height */}
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-cream-100 to-cream-50 p-6 shadow-[var(--shadow-lift)] sm:p-10">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Product information */}
            <div className="flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime-400">
                {product.productType || "Animal Nutrition Product"}
              </p>
              <h1 className="mt-3.5 font-display text-[1.9rem] font-semibold leading-[1.15] text-white sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-[15px] leading-7 text-cream-100/80 sm:text-base sm:leading-8">
                {product.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.slug)}`}
                  className="rounded-full bg-lime-500 px-7 py-3.5 text-center text-[15px] font-semibold text-forest-950 shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400"
                >
                  Enquire About This Product
                </Link>
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-white/25 px-7 py-3.5 text-center text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Product information ---------------- */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <h2 className="font-display text-[1.4rem] font-semibold text-forest-950">
              Product Information
            </h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-600">Product Type</h3>
                <p className="mt-1 text-[15px] text-forest-950">
                  {product.productType || "Animal Nutrition Product"}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-600">Category</h3>
                <p className="mt-1 text-[15px] text-forest-950">Animal Nutrition</p>
              </div>
            </div>

            {product.details && product.details.length > 0 && (
              <div className="mt-6 border-t border-forest-900/10 pt-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-600">Details</h3>
                <ul className="mt-4 space-y-3">
                  {product.details.map((detail) => (
                    <li key={detail.label} className="flex gap-3 text-[15px] text-stone-warm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-600" aria-hidden="true" />
                      <span>
                        <span className="font-medium text-forest-950">{detail.label}:</span> {detail.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- Enquiry CTA ---------------- */}
      <section className="bg-forest-900">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="reveal flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-white sm:text-3xl">
                Interested in this product?
              </h2>
              <p className="mt-3 text-base leading-7 text-cream-100/75">
                Tell us about your requirement and our team will get in touch.
              </p>
            </div>
            <Link
              href={`/contact?product=${encodeURIComponent(product.slug)}`}
              className="shrink-0 rounded-full bg-lime-500 px-7 py-3.5 text-center text-[15px] font-semibold text-forest-950 shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Related products ---------------- */}
      <section className="border-t border-forest-900/10 bg-cream-100/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="font-display text-[1.4rem] font-semibold text-forest-950">
            Other Products
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} category={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
