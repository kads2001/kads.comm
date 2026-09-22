"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBreakSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-y border-zinc-800">
      {/* Background Architectural Hairline Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="kads-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 font-mono">
            // INITIATE TRANSFORMATION
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Let&apos;s build something that moves your business forward.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            From strategy and design to development and launch — we&apos;re ready to help you create a digital presence that drives real results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 rounded-[var(--kads-radius-sm)] transition-all shadow-lg active:scale-95 border border-white"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/20 rounded-[var(--kads-radius-sm)] hover:bg-white/15 hover:border-white/40 transition-all"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
