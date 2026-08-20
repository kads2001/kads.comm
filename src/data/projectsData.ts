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
    id: "apex-fintech",
    index: "01",
    title: "Apex Multi-Market Global FinTech Portal",
    category: "Custom Web Application",
    categorySlug: "web",
    client: "Apex Global Financial",
    year: "2026",
    image: "/images/fintech_dashboard.jpg",
    summary:
      "A high-speed multi-market banking platform engineered with Next.js 16 App Router, real-time GraphQL websockets, and sub-50ms global edge latency.",
    challenge:
      "The client required a unified enterprise dashboard to manage cross-border asset liquidity with strict latency SLAs (<50ms) and multi-region regulatory compliance controls.",
    solution:
      "KADS engineered a modular micro-frontend Next.js system backed by serverless edge functions and distributed caching, delivering a seamless 100/100 Core Web Vitals experience.",
    impactMetric: "45ms Latency · $4.2B Volume Processed",
    impact: [
      "320% Increase in Active Daily Financial Operations",
      "45ms Average Global Latency Across 14 Markets",
      "$4.2 Billion Processed Transaction Volume",
      "100/100 Core Web Vitals & Lighthouse Score",
    ],
    tags: ["Next.js 16", "TypeScript", "GraphQL", "Tailwind CSS", "Edge CDN"],
    architecture: [
      "Next.js App Router & Server Components",
      "Type-Safe TypeScript & GraphQL Gateway",
      "Serverless Edge Deployment (Vercel & AWS)",
      "Real-Time WebSocket Liquidity Feeds",
    ],
  },
  {
    id: "nordic-crafts-wordpress",
    index: "02",
    title: "Nordic Living E-Commerce & Custom WordPress",
    category: "WordPress & WooCommerce",
    categorySlug: "wordpress",
    client: "Nordic Living Collective",
    year: "2026",
    image: "/images/ecommerce_store.jpg",
    summary:
      "A lightweight, bespoke WordPress & WooCommerce store featuring customized Gutenberg block patterns, multi-currency checkout, and instant page transitions.",
    challenge:
      "Their previous slow WordPress site suffered from 6-second load times due to 45 bloated plugins, causing a 68% mobile shopping cart abandonment rate.",
    solution:
      "We rebuilt the entire store from scratch with a custom lightweight PHP/Tailwind theme, reduced plugins to 6 essential modules, and configured server-side Redis object caching.",
    impactMetric: "0.9s Load Time · 240% Sales Surge",
    impact: [
      "Page Load Time Dropped from 6.2s to 0.9s",
      "240% Increase in Mobile Conversion Rates",
      "Zero Cart Abandonment Due to Technical Lag",
      "Client Marketing Team Publishes New Pages in 10 Mins",
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
    id: "zenith-fitness-app",
    index: "03",
    title: "Zenith Pulse: Cross-Platform Fitness App",
    category: "Mobile App Development",
    categorySlug: "mobile",
    client: "Zenith Health Technologies",
    year: "2026",
    image: "/images/mobile_app.jpg",
    summary:
      "A React Native mobile application for iOS and Android featuring offline workout tracking, Bluetooth heart-rate sensor sync, and animated workout guides.",
    challenge:
      "The client needed to launch on both the Apple App Store and Google Play simultaneously with a limited 10-week runway and full offline functionality in gyms without WiFi.",
    solution:
      "We utilized React Native with Expo and WatermelonDB for local offline-first SQLite synchronization, achieving 60fps animations and instant device sensor pairing.",
    impactMetric: "120K+ Downloads · 4.9★ App Store Rating",
    impact: [
      "120,000+ Active Mobile Downloads in 90 Days",
      "4.9 / 5.0 Rating on Apple App Store & Google Play",
      "100% Offline Workout Reliability",
      "Featured by Apple in 'Health & Fitness Apps of the Week'",
    ],
    tags: ["React Native", "Expo", "iOS & Android", "WatermelonDB", "Bluetooth Low Energy"],
    architecture: [
      "React Native Cross-Platform Engine",
      "WatermelonDB SQLite Offline Storage",
      "Apple HealthKit & Google Fit Sync",
      "Supabase Cloud Auth & Edge Functions",
    ],
  },
  {
    id: "viral-social-motion-campaign",
    index: "04",
    title: "OmniGrowth: Viral Social & Motion Video Campaign",
    category: "Social Media & Video Production",
    categorySlug: "social-video",
    client: "Velocity D2C Beverages",
    year: "2026",
    image: "/images/social_creatives.jpg",
    summary:
      "A complete social media creative rollout featuring 24 swipeable Instagram carousels, 18 high-retention 3D Reels/Shorts, and high-CTR Meta ad creatives.",
    challenge:
      "The client was launching a new organic energy drink into a crowded market and needed immediate brand virality and high ROAS for paid Meta campaigns.",
    solution:
      "We produced high-energy 3D product motion graphics, fast-paced vertical video edits with kinetic typography, and multi-slide carousels explaining the beverage science.",
    impactMetric: "4.8M Video Views · 4.2x Meta Ad ROAS",
    impact: [
      "4.8 Million Organic Views Across Instagram Reels & TikTok",
      "4.2x Return on Ad Spend (ROAS) on Meta Paid Campaigns",
      "45,000+ New Instagram Followers in 30 Days",
      "First Product Inventory Run Sold Out in 72 Hours",
    ],
    tags: ["After Effects", "Premiere Pro", "Blender 3D", "Instagram Reels", "Meta Ads"],
    architecture: [
      "Adobe After Effects 3D Can Renderings",
      "Kinetic Typography & Custom Sound Design",
      "9:16 Vertical Video Native Formatting",
      "Multi-Slide Figma Educational Carousels",
    ],
  },
];
