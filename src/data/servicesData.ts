import {
  Globe,
  Code2,
  Layout,
  Smartphone,
  Search,
  Share2,
  Video,
  Palette,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  BarChart3,
  Film,
  PenTool,
  CheckCircle2,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: "development" | "marketing" | "mobile" | "creative" | "branding";
  badge: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  timeline: string;
  startingPrice: string;
  deliverables: string[];
  keyHighlights: { title: string; desc: string }[];
  toolsAndTech: { name: string; category: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  subServices: { title: string; desc: string; icon: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Custom Full-Stack Web Development",
    shortTitle: "Custom Web Apps",
    tagline: "Ultra-fast, scalable web applications engineered with Next.js, React, and TypeScript.",
    category: "development",
    badge: "ENTERPRISE GRADE",
    iconName: "Code2",
    shortDesc:
      "Bespoke, high-performance web applications, SaaS platforms, and digital portals built from scratch with zero template bloat.",
    fullDesc:
      "We engineer custom digital flagships and full-stack web platforms tailored to your precise business logic. Utilizing Next.js 16, React 19, TypeScript, and serverless architectures, we build web solutions that achieve sub-second load times, infinite horizontal scalability, and bank-grade security.",
    timeline: "3 – 8 Weeks",
    startingPrice: "$2,499",
    deliverables: [
      "Custom Full-Stack Next.js / React Architecture",
      "Tailwind CSS & Framer Motion Micro-Interactions",
      "REST & GraphQL API Endpoints + Database Setup",
      "100/100 Core Web Vitals & Lighthouse Scores",
      "Role-Based Authentication (NextAuth, Supabase, Clerk)",
      "Automated CI/CD Pipeline & Edge Global Hosting",
    ],
    keyHighlights: [
      {
        title: "Sub-Second Global Speeds",
        desc: "Edge-rendered and statically generated pages delivering instant page transitions worldwide.",
      },
      {
        title: "Zero Template Bloat",
        desc: "100% clean, modular code structured for maintainability and high developer velocity.",
      },
      {
        title: "Built-In SEO & Security",
        desc: "Structured schema metadata, OpenGraph tags, SSL encryption, and OWASP compliance.",
      },
      {
        title: "Complete Code Ownership",
        desc: "Full Git repository handover with clean documentation and zero vendor lock-in.",
      },
    ],
    toolsAndTech: [
      { name: "Next.js 16 (App Router)", category: "Framework" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS v4", category: "Styling" },
      { name: "Node.js & Express", category: "Backend" },
      { name: "PostgreSQL & Prisma", category: "Database" },
      { name: "Vercel / AWS", category: "Deployment" },
      { name: "Framer Motion", category: "Kinetic UI" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Architecture & System Design",
        desc: "We define data models, user flows, tech stack parameters, and API contracts before coding.",
      },
      {
        step: "02",
        title: "Interactive UI/UX Prototyping",
        desc: "High-fidelity Figma prototypes designed to convert visitors and provide effortless navigation.",
      },
      {
        step: "03",
        title: "Full-Stack Agile Sprint",
        desc: "Rapid iterative coding with bi-weekly staging builds, automated testing, and code reviews.",
      },
      {
        step: "04",
        title: "Lighthouse Optimization & Launch",
        desc: "Rigorous performance tuning, security audits, SEO checks, and seamless production deployment.",
      },
    ],
    subServices: [
      {
        title: "Custom SaaS & Web Portals",
        desc: "Multi-tenant dashboards, subscription billing, analytics charts, and user management.",
        icon: "Layers",
      },
      {
        title: "Enterprise Corporate Websites",
        desc: "Stunning brand websites with dynamic CMS, interactive 3D elements, and lead capture funnels.",
        icon: "Globe",
      },
      {
        title: "High-Converting Landing Pages",
        desc: "Conversion-rate optimized landing pages with A/B testing infrastructure and instant loading.",
        icon: "Zap",
      },
      {
        title: "API Development & Third-Party Integrations",
        desc: "Stripe, CRMs, Zapier, Webhooks, AI LLM endpoints, and custom backend microservices.",
        icon: "Cpu",
      },
    ],
    faqs: [
      {
        question: "Why choose custom web development over WordPress or website builders?",
        answer:
          "Custom web development gives you 100% control over design, speed, and business logic. It provides unparalleled performance (sub-second loading), military-grade security without vulnerable plugins, and infinite scalability as your traffic expands.",
      },
      {
        question: "Do you provide source code and hosting setup?",
        answer:
          "Yes! You receive full ownership of the GitHub repository, clean TypeScript code, and complete deployment on your preferred cloud provider (Vercel, AWS, Cloudflare, etc.).",
      },
      {
        question: "How do you ensure the website is mobile-responsive?",
        answer:
          "We adopt a mobile-first philosophy, testing on real physical iOS and Android devices across multiple viewport sizes and orientations to ensure flawless responsiveness.",
      },
    ],
  },
  {
    slug: "wordpress-cms",
    title: "WordPress & Theme-Based Website Development",
    shortTitle: "WordPress & CMS",
    tagline: "Custom theme creation, Elementor/Gutenberg mastery, WooCommerce, and speed-optimized CMS setups.",
    category: "development",
    badge: "EASY TO MANAGE",
    iconName: "Globe",
    shortDesc:
      "Powerful, user-friendly WordPress & CMS websites that give your team total control to edit text, images, and blog posts without touching code.",
    fullDesc:
      "Need a website your marketing team can update in seconds? We build custom WordPress themes, bespoke WooCommerce stores, and Webflow/Shopify platforms that blend visual elegance with lightweight performance. We avoid bloated plugin stacks, ensuring your WordPress site loads lightning-fast and stays secure.",
    timeline: "2 – 4 Weeks",
    startingPrice: "$1,299",
    deliverables: [
      "Custom WordPress / WooCommerce Theme Development",
      "Full Visual Editor Integration (Elementor Pro / Gutenberg Blocks)",
      "Speed Optimization & Plugin Sanitization (<1.5s Load Time)",
      "Mobile-First Responsive Layouts across all screen sizes",
      "Automated Daily Cloud Backups & Firewall Security",
      "Comprehensive 1-on-1 Video Training for Your Team",
    ],
    keyHighlights: [
      {
        title: "Effortless Content Management",
        desc: "Visual drag-and-drop editors custom-configured so anyone on your team can edit pages effortlessly.",
      },
      {
        title: "Bloat-Free Performance",
        desc: "We write clean PHP/CSS and minimize plugin dependencies to guarantee fast loading speeds.",
      },
      {
        title: "E-Commerce Ready (WooCommerce/Shopify)",
        desc: "Payment gateways (Stripe, PayPal, UPI, Razorpay), inventory sync, automated tax and shipping.",
      },
      {
        title: "Bulletproof Security Protocols",
        desc: "Login protection, Web Application Firewalls (WAF), SSL, and automated malware monitoring.",
      },
    ],
    toolsAndTech: [
      { name: "WordPress Core (Latest)", category: "CMS" },
      { name: "WooCommerce", category: "E-Commerce" },
      { name: "Elementor Pro & Gutenberg", category: "Page Builders" },
      { name: "Custom PHP / CSS3", category: "Custom Themes" },
      { name: "Shopify / Liquid", category: "E-Commerce" },
      { name: "Webflow", category: "No-Code CMS" },
      { name: "WP Rocket & Redis Cache", category: "Speed Optimization" },
      { name: "Cloudflare CDN", category: "Security" },
    ],
    processSteps: [
      {
        step: "01",
        title: "CMS Strategy & Theme Selection",
        desc: "We choose whether a custom ground-up theme or customized premium framework fits your goals best.",
      },
      {
        step: "02",
        title: "Visual Design & Custom Styling",
        desc: "We tailor colors, typography, layout blocks, and brand assets to create a distinct, modern identity.",
      },
      {
        step: "03",
        title: "E-Commerce, Forms & Integrations",
        desc: "Integration of payment gateways, CRM forms, WhatsApp widgets, newsletters, and analytics.",
      },
      {
        step: "04",
        title: "Speed Tuning & Client Handoff",
        desc: "Caching configuration, asset minification, security lockdown, and video training session.",
      },
    ],
    subServices: [
      {
        title: "Bespoke WordPress Themes",
        desc: "Tailored themes built specifically for your brand without generic template restrictions.",
        icon: "Palette",
      },
      {
        title: "WooCommerce & E-Commerce Stores",
        desc: "High-converting online shops with seamless checkout, product filters, and payment gateways.",
        icon: "Layers",
      },
      {
        title: "WordPress Speed & Security Overhaul",
        desc: "Fix slow-loading existing sites, remove malware, configure caching, and optimize databases.",
        icon: "Zap",
      },
      {
        title: "Shopify & Webflow Builds",
        desc: "Alternative no-code/low-code CMS platforms customized for modern direct-to-consumer brands.",
        icon: "Globe",
      },
    ],
    faqs: [
      {
        question: "Can I easily update text and products by myself after launch?",
        answer:
          "Yes, absolutely! We configure the WordPress backend with intuitive custom fields and visual drag-and-drop blocks. Plus, we record a personalized video tutorial walking you through every part of your admin dashboard.",
      },
      {
        question: "Is WordPress safe from hackers?",
        answer:
          "When configured by professionals who limit third-party plugins, enforce strong authentication, and install enterprise firewall rules, WordPress is extraordinarily secure and powers over 40% of the internet.",
      },
      {
        question: "Do you migrate existing websites to WordPress?",
        answer:
          "Yes! We handle seamless migrations from Wix, Squarespace, custom HTML, or older versions of WordPress with zero data loss and 301 redirects to preserve your SEO rankings.",
      },
    ],
  },
  {
    slug: "seo-optimization",
    title: "SEO & Search Engine Performance",
    shortTitle: "SEO & Growth",
    tagline: "Dominate Google search results with technical SEO, keyword dominance, and high-intent organic traffic.",
    category: "marketing",
    badge: "RANK #1 ON GOOGLE",
    iconName: "Search",
    shortDesc:
      "Data-driven technical SEO, on-page optimization, keyword architecture, and content strategies engineered to rank your website at the top of Google.",
    fullDesc:
      "A beautiful website is useless if your target customers can't find it. Our full-funnel SEO services combine deep technical site audits, semantic keyword mapping, schema markup, competitor intelligence, and high-authority link-building strategies to drive qualified organic traffic that converts into paying customers.",
    timeline: "Ongoing (1 – 3 Month Milestones)",
    startingPrice: "$799 / mo",
    deliverables: [
      "Comprehensive 120-Point Technical SEO Audit",
      "High-Intent Commercial Keyword Research & Mapping",
      "On-Page SEO Optimization (Meta, H1-H6, Alt Tags, URLs)",
      "JSON-LD Schema Markup (Organization, FAQ, LocalBusiness, Product)",
      "Core Web Vitals & Speed Optimization (Sub-1s LCP & FID)",
      "Google Search Console & GA4 Setup with Custom Monthly Dashboards",
    ],
    keyHighlights: [
      {
        title: "Technical Excellence",
        desc: "We fix crawl errors, canonical loops, broken internal links, and indexation bottlenecks.",
      },
      {
        title: "High-Intent Buyer Keywords",
        desc: "We target keywords with high commercial intent that drive real leads and sales, not vanity clicks.",
      },
      {
        title: "Local SEO & Google Maps Mastery",
        desc: "Google Business Profile optimization, local citations, and geo-targeted landing pages.",
      },
      {
        title: "Transparent Monthly Reporting",
        desc: "Live Looker Studio dashboards tracking keyword ranking shifts, organic impressions, and conversions.",
      },
    ],
    toolsAndTech: [
      { name: "SEMrush & Ahrefs", category: "Keyword Research" },
      { name: "Google Search Console", category: "Indexation" },
      { name: "Google Analytics 4 (GA4)", category: "Traffic Tracking" },
      { name: "Screaming Frog SEO Spider", category: "Technical Crawling" },
      { name: "Schema.org & JSON-LD", category: "Rich Snippets" },
      { name: "PageSpeed Insights", category: "Core Web Vitals" },
      { name: "SurferSEO", category: "Content Optimization" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Audit & Competitor Forensics",
        desc: "Deep crawl of your website and top 5 search competitors to identify keyword gaps and quick wins.",
      },
      {
        step: "02",
        title: "Technical SEO Fixes",
        desc: "Resolution of sitemaps, robots.txt, canonicalization, mobile usability, and load speeds.",
      },
      {
        step: "03",
        title: "On-Page & Semantic Content Tuning",
        desc: "Rewriting titles, header hierarchy, internal linking structure, and adding rich snippet markup.",
      },
      {
        step: "04",
        title: "Authority Building & Monthly Growth",
        desc: "High-quality backlink outreach, content publishing, and bi-weekly ranking tracking.",
      },
    ],
    subServices: [
      {
        title: "Technical SEO & Speed Audits",
        desc: "Fixing crawl budgets, render-blocking scripts, and server response times for maximum indexation.",
        icon: "Cpu",
      },
      {
        title: "Local SEO & Google Maps Optimization",
        desc: "Dominate local search in your city/region with Google Business Profile ranking strategies.",
        icon: "TrendingUp",
      },
      {
        title: "E-Commerce SEO",
        desc: "Category page optimization, product schema, faceted navigation indexing, and review snippets.",
        icon: "Layers",
      },
      {
        title: "International & Multi-Language SEO",
        desc: "Hreflang implementation, ccTLD/subfolder strategies for brands targeting global markets.",
        icon: "Globe",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "While technical fixes and low-competition keyword wins can produce ranking spikes within 3 to 6 weeks, competitive commercial keywords typically achieve top-tier Google rankings between 3 to 6 months of consistent optimization.",
      },
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer:
          "No ethical agency can guarantee an exact #1 ranking because Google's algorithm evaluates hundreds of live factors. However, our proven data-driven framework has consistently boosted organic traffic by 150%–400% across our portfolio.",
      },
      {
        question: "Do I get monthly reports on keyword rankings?",
        answer:
          "Yes! You receive access to a 24/7 live Looker Studio dashboard showing keyword positions, impressions, clicks, click-through rates, and lead conversions.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development (iOS & Android)",
    shortTitle: "Mobile Apps",
    tagline: "Cross-platform and native mobile apps built with React Native and Flutter for seamless mobile experiences.",
    category: "mobile",
    badge: "IOS & ANDROID",
    iconName: "Smartphone",
    shortDesc:
      "Stunning, high-performance mobile applications published on Apple App Store & Google Play with offline sync, push notifications, and biometric auth.",
    fullDesc:
      "Transform your product idea into a top-rated mobile application. We build cross-platform mobile apps using React Native and Flutter, allowing you to launch on both iOS and Android simultaneously with a unified, cost-effective codebase that feels 100% native.",
    timeline: "6 – 12 Weeks",
    startingPrice: "$3,999",
    deliverables: [
      "iOS (Apple App Store) & Android (Google Play) Production Apps",
      "Unified React Native / Flutter Codebase for maximum cost efficiency",
      "Custom Backend API & Firebase / Supabase Cloud Database",
      "Push Notifications (OneSignal/Firebase), Deep Linking & Offline Storage",
      "Biometric Authentication (FaceID, TouchID, Fingerprint)",
      "App Store & Play Store Submission & Compliance Guarantee",
    ],
    keyHighlights: [
      {
        title: "Single Codebase, Double Reach",
        desc: "Save 50% on development and maintenance costs by shipping to iOS and Android simultaneously.",
      },
      {
        title: "60fps Native UI Performance",
        desc: "Smooth kinetic gestures, native device APIs (camera, GPS, accelerometer, haptics).",
      },
      {
        title: "Offline-First Data Sync",
        desc: "Users can access and interact with data even without internet connectivity; syncs automatically.",
      },
      {
        title: "End-to-End Store Approval",
        desc: "We manage all privacy policies, screenshot assets, review guidelines, and app submission.",
      },
    ],
    toolsAndTech: [
      { name: "React Native (Expo)", category: "Cross-Platform" },
      { name: "Flutter & Dart", category: "Cross-Platform" },
      { name: "Swift & Kotlin", category: "Native Bridges" },
      { name: "Firebase & Supabase", category: "Backend & Auth" },
      { name: "Node.js API", category: "Cloud Backend" },
      { name: "Redux Toolkit / Zustand", category: "State Management" },
      { name: "Apple TestFlight", category: "Beta Testing" },
    ],
    processSteps: [
      {
        step: "01",
        title: "App Wireframing & User Journey",
        desc: "Mapping out mobile user screen transitions, touch targets, and onboarding flows.",
      },
      {
        step: "02",
        title: "High-Fidelity Mobile UI in Figma",
        desc: "Pixel-perfect mobile design according to Apple Human Interface & Google Material 3 guidelines.",
      },
      {
        step: "03",
        title: "Cross-Platform Mobile Coding",
        desc: "Building components, integrating APIs, local database caching, and device sensors.",
      },
      {
        step: "04",
        title: "TestFlight Beta & Store Launch",
        desc: "Rigorous testing on physical devices, crash-reporting integration, and App Store approval.",
      },
    ],
    subServices: [
      {
        title: "Consumer Mobile Apps",
        desc: "Social apps, fitness trackers, booking engines, loyalty rewards, and subscription apps.",
        icon: "Smartphone",
      },
      {
        title: "Enterprise & Business Apps",
        desc: "Internal employee tools, inventory scanners, field agent dashboards, and CRM companions.",
        icon: "Layers",
      },
      {
        title: "E-Commerce Mobile Shopping Apps",
        desc: "Instant Apple Pay/Google Pay checkouts, push notification sales drops, and AR previews.",
        icon: "Zap",
      },
      {
        title: "App Maintenance & OS Upgrades",
        desc: "Continuous updates for new iOS and Android releases, bug fixes, and feature expansions.",
        icon: "Cpu",
      },
    ],
    faqs: [
      {
        question: "Should I build native apps or use React Native / Flutter?",
        answer:
          "React Native and Flutter have evolved to deliver 60fps performance indistinguishable from pure native apps, while cutting development time and budget in half by using a single shared codebase for both iOS and Android.",
      },
      {
        question: "Do you assist with getting approved on the App Store and Google Play?",
        answer:
          "Yes! We handle the entire submission process, including metadata, screenshots, privacy declarations, and developer account setup, ensuring 100% compliance with store policies.",
      },
      {
        question: "Can the app work without internet connection?",
        answer:
          "Yes, we can architect local SQLite or WatermelonDB caching so users can browse, save drafts, and view content offline, syncing up seamlessly as soon as connection is restored.",
      },
    ],
  },
  {
    slug: "social-media-design",
    title: "Social Media Post Development & Creative Strategy",
    shortTitle: "Social Media Posts",
    tagline: "High-converting carousels, engaging Instagram/LinkedIn posts, viral formats, and ad creatives.",
    category: "creative",
    badge: "MAX VIRALITY & ENGAGEMENT",
    iconName: "Share2",
    shortDesc:
      "Scroll-stopping visual assets, multi-slide educational carousels, viral ad creatives, and branded social media design kits built to grow your followers and convert leads.",
    fullDesc:
      "Stand out in noisy social feeds with magnetic creative design. We produce premium, high-retention social media assets tailored for Instagram, LinkedIn, X (Twitter), Facebook, and Pinterest. From multi-slide educational carousels and infographic posts to Meta ad creative campaigns, we deliver assets that stop the scroll and build brand loyalty.",
    timeline: "Monthly Retainer / 3 – 5 Days Turnaround",
    startingPrice: "$599 / mo",
    deliverables: [
      "Custom Branded Social Media Post Templates (Figma & Photoshop)",
      "High-Engagement Multi-Slide Carousels (Instagram & LinkedIn PDF)",
      "High-CTR Meta / Google / Twitter Paid Ad Creatives",
      "Instagram Stories, Highlights, Banner Artwork & Profile Kits",
      "Full Monthly Content Calendar Planning & Copywriting Suggestions",
      "Source Files (Figma / PSD) + Exported WebP/PNG formats",
    ],
    keyHighlights: [
      {
        title: "Scroll-Stopping Visuals",
        desc: "Dynamic color psychology, bold typography, and visual hierarchy optimized for mobile feeds.",
      },
      {
        title: "Educational Carousel Mastery",
        desc: "Step-by-step swipeable slides designed to maximize saves, shares, and algorithm reach.",
      },
      {
        title: "Ad Creative Optimization",
        desc: "A/B testing visual variants designed specifically to lower Cost Per Click (CPC) and boost ROAS.",
      },
      {
        title: "Consistent Brand Visual Kit",
        desc: "Cohesive aesthetic guidelines across all platforms so your company is instantly recognizable.",
      },
    ],
    toolsAndTech: [
      { name: "Figma", category: "Social Design" },
      { name: "Adobe Photoshop", category: "Raster Editing" },
      { name: "Adobe Illustrator", category: "Vector Graphics" },
      { name: "Canva Enterprise", category: "Client Templates" },
      { name: "Meta Ads Manager Specs", category: "Ad Formats" },
      { name: "Midjourney & Generative AI", category: "Concept Art" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Brand Voice & Visual Moodboard",
        desc: "We analyze your audience, target demographics, competitors, and curate visual aesthetic direction.",
      },
      {
        step: "02",
        title: "Content Calendar & Copy Angles",
        desc: "Outlining key themes: thought leadership, product showcases, customer proof, and educational carousels.",
      },
      {
        step: "03",
        title: "Graphic Production & Variants",
        desc: "Designing high-resolution graphics, custom 3D renders, infographics, and typography layouts.",
      },
      {
        step: "04",
        title: "Review & Bulk Delivery",
        desc: "Organized Google Drive / Figma file delivery ready for scheduling and ad campaigns.",
      },
    ],
    subServices: [
      {
        title: "LinkedIn & Instagram Carousels",
        desc: "Swipeable micro-content that drives massive algorithmic distribution and industry authority.",
        icon: "Layers",
      },
      {
        title: "Paid Social Ad Creatives",
        desc: "Direct-response static and dynamic ad graphics designed to convert cold traffic into buyers.",
        icon: "TrendingUp",
      },
      {
        title: "Social Branding & Profile Overhauls",
        desc: "Banners, avatars, highlight covers, and bio design to make your profiles look enterprise-level.",
        icon: "Palette",
      },
      {
        title: "Monthly Content Retainers",
        desc: "15 to 30 custom graphics produced and delivered every month on a predictable schedule.",
        icon: "Sparkles",
      },
    ],
    faqs: [
      {
        question: "Do you write the captions and text for the posts too?",
        answer:
          "Yes! We provide complete post copy, headlines, hooks, and hashtags alongside every graphic so your team can post immediately without writing from scratch.",
      },
      {
        question: "Can I get editable templates in Figma or Canva?",
        answer:
          "Yes! We deliver fully editable Figma components and Canva master templates, allowing your in-house team to create quick updates anytime.",
      },
      {
        question: "How many graphics do you produce per month in retainers?",
        answer:
          "We offer flexible packages ranging from 12 posts/month (3 per week) up to 30 posts/month (daily posting), customized to your brand's growth goals.",
      },
    ],
  },
  {
    slug: "video-production-motion",
    title: "Video Production, Reels & Motion Graphics",
    shortTitle: "Videos & Motion",
    tagline: "High-retention video editing, Reels/Shorts, 2D/3D motion graphics, and animated product explainers.",
    category: "creative",
    badge: "HIGH-RETENTION VIDEO",
    iconName: "Video",
    shortDesc:
      "Dynamic video editing, viral YouTube Shorts & Instagram Reels, 3D product animations, and cinematic motion graphics that capture attention within the first 3 seconds.",
    fullDesc:
      "Video is the #1 driving force behind modern online growth. We produce studio-grade motion graphics, 2D/3D explainer videos, logo animations, and high-retention short-form video edits (Reels, TikTok, Shorts). With dynamic sound design, kinetic typography, and fast-paced visual storytelling, our videos keep viewers hooked until the final call to action.",
    timeline: "3 – 10 Days per Video Project",
    startingPrice: "$499 / video",
    deliverables: [
      "Custom 2D/3D Motion Graphics & Explainer Video Production",
      "High-Retention Reels, TikTok & YouTube Shorts Video Editing",
      "Kinetic Typography, Subtitles, B-Roll, Zoom Cuts & VFX",
      "Professional Sound Design, SFX, Audio Mixing & Royalty-Free Music",
      "Logo Stingers, Intros & Outros in 4K resolution",
      "Multi-Aspect Ratio Exports (9:16 Vertical, 16:9 Landscape, 1:1 Square)",
    ],
    keyHighlights: [
      {
        title: "3-Second Hook Retention",
        desc: "Engineered intros and pattern interrupts designed to maximize viewer watch time.",
      },
      {
        title: "2D & 3D Motion Graphics",
        desc: "Custom vector animations, UI walkthrough animations, and 3D product showcases.",
      },
      {
        title: "Immersive Sound Design",
        desc: "Layered whooshes, risers, pop-up SFX, and balanced background tracks.",
      },
      {
        title: "Full 4K Ultra-HD Delivery",
        desc: "Crystal-clear rendering ready for YouTube, paid ads, billboards, and mobile platforms.",
      },
    ],
    toolsAndTech: [
      { name: "Adobe Premiere Pro", category: "Video Editing" },
      { name: "Adobe After Effects", category: "Motion Graphics & VFX" },
      { name: "Blender & Cinema 4D", category: "3D Motion" },
      { name: "DaVinci Resolve", category: "Color Grading" },
      { name: "CapCut Pro Enterprise", category: "Short-Form Edits" },
      { name: "Audition & ElevenLabs", category: "Audio & Voiceover" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Scriptwriting & Storyboarding",
        desc: "Crafting a compelling hook, narrative arc, visual cues, and clear call-to-action.",
      },
      {
        step: "02",
        title: "Rough Cut & Pacing Review",
        desc: "Assembling footage, dialogue sync, removing dead air, and perfecting the rhythm.",
      },
      {
        step: "03",
        title: "Motion Graphics, VFX & SFX",
        desc: "Adding animated text, overlays, stock B-roll, custom animations, and sound effects.",
      },
      {
        step: "04",
        title: "Color Grading & Multi-Format Render",
        desc: "Cinematic color enhancement, audio mastering, and exports in 9:16, 16:9, and 1:1 formats.",
      },
    ],
    subServices: [
      {
        title: "Reels, Shorts & TikTok Video Packages",
        desc: "Bulk editing of raw talking-head videos into high-energy viral clips with dynamic captions.",
        icon: "Film",
      },
      {
        title: "2D/3D Animated Explainer Videos",
        desc: "Explain complex software, fintech, or products in 60 seconds with captivating animations.",
        icon: "Video",
      },
      {
        title: "Brand Logo Stingers & YouTube Intros",
        desc: "Cinematic motion logo reveals that give your brand instant authority on every video.",
        icon: "Sparkles",
      },
      {
        title: "Video Ads for Meta & YouTube",
        desc: "Direct-response video commercials tested to maximize click-throughs and conversions.",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "Can I just send raw footage from my phone for you to edit?",
        answer:
          "Yes! Most of our short-form clients record raw video on their iPhone or camera and upload it to a shared folder. We handle all editing, sound design, motion graphics, and subtitles.",
      },
      {
        question: "Do you supply professional voiceovers and background music?",
        answer:
          "Yes, we include licensed royalty-free music and can provide studio voiceovers in multiple accents and languages.",
      },
      {
        question: "What is the turnaround time for a batch of Reels/Shorts?",
        answer:
          "A batch of 5 to 10 short-form video edits typically delivers within 48 to 72 hours.",
      },
    ],
  },
  {
    slug: "graphic-design-branding",
    title: "Graphic Design & Complete Brand Identity Systems",
    shortTitle: "Graphics & Branding",
    tagline: "Logo design, comprehensive brand guidelines, UI design systems, vector art, and marketing collateral.",
    category: "branding",
    badge: "MEMORABLE BRAND IDENTITY",
    iconName: "Palette",
    shortDesc:
      "End-to-end visual identities: iconic logos, color systems, typography rules, brand guideline books, vector illustrations, packaging, and marketing collateral.",
    fullDesc:
      "A great brand is unforgettable. We design timeless visual identities and comprehensive graphic design systems that make your business instantly recognizable and authoritative. From luxury logo suites and Figma design systems to pitch decks, packaging, vector illustrations, and print collateral, we craft every pixel with human artistic precision.",
    timeline: "2 – 4 Weeks",
    startingPrice: "$1,499",
    deliverables: [
      "Master Logo Suite (Primary, Secondary, Monogram, Favicon in Vector/SVG/PNG)",
      "Comprehensive Brand Guideline Book (Typography, Color Palette, Spacing Rules)",
      "Figma UI Component & Design System Library",
      "Vector Illustrations, Custom Iconography & 3D Assets",
      "Marketing Collateral: Business Cards, Letterheads, Pitch Decks, Brochures",
      "Print-Ready & Digital Packaging / Merchandise Mockups",
    ],
    keyHighlights: [
      {
        title: "100% Vector & Scalable",
        desc: "All logos and illustrations are vector-based, scaling flawlessly from a favicon to a highway billboard.",
      },
      {
        title: "Human-Crafted Artistry",
        desc: "Original custom typography, balance, and thoughtful symbolism crafted by expert senior designers.",
      },
      {
        title: "Comprehensive Style Guides",
        desc: "Clear documentation so any internal team member or contractor stays 100% on-brand.",
      },
      {
        title: "Digital & Print Ready",
        desc: "Delivered in CMYK for print and RGB/Hex for digital screens with full commercial rights.",
      },
    ],
    toolsAndTech: [
      { name: "Adobe Illustrator", category: "Vector Logos" },
      { name: "Figma", category: "UI Design Systems" },
      { name: "Adobe Photoshop", category: "Mockups & Textures" },
      { name: "Adobe InDesign", category: "Editorial & Print" },
      { name: "Blender 3D", category: "3D Brand Elements" },
    ],
    processSteps: [
      {
        step: "01",
        title: "Brand Discovery & Moodboarding",
        desc: "Defining your core values, competitor positioning, target aesthetic, and visual benchmarks.",
      },
      {
        step: "02",
        title: "Logo Concept Exploration",
        desc: "Presenting 3 distinct visual directions with real-world mockup contexts (signage, digital, packaging).",
      },
      {
        step: "03",
        title: "Refinement & Brand System",
        desc: "Fine-tuning selected direction, creating color palettes, typography pairings, and icon sets.",
      },
      {
        step: "04",
        title: "Brand Book & Asset Package Delivery",
        desc: "Final packaging of all vector source files, style guide PDF, Figma library, and print files.",
      },
    ],
    subServices: [
      {
        title: "Complete Logo & Visual Identity Design",
        desc: "Iconic logos, lockups, color palettes, and typography rules built for long-term recognition.",
        icon: "PenTool",
      },
      {
        title: "Figma UI/UX Design Systems",
        desc: "Atomic design tokens, buttons, form elements, and components ready for development handover.",
        icon: "Layout",
      },
      {
        title: "Investor Pitch Decks & Presentations",
        desc: "Persuasive, beautifully designed slides in Keynote, PowerPoint, and Figma that win funding.",
        icon: "Layers",
      },
      {
        title: "Print & Packaging Design",
        desc: "Box packaging, labels, brochures, flyers, trade show banners, and business stationery.",
        icon: "Palette",
      },
    ],
    faqs: [
      {
        question: "Do I get full commercial copyright ownership of the designs?",
        answer:
          "Yes! Once final payment is made, 100% of intellectual property and commercial copyright ownership is transferred to you.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "You will receive editable vector files (.AI, .EPS, .SVG, .FIG), high-resolution raster files (.PNG transparent, .JPG, .WebP), and print-ready PDF files with color profiles.",
      },
      {
        question: "How many logo concepts do you present initially?",
        answer:
          "We typically present 3 to 4 distinct conceptual directions, each placed in realistic mockups, and then refine your chosen concept through collaborative feedback rounds.",
      },
    ],
  },
];
