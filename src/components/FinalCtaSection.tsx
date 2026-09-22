import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section
      className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/hero_showcase.jpg')" }}
    >
      {/* Balanced Overlay allowing full colors of skyscraper to show */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/75" />

      <div className="w-[90%] max-w-[1500px] mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[7px] bg-white/10 text-xs font-mono uppercase tracking-wider text-white border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>START YOUR DIGITAL TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
            Let&apos;s build something <span className="font-serif italic font-normal text-zinc-300">extraordinary</span> together.
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto">
            From initial strategy and high-fidelity prototypes to custom Next.js code, SEO rankings, mobile apps, and high-retention video systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono uppercase tracking-wider font-bold text-black bg-white hover:bg-zinc-200 rounded-[7px] transition-all"
            >
              <span>Initiate a Project Brief</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono uppercase tracking-wider font-bold text-white bg-black/50 border border-white/20 rounded-[7px] backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
