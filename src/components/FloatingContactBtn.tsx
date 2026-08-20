"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function FloatingContactBtn() {
  return (
    <Link
      href="/contact"
      aria-label="Contact KADS.COM"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-[7px] bg-black text-white shadow-xl hover:shadow-2xl flex items-center justify-center border border-zinc-700 hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <Mail className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform" />
    </Link>
  );
}
