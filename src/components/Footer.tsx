"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import KadsLogo from "./KadsLogo";

export default function Footer() {
  return (
    <footer className="bg-[var(--kads-dark)] text-white border-t border-[var(--kads-border-dark)] pt-20 pb-12 font-sans">
      <div className="kads-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/">
              <KadsLogo size="lg" variant="light" showTagline={false} />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Independent technology &amp; design studio. We build custom web applications, optimized WordPress sites, mobile apps, and digital growth strategies.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                Accepting New Projects
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-300">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-cms" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  WordPress &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimization" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-design" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Social Media &amp; Video
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design-branding" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Branding &amp; Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-300">
              <li>
                <Link href="/work" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  About KADS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors hover:underline underline-offset-4">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-zinc-300 font-medium">
              <a
                href="mailto:hello@kads.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                <span>hello@kads.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <span>Remote-First Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-medium gap-4">
          <div>
            © {new Date().getFullYear()} KADS.COM — All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
