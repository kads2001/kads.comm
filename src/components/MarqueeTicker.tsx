"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Cpu, Code2, Globe } from "lucide-react";

const TICKER_ITEMS = [
  { text: "DIGITAL EXPERIENCES", icon: Sparkles },
  { text: "WEB ARCHITECTURE", icon: Code2 },
  { text: "UI/UX DESIGN SYSTEMS", icon: Zap },
  { text: "AI & AUTOMATION", icon: Cpu },
  { text: "ENTERPRISE SAAS", icon: Shield },
  { text: "NEXT.JS 16 APP ROUTER", icon: Globe },
  { text: "SUB-SECOND SPEEDS", icon: Zap },
  { text: "DIGITAL STRATEGY", icon: Sparkles },
];

export default function MarqueeTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative py-6 sm:py-7 bg-zinc-950 text-white overflow-hidden select-none border-y border-zinc-800/80 shadow-2xl">
      {/* Fade overlay masks at left and right edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-10" />

      <motion.div
        className="flex space-x-10 sm:space-x-14 whitespace-nowrap items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-10 sm:space-x-14 cursor-default">
              <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-[0.2em] text-white">
                {item.text}
              </span>
              <div className="flex items-center justify-center w-7 h-7 rounded-[7px] bg-white/10 border border-white/20 text-white">
                <IconComponent className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
