"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Compass,
  Palette,
  Code,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Cpu,
  Globe2,
  Terminal,
  Check,
} from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    title: "Customer Experience Strategy",
    summary: "Deep research, commercial insight, and purposeful architecture.",
    duration: "Week 1 (5 Days)",
    detail:
      "We lay the groundwork for transformation through 120-point technical audits, competitor gap analysis, user journey mapping, and architecture blueprints before writing a single line of code.",
    deliverables: [
      "120-Point Technical SEO & Performance Audit",
      "User Persona Journey & Archetype Mapping",
      "System Architecture & API Specifications",
      "Milestone & Timeline Agreement",
    ],
    icon: Search,
    stats: [
      { label: "Audit Checkpoints", value: "120 Pts" },
      { label: "Target Speed SLA", value: "< 1.0s" },
      { label: "Architecture Risk", value: "0% Legacy" },
    ],
  },
  {
    step: "02",
    title: "Service Design & Prototyping",
    summary: "Refining complex flows into elegant, intuitive human systems.",
    duration: "Week 2 (7 Days)",
    detail:
      "Our senior designers craft atomic Figma design systems, motion micro-interactions, editorial typography, and high-fidelity interactive prototypes tested on real users.",
    deliverables: [
      "Atomic Figma UI Design Systems",
      "High-Fidelity Clickable Mobile & Desktop Prototypes",
      "WCAG 2.1 AAA Accessibility Compliance",
      "Brand Style Guide & Token Matrix",
    ],
    icon: Compass,
    stats: [
      { label: "Figma Components", value: "240+ Tokens" },
      { label: "Accessibility", value: "WCAG AAA" },
      { label: "Prototype FPS", value: "60 FPS" },
    ],
  },
  {
    step: "03",
    title: "Full-Stack Agile Engineering",
    summary: "Sub-second codebases built with modern frameworks and CMS agility.",
    duration: "Weeks 3-4 (14 Days)",
    detail:
      "We write clean, modular Next.js 16, TypeScript, custom WordPress PHP themes, Flutter/React Native mobile code, and high-retention 4K motion graphics.",
    deliverables: [
      "Type-Safe Next.js & React App Router",
      "Custom WordPress / WooCommerce Themes",
      "Cross-Platform iOS & Android Mobile Apps",
      "Bi-Weekly Staging Previews & Continuous Git CI/CD",
    ],
    icon: Code,
    stats: [
      { label: "Type Safety", value: "100% Strict" },
      { label: "Edge Latency", value: "< 45ms" },
      { label: "CI/CD Staging", value: "Continuous" },
    ],
  },
  {
    step: "04",
    title: "Validation & Performance Tuning",
    summary: "100/100 Core Web Vitals, security hardening, and search optimization.",
    duration: "Week 5 (5 Days)",
    detail:
      "Rigorous stress testing across real physical devices, JSON-LD schema integration, Google Search Console indexing, and caching optimization for sub-second speeds.",
    deliverables: [
      "100/100 Lighthouse Performance Rating",
      "Schema.org Rich Snippets for Search Dominance",
      "Multi-Viewport iOS & Android Stress Testing",
      "SSL, Firewall & Penetration Security Hardening",
    ],
    icon: Palette,
    stats: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Schema Coverage", value: "100% Valid" },
      { label: "Security Grade", value: "A+ SSL" },
    ],
  },
  {
    step: "05",
    title: "Implementation & Ongoing Growth",
    summary: "Zero downtime release, team training, and monthly retainer scaling.",
    duration: "Launch & Support",
    detail:
      "We deploy to global edge CDN networks, submit mobile apps to Apple & Google Play, set up live Looker Studio telemetry dashboards, and train your team with video guides.",
    deliverables: [
      "Zero-Downtime Edge Global Production Deploy",
      "Personalized Video Walkthrough Training for Your Team",
      "100% Commercial Code & Asset Handover Guarantee",
      "30-Day Post-Launch Warranty & Support",
    ],
    icon: Rocket,
    stats: [
      { label: "Global Edge Nodes", value: "300+ CDN" },
      { label: "Post-Launch Warranty", value: "30 Days" },
      { label: "IP Handover", value: "100% Client" },
    ],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];

  return (
    <section
      id="process"
      className="relative bg-white text-[var(--kads-text)] border-b border-[var(--kads-border)]"
      style={{ paddingTop: "var(--kads-section-py)", paddingBottom: "var(--kads-section-py)" }}
    >
      <div className="kads-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="kads-pill">
              <span className="w-2 h-2 rounded-full bg-[var(--kads-purple)] animate-pulse" />
              <span>OUR PROCESS</span>
            </span>
            <h2 className="kads-heading">
              How We Work.
            </h2>
            <p className="kads-subheading">
              A structured 5-stage process that ensures transparent milestones, clear communication, and reliable delivery.
            </p>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--kads-purple)] hover:underline underline-offset-4 shrink-0"
          >
            <span>Learn More About Our Process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5-Step Interactive Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {STEPS.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden group backdrop-blur-md ${
                  isActive
                    ? "bg-[#0d0d11] text-white border-[#0d0d11] shadow-xl scale-[1.02]"
                    : "bg-white/80 border-zinc-200 text-zinc-700 hover:text-black hover:bg-white hover:border-zinc-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      isActive ? "text-[#8b5cf6]" : "text-zinc-500"
                    }`}
                  >
                    STAGE {item.step}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-[7px] ${
                      isActive ? "bg-purple-900/50 text-purple-200" : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {item.duration.split(" ")[0]}
                  </span>
                </div>
                <div className="text-sm font-bold truncate">{item.title}</div>

                {/* Active Solid Purple Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessBar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#8b5cf6]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Dynamic Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white border border-zinc-200 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Stage Details & Deliverables */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200/80">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#8b5cf6]">
                      {current.step}
                    </span>
                    <div className="h-8 w-[1px] bg-zinc-300" />
                    <div>
                      <span className="text-xs uppercase font-bold text-zinc-500 block">
                        ESTIMATED TIMELINE: {current.duration}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d0d11]">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-[#0d0d11] italic">
                    &ldquo;{current.summary}&rdquo;
                  </p>

                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    {current.detail}
                  </p>

                  <div className="pt-2 space-y-3">
                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold block">
                      Verified Stage Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {current.deliverables.map((del, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs font-semibold text-zinc-800 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-100"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stage Progress Bar Footer */}
                <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between text-xs font-bold text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6]" />
                    <span>Stage {activeStep + 1} of 5 Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {STEPS.map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-[7px] transition-all ${
                          i <= activeStep ? "w-6 bg-[#8b5cf6]" : "w-2 bg-zinc-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Interactive Telemetry Dashboard */}
              <div className="lg:col-span-5 p-8 sm:p-12 bg-zinc-950/95 backdrop-blur-xl text-white flex flex-col justify-between relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/20 rounded-[7px] blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                      <Terminal className="w-4 h-4 text-[#8b5cf6]" />
                      <span>Stage 0{activeStep + 1} Execution Telemetry</span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-[7px] bg-purple-950/80 text-purple-300 border border-purple-700/50">
                      ● Active SLA
                    </span>
                  </div>

                  {/* Stage Visual Specific Component */}
                  {activeStep === 0 && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                        <div className="flex justify-between items-center text-xs text-zinc-400">
                          <span>Technical SEO & Performance Audit</span>
                          <span className="text-[#8b5cf6] font-bold">120/120 Pts</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-2 rounded-[7px] overflow-hidden">
                          <div className="bg-[#8b5cf6] h-full w-full rounded-[7px]" />
                        </div>
                        <div className="text-[11px] text-zinc-500 font-mono">
                          ✓ Crawl Budget Optimized · ✓ Zero 404 Errors · ✓ Schema Prepared
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Competitor Benchmark</div>
                          <div className="text-xl font-bold text-white">Top 1% Speed</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Persona Blueprints</div>
                          <div className="text-xl font-bold text-[#8b5cf6]">4 Mapped</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                        <div className="flex justify-between items-center text-xs text-zinc-400">
                          <span>Figma Design Tokens & Components</span>
                          <span className="text-[#8b5cf6] font-bold">240+ Tokens</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {["--bg-primary", "--font-sans", "--radius-3xl", "--shadow-xl", "--wcag-aaa"].map((tok) => (
                            <span key={tok} className="px-2.5 py-1 rounded-lg bg-zinc-800 text-[11px] font-mono text-purple-300">
                              {tok}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Interactive Prototype</div>
                          <div className="text-xl font-bold text-[#8b5cf6]">60 FPS Native</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Color Contrast</div>
                          <div className="text-xl font-bold text-white">100% Pass</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2 font-mono text-xs text-zinc-300">
                        <div className="flex items-center justify-between text-zinc-500 pb-2 border-b border-zinc-800">
                          <span>git checkout -b feature/production</span>
                          <span className="text-[#8b5cf6] font-bold">Build: Passed</span>
                        </div>
                        <p className="text-[#8b5cf6]">✓ Next.js 16 App Router Compiled in 1.8s</p>
                        <p className="text-zinc-400">✓ TypeScript 0 Errors (Strict Mode)</p>
                        <p className="text-zinc-400">✓ Edge SSR Function Deployed Globally</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Edge Latency</div>
                          <div className="text-xl font-bold text-[#8b5cf6]">&lt; 45ms</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Code Quality</div>
                          <div className="text-xl font-bold text-white">Grade A+</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                        <div className="flex justify-between items-center text-xs text-zinc-400">
                          <span>Google Core Web Vitals Benchmark</span>
                          <span className="text-[#8b5cf6] font-bold">100/100</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded-xl bg-zinc-950">
                            <div className="text-lg font-bold text-[#8b5cf6]">0.5s</div>
                            <div className="text-[10px] text-zinc-500">LCP (Speed)</div>
                          </div>
                          <div className="p-2 rounded-xl bg-zinc-950">
                            <div className="text-lg font-bold text-[#8b5cf6]">0.00</div>
                            <div className="text-[10px] text-zinc-500">CLS (Shift)</div>
                          </div>
                          <div className="p-2 rounded-xl bg-zinc-950">
                            <div className="text-lg font-bold text-[#8b5cf6]">12ms</div>
                            <div className="text-[10px] text-zinc-500">INP (Interact)</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Rich Snippet Schema</div>
                          <div className="text-xl font-bold text-white">JSON-LD 100%</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">SSL & Security</div>
                          <div className="text-xl font-bold text-[#8b5cf6]">A+ Hardened</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                        <div className="flex justify-between items-center text-xs text-zinc-400">
                          <span>Global CDN Production Network</span>
                          <span className="text-[#8b5cf6] font-bold">300+ Edge Nodes</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#8b5cf6]" />
                            <span>Zero-Downtime Deploy</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#8b5cf6]" />
                            <span>100% Full IP Handover</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#8b5cf6]" />
                            <span>30-Day Tech Warranty</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#8b5cf6]" />
                            <span>Video Walkthrough Guide</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Uptime Guarantee</div>
                          <div className="text-xl font-bold text-[#8b5cf6]">99.99%</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                          <div className="text-xs text-zinc-400 mb-1">Client Handover</div>
                          <div className="text-xl font-bold text-white">Full Source</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800 text-center">
                    {current.stats.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/80">
                        <div className="text-base sm:text-lg font-extrabold text-white">{s.value}</div>
                        <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Ready to initiate Stage 01?</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#8b5cf6] hover:bg-[#6d28d9] px-4 py-2 rounded-[7px] transition-all shadow-md"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
