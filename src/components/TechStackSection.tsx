"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Smartphone, Palette, Database } from "lucide-react";

const STACK_CATEGORIES = [
  {
    category: "Web Development",
    icon: Code2,
    technologies: [
      { name: "Next.js & React", desc: "Server Components, App Router & Edge SSR" },
      { name: "TypeScript", desc: "End-to-end type safety & clean architecture" },
      { name: "Tailwind CSS", desc: "Design systems & responsive layouts" },
      { name: "Vercel & Cloud", desc: "Global CDN deployment & edge functions" },
    ],
  },
  {
    category: "WordPress & CMS",
    icon: Globe,
    technologies: [
      { name: "Custom PHP Themes", desc: "Lightweight, bloat-free WordPress builds" },
      { name: "WooCommerce", desc: "Multi-currency e-commerce stores" },
      { name: "Server Caching", desc: "Redis & CDN for fast page delivery" },
      { name: "Gutenberg Blocks", desc: "Custom blocks for easy content management" },
    ],
  },
  {
    category: "SEO & Growth",
    icon: Cpu,
    technologies: [
      { name: "JSON-LD Schema", desc: "Structured data for rich search results" },
      { name: "Core Web Vitals", desc: "Performance optimization for Google rankings" },
      { name: "Search Console", desc: "Keyword monitoring & index management" },
      { name: "Technical Audits", desc: "Crawl optimization & competitor analysis" },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    technologies: [
      { name: "React Native & Expo", desc: "Cross-platform iOS & Android apps" },
      { name: "Flutter", desc: "High-performance native UI" },
      { name: "Offline-First Storage", desc: "SQLite sync & local data" },
      { name: "Native APIs", desc: "Camera, sensors & push notifications" },
    ],
  },
  {
    category: "Video & Motion",
    icon: Palette,
    technologies: [
      { name: "After Effects", desc: "Motion graphics & kinetic typography" },
      { name: "Premiere Pro", desc: "Video editing & color grading" },
      { name: "Blender 3D", desc: "Product renders & 3D animation" },
      { name: "Sound Design", desc: "Custom audio for high-retention content" },
    ],
  },
  {
    category: "Design & Branding",
    icon: Database,
    technologies: [
      { name: "Figma", desc: "Component libraries & design systems" },
      { name: "Vector Assets", desc: "Scalable logos & print-ready files" },
      { name: "Accessibility", desc: "WCAG-compliant color & contrast" },
      { name: "Typography", desc: "Editorial grids & hierarchy systems" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      id="technology"
      className="relative bg-white text-[var(--kads-text)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="kads-pill">
              <span className="w-2 h-2 rounded-full bg-[var(--kads-purple)] animate-pulse" />
              <span>TECHNOLOGY</span>
            </span>
            <h2 className="kads-heading">
              Tools &amp; Technologies We Use.
            </h2>
            <p className="kads-subheading">
              Modern, proven technologies selected for performance, reliability, and long-term maintainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="kads-card p-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-[var(--kads-radius-md)] bg-[var(--kads-purple)] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--kads-text)]">{cat.category}</h3>
                </div>

                <div className="space-y-3">
                  {cat.technologies.map((tech) => (
                    <div key={tech.name} className="p-3.5 rounded-[var(--kads-radius-md)] bg-[var(--kads-bg-alt)] border border-[var(--kads-border-light)]">
                      <div className="font-bold text-sm text-[var(--kads-text)]">{tech.name}</div>
                      <div className="text-xs text-[var(--kads-text-muted)] mt-0.5 leading-relaxed">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
