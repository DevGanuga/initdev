import type { Project } from '@/lib/types/projects';

/**
 * Real builds shipped by InitDev. Descriptions are factual to each live
 * product — no invented clients, people, or outcome metrics.
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
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'OpenAI'],
    categories: ['SaaS', 'AI', 'Payments'],
    image: '/images/work/dyia.jpg',
    accent: 'from-blue-500/20 to-emerald-500/20',
    featured: true,
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
    featured: true,
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
      'Marketing site and partnership intake for a frontier R&D studio',
    ],
    tech: ['Next.js', 'Realtime', 'AI Video', 'WebRTC'],
    categories: ['AI', 'Realtime Video'],
    image: '/images/work/convoai.jpg',
    accent: 'from-purple-500/20 to-blue-500/20',
    featured: true,
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
    tech: ['Next.js', 'Mobile', 'OpenAI', 'Encrypted Storage'],
    categories: ['Consumer', 'Mobile', 'AI'],
    image: '/images/work/drip.jpg',
    accent: 'from-pink-500/20 to-blue-500/20',
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
    tech: ['Next.js', 'AI Image', 'AI Video', 'Stripe'],
    categories: ['AI', 'E-commerce'],
    image: '/images/work/aiblueprint.jpg',
    accent: 'from-fuchsia-500/20 to-blue-500/20',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
