"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  Code2,
  Search,
  Smartphone,
  Share2,
  Video,
  Palette,
} from "lucide-react";
import KadsLogo from "./KadsLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d11] text-white border-t border-zinc-800 pt-20 pb-12 font-sans">
      <div className="w-[90%] max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <KadsLogo size="lg" variant="light" showTagline={true} />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Full-Stack Digital Transformation Studio. Engineering custom Next.js web applications, WordPress platforms, technical search rankings, mobile apps, and viral media systems.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-[7px] bg-[#8b5cf6] animate-pulse" />
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                Accepting New Q3/Q4 Enterprise & Growth Projects
              </span>
            </div>
          </div>

          {/* Col 2: Capabilities Sitemap */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-300">
              <li>
                <Link href="/services/web-development" className="hover:text-[#8b5cf6] transition-colors">
                  Custom Next.js Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-cms" className="hover:text-[#8b5cf6] transition-colors">
                  WordPress & E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimization" className="hover:text-[#8b5cf6] transition-colors">
                  Technical SEO Dominance
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-[#8b5cf6] transition-colors">
                  iOS & Android Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-design" className="hover:text-[#8b5cf6] transition-colors">
                  Social Posts & Ad Creatives
                </Link>
              </li>
              <li>
                <Link href="/services/video-production-motion" className="hover:text-[#8b5cf6] transition-colors">
                  3D Reels & Video Motion
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Methods */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-300">
              <li>
                <Link href="/work" className="hover:text-[#8b5cf6] transition-colors">
                  Selected Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#8b5cf6] transition-colors">
                  5-Stage Methodology
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#8b5cf6] transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8b5cf6] transition-colors">
                  Scope Estimator & Brief
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8b5cf6]" />
                <span>hello@kads.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8b5cf6]" />
                <span>+1 (800) KADS-COM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8b5cf6]" />
                <span>San Francisco · London · Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-medium gap-4">
          <div>
            © {new Date().getFullYear()} KADS.COM — IDEAS • DESIGN • SOLUTIONS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
