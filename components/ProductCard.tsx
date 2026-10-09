import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";

interface ProductCardProps {
  category: ProductCategory;
  priority?: boolean;
}

/**
 * Compact, consistent catalogue card.
 * Fixed image presentation area keeps every card the same height;
 * object-contain preserves full packaging without cropping.
 */
export default function ProductCard({ category, priority = false }: ProductCardProps) {
  const viewHref = `/products/${category.slug}`;
  const enquireHref = `/contact?product=${encodeURIComponent(category.slug)}`;

  return (
    <article className="reveal group flex h-full flex-col overflow-hidden rounded-sm border border-forest-900/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Fixed, consistent image area — product centered, never cropped */}
      <Link
        href={viewHref}
        className="relative flex items-center justify-center overflow-hidden bg-cream-100 p-4"
        style={{ aspectRatio: "4 / 3" }}
        aria-label={`View ${category.name}`}
      >
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
      </Link>

      {/* Content — aligned to bottom for uniform card heights */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-forest-950">
          <Link href={viewHref} className="transition-colors hover:text-forest-700">
            {category.name}
          </Link>
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-6 text-stone-warm">{category.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-forest-900/10 pt-4">
          <Link
            href={viewHref}
            className="text-sm font-semibold text-forest-800 transition-colors hover:text-forest-900"
          >
            View Product
          </Link>
          <Link
            href={enquireHref}
            className="rounded-sm bg-forest-800 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-900"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}
