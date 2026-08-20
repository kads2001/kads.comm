import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section
      className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/hero_showcase.jpg')" }}
    >
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/85 to-black/92 backdrop-blur-[3px]" />

      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-white/10 text-xs font-bold uppercase tracking-wider text-white border border-purple-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
            <span>START YOUR DIGITAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Let&apos;s build something extraordinary together.
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto">
            From initial strategy and high-fidelity prototypes to custom Next.js code, SEO rankings, mobile apps, and high-retention video systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[#8b5cf6] hover:bg-[#6d28d9] rounded-[7px] transition-all shadow-xl hover:scale-105"
            >
              <span>Initiate a Project Brief</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-white/10 border border-white/25 rounded-[7px] backdrop-blur-md hover:bg-white/20 transition-all"
            >
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
