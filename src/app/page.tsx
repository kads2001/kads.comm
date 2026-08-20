"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Globe,
  Code2,
  Search,
  Smartphone,
  Share2,
  Video,
  Palette,
  CheckCircle2,
  Zap,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeTicker from "@/components/MarqueeTicker";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ParallaxSection from "@/components/ParallaxSection";
import CreativeShowcase from "@/components/CreativeShowcase";
import InteractiveEstimator from "@/components/InteractiveEstimator";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import QuickContactFormSection from "@/components/QuickContactFormSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-[#0d0d11] selection:bg-[#8b5cf6] selection:text-white font-sans">
      <ScrollProgress />
      <CustomCursor />
      <Header />

      {/* MAIN HERO BANNER WITH SOLID BRAND PURPLE & CLEAN NO-GRADIENT BUTTONS */}
      <section
        className="relative min-h-[92vh] pt-40 pb-24 flex flex-col justify-between overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero_showcase.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/82 to-black/88 backdrop-blur-[2px]" />

        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10 my-auto">
          {/* Top Status Pill */}
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[7px] bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white">
              <span className="w-2.5 h-2.5 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span>Full-Stack Digital Transformation & Creative Studio</span>
            </span>
          </div>

          {/* Main Hero Headline */}
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              We engineer websites, mobile apps, & digital growth systems.
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10">
              Custom Next.js web applications, WordPress & CMS stores, technical SEO dominance, cross-platform mobile apps, viral video production, and iconic graphic design.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-[7px] transition-all shadow-xl hover:scale-105"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-white/10 border border-white/25 rounded-[7px] backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <span>View Selected Work</span>
              </Link>
            </div>
          </div>

          {/* Clean Frosted Glass Metric Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15">
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">100/100</div>
              <div className="text-xs text-zinc-300 mt-1">Lighthouse Speed Standard</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#8b5cf6]">6 Disciplines</div>
              <div className="text-xs text-zinc-300 mt-1">Full-Spectrum In-House</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
              <div className="text-xs text-zinc-300 mt-1">Code & Asset Ownership</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#8b5cf6]">&lt; 24h</div>
              <div className="text-xs text-zinc-300 mt-1">Proposal Response Time</div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeTicker />
      <TrustSection />
      <ServicesSection />
      <ProjectsSection />
      <ParallaxSection />
      <CreativeShowcase />
      <InteractiveEstimator />
      <ProcessSection />
      <TechStackSection />
      <TestimonialsSection />
      <FaqSection />
      <QuickContactFormSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
