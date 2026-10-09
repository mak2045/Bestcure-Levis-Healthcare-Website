import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";

interface ProductCardProps {
  category: ProductCategory;
  priority?: boolean;
}

/**
 * Catalogue card with a fixed image stage so every card lines up.
 * Packaging is always object-contain — the real product artwork is never
 * cropped, recoloured or replaced.
 */
export default function ProductCard({ category, priority = false }: ProductCardProps) {
  const viewHref = `/products/${category.slug}`;
  const enquireHref = `/contact?product=${encodeURIComponent(category.slug)}`;

  return (
    <article className="reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1.5 hover:border-leaf-500/30 hover:shadow-[var(--shadow-lift)]">
      <Link
        href={viewHref}
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 p-6"
        style={{ aspectRatio: "4 / 3" }}
        aria-label={`View ${category.name}`}
      >
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
          priority={priority}
        />
        {category.productType ? (
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-forest-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-lime-400 backdrop-blur-sm">
            {category.productType}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[17px] font-semibold leading-snug text-forest-950">
          <Link href={viewHref} className="transition-colors hover:text-forest-700">
            {category.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[14.5px] leading-6 text-stone-warm">
          {category.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-forest-900/10 pt-4">
          <Link
            href={viewHref}
            className="group/link inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest-800 transition-colors hover:text-forest-900"
          >
            View Product
            <span
              className="transition-transform duration-300 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
          <Link
            href={enquireHref}
            className="rounded-full bg-forest-800 px-4 py-2 text-[13.5px] font-semibold text-cream-50 transition-all duration-300 hover:bg-forest-900"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
