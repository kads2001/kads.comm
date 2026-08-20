"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Globe, Cpu, Smartphone, Database, Palette } from "lucide-react";

const STACK_CATEGORIES = [
  {
    category: "Full-Stack Web Engineering",
    icon: Code2,
    technologies: [
      { name: "Next.js 16 (App Router)", desc: "React 19 Server Components, Edge SSR & Sub-Second LCP" },
      { name: "TypeScript & GraphQL", desc: "End-to-End Type Safety & Microservice APIs" },
      { name: "Tailwind CSS v4", desc: "Design Token Systems & Responsive Layouts" },
      { name: "Vercel & AWS Edge", desc: "Global CDN Multi-Region Deployments" },
    ],
  },
  {
    category: "WordPress & CMS Ecosystem",
    icon: Globe,
    technologies: [
      { name: "Custom PHP Themes", desc: "Zero Bloat, Native Gutenberg Block Suites" },
      { name: "WooCommerce & Stripe", desc: "Multi-Currency High-Speed E-Commerce" },
      { name: "Redis Object Caching", desc: "Sub-Second Response Under Heavy Traffic" },
      { name: "Elementor Pro Tuning", desc: "Client-Friendly Visual Management" },
    ],
  },
  {
    category: "SEO & Growth Dominance",
    icon: Cpu,
    technologies: [
      { name: "JSON-LD Schema", desc: "Rich Snippets for Google & Knowledge Graph" },
      { name: "Core Web Vitals", desc: "100/100 Lighthouse Performance Standards" },
      { name: "Google Search Console", desc: "Daily Keyword & Index Telemetry" },
      { name: "SEMrush & Ahrefs", desc: "Commercial Keyword Gap Analysis" },
    ],
  },
  {
    category: "Mobile App Development",
    icon: Smartphone,
    technologies: [
      { name: "React Native & Expo", desc: "Universal Codebase for iOS & Android" },
      { name: "Flutter & Dart", desc: "60fps High-Performance Native UI" },
      { name: "WatermelonDB SQLite", desc: "Offline-First Data Synchronization" },
      { name: "Biometric & Push APIs", desc: "Native FaceID & Device Sensor Sync" },
    ],
  },
  {
    category: "Video & Motion Production",
    icon: Palette,
    technologies: [
      { name: "Adobe After Effects", desc: "Kinetic Typography & 3D Motion Graphics" },
      { name: "Premiere Pro & DaVinci", desc: "Color Grading & High-Retention 9:16 Edits" },
      { name: "Blender 3D", desc: "Photorealistic 3D Product Renders" },
      { name: "Sound Design & SFX", desc: "Custom Audio Layering for High Retention" },
    ],
  },
  {
    category: "Brand Systems & Design",
    icon: Database,
    technologies: [
      { name: "Figma Design Systems", desc: "Atomic Component Libraries & Variables" },
      { name: "Vector Master Assets", desc: "Scalable EPS, SVG & Print Brand Suites" },
      { name: "WCAG 2.1 AAA", desc: "Full Contrast & Universal Accessibility" },
      { name: "Typography Standards", desc: "Editorial Grid & Hierarchy Frameworks" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="technology" className="relative py-24 sm:py-32 bg-white text-[#0d0d11] border-b border-zinc-100">
      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
              <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>BATTLE-TESTED TOOLING</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
              Enterprise Stack & Production Tools.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              We select modern, proven technologies built for performance, security, and effortless long-term maintainability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STACK_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#8b5cf6] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#8b5cf6] text-white flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d0d11]">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.technologies.map((tech) => (
                    <div key={tech.name} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <div className="font-bold text-sm text-[#0d0d11]">{tech.name}</div>
                      <div className="text-xs text-zinc-600 mt-1 leading-relaxed">{tech.desc}</div>
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
