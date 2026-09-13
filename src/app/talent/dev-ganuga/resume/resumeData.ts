/**
 * Résumé content, shared by the 2-page ATS variant and the detailed variant.
 * Entries are ordered newest first. Every role carries a location string that
 * states Remote or On-site.
 */

export const contact = {
  name: 'Dev Ganugapenta',
  headline: 'Full Stack Engineer · AI & LLM Applications',
  location: 'West Palm Beach, FL · Remote (US)',
  phone: '(954) 305-4540',
  phoneHref: 'tel:+19543054540',
  email: 'dganuga@gmail.com',
  linkedin: 'linkedin.com/in/dev-ganuga-4b3b6431a',
  github: 'github.com/DevGanuga',
  site: 'initdev.co/talent/dev-ganuga',
};

export const summary =
  'Full Stack Engineer who owns production systems end to end: React and Next.js frontends, Node.js and Python backends, PostgreSQL, and LLM applications on OpenAI and Anthropic. Last year: three startup products from zero to production as lead or sole engineer \u2014 two generating revenue, one at investor demo \u2014 full-stack lead for Limpid&Co (Amsterdam), including a platform presented at Web Summit 2025, and Animalia, a personal marketplace live at animalia.market.';

export const skillGroups = [
  { label: 'Languages', items: 'TypeScript, JavaScript, Python, SQL' },
  {
    label: 'Frontend',
    items:
      'React 19, Next.js (App Router, Server Components, Server Actions), TanStack Query, TanStack Form, TanStack Table, Tailwind CSS, Framer Motion, TipTap, React Hook Form, Zod, Zustand',
  },
  {
    label: 'Backend & APIs',
    items:
      'Node.js, Next.js route handlers, Python, REST, GraphQL, signed and idempotent webhooks, background jobs and cron',
  },
  {
    label: 'Data',
    items:
      'PostgreSQL (schema design, migrations, row-level security), Supabase, Pinecone vector search',
  },
  {
    label: 'AI / LLM',
    items:
      'OpenAI and Anthropic APIs, Gemini, RAG and embeddings, structured output and tool calling, streaming, retry/backoff and fallback design, generative image and video (fal.ai, Tavus), human-in-the-loop review systems',
  },
  {
    label: 'Identity & Security',
    items: 'OAuth 2.0, Clerk, Supabase Auth, RBAC, multi-tenant data isolation',
  },
  {
    label: 'DevOps & Observability',
    items: 'Docker, CI/CD pipelines, Vercel, Sentry, Playwright',
  },
  {
    label: 'Payments',
    items:
      'Stripe (subscriptions, checkout, customer portal, tiered and usage-based pricing), credit ledgers with escrow and automatic refunds, idempotent webhook processing',
  },
  {
    label: 'Domain',
    items: 'Healthcare revenue operations, multi-tenant SaaS, e-commerce and marketplace',
  },
];

export type ResumeEntry = {
  title: string;
  company: string;
  location?: string;
  period: string;
  oneLiner: string;
  bullets: string[];
  detailedBullets: string[];
};

export const entries: ResumeEntry[] = [
  {
    title: 'Full Stack Engineer',
    company: 'Independent Contractor',
    location: 'Remote',
    period: '2025 – Present',
    oneLiner:
      'Contract full-stack and AI engineering; the client engagements below were delivered through this practice.',
    bullets: [
      'Built three startup products from zero to production as lead or sole engineer: two generating revenue, one at investor-demo stage.',
      'Led full-stack delivery for Limpid&Co (Amsterdam): AI Navigator, Company Challenges, and the Phase 2 production program that followed Web Summit 2025.',
    ],
    detailedBullets: [
      'Built three startup products from zero to production as lead or sole engineer: two generating revenue, one at investor-demo stage.',
      'Led full-stack delivery for Limpid&Co (Amsterdam): AI Navigator, Company Challenges, and the Phase 2 production program that followed Web Summit 2025.',
      'Scope on every engagement: architecture, data model, API design, frontend, deployment, observability, and production support.',
    ],
  },
  {
    title: 'Lead Full Stack Engineer (Contract)',
    company: 'Limpid&Co',
    location: 'Remote · Amsterdam, NL',
    period: 'Oct 2025 – Jun 2026',
    oneLiner:
      'AI Navigator, Company Challenges, and the Phase 2 production program for one enterprise client.',
    bullets: [
      'Architected and shipped AI Navigator (navigator.leadingwith.ai), an enterprise AI-readiness platform on Next.js, TypeScript, and PostgreSQL: GPT-4o assistant with in-app tool calling, 25-zone sentiment engine over 1,000+ employee responses, 8-dimension maturity model with automated gap detection. Live in production; presented at Web Summit 2025.',
      'Shipped Company Challenges (companychallenges.com), an enterprise behavior-change platform: author-once, run-many cohort model, TipTap authoring, Stripe billing, Resend lifecycle email on Vercel cron. Wrote and won the Phase 2 production contract (scope, team, budget); fixed a PostgREST-regression outage the same day.',
    ],
    detailedBullets: [
      'Lead full-stack engineer across all Limpid&Co production software, Oct 2025 \u2013 Jun 2026.',
      'AI Navigator (navigator.leadingwith.ai): built the full platform on Next.js, TypeScript, and PostgreSQL. GPT-4o assistant with in-app tool calling, 25-zone sentiment engine over 1,000+ employee survey responses, 8-dimension capability maturity model with benchmark scoring and automated gap detection, enterprise auth. Live in production; presented at Web Summit 2025.',
      'Wrote the Phase 2 production proposal \u2014 scope, team structure, budget \u2014 and won the follow-on contract.',
      'Company Challenges (companychallenges.com): built the full platform. Authored content is separated from cohort instances so a challenge is written once and run across any number of cohorts. TipTap rich-text authoring, Stripe billing, Resend transactional email, Vercel cron lifecycle automation.',
      'Owned production support: traced an aggregate-query outage to a PostgREST regression after a Supabase upgrade and shipped the fix the same day.',
    ],
  },
  {
    title: 'Full Stack Developer (Contract)',
    company: 'Dyia',
    location: 'Remote',
    period: 'May 2026 – Jun 2026',
    oneLiner:
      'AI business operating system for the trades. Built from zero; live with paying subscribers. dyia.io',
    bullets: [
      'Built the production platform end to end on Next.js, TypeScript, PostgreSQL, and Stripe: real-profit job tracking with multi-customer expense splitting, branded PDF quote builder, customer CRM with follow-up pipeline, Google Maps crew routing, and a natural-language Anthropic assistant for logging, pricing, and forecasting.',
      'Launched Basic/Pro Stripe subscriptions (checkout, customer portal, signed webhooks, idempotent plan grants) to paying subscribers; wired Sentry before launch, resolved the first live billing incident, wrote the release QA process.',
    ],
    detailedBullets: [
      'Primary engineer (~82% of commits). Built Dyia from a blank repo to a live SaaS with paying subscribers in two months.',
      'Product surface: real-profit job tracking with multi-customer expense splitting, branded PDF quotes with photo attachments and follow-ups, customer CRM and Kanban follow-up pipeline, tax set-aside, invoicing and card payments via Stripe.',
      'Stripe Basic/Pro subscriptions end to end: checkout, customer portal, signed webhook verification, idempotent grant processing.',
      'Anthropic-powered assistant for natural-language job logging, pricing, and forecasting over live job and profit data.',
      'Google Maps routing in crew scheduling; Sentry edge and server monitoring wired before launch; resolved the first production billing incident; authored the release QA process (5+ documented rounds per release).',
    ],
  },
  {
    title: 'Full Stack Engineer (Contract)',
    company: 'Strengthening the Saints',
    location: 'Remote',
    period: 'Feb 2026 – Jun 2026',
    oneLiner: 'Multi-tenant church discipleship platform. Team build, in production.',
    bullets: [
      'Shipped production features on a live multi-tenant PostgreSQL platform (84 routes, 82 migrations, 200+ row-level security policies) that isolates each congregation\u2019s data; Google OAuth via Supabase Auth.',
      'Built TipTap authoring for sermons and studies with scripture insertion and text normalization; every push runs lint, typecheck, build, and Playwright smoke tests in CI.',
    ],
    detailedBullets: [
      'Full-stack engineer on a team build: 84 routes, 82 migrations, row-level security isolating each congregation, Google OAuth via Supabase Auth.',
      'Built the TipTap authoring experience for sermons and studies, including scripture verse insertion and text normalization.',
      'Shipped through CI: lint, typecheck, build, and Playwright smoke tests on every push.',
    ],
  },
  {
    title: 'Lead Full Stack & AI Engineer (Contract)',
    company: 'AI Blueprint',
    location: 'Remote',
    period: 'Jan 2026 – Mar 2026',
    oneLiner:
      'AI creative suite: six generation studios, 4K output. Built from zero; generating revenue. aiblueprintrt.com',
    bullets: [
      'Built the production platform on Next.js 15, TypeScript, Supabase, fal.ai, Gemini, and Stripe: six AI studios, identity-preserving 4K avatar generation, and webhook-plus-polling job delivery so a missed callback never loses a job.',
      'Designed the credit economy and billing core: atomic SQL ledger with non-negative constraints (a race cannot create free generations), credits held during generation and auto-refunded on failure, idempotent Stripe webhooks, zero double-billing paths.',
    ],
    detailedBullets: [
      'Primary engineer from first commit to production revenue. Live at aiblueprintrt.com.',
      'Six AI-powered creative studios (UGC, product, video, brand) in one subscription; identity-preserving image and video generation with 4K output via fal.ai prompt orchestration.',
      'Webhook-plus-polling dual-path job delivery: a missed provider callback never loses a generation.',
      'Atomic SQL credit ledger with non-negative constraints; credits held during generation and refunded automatically on failure.',
      'Idempotent Stripe webhooks and duplicate-subscription guards. Replayed events cannot double-charge or double-grant.',
    ],
  },
  {
    title: 'Lead Full Stack Developer & GTM Engineer (Contract)',
    company: 'Drip',
    location: 'Remote · San Diego, CA',
    period: 'Oct 2025 – Dec 2025',
    oneLiner:
      'Privacy-first relationship-wellness companion. Built from zero, solo, to investor-demo stage. drip.love',
    bullets: [
      'Sole engineer (98 API routes, 38 migrations) and GTM owner through the investor demo. Built the product on Next.js, TypeScript, Supabase, Pinecone, OpenAI, and Stripe: paired companion experiences, invitation flow, check-in/nudge engine, human-in-the-loop operator console (draft \u2192 approve \u2192 send).',
      'Enforced privacy at three layers (data model, vector retrieval, prompt) so neither partner can read the other\u2019s memories; dual-store memory with cross-store rollback; OpenAI structured-output engine with strict schema and retry/backoff.',
    ],
    detailedBullets: [
      'Sole engineer, every commit: 98 API routes and 38 migrations. Took the product to investor-demo stage and owned go-to-market engineering alongside the build.',
      'Privacy enforced at three layers \u2014 data model, vector retrieval, and prompt \u2014 so neither partner can ever read the other\u2019s private memories.',
      'Dual-store memory (Supabase + Pinecone) with cross-store consistency; vector writes roll back on SQL failure.',
      'OpenAI structured-output engine: strict JSON schema, 3-attempt retry with backoff, conversation chaining.',
      'Human-in-the-loop operator console with a draft \u2192 approve \u2192 send state machine. No AI-drafted message reaches a user without human approval.',
    ],
  },
  {
    title: 'AI Automation Lead',
    company: 'Yorali USA',
    location: 'Boynton Beach, FL · On-site',
    period: '2023 – 2024',
    oneLiner: 'Full-time.',
    bullets: [
      'Cut customer acquisition cost 45% and manual process load 60% with custom AI sales tooling.',
      'Trained a team of 8 to 95% adoption; 30% lift in sales productivity.',
    ],
    detailedBullets: [
      'Cut customer acquisition cost 45% and manual process load 60% with custom AI sales tooling.',
      'Trained a team of 8 to 95% adoption; 30% lift in sales productivity.',
    ],
  },
  {
    title: 'Business Development Manager',
    company: '4D Global (Inc. 5000)',
    location: 'Miami, FL · On-site',
    period: '2023',
    oneLiner: 'Full-time. Healthcare revenue operations.',
    bullets: [
      'Improved appointment conversion 35% and qualified leads 25% through outbound automation.',
    ],
    detailedBullets: [
      'Improved appointment conversion 35% and qualified leads 25% through outbound automation.',
    ],
  },
];

export type ResumeProject = {
  name: string;
  url: string;
  location?: string;
  period: string;
  oneLiner: string;
  bullets: string[];
  detailedBullets: string[];
};

export const projects: ResumeProject[] = [
  {
    name: 'Animalia',
    url: 'animalia.market',
    location: 'Remote · Personal project',
    period: 'Apr 2026 – Jun 2026',
    oneLiner:
      'Pet-wellness marketplace on headless Shopify. Built from zero; live storefront, pre-launch.',
    bullets: [
      'Sole engineer. Production storefront on Next.js 16, TypeScript, and Tailwind 4; typed facade over Shopify Storefront, Cart, and Admin APIs (one contract, 33 GraphQL operations).',
      'Deterministic merchandising engine (ingredient extraction, need-based copy, revenue-weighted ranking; no LLM at request time) and a fal.ai photography pipeline that writes assets back via the Admin API.',
    ],
    detailedBullets: [
      'Sole engineer. Took the storefront from zero to live on Next.js 16, Tailwind 4, and TypeScript; 50+ brands merchandised.',
      'Typed facade over Shopify Storefront, Cart, and Admin APIs: one contract, three upstream systems, 33 GraphQL operations.',
      'Deterministic merchandising engine (~410 LOC): safety-filtered ingredient extraction, need-based copy transformation, revenue-weighted ranking. No model call at request time, so ranking is unit-testable and fast.',
      'AI product-photography pipeline: reads the catalog from the Admin API, generates brand-constrained images with fal.ai, writes them back.',
    ],
  },
];

export const education = [
  {
    institution: 'McFatter Technical College',
    detail: 'Technical Degree, Computer Science & Network Support',
    year: '2024',
  },
];

export const certifications = [
  {
    institution: 'Harvard Business School',
    detail: 'CORe (Credential of Readiness): Analytics, Strategy & Management',
    year: '2025',
  },
  {
    institution: 'Stanford University School of Engineering',
    detail: 'Strategic Planning Professional',
    year: '2024',
  },
  {
    institution: 'IBM',
    detail: 'Python for Data Science, AI & Development Specialist',
    year: '2024',
  },
];
