"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ParallaxSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-black text-white border-y border-zinc-800">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Strategy Copy & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[var(--kads-radius-sm)] bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white font-mono">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>THE HUMAN CRAFTSMANSHIP ADVANTAGE</span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              Where Senior Strategy Meets Scalable Engineering.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--kads-radius-sm)] bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
              >
                <span>Initiate Your Project Brief</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>

          {/* Right Column: Full-Color Corporate Boardroom Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 group">
              <div className="relative h-[340px] sm:h-[460px] min-[1600px]:h-[520px] w-full">
                <Image
                  src="/images/parallax_agency_bg.jpg"
                  alt="KADS Senior Executive Boardroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--kads-radius-sm)] bg-black/75 border border-white/25 backdrop-blur-md text-white text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>EXECUTIVE COLLABORATION &amp; STRATEGY</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 inset-x-4 z-10 p-4 rounded-2xl bg-black/75 border border-white/20 backdrop-blur-md text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                    Direct Partner Access
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Senior Engineers on Every Call
                  </div>
                </div>
                <span className="px-3 py-1 rounded-[var(--kads-radius-sm)] bg-white text-black text-xs font-bold font-mono">
                  DIRECT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
