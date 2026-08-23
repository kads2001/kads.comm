"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesSection from "@/components/ServicesSection";
import WhyKadsSection from "@/components/WhyKadsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CtaBreakSection from "@/components/CtaBreakSection";
import FaqSection from "@/components/FaqSection";
import QuickContactFormSection from "@/components/QuickContactFormSection";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-[var(--kads-text)] selection:bg-[var(--kads-purple)] selection:text-white font-sans">
      <ScrollProgress />
      <CustomCursor />
      <Header />

      {/* ══════════════════════════════════════════════════════
          HERO SECTION — Outcome-focused, premium, clean
         ══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] pt-36 sm:pt-40 pb-20 flex flex-col justify-between overflow-hidden text-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_showcase.jpg"
            alt="KADS Digital Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
        </div>

        <div className="kads-container relative z-10 my-auto">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[var(--kads-radius-sm)] bg-white/8 border border-white/15 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white">
              <span className="w-2 h-2 rounded-full bg-[var(--kads-purple)] animate-pulse" />
              <span>Technology &amp; Design Studio</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Your business deserves a digital presence that{" "}
              <span className="text-[var(--kads-purple)]">actually drives growth.</span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-10">
              KADS combines technology, design, and strategy to build websites,
              apps, and digital systems that help businesses attract customers,
              increase revenue, and scale with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[var(--kads-purple)] hover:bg-[var(--kads-purple-hover)] rounded-[var(--kads-radius-sm)] transition-all shadow-[var(--kads-shadow-purple)] hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.45)] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-white/8 border border-white/20 rounded-[var(--kads-radius-sm)] backdrop-blur-md hover:bg-white/15 transition-all"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Stat Badges — Verifiable claims only */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
          >
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/6 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">6+</div>
              <div className="text-xs text-zinc-400 mt-1">Service Disciplines</div>
            </div>
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/6 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--kads-purple)]">100%</div>
              <div className="text-xs text-zinc-400 mt-1">Code &amp; Asset Ownership</div>
            </div>
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/6 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">Modern</div>
              <div className="text-xs text-zinc-400 mt-1">Tech Stack &amp; Tooling</div>
            </div>
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/6 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--kads-purple)]">&lt; 24h</div>
              <div className="text-xs text-zinc-400 mt-1">Response Time</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION FLOW — Optimized for conversion
         ══════════════════════════════════════════════════════ */}
      <MarqueeTicker />
      <ServicesSection />
      <WhyKadsSection />
      <ProjectsSection />
      <ProcessSection />
      <TechStackSection />
      <CtaBreakSection />
      <FaqSection />
      <QuickContactFormSection />
      <Footer />
    </main>
  );
}
