import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils/cn";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pandit Krishna Chandra Jaguri | Vedic Astrologer in Raiwala & Dehradun",
  description: "Expert Vedic astrology services by Pandit Krishna Chandra Jaguri. 10+ years of experience in Janampatri, Kundli Analysis, and Personal Consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-[#FAF6F1] font-sans antialiased",
          playfair.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
