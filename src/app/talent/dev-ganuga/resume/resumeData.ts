/**
 * Résumé content, shared by the 2-page ATS variant and the detailed variant.
 * Entries are ordered newest first. Client engagements from 2025 onward were
 * delivered through the independent consulting practice listed first and are
 * marked (contract).
 */

export const contact = {
  name: 'Dev Ganugapenta',
  headline: 'Senior Software Engineer · Full-Stack & AI Applications',
  location: 'West Palm Beach, FL · Remote (US)',
  email: 'dganuga@gmail.com',
  linkedin: 'linkedin.com/in/dev-ganuga-4b3b6431a',
  github: 'github.com/DevGanuga',
  site: 'initdev.co/talent/dev-ganuga',
};

export const summary =
  'Senior full-stack engineer who takes products from zero to market. Built four startup products end to end in the past year as founding engineer, two of them now generating revenue, and delivered enterprise AI platforms for corporate clients, including one presented at Web Summit 2025. Works in TypeScript, Next.js, and PostgreSQL with strong production LLM experience, owning everything from data model to deployment and incident response.';

export const skillGroups = [
  { label: 'Languages', items: 'TypeScript, JavaScript, SQL, Python' },
  {
    label: 'AI / LLM',
    items:
      'OpenAI and Anthropic APIs (GPT-4o, Claude), structured output and tool calling, streaming, RAG with Pinecone embeddings, agent workflows (LangGraph, n8n), generative image and video (fal.ai, Tavus), transcription and media pipelines, human-in-the-loop review systems',
  },
  {
    label: 'Frontend',
    items:
      'React 19, Next.js App Router (server components and server actions), Tailwind CSS, Framer Motion, TipTap rich-text editing, React Hook Form, Zod validation, Zustand, data visualization',
  },
  {
    label: 'Backend & Data',
    items:
      'Node.js, PostgreSQL (schema design, migrations, row-level security), Supabase, REST and GraphQL API design, Shopify headless commerce, Clerk and Supabase Auth (OAuth), signed webhooks, cron jobs, transactional email (Resend), Google Maps Platform',
  },
  {
    label: 'Payments',
    items:
      'Stripe subscriptions and customer portal, tiered and usage-based pricing, atomic credit ledgers with escrowed spend and automatic refunds, idempotent webhook processing',
  },
  {
    label: 'DevOps & Observability',
    items:
      'Vercel (edge, serverless, cron), CI/CD pipelines, Sentry across edge and server runtimes, Playwright end-to-end testing',
  },
  {
    label: 'Architecture & Practices',
    items:
      'Multi-tenant SaaS design, event-driven and idempotent systems, production incident response, release QA processes, technical proposals and scoping',
  },
];

export type ResumeEntry = {
  title: string;
  company: string;
  period: string;
  oneLiner: string;
  /** 2 tight bullets for the ATS variant */
  bullets: string[];
  /** 3–5 evidence-backed bullets for the detailed variant */
  detailedBullets: string[];
};

export const entries: ResumeEntry[] = [
  {
    title: 'Independent Product Engineer',
    company: 'Self-employed · Upwork Top Rated Plus',
    period: '2025 – Present',
    oneLiner:
      'Full-stack and AI product development for startups and enterprise clients. The ventures and platforms below were built through this practice.',
    bullets: [
      'Built four startup products from zero to market as founding engineer, two now generating revenue, alongside enterprise platform delivery for corporate clients.',
      'Top Rated Plus on Upwork with 100% Job Success; every completed engagement rated 5.0.',
    ],
    detailedBullets: [
      'Built four startup products from zero to market as founding engineer, two now generating revenue, alongside enterprise platform delivery for corporate clients.',
      'Top Rated Plus on Upwork with 100% Job Success; every completed engagement rated 5.0.',
      'Typical scope runs from data modeling and API design through deployment, monitoring, and production incident response.',
    ],
  },
  {
    title: 'Lead Engineer',
    company: 'Leading with AI, a Limpid&Co division (contract)',
    period: 'Oct 2025 – Jun 2026',
    oneLiner:
      'AI Navigator, an enterprise AI readiness platform. Live at navigator.leadingwith.ai.',
    bullets: [
      'Owned the platform end to end: built the GPT-4o assistant that navigates the app and runs analyses for the user, and a sentiment engine scoring 1,000+ employee survey responses on where and why AI adoption stalls.',
      'Delivered Phase 1 ahead of the client\u2019s Web Summit 2025 presentation, then wrote the Phase 2 proposal (scope, team, budget) and won the follow-on contract.',
    ],
    detailedBullets: [
      'Built the in-app GPT-4o assistant. Beyond answering questions, it can open the relevant screens and run analyses on the user\u2019s behalf.',
      'Wrote a sentiment engine that maps survey responses across 25 zones (five resistance reasons against five discomfort levels), applied to 1,000+ employee responses.',
      'Added an eight-dimension capability maturity model scored against industry benchmarks, with automated gap detection.',
      'Delivered Phase 1 ahead of the client\u2019s Web Summit 2025 presentation; the platform is live in production.',
      'Wrote the Phase 2 proposal, including team structure and budget, and won the follow-on contract.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'Dyia (contract)',
    period: 'May 2026 – Jun 2026',
    oneLiner: 'Field-service SaaS for service businesses. Live at dyia.io with paying subscribers.',
    bullets: [
      'Built the company\u2019s product from zero to launch in two months: crew dispatch on Google Maps, invoicing, job profitability reporting, an Anthropic-powered reporting assistant, and tiered Stripe subscriptions.',
      'Took it to market and first paying subscribers, diagnosed and fixed the first live billing incident, and wrote the release QA checklist that has gated every release since.',
    ],
    detailedBullets: [
      'Built the entire product from zero in two months, roughly 70 API routes covering dispatch, invoicing, and job profitability, and took it live to paying subscribers.',
      'Set up tiered Stripe subscriptions with signed webhook verification and idempotent plan grants.',
      'Added an Anthropic-powered reporting assistant that works from live job and profit data.',
      'Instrumented Sentry across edge and server runtimes and used it to trace and fix a live billing incident.',
      'Wrote the release QA checklist that has gated every release since.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'Animalia (contract)',
    period: 'Apr 2026 – Jun 2026',
    oneLiner: 'Pet wellness e-commerce startup on headless Shopify. Live at animalia.market, pre-launch.',
    bullets: [
      'Built the storefront from zero as the only engineer, turning a raw supplier catalog into a working store: typed domain layer over the Shopify Storefront, Cart, and Admin APIs (33 GraphQL operations).',
      'Wrote a revenue-weighted merchandising engine (deterministic, no LLM at render time) and an AI product photography pipeline that generates brand-constrained images and writes them back to the catalog.',
    ],
    detailedBullets: [
      'Only engineer on the build; took the storefront from zero to live on Next.js 16, Tailwind 4, and TypeScript.',
      'Built a typed domain layer over the Shopify Storefront, Cart, and Admin APIs, 33 GraphQL operations in total.',
      'Wrote the merchandising engine as plain, unit-testable ranking code weighted by revenue, keeping LLM calls out of page rendering.',
      'Built a product photography pipeline that reads the catalog from the Admin API, generates brand-constrained images with fal.ai, and writes them back.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Company Challenges, for Limpid&Co (contract)',
    period: 'Apr 2026 – Jun 2026',
    oneLiner: 'Enterprise learning platform, delivered and invoiced. companychallenges.com',
    bullets: [
      'Built and delivered the entire platform solo, designing the content model so a challenge is authored once and runs across any number of cohorts without duplicating content.',
      'Traced a production query failure to a PostgREST regression from a Supabase upgrade and shipped the fix within hours.',
    ],
    detailedBullets: [
      'Built the platform solo from kickoff to invoiced delivery.',
      'Designed the content architecture separating authored material from cohort instances, so material is written once and reused across cohorts.',
      'Built rich-text authoring on TipTap and lifecycle email automation on Vercel cron jobs.',
      'Handled production support directly, including tracing an aggregate-query failure to a PostgREST regression after a Supabase upgrade and fixing it within hours.',
      'Delivered and invoiced, with Stripe billing and Resend for transactional email.',
    ],
  },
  {
    title: 'Platform Engineer',
    company: 'Strengthening the Saints (contract, team build)',
    period: 'Feb 2026 – Jun 2026',
    oneLiner: 'Church discipleship platform on multi-tenant Postgres.',
    bullets: [
      'Worked across a multi-tenant Postgres platform where each congregation\u2019s data is isolated through row-level security (200+ policies).',
      'Built sermon and study authoring on TipTap with scripture insertion, shipping through CI that runs lint, typecheck, build, and Playwright smoke tests on every push.',
    ],
    detailedBullets: [
      'Part of a small team on a large multi-tenant platform (84 routes, 82 database migrations), with row-level security isolating each congregation\u2019s data.',
      'Built the TipTap authoring experience for sermons and studies, including scripture verse insertion and text normalization.',
      'All work shipped through a CI pipeline running lint, typecheck, build, and Playwright smoke tests on every push.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'AI Blueprint (contract)',
    period: 'Jan 2026 – Mar 2026',
    oneLiner: 'AI creative platform with a paid credit system. In market and generating revenue.',
    bullets: [
      'Built the platform to launch and first revenue: multi-studio AI generation on fal.ai with Stripe subscriptions and a paid credit system, on Next.js 15 and Supabase.',
      'Designed the billing core: an atomic SQL credit ledger that cannot go negative under concurrent spend, escrowed credits refunded automatically when a model fails, and idempotent webhooks that survive replay.',
    ],
    detailedBullets: [
      'Primary engineer from first commit through launch; the platform is in market and generating revenue.',
      'Designed an atomic SQL credit ledger with a non-negative balance constraint that holds up under concurrent spending.',
      'Built escrowed spending, where credits are reserved when a generation starts and refunded if the model fails.',
      'Made Stripe webhook processing idempotent and guarded against duplicate subscriptions from replayed events.',
      'Stack: Next.js 15, Supabase, fal.ai, Clerk.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'Drip (contract)',
    period: 'Oct 2025 – Dec 2025',
    oneLiner: 'Privacy-focused AI relationship companion startup, built solo to investor-demo stage.',
    bullets: [
      'Built the entire product alone in three months (98 API routes, 38 migrations) and carried it to investor-demo stage.',
      'Designed the privacy architecture the product depends on: dual-store memory across Postgres and Pinecone with ownership-scoped retrieval, so two partners sharing one companion can never read each other\u2019s entries, plus an operator console where a human approves every AI-drafted message.',
    ],
    detailedBullets: [
      'Sole builder of the full product in three months: 98 API routes and 38 database migrations, taken to investor-demo stage.',
      'Designed dual-store memory, Postgres for structured data and Pinecone for semantic recall, with rollback across both stores when one write fails.',
      'Scoped memory retrieval by owner in the embedding queries themselves, so privacy between partners does not depend on prompt instructions.',
      'Built an operator console where a human reviews and approves every AI-drafted message before it is sent.',
    ],
  },
  {
    title: 'AI Automation Lead',
    company: 'Yorali USA',
    period: '2023 – 2024',
    oneLiner: 'Boynton Beach, FL. Full-time.',
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
    period: '2023',
    oneLiner: 'Miami, FL. Full-time. Healthcare revenue operations.',
    bullets: [
      'Improved appointment conversion 35% and qualified leads 25% through outbound automation.',
    ],
    detailedBullets: [
      'Improved appointment conversion 35% and qualified leads 25% through outbound automation.',
    ],
  },
];

export const education = [
  {
    institution: 'Harvard Business School',
    detail: 'Credential of Readiness: Analytics, Strategy & Management',
    year: '2025',
  },
  {
    institution: 'McFatter Technical College',
    detail: 'Technical Degree, Computer Science & Network Support',
    year: '2024',
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
