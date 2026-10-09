import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { productCategories, findCategoryBySlug } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findCategoryBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 1000, alt: product.alt }],
    },
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { slug } = await props.params;
  const product = findCategoryBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}
