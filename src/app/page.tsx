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
    <main className="relative min-h-screen bg-white text-[var(--kads-text)] selection:bg-black selection:text-white font-sans">
      <ScrollProgress />
      <CustomCursor />
      <Header />

      {/* ══════════════════════════════════════════════════════
          HERO SECTION — Outcome-focused, premium, clean
         ══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] pt-36 sm:pt-40 pb-20 flex flex-col justify-between overflow-hidden text-white bg-black"
      >
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="kads-container relative z-10 my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 min-[1600px]:gap-14 items-center">
            {/* Left Column: Typography & Actions */}
            <div className="lg:col-span-7">
              {/* Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[var(--kads-radius-sm)] bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur-md text-white font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Technology &amp; Design Studio</span>
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-[clamp(2.25rem,4.8vw,4.25rem)] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
                  Your business deserves a digital presence that{" "}
                  <span className="underline decoration-white/40 underline-offset-8 decoration-1 italic font-serif font-normal text-zinc-100">
                    actually drives growth.
                  </span>
                </h1>

                <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
                  KADS combines technology, design, and strategy to build websites,
                  apps, and digital systems that help businesses attract customers,
                  increase revenue, and scale with confidence.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 border border-white rounded-[var(--kads-radius-sm)] transition-all shadow-lg active:scale-[0.98]"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-[var(--kads-radius-sm)] backdrop-blur-md hover:bg-white/20 transition-all"
                  >
                    <span>Explore Our Services</span>
                    <ArrowDown className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Vivid Full-Color Corporate Showcase Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 group">
                {/* Full-Color Corporate Headquarters Photography */}
                <div className="relative h-[340px] sm:h-[440px] min-[1600px]:h-[500px] w-full">
                  <Image
                    src="/images/hero_showcase.jpg"
                    alt="KADS Global Technology Headquarters"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle edge gradient only at the very bottom for sleek caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--kads-radius-sm)] bg-black/70 border border-white/25 backdrop-blur-md text-white text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>HQ · ENTERPRISE DIGITAL ARCHITECTURE</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 z-10 p-4 rounded-2xl bg-black/75 border border-white/20 backdrop-blur-md text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      Sub-Second SLA
                    </div>
                    <div className="text-sm font-extrabold text-white">
                      100% Custom Engineering
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-[var(--kads-radius-sm)] bg-white text-black text-xs font-bold font-mono">
                    PROVEN
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stat Badges — Verifiable claims only */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 min-[1600px]:gap-6 pt-8 border-t border-white/10 mt-10"
          >
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">6+</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">Service Disciplines</div>
            </div>
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">Code &amp; Asset Ownership</div>
            </div>
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">Modern</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">Tech Stack &amp; Tooling</div>
            </div>
            <div className="p-4 sm:p-5 rounded-[var(--kads-radius-lg)] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">&lt; 24h</div>
              <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">Response Time</div>
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
