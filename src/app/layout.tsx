import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KADS — Technology & Design Studio | Web Development, SEO & Digital Growth",
  description:
    "KADS is an independent technology and design studio. We build custom websites, web applications, WordPress stores, mobile apps, and digital growth strategies for modern businesses.",
  keywords: [
    "KADS",
    "web development agency",
    "Next.js development",
    "WordPress development",
    "technical SEO",
    "mobile app development",
    "UI UX design",
    "digital agency",
    "web design studio",
  ],
  authors: [{ name: "KADS" }],
  creator: "KADS",
  metadataBase: new URL("https://kads.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KADS — Technology & Design Studio",
    description:
      "We build custom websites, web applications, WordPress stores, mobile apps, and digital growth strategies for modern businesses.",
    url: "https://kads.com",
    siteName: "KADS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KADS — Technology & Design Studio",
    description:
      "Custom websites, web applications, WordPress stores, mobile apps, and digital growth strategies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "KADS",
              url: "https://kads.com",
              description:
                "Independent technology and design studio specializing in web development, WordPress, SEO, mobile apps, and digital growth.",
              serviceType: [
                "Web Development",
                "WordPress Development",
                "Search Engine Optimization",
                "Mobile App Development",
                "UI/UX Design",
                "Video Production",
                "Brand Design",
              ],
              areaServed: "Worldwide",
              email: "hello@kads.com",
            }),
          }}
        />
      </head>
      <body className="font-sans bg-[var(--kads-bg)] text-[var(--kads-text)] antialiased selection:bg-[var(--kads-purple)] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
