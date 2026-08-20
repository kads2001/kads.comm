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

      {/* Radial Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-600/10 blur-[130px] rounded-[7px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-[7px] pointer-events-none -z-10" />

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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Next-Gen Technology & Creative Solutions</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              We build digital experiences that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-400">
                move businesses forward.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              KADS.COM combines technology, design and strategy to create digital products,
              experiences and solutions built for modern businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 rounded-[7px] shadow-[0_0_35px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-200 transition-all duration-300 bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-white/30 rounded-[7px] backdrop-blur-md hover:text-white"
              >
                Explore Our Work
              </button>
            </div>

            {/* Mini Trust Stats Pill */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-slate-400 text-xs font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Enterprise-Grade Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Modern Tech Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-300" />
                <span>100% Client Success Commitment</span>
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
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-[7px] bg-indigo-500/20 blur-3xl -z-10 animate-pulse" />

            {/* Glass Platform Showcase Card */}
            <div className="relative w-full max-w-md p-6 rounded-3xl glass-panel border border-white/15 shadow-2xl shadow-indigo-950/40 backdrop-blur-2xl space-y-5">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-[7px] bg-red-500/80" />
                  <div className="w-3 h-3 rounded-[7px] bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-[7px] bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-widest bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-500/30">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Central Abstract Metric Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Code2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-slate-400 font-mono">99.9%</span>
                  </div>
                  <div className="text-xl font-bold text-white">99.9%</div>
                  <div className="text-[11px] text-slate-400">Core Web Performance</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Layers className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-slate-400 font-mono">SCALABLE</span>
                  </div>
                  <div className="text-xl font-bold text-white">Global</div>
                  <div className="text-[11px] text-slate-400">Enterprise Ready</div>
                </div>
              </div>

              {/* Floating Code Snippet / Technology Ribbon */}
              <div className="p-4 rounded-2xl bg-[#070d19] border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>architecture.ts</span>
                  <span className="text-emerald-400">● Live</span>
                </div>
                <p className="text-indigo-300">
                  <span className="text-cyan-400">const</span> kads ={" "}
                  <span className="text-white">new DigitalExperience()</span>;
                </p>
                <p className="text-slate-400">
                  await kads.transform({"{"} impact: <span className="text-amber-300 font-semibold">"Enterprise"</span> {"}"});
                </p>
              </div>

              {/* Floating Badge Indicator */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-[7px] bg-cyan-400 animate-ping" />
                  Building next-gen digital experiences
                </span>
                <span className="font-mono text-slate-400">v2.4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
