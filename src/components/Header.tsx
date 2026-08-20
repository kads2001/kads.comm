"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import KadsLogo from "./KadsLogo";

const NAV_ITEMS = [
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Methodology", href: "/process" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isDarkHeader = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3.5 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs text-[#0d0d11]"
            : isDarkHeader
            ? "py-5 bg-transparent border-b border-transparent text-white"
            : "py-5 bg-transparent border-b border-transparent text-[#0d0d11]"
        }`}
      >
        <div className="w-[90%] max-w-[1500px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="focus:outline-none flex items-center">
            <KadsLogo
              size="md"
              variant={isDarkHeader ? "light" : "dark"}
              showTagline={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-[7px] px-4 py-1.5 backdrop-blur-md transition-colors ${
              isDarkHeader
                ? "bg-white/10 border border-white/20 text-white"
                : "bg-[#f4f4f7] border border-zinc-200/90 text-zinc-700"
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-[7px] ${
                    isActive
                      ? isDarkHeader
                        ? "text-black font-extrabold"
                        : "text-white font-extrabold"
                      : isDarkHeader
                      ? "text-zinc-200 hover:text-white hover:bg-white/10"
                      : "text-zinc-600 hover:text-black hover:bg-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className={`absolute inset-0 rounded-[7px] -z-10 shadow-xs ${
                        isDarkHeader ? "bg-white" : "bg-[#8b5cf6]"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA - Solid Brand Purple (No Gradient Fade) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#8b5cf6] hover:bg-[#6d28d9] transition-all duration-200 rounded-[7px] shadow-md active:scale-95"
            >
              <span className="relative flex items-center gap-1.5">
                Let&apos;s Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative p-2.5 rounded-xl border focus:outline-none transition-colors ${
              isDarkHeader
                ? "bg-white/10 border-white/20 text-white"
                : "bg-zinc-100 border-zinc-200 text-zinc-800"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden bg-white/98 backdrop-blur-xl flex flex-col text-[#0d0d11]"
          >
            <div className="px-6 py-5 flex items-center justify-between border-b border-zinc-200">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <KadsLogo size="md" variant="dark" showTagline={false} />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-zinc-100 text-black"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-extrabold flex items-center justify-between py-2 border-b border-zinc-100 ${
                        pathname === item.href ? "text-[#8b5cf6]" : "text-zinc-700 hover:text-black"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-400" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-200 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 bg-[#8b5cf6] text-white text-center font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Initiate a Project</span>
                </Link>
                <p className="text-xs text-zinc-500 text-center uppercase tracking-wider font-bold">
                  IDEAS • DESIGN • SOLUTIONS
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
