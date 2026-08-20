"use client";

import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Layers, Zap, ShieldCheck, Heart } from "lucide-react";

const PILLARS = [
  {
    index: "01",
    title: "Zero Boilerplate AI Shlock",
    headline: "Engineered from first principles by senior human craftsmen.",
    description:
      "We do not cut corners with generic AI-generated codebases. Every component, database schema, and typography token is hand-crafted with architectural intention.",
    icon: Heart,
  },
  {
    index: "02",
    title: "Full-Funnel Cohesion",
    headline: "Code, SEO, video, and design moving in unison.",
    description:
      "A fast website means nothing without organic search traffic; great videos mean nothing without high-converting landing pages. We align the entire stack.",
    icon: TrendingUp,
  },
  {
    index: "03",
    title: "100% Client Ownership",
    headline: "You own every single line of code, asset, and key.",
    description:
      "Full GitHub repository handover, Figma source files, 4K master video renders, and domain DNS setup. No vendor hostage games or recurring licensing fees.",
    icon: ShieldCheck,
  },
  {
    index: "04",
    title: "Sub-Second Global Performance",
    headline: "Speed is the #1 driver of search rankings and sales.",
    description:
      "We enforce strict 100/100 Lighthouse performance metrics, serverless edge caching, and lightweight asset bundling across every single project.",
    icon: Zap,
  },
];

export default function WhyKadsSection() {
  return (
    <section id="why-us" className="relative py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
            [ THE KADS STANDARD ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111113] tracking-tight">
            Why ambitious brands partner with us.
          </h2>
          <p className="text-zinc-600 text-base mt-3">
            The distinct human advantages that separate our studio from generic digital agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 sm:p-10 rounded-3xl studio-card bg-white border border-zinc-200 hover:border-[#111113] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">
                      [ PILLAR {pillar.index} ] — {pillar.title}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#111113]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111113] mb-3 leading-snug">
                    {pillar.headline}
                  </h3>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500 font-medium">
                  <span>GUARANTEED STANDARD</span>
                  <span className="text-[#111113] font-bold">● Active Practice</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
