"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Cpu, Code2, Layers, Award } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Interactive WebGL Canvas */}
      <HeroCanvas />

      {/* Subtle Hairline Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-black text-white text-xs font-mono uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Next-Gen Engineering & Creative Direction</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light text-black tracking-tight leading-[1.08] mb-6">
              We build digital experiences that{" "}
              <span className="font-serif italic font-normal text-zinc-600">
                move businesses forward.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl mb-8">
              KADS combines engineering, high-contrast aesthetics, and technical SEO to craft digital systems built for modern enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono uppercase tracking-wider font-bold text-white bg-black hover:bg-zinc-800 rounded-[7px] transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-mono uppercase tracking-wider font-bold text-black bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 rounded-[7px] transition-all"
              >
                Explore Our Work
              </button>
            </div>

            {/* Mini Trust Stats Pill */}
            <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-6 sm:gap-10 text-zinc-500 text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Enterprise SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-black" />
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-black" />
                <span>100% Client Handover</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Interactive Tech Visual Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glass Platform Showcase Card */}
            <div className="relative w-full max-w-md p-6 rounded-3xl bg-black border border-zinc-800 text-white shadow-2xl space-y-5">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                </div>
                <span className="text-[11px] font-mono text-white uppercase tracking-widest bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Central Abstract Metric Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-white transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Code2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-zinc-400 font-mono">99.9%</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white">99.9%</div>
                  <div className="text-[11px] text-zinc-400 font-mono">Core Web Vitals</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-white transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Layers className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-zinc-400 font-mono">SCALE</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white">Global</div>
                  <div className="text-[11px] text-zinc-400 font-mono">Enterprise Ready</div>
                </div>
              </div>

              {/* Floating Code Snippet / Technology Ribbon */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>architecture.ts</span>
                  <span className="text-emerald-400">● Live</span>
                </div>
                <p className="text-zinc-400">
                  <span className="text-white">const</span> kads ={" "}
                  <span className="text-white">new DigitalExperience()</span>;
                </p>
                <p className="text-zinc-500">
                  await kads.transform({"{"} impact: <span className="text-white">"Enterprise"</span> {"}"});
                </p>
              </div>

              {/* Floating Badge Indicator */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Engineering SLA
                </span>
                <span className="text-zinc-500">v2.4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
