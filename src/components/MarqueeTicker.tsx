"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "TECHNICAL SEO",
  "E-COMMERCE",
  "MOBILE APPS",
  "BRANDING",
  "VIDEO PRODUCTION",
  "DIGITAL STRATEGY",
];

export default function MarqueeTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative py-5 sm:py-6 bg-[var(--kads-dark)] text-white overflow-hidden select-none border-y border-[var(--kads-border-dark)]">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[var(--kads-dark)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[var(--kads-dark)] to-transparent z-10" />

      <div className="animate-marquee space-x-8 sm:space-x-12 whitespace-nowrap items-center">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8 sm:space-x-12 cursor-default">
            <span className="text-sm sm:text-base font-bold tracking-[0.15em] text-white/80">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
