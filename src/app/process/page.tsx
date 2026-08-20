"use client";

import Link from "next/link";
import { Search, Compass, Palette, Code, Rocket, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import QuickContactFormSection from "@/components/QuickContactFormSection";

const STAGES = [
  {
    number: "01",
    title: "Customer Experience Strategy & Discovery",
    duration: "Week 1",
    description:
      "We lay the groundwork for transformation through 120-point technical audits, competitor gap analysis, user journey mapping, and architecture blueprints before writing code.",
    activities: [
      "120-Point Technical SEO & Performance Audit",
      "User Persona Journey & Archetype Mapping",
      "System Architecture & API Specifications",
      "Milestone & Timeline Agreement",
    ],
  },
  {
    number: "02",
    title: "Service Design & Interactive Prototyping",
    duration: "Week 2",
    description:
      "Our senior designers craft atomic Figma design systems, motion micro-interactions, editorial typography, and high-fidelity interactive prototypes tested on real users.",
    activities: [
      "Atomic Figma UI Design Systems",
      "High-Fidelity Clickable Mobile & Desktop Prototypes",
      "WCAG 2.1 AAA Accessibility Compliance",
      "Brand Style Guide & Token Matrix",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Agile Engineering & Production",
    duration: "Weeks 3-4",
    description:
      "We write clean, modular Next.js 16, TypeScript, custom WordPress PHP themes, Flutter/React Native mobile code, and high-retention 4K motion graphics.",
    activities: [
      "Type-Safe Next.js & React App Router",
      "Custom WordPress / WooCommerce Themes",
      "Cross-Platform iOS & Android Mobile Apps",
      "Bi-Weekly Staging Previews & Continuous Git CI/CD",
    ],
  },
  {
    number: "04",
    title: "Validation, Core Web Vitals & Hardening",
    duration: "Week 5",
    description:
      "Rigorous stress testing across real physical devices, JSON-LD schema integration, Google Search Console indexing, and caching optimization for sub-second speeds.",
    activities: [
      "100/100 Lighthouse Performance Rating",
      "Schema.org Rich Snippets for Search Dominance",
      "Multi-Viewport iOS & Android Stress Testing",
      "SSL, Firewall & Penetration Security Hardening",
    ],
  },
  {
    number: "05",
    title: "Production Release & Ongoing Retainer",
    duration: "Launch & Beyond",
    description:
      "We deploy to global edge CDN networks, submit mobile apps to Apple & Google Play, set up live Looker Studio telemetry dashboards, and train your team with video guides.",
    activities: [
      "Zero-Downtime Edge Global Production Deploy",
      "Personalized Video Walkthrough Training for Your Team",
      "100% Commercial Code & Asset Handover Guarantee",
      "30-Day Post-Launch Warranty & Support",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen bg-white text-[#0d0d11] selection:bg-[#8b5cf6] selection:text-white font-sans">
      <ScrollProgress />
      <CustomCursor />
      <Header />

      {/* HERO BANNER WITH BACKGROUND IMAGE AND DARK OVERLAY */}
      <section
        className="relative pt-40 pb-24 min-h-[50vh] flex flex-col justify-center overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/parallax_agency_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/85 backdrop-blur-[2px]" />

        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white">
                <span className="w-2.5 h-2.5 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
                <span>HOW WE WORK · PROVEN 5-STAGE FRAMEWORK</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              A Disciplined Engineering & Creative Methodology.
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              Every project follows a transparent 5-stage roadmap designed to eliminate risk, ensure sub-second performance, and deliver on time.
            </p>
          </div>
        </div>
      </section>

      {/* Process Stages */}
      <section className="py-24 sm:py-32 bg-white text-[#0d0d11] relative border-b border-zinc-200">
        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10 space-y-12">
          {STAGES.map((stage) => (
            <div
              key={stage.number}
              className="p-8 sm:p-12 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl"
            >
              <div className="lg:col-span-4 space-y-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#8b5cf6] block">
                  STAGE {stage.number}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">
                  TIMELINE: {stage.duration}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d0d11] pt-2">
                  {stage.title}
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">{stage.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-200/60">
                  {stage.activities.map((act, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800 p-3.5 rounded-2xl bg-white/80 border border-zinc-200/80 shadow-2xs backdrop-blur-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <QuickContactFormSection />
      <Footer />
    </main>
  );
}
