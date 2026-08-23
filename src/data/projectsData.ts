export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  categorySlug: "web" | "wordpress" | "seo" | "mobile" | "social-video" | "branding";
  client: string;
  year: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetric: string;
  impact: string[];
  tags: string[];
  architecture: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "fintech-web-platform",
    index: "01",
    title: "Multi-Market Financial Dashboard",
    category: "Custom Web Application",
    categorySlug: "web",
    client: "FinTech Startup",
    year: "2026",
    image: "/images/fintech_dashboard.jpg",
    summary:
      "A high-performance multi-market dashboard engineered with Next.js App Router, real-time data feeds, and sub-second global edge delivery.",
    challenge:
      "The project required a unified enterprise dashboard to manage cross-border data with strict latency requirements and responsive design across all device types.",
    solution:
      "We engineered a modular micro-frontend Next.js system backed by serverless edge functions and distributed caching, delivering a seamless Core Web Vitals-optimized experience.",
    impactMetric: "Sub-second load times · 100/100 Lighthouse",
    impact: [
      "Sub-second page load across all global regions",
      "100/100 Core Web Vitals and Lighthouse performance",
      "Fully responsive across desktop, tablet, and mobile",
      "Type-safe TypeScript architecture with zero runtime errors",
    ],
    tags: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Edge CDN"],
    architecture: [
      "Next.js App Router & Server Components",
      "Type-Safe TypeScript & GraphQL Gateway",
      "Serverless Edge Deployment (Vercel)",
      "Real-Time WebSocket Data Feeds",
    ],
  },
  {
    id: "ecommerce-wordpress-store",
    index: "02",
    title: "E-Commerce Store & Custom WordPress Build",
    category: "WordPress & WooCommerce",
    categorySlug: "wordpress",
    client: "Retail Brand",
    year: "2026",
    image: "/images/ecommerce_store.jpg",
    summary:
      "A lightweight, bespoke WordPress & WooCommerce store featuring custom Gutenberg blocks, multi-currency checkout, and optimized page speed.",
    challenge:
      "The existing WordPress site suffered from slow load times due to excessive plugins, resulting in poor mobile performance and user drop-off.",
    solution:
      "We rebuilt the store from scratch with a custom lightweight PHP/Tailwind theme, reduced plugins to essentials, and configured server-side caching for instant page delivery.",
    impactMetric: "Sub-1s load time · Custom theme",
    impact: [
      "Page load optimized from slow to sub-1 second",
      "Mobile-first responsive design throughout",
      "Clean content management for the client's marketing team",
      "Secure multi-currency checkout with Stripe integration",
    ],
    tags: ["Custom WordPress Theme", "WooCommerce", "Redis Cache", "Gutenberg Blocks", "Stripe API"],
    architecture: [
      "Bespoke PHP Theme with Tailwind CSS",
      "Custom Gutenberg Dynamic React Blocks",
      "Stripe & Multi-Currency Gateway",
      "Cloudflare Full-Page Edge Caching",
    ],
  },
  {
    id: "fitness-mobile-app",
    index: "03",
    title: "Cross-Platform Fitness & Wellness App",
    category: "Mobile App Development",
    categorySlug: "mobile",
    client: "Health Tech Startup",
    year: "2026",
    image: "/images/mobile_app.jpg",
    summary:
      "A React Native mobile application for iOS and Android featuring offline workout tracking, sensor integration, and animated workout guides.",
    challenge:
      "The project needed simultaneous launch on both app stores with full offline functionality and smooth native-feeling performance.",
    solution:
      "We utilized React Native with Expo and local-first SQLite storage, achieving 60fps animations and seamless device sensor integration.",
    impactMetric: "iOS & Android · Offline-first",
    impact: [
      "Simultaneous iOS and Android launch from shared codebase",
      "Full offline workout tracking and sync",
      "60fps smooth animations throughout",
      "Native sensor and health API integration",
    ],
    tags: ["React Native", "Expo", "iOS & Android", "SQLite", "Bluetooth Low Energy"],
    architecture: [
      "React Native Cross-Platform Engine",
      "SQLite Offline-First Storage",
      "Apple HealthKit & Google Fit Sync",
      "Supabase Cloud Auth & Edge Functions",
    ],
  },
  {
    id: "social-video-campaign",
    index: "04",
    title: "Social Media & Motion Video Campaign",
    category: "Social Media & Video Production",
    categorySlug: "social-video",
    client: "D2C Brand",
    year: "2026",
    image: "/images/social_creatives.jpg",
    summary:
      "A complete social media creative rollout featuring educational carousels, 3D product motion animations, and high-retention vertical video content.",
    challenge:
      "The brand needed immediate visual impact and engagement across Instagram, TikTok, and paid social channels for a product launch.",
    solution:
      "We produced 3D product motion graphics, fast-paced vertical video edits with kinetic typography, and multi-slide carousels designed for maximum shareability.",
    impactMetric: "Multi-platform · High-retention video",
    impact: [
      "Complete multi-platform creative rollout",
      "High-retention 3-second hook vertical videos",
      "3D product renders and motion graphics",
      "Consistent brand visual language across all formats",
    ],
    tags: ["After Effects", "Premiere Pro", "Blender 3D", "Instagram Reels", "Figma"],
    architecture: [
      "Adobe After Effects 3D Product Renderings",
      "Kinetic Typography & Custom Sound Design",
      "9:16 Vertical Video Native Formatting",
      "Multi-Slide Figma Educational Carousels",
    ],
  },
];
