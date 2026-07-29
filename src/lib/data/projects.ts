import type { Project } from '@/lib/types/projects';

/**
 * Production applications shipped by the InitDev studio.
 *
 * Flagships (flagship: true) get the full case-study treatment on /cases,
 * including the engineering panel. All engineering claims are factual to the
 * repositories — commit counts, route counts, and architecture are real.
 */
export const projects: Project[] = [
  {
    slug: 'dyia',
    name: 'Dyia',
    url: 'https://dyia.io',
    domain: 'dyia.io',
    tagline: 'An AI business operating system for the trades.',
    summary:
      'A profit-tracking and operations platform for service businesses — junk removal, lawn care, cleaning, and moving crews. Owner-operators log jobs in seconds and finally see real take-home pay, not just revenue.',
    built: [
      'Real-profit job tracking with multi-customer expense splitting',
      'Branded PDF quote builder with photo attachments and follow-ups',
      'Customer CRM, follow-up Kanban pipeline, and tax set-aside',
      'Card payments and invoicing via Stripe ("Dyia Pay")',
      'Natural-language AI assistant for logging, pricing, and forecasting',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Anthropic', 'Sentry'],
    categories: ['SaaS', 'AI', 'Payments'],
    image: '/images/work/dyia.jpg',
    accent: 'from-blue-500/20 to-emerald-500/20',
    featured: true,
    flagship: true,
    engineering: {
      role: 'Primary engineer — ~82% of all commits',
      status: 'Live in production, paying subscribers',
      scale: [
        { value: '229', label: 'commits' },
        { value: '5+', label: 'documented QA rounds per release' },
        { value: '2-tier', label: 'Stripe subscriptions live' },
      ],
      highlights: [
        'Stripe Basic/Pro subscriptions end-to-end: checkout, customer portal, signed webhooks, idempotent grant processing',
        'Anthropic-powered business intelligence over live job and profit data',
        'Sentry edge + server monitoring wired before launch, not after the first incident',
        'Google Maps routing integrated into crew scheduling and job flows',
      ],
    },
  },
  {
    slug: 'drip',
    name: 'Drip',
    url: 'https://drip.love',
    domain: 'drip.love',
    tagline: 'A relationship-wellness companion.',
    summary:
      'A privacy-first relationship-wellness app that gives each partner a private space that evolves with the relationship. Gentle, well-timed nudges keep what matters present — without pressure.',
    built: [
      'Private solo and paired companion experiences',
      'Invitation flow that keeps each partner\u2019s space separate',
      'Check-in and nudge engine for low-pressure connection',
      'Privacy-first architecture with SSL and 256-bit encryption',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Pinecone', 'OpenAI', 'Stripe'],
    categories: ['Consumer', 'Mobile', 'AI'],
    image: '/images/work/drip.jpg',
    accent: 'from-pink-500/20 to-blue-500/20',
    featured: true,
    flagship: true,
    engineering: {
      role: 'Sole engineer — every commit, 7.5 months',
      status: 'Investor-demo ready',
      scale: [
        { value: '528', label: 'commits' },
        { value: '98', label: 'API routes' },
        { value: '38', label: 'database migrations' },
      ],
      highlights: [
        'Privacy enforced at three layers — data model, vector retrieval, and AI prompt — so neither partner can ever see the other\u2019s private memories',
        'Dual-store memory (Supabase + Pinecone) with cross-store consistency; vector writes roll back on SQL failure',
        'OpenAI structured-output engine: strict JSON schema, 3-attempt retry/backoff, conversation chaining',
        'Human-in-the-loop operator console with a draft → approve → send state machine — no AI message reaches a user without human approval',
      ],
    },
  },
  {
    slug: 'aiblueprint',
    name: 'AI Blueprint',
    url: 'https://aiblueprintrt.com',
    domain: 'aiblueprintrt.com',
    tagline: 'Your avatar. Infinite content.',
    summary:
      'An AI creative suite that generates product photos, branded shoots, and AI videos featuring the creator\u2019s own likeness. Six AI-powered studios let e-commerce brands and creators produce 4K content on demand.',
    built: [
      'Six AI-powered creative studios (UGC, product, video, brand)',
      'Personalized avatar generation pipeline with 4K output',
      'Credit-based subscription and billing flow',
      'Conversion-focused marketing and onboarding experience',
    ],
    tech: ['Next.js', 'TypeScript', 'fal.ai', 'Gemini', 'Stripe', 'Supabase'],
    categories: ['AI', 'E-commerce'],
    image: '/images/work/aiblueprint.jpg',
    accent: 'from-fuchsia-500/20 to-blue-500/20',
    featured: true,
    flagship: true,
    engineering: {
      role: 'Primary engineer',
      status: 'Active, revenue-generating',
      scale: [
        { value: '6', label: 'AI studios in one subscription' },
        { value: '4K', label: 'generation output' },
        { value: '0', label: 'double-billing paths by construction' },
      ],
      highlights: [
        'Credit economy with atomic SQL spend and non-negative constraints — a race condition cannot create free generations',
        'Credits-on-hold with automatic refunds when a generation fails, so users never pay for errors',
        'Idempotent Stripe webhooks: replayed or duplicated events cannot double-grant or double-charge',
        'Identity-preserving image generation via fal.ai prompt orchestration, with webhook + polling dual-path delivery so a missed callback never loses a job',
      ],
    },
  },
  {
    slug: 'animalia',
    name: 'Animalia',
    url: 'https://www.animalia.market',
    domain: 'animalia.market',
    tagline: 'For pets who are family.',
    summary:
      'A premium pet-wellness marketplace that pulls 50+ vet-approved brands into one curated storefront — joint support, calming, dental care, and daily nutrition, all organized around each pet\u2019s specific needs.',
    built: [
      'Curated multi-brand catalog organized by pet and by need',
      'Conversion-focused storefront with reviews and trust signals',
      'Cart, checkout, and order flows with free-shipping thresholds',
      'Collections, brand pages, and merchandising for dogs and cats',
    ],
    tech: ['Next.js', 'TypeScript', 'Shopify APIs', 'fal.ai', 'Tailwind'],
    categories: ['Marketplace', 'E-commerce', 'Consumer'],
    image: '/images/work/animalia.jpg',
    accent: 'from-emerald-500/20 to-amber-500/20',
    flagship: true,
    engineering: {
      role: 'Sole engineer',
      status: 'Live storefront',
      scale: [
        { value: '50+', label: 'brands merchandised' },
        { value: '~410', label: 'LOC merchandising engine' },
        { value: '3', label: 'Shopify APIs behind one typed facade' },
      ],
      highlights: [
        'Typed facade over Shopify Storefront, Cart, and Admin APIs — one contract, three upstream systems',
        'Deterministic merchandising engine: safety-filtered ingredient extraction, need-based copy transformation, revenue-weighted ranking',
        'AI product-photography pipeline via fal.ai feeding the storefront',
        'Headless architecture keeps merchandising logic in code, versioned and testable',
      ],
    },
  },
  {
    slug: 'convoai',
    name: 'ConvoAI Studio',
    url: 'https://convoai.studio',
    domain: 'convoai.studio',
    tagline: 'Conversational video, where stories come to life.',
    summary:
      'A studio exploring the frontier of conversational video — photorealistic digital replicas that hold real-time, natural dialogue. Built for filmmakers, artists, and storytellers pushing what narrative can be.',
    built: [
      'Photorealistic digital-replica experiences',
      'Real-time conversational video interactions',
      'Narrative-intelligence layer for character context and memory',
      'Clinical triage pipeline from conversation to delivered report',
    ],
    tech: ['Next.js', 'TypeScript', 'Tavus v2', 'Anthropic Claude', 'react-pdf', 'Resend'],
    categories: ['AI', 'Realtime Video'],
    image: '/images/work/convoai.jpg',
    accent: 'from-purple-500/20 to-blue-500/20',
    flagship: true,
    engineering: {
      role: 'Primary engineer — 42 of 43 commits',
      status: 'Shipped',
      scale: [
        { value: '672', label: 'LOC Tavus API v2 client' },
        { value: '42/43', label: 'commits authored' },
        { value: '2-path', label: 'session completion' },
      ],
      highlights: [
        'Complete Tavus API v2 client for real-time photorealistic conversational video',
        'Clinical pipeline: live video conversation → Claude structured symptom extraction → react-pdf report → email delivery',
        'Dual-path session completion with deduplication — resilient to unreliable webhook delivery',
        'Structured extraction with strict schemas so downstream reports never receive malformed data',
      ],
    },
  },
  {
    slug: 'navigator',
    name: 'AI Navigator',
    url: 'https://navigator.leadingwith.ai',
    domain: 'navigator.leadingwith.ai',
    tagline: 'An enterprise AI-readiness platform.',
    summary:
      'A platform that surfaces the unspoken fears slowing AI adoption inside organizations. Its "Periodic Table of AI Taboos" maps resistance across 25 zones, then guides targeted, science-based interventions.',
    built: [
      'Interactive periodic-table framework mapping 100 AI taboos',
      'Predictive analysis, quick-scan questionnaire, and org assessment flows',
      'Sentiment heatmaps and capability-diamond dual framework',
      'Enterprise security posture: SOC 2, AES-256, GDPR, residency control',
    ],
    tech: ['Next.js', 'TypeScript', 'Data Viz', 'Enterprise Auth'],
    categories: ['Enterprise', 'AI', 'Security'],
    image: '/images/work/navigator.jpg',
    accent: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    slug: 'companychallenges',
    name: 'Company Challenges',
    url: 'https://companychallenges.com',
    domain: 'companychallenges.com',
    tagline: 'Your strategy. Their daily habit.',
    summary:
      'A behavior-change platform that closes the gap between strategy and what people actually do. It blends a digital platform with physical artefacts and live moments to turn change into daily habit.',
    built: [
      'Digital platform with daily assignments, tracking, and nudges',
      'Progress and engagement measurement across locations and time zones',
      'Social sharing and reinforcement mechanics rooted in behavioral science',
      'Programme tooling spanning digital, physical, and live touchpoints',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    categories: ['Platform', 'B2B'],
    image: '/images/work/companychallenges.jpg',
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const flagshipProjects = projects.filter((p) => p.flagship);
export const secondaryProjects = projects.filter((p) => !p.flagship);

/**
 * The R&D foundry that InitDev operates within. InitDev is the software studio
 * inside The Dravidor Foundry — the research engine that feeds our work.
 */
export const foundry = {
  name: 'The Dravidor Foundry',
  url: 'https://www.thedravidorfoundry.org',
  domain: 'thedravidorfoundry.org',
  tagline: 'The R&D powerhouse behind market-disrupting businesses.',
  summary:
    'InitDev is the software studio inside The Dravidor Foundry — an R&D powerhouse working at the intersection of AI, quantum-classical systems, synthetic biology, and neuromorphic computing. The Foundry turns frontier research into category-defining ventures; we ship the software that brings them to market.',
  points: [
    'Anticipatory research across AI, quantum, and bio-digital systems',
    'A portfolio of ventures spanning AI, infrastructure, and life sciences',
    'Frontier research translated into production-grade products',
  ],
  ventures: ['XanderAI', 'InitDev', 'Systema', 'Animalia', 'XerxesAGI', 'Inflio'],
  image: '/images/work/dravidor.jpg',
};

/** Depth-first stats for the cases page hero. */
export const engineeringStats = [
  { value: '528', label: 'Commits on a single product', sublabel: 'Drip — sole engineer, 7.5 months' },
  { value: '98', label: 'API routes in one build', sublabel: 'Designed, shipped, and maintained' },
  { value: '5', label: 'AI platforms in production', sublabel: 'OpenAI · Anthropic · fal.ai · Tavus · Gemini' },
  { value: '100%', label: 'Built end-to-end in-house', sublabel: 'Data model to deployment' },
];
