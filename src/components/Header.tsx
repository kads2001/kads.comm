"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import KadsLogo from "./KadsLogo";

const NAV_ITEMS = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-[var(--kads-shadow-sm)] text-[var(--kads-text)]"
            : isDarkHeader
            ? "py-4 bg-transparent border-b border-transparent text-white"
            : "py-4 bg-transparent border-b border-transparent text-[var(--kads-text)]"
        }`}
      >
        <div className="kads-container flex items-center justify-between">
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
            className={`hidden lg:flex items-center gap-1 rounded-[var(--kads-radius-sm)] px-3 py-1.5 backdrop-blur-md transition-colors ${
              isDarkHeader
                ? "bg-white/10 border border-white/15 text-white"
                : "bg-zinc-50 border border-zinc-200/80 text-zinc-700"
            }`}
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-[var(--kads-radius-sm)] ${
                    isActive
                      ? isDarkHeader
                        ? "text-black font-extrabold"
                        : "text-white font-extrabold"
                      : isDarkHeader
                      ? "text-zinc-200 hover:text-white hover:bg-white/10"
                      : "text-zinc-600 hover:text-black hover:bg-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className={`absolute inset-0 rounded-[var(--kads-radius-sm)] -z-10 shadow-xs ${
                        isDarkHeader ? "bg-white" : "bg-black"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-[var(--kads-radius-sm)] active:scale-95 ${
                isDarkHeader
                  ? "bg-white text-black hover:bg-zinc-200 border border-white"
                  : "bg-black text-white hover:bg-zinc-800 border border-black"
              }`}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden relative p-2.5 rounded-[var(--kads-radius-md)] border focus:outline-none transition-colors ${
              isDarkHeader
                ? "bg-white/10 border-white/20 text-white"
                : "bg-zinc-100 border-zinc-200 text-zinc-800"
            }`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
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
            className="fixed inset-0 z-50 lg:hidden bg-white flex flex-col text-[var(--kads-text)]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-200">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <KadsLogo size="md" variant="dark" showTagline={false} />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-[var(--kads-radius-md)] bg-zinc-100 text-black"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
              <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
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
                      className={`text-2xl font-extrabold flex items-center justify-between py-3 border-b border-zinc-100 ${
                        pathname === item.href ? "text-black" : "text-zinc-600 hover:text-black"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-5 h-5 text-zinc-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="pt-6 border-t border-zinc-200 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 bg-black text-white text-center font-extrabold text-base rounded-[var(--kads-radius-md)] flex items-center justify-center gap-2 border border-black hover:bg-zinc-800 transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-zinc-500 text-center font-medium">
                  hello@kads.com
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
