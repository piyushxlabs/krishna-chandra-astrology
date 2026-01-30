import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#C9954D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://panditkrishnachandra.com"),
  title: {
    default: "Pandit Krishna Chandra Jaguri | Vedic Astrologer Dehradun",
    template: "%s | Pandit Krishna Chandra Jaguri",
  },
  description:
    "10+ years experience in Vedic astrology. Janampatri banana, analysis, personal consultations in Raiwala, Dehradun. Trusted local guidance.",
  keywords: [
    "astrologer Dehradun",
    "janampatri Raiwala",
    "Vedic astrology Uttarakhand",
    "kundli matching",
    "birth chart analysis",
    "personal consultation astrologer",
    "bhavishya prediction",
    "astrologer near me Dehradun",
  ],
  authors: [{ name: "Pandit Krishna Chandra Jaguri" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://panditkrishnachandra.com",
    siteName: "Pandit Krishna Chandra Jaguri",
    title: "Pandit Krishna Chandra Jaguri | Vedic Astrologer Dehradun",
    description:
      "10+ years experience in Vedic astrology. Janampatri banana, analysis, personal consultations in Raiwala, Dehradun. Trusted local guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandit Krishna Chandra Jaguri | Vedic Astrologer Dehradun",
    description:
      "10+ years experience in Vedic astrology. Janampatri banana, analysis, personal consultations in Raiwala, Dehradun. Trusted local guidance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://panditkrishnachandra.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#FAF6F1] text-[#2D2520]`}>
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
