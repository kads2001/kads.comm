import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KADS — Full-Stack Digital Technology & Creative Studio",
  description:
    "We build custom web applications, WordPress & CMS stores, technical SEO dominance, cross-platform mobile apps, viral video production, and iconic graphic design.",
  keywords: [
    "KADS.COM",
    "Web Development",
    "WordPress CMS",
    "Technical SEO",
    "Mobile Apps",
    "Video Production",
    "Graphic Design",
  ],
  authors: [{ name: "KADS Digital Technology Studio" }],
  creator: "KADS.COM",
  openGraph: {
    title: "KADS — Full-Stack Digital Technology & Creative Studio",
    description:
      "We build custom web applications, WordPress & CMS stores, technical SEO dominance, cross-platform mobile apps, and iconic creative design.",
    url: "https://kads.com",
    siteName: "KADS.COM",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#ffffff] text-[#0d0d11] antialiased selection:bg-[#0d0d11] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
