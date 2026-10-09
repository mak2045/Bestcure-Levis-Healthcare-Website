import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestcurelevishealthcare.example.com"),
  title: {
    default: "Bestcure Levis Healthcare | Animal Nutrition & Livestock Health",
    template: "%s | Bestcure Levis Healthcare",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: "Bestcure Levis Healthcare | Animal Nutrition & Livestock Health",
    description: site.description,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: `${site.legalName} logo` }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
