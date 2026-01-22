import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MultiVendor - Nepal's Premium Multi-Vendor Marketplace",
    template: "%s | MultiVendor",
  },
  description: "Next-generation multi-vendor e-commerce solution for modern businesses in Nepal. Verified sellers, premium products, and secure payments.",
  keywords: ["ecommerce", "nepal", "marketplace", "online shopping", "multivendor"],
  authors: [{ name: "MultiVendor Team" }],
  creator: "MultiVendor",
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://multivendor-example.com",
    siteName: "MultiVendor",
    title: "MultiVendor - Premium E-commerce Platform",
    description: "Connect with the best sellers and discover premium products in Nepal's modern marketplace.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MultiVendor Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MultiVendor - Premium E-commerce Platform",
    description: "The most powerful multi-vendor marketplace in Nepal.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
