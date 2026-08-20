"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function ParallaxSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-fixed bg-center bg-cover text-white" style={{ backgroundImage: "url('/images/parallax_agency_bg.jpg')" }}>
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/80 to-black/88 backdrop-blur-[2px]" />

      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-white/15 border border-white/25 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>THE HUMAN CRAFTSMANSHIP ADVANTAGE</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Where Senior Strategy Meets Scalable Engineering.
            </h2>

            <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl">
              We operate as your dedicated product engineering and creative team. No junior handoffs, no template shortcuts — only custom code, verified search rankings, and high-retention motion media.
            </p>




            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/15">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
                <div className="text-xs text-zinc-400 mt-1">In-House Production</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">0.9s</div>
                <div className="text-xs text-zinc-400 mt-1">Sub-Second Load SLA</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">120+</div>
                <div className="text-xs text-zinc-400 mt-1">Global Deployments</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">24/7</div>
                <div className="text-xs text-zinc-400 mt-1">Engineered Reliability</div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[7px] bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:scale-105"
              >
                <span>Initiate Your Project Brief</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
