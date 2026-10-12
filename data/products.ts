export interface ProductDetailItem {
  label: string;
  value: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  productType?: string;
  details?: ProductDetailItem[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "gao-swad",
    name: "गौ-स्वाद पशु आहार",
    description: "प्रीमियम पशु आहार — पौष्टिक एवं भरोसेमंद पशु आहार।",
    image: "/products/gao-swad.png",
    alt: "गौ-स्वाद पशु आहार पैकेजिंग",
    productType: "पशु आहार",
  },
  {
    slug: "doodh-shakti",
    name: "Doodh Shakti 10000 Super Mix Gold",
    description: "दुध शक्ति खिलाओ पशु स्वस्थ व अधिक दुध पाओ। बैलेंस्ड ग्रेन्स एवं विटामिन्स के साथ।",
    image: "/products/doodh-shakti.png",
    alt: "Doodh Shakti 10000 Super Mix Gold पशु आहार पैकेजिंग",
    productType: "पशु आहार",
  },
  {
    slug: "safed-sona",
    name: "सफ़ेद सोना पशु आहार",
    description:
      "Organic Quality Animal Feed — Made Without Urea. सुप्रीम+ पौष्टिक एवं भरोसेमंद पशु आहार — संतुलित अनाज, विटामिन एवं मिनरल्स के साथ।",
    image: "/products/safed-sona.jpg",
    alt: "सफ़ेद सोना पशु आहार पैकेजिंग",
    productType: "पशु आहार",
    details: [
      { label: "Brand Line", value: "Organic Quality Animal Feed — Made Without Urea" },
      { label: "Variant", value: "सुप्रीम + (Supreme+), GMP" },
      { label: "Feed Type", value: "पौष्टिक एवं भरोसेमंद पशु आहार (गोल्ड)" },
      { label: "Highlights", value: "Balanced Grains · Vitamins & Minerals" },
      { label: "Net Weight", value: "50 किलो नेट" },
    ],
  },
  {
    slug: "dhana-dhan",
    name: "ढना-ढन Organic Feed & Fat Booster",
    description: "पशुओं की सम्पूर्ण सुरक्षा आयुर्वेद का आधार। ऑर्गेनिक फ़ीड एवं फैट बूस्टर।",
    image: "/products/dhana-dhan.png",
    alt: "ढना-ढन Organic Feed & Fat Booster पैकेजिंग",
    productType: "ऑर्गेनिक फ़ीड सप्लीमेंट",
  },
];

export const generalEnquiryLabel = "General Enquiry";

export const productOptions: string[] = [
  ...productCategories.map((c) => c.name),
  generalEnquiryLabel,
];

export function findCategoryByName(name: string): ProductCategory | undefined {
  const normalised = name.trim().toLowerCase();
  return productCategories.find((c) => c.name.toLowerCase() === normalised);
}

// Find a category by slug (used for /products/[slug] routes and ?product=slug preselection).
export function findCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

// Find a category by name or slug (used for ?product= preselection via enquiry form).
export function findCategoryByValue(value: string): ProductCategory | undefined {
  const normalised = value.trim().toLowerCase();
  return productCategories.find(
    (c) => c.name.toLowerCase() === normalised || c.slug.toLowerCase() === normalised,
  );
}
