import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="border-t border-forest-900/10 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-400">
            Product Not Found
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
            This product could not be found.
          </h1>
          <p className="mt-4 text-base leading-7 text-stone-warm">
            The product you are looking for may not exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="rounded-sm bg-forest-800 px-7 py-3 text-base font-semibold text-cream-50 transition-colors hover:bg-forest-900"
            >
              View All Products
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-forest-800 px-7 py-3 text-base font-semibold text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream-50"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
