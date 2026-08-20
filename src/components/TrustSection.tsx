"use client";

import { motion } from "framer-motion";

const TRUST_LOGOS = [
  "NEXT.JS ENTERPRISE",
  "WORDPRESS VIP",
  "GOOGLE CLOUD",
  "STRIPE PAYMENTS",
  "REACT NATIVE",
  "SUPABASE EDGE",
  "BLENDER 3D",
  "SEMRUSH ANALYTICS",
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-white border-b border-zinc-200">
      <div className="w-[90%] max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold shrink-0">
            ENGINEERED WITH INDUSTRY STANDARDS
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {TRUST_LOGOS.map((name) => (
              <span
                key={name}
                className="text-xs font-bold text-zinc-400 hover:text-[#0d0d11] transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
