"use client";

import { motion } from "framer-motion";
import { Compass, Cpu, Target, ShieldCheck, Heart, Zap } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "50+", label: "Digital Flagships", sub: "Web Apps & WordPress Stores" },
  { value: "99.8%", label: "Lighthouse Speed", sub: "Sub-Second Global Edge Latency" },
  { value: "4.8M+", label: "Organic Video Views", sub: "Reels, Shorts & Ad Creatives" },
  { value: "100%", label: "Direct Senior Craft", sub: "Zero Low-Quality AI Boilerplates" },
];

const VALUES = [
  {
    icon: Compass,
    title: "100% Bespoke Craftsmanship",
    desc: "We don't sell bloated templates or copy-paste components. Every architecture is tailored to your business model and target user psychology.",
  },
  {
    icon: Cpu,
    title: "Uncompromising Performance",
    desc: "Sub-second load times, 100/100 Core Web Vitals, and strict TypeScript types. We engineer products that outpace the competition.",
  },
  {
    icon: Target,
    title: "Full-Funnel Growth",
    desc: "From Google #1 search rankings to high-retention vertical video and iconic brand guidelines, we build for conversion.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Headline Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-4">
            [ ABOUT THE STUDIO ]
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111113] tracking-tight leading-[1.12] mb-6">
            Technology changes fast. Great craftsmanship{" "}
            <span className="font-serif italic font-normal text-zinc-600">
              makes it endure.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-3xl">
            KADS is an independent technology and design studio. We work at the intersection of custom engineering, search strategy, and magnetic visual storytelling.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-left hover:border-zinc-400 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111113] font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#111113] mb-0.5">{stat.label}</div>
              <div className="text-xs text-zinc-500 font-mono">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#111113] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111113] mb-2">{val.title}</h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
