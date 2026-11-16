import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, site } from "@/lib/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GBX Consulting | Behavioral Health & Performance Consulting",
    template: "%s | GBX Consulting",
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "GBX Consulting",
    title: "GBX Consulting | Behavioral Health & Performance Consulting",
    description: site.description,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GBX Consulting | Behavioral Health & Performance Consulting",
    description: site.description,
  },
};

export const viewport: Viewport = { themeColor: "#03291F" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GBX Consulting",
  alternateName: site.meaning,
  url: SITE_URL,
  description: site.description,
  email: site.email,
  telephone: "+1-888-280-8204",
  foundingDate: site.founded,
  founder: { "@type": "Person", name: site.founder },
  areaServed: ["Southwest Florida", "South America"],
  slogan: "Elevate Performance",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
