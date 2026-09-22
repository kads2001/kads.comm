"use client";

import { motion } from "framer-motion";
import { Compass, Cpu, Target } from "lucide-react";
import Link from "next/link";

const VALUES = [
  {
    icon: Compass,
    title: "Custom-Built, Not Templated",
    desc: "Every project is tailored to your business model and audience. We don't sell bloated templates or copy-paste solutions.",
  },
  {
    icon: Cpu,
    title: "Performance-First Engineering",
    desc: "Sub-second load times, optimized Core Web Vitals, and clean TypeScript code. We build products that outperform the competition.",
  },
  {
    icon: Target,
    title: "Design That Converts",
    desc: "From SEO-optimized architecture to conversion-focused UI, every decision is made to drive measurable business results.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        {/* Editorial Headline Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <span className="kads-pill mb-4 block w-fit">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>ABOUT KADS</span>
          </span>

          <h2 className="kads-heading mb-6">
            Technology changes fast. Great craftsmanship{" "}
            <span className="font-serif italic font-normal text-zinc-500">
              makes it endure.
            </span>
          </h2>

          <p className="kads-subheading max-w-3xl">
            KADS is an independent technology and design studio. We work at the intersection of custom engineering, search strategy, and compelling visual storytelling — helping businesses build digital experiences that actually drive growth.
          </p>
        </motion.div>

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
                className="kads-card p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-[var(--kads-radius-md)] bg-black border border-black flex items-center justify-center text-white mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{val.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
