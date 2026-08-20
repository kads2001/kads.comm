"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Zap, Code, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import QuickContactFormSection from "@/components/QuickContactFormSection";

export default function AboutPage() {
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
                <span>ABOUT KADS.COM · DIGITAL CRAFTSMANSHIP</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Human-Led Digital Transformation. Built for Growth.
            </h1>

            <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              We are a multi-disciplinary technology studio uniting full-stack engineering, WordPress agility, technical search dominance, and viral creative systems under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Philosophy & High-Res Image Banner */}
      <section className="py-24 sm:py-32 bg-white text-[#0d0d11] border-b border-zinc-200 relative">
        <div className="w-[90%] max-w-[1500px] mx-auto relative z-10 space-y-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900">
            <img
              src="/images/parallax_agency_bg.jpg"
              alt="KADS Studio Environment"
              className="w-full h-80 sm:h-[540px] object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#8b5cf6]">
                <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
                <span>OUR CORE PHILOSOPHY</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d0d11] tracking-tight leading-[1.15]">
                No cookie-cutter templates. No junior handoffs.
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                Every project is architected by senior full-stack engineers and senior visual designers. We build robust, sub-second digital foundations that scale effortlessly with your business.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg">
                <div className="text-3xl font-extrabold text-[#8b5cf6] mb-1">100%</div>
                <div className="font-bold text-sm text-[#0d0d11] mb-2">In-House Production</div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  Zero outsourcing. Every line of code, design token, and video render is crafted internally.
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg">
                <div className="text-3xl font-extrabold text-[#8b5cf6] mb-1">100/100</div>
                <div className="font-bold text-sm text-[#0d0d11] mb-2">Lighthouse Standard</div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  Sub-second LCP and perfect Core Web Vitals benchmarked on real devices.
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg">
                <div className="text-3xl font-extrabold text-[#8b5cf6] mb-1">Full IP</div>
                <div className="font-bold text-sm text-[#0d0d11] mb-2">Complete Code Ownership</div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  You own 100% of the repository, design assets, and raw creative files forever.
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg">
                <div className="text-3xl font-extrabold text-[#8b5cf6] mb-1">30-Day</div>
                <div className="font-bold text-sm text-[#0d0d11] mb-2">Post-Launch Warranty</div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  Comprehensive bug fixes, speed tuning, and SLA technical guarantee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickContactFormSection />
      <Footer />
    </main>
  );
}
