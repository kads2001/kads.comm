"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBreakSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[var(--kads-dark)] text-white overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--kads-purple)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="kads-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--kads-purple)]">
            Have a project in mind?
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Let&apos;s build something that moves your business forward.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From strategy and design to development and launch — we&apos;re ready to help you create a digital presence that drives real results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[var(--kads-purple)] hover:bg-[var(--kads-purple-hover)] rounded-[var(--kads-radius-sm)] transition-all shadow-[var(--kads-shadow-purple)] hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.45)]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-zinc-300 bg-white/5 border border-white/15 rounded-[var(--kads-radius-sm)] hover:bg-white/10 hover:text-white transition-all"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
