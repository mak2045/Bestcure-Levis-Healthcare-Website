export interface Certificate {
  id: string;
  name: string;
  description: string;
  link: string;
}

export const certificates: Certificate[] = [
  {
    id: "who-gmp",
    name: "WHO-GMP Certificate",
    description: "WHO Good Manufacturing Practice certificate — demonstrating compliance with international quality manufacturing standards.",
    link: "/certificates/who-gmp.pdf",
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015 Certification",
    description: "ISO 9001:2015 certified company — demonstrating commitment to quality management systems.",
    link: "/certificates/iso-9001.pdf",
  },
  {
    id: "gst",
    name: "GST Registration",
    description: "Goods and Services Tax registration — enabling compliant trade across India.",
    link: "/certificates/gst-certificate.pdf",
  },
  {
    id: "udyam",
    name: "Udyam Registration",
    description: "Udyam Registration Certificate — MSME registration under Government of India.",
    link: "/certificates/udyam-registration.pdf",
  },
  {
    id: "company-registration",
    name: "Company Registration",
    description: "Certificate of Incorporation — Bestcure Levis Healthcare Private Limited.",
    link: "/certificates/company-registration.pdf",
  },
];
