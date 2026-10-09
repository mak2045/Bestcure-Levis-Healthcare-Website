export interface Director {
  name: string;
  role: string;
  bio: string;
  /** Display value for the director's direct line, if published. */
  phoneDisplay?: string;
  /** `tel:` target matching phoneDisplay. */
  phoneHref?: string;
}

/**
 * Directors are listed in the company's published order.
 * Narendar Kumar Garg has no published direct number — do not invent one.
 */
export const directors: Director[] = [
  {
    name: "Narendar Kumar Garg",
    role: "Director",
    bio: "Brings prior experience through LEVIS Health Care, a proprietorship involved in livestock mineral mixtures and animal nutrition products. His experience includes supplying mineral mixtures to the Department of Animal Husbandry, Government of Rajasthan.",
  },
  {
    name: "Gulab Chand Kumawat",
    role: "Director",
    bio: "Responsible for operational management, distribution network development and customer relationship management, with a focus on strengthening market reach across rural and agricultural markets.",
    phoneDisplay: "7014697012",
    phoneHref: "tel:+917014697012",
  },
  {
    name: "Suraj Kumawat",
    role: "Director",
    bio: "Involved in product promotion, sales growth, market development and business operations, supporting the company's focus on affordable and scientifically formulated livestock nutrition.",
    phoneDisplay: "+91 8233341717",
    phoneHref: "tel:+918233341717",
  },
];
