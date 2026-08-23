"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, Heart } from "lucide-react";

const PILLARS = [
  {
    index: "01",
    title: "Business-First Thinking",
    headline: "Every decision is driven by your business goals.",
    description:
      "We don't build for the sake of building. Every design choice, technology selection, and feature prioritization is guided by what will actually move your metrics — traffic, conversions, and revenue.",
    icon: TrendingUp,
  },
  {
    index: "02",
    title: "Design + Technology Together",
    headline: "Beautiful interfaces backed by solid engineering.",
    description:
      "Most agencies separate design from development. We integrate both disciplines from day one, ensuring what looks great also performs great — fast load times, clean code, and intuitive UX.",
    icon: Heart,
  },
  {
    index: "03",
    title: "You Own Everything",
    headline: "100% code, design, and asset ownership.",
    description:
      "Full GitHub repository handover, Figma source files, and all creative assets. No vendor lock-in, no recurring licensing fees — your project belongs to you completely.",
    icon: ShieldCheck,
  },
  {
    index: "04",
    title: "Performance-Obsessed",
    headline: "Speed is a feature we never compromise on.",
    description:
      "We target 100/100 Lighthouse scores, optimize Core Web Vitals, and use modern hosting with edge delivery. Because a fast website isn't a luxury — it's a necessity for search rankings and user retention.",
    icon: Zap,
  },
];

export default function WhyKadsSection() {
  return (
    <section
      id="why-kads"
      className="relative bg-[var(--kads-bg-alt)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="kads-pill mb-4 block w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--kads-purple)] animate-pulse" />
            <span>WHY KADS</span>
          </span>
          <h2 className="kads-heading mb-3">
            Why businesses choose to work with us.
          </h2>
          <p className="kads-subheading">
            We&apos;re a modern digital studio that combines strategy, design, and technology to build solutions that actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="kads-card p-8 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-[var(--kads-text-subtle)] uppercase tracking-widest">
                      {pillar.index} — {pillar.title}
                    </span>
                    <div className="w-10 h-10 rounded-[var(--kads-radius-md)] bg-[var(--kads-purple-light)] border border-purple-200 flex items-center justify-center text-[var(--kads-purple)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[var(--kads-text)] mb-3 leading-snug">
                    {pillar.headline}
                  </h3>

                  <p className="text-[var(--kads-text-muted)] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
