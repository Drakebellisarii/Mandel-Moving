import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mandel Moving | Professional Moving Services",
  description:
    "Mandel Moving delivers trusted, white-glove moving services for residential and commercial clients. Get a free quote today.",
  keywords: "moving company, professional movers, residential moving, commercial moving, relocation",
  openGraph: {
    title: "Mandel Moving | Professional Moving Services",
    description:
      "Trusted professional movers with thousands of successful relocations. Get your free quote today.",
    type: "website",
    url: "https://mandelmoving.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Mandel Moving - The Mandel Difference",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0a1628]">{children}</body>
    </html>
  );
}