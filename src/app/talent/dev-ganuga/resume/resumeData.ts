/**
 * Résumé content, shared by the 2-page ATS variant and the detailed variant.
 * Entries are ordered newest first. Startup and client work from 2025 onward
 * sits under the independent practice listed first.
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
  'Senior full-stack engineer who builds production platforms from a blank repo and takes them to market. Founding engineer on four startups in the last year — two generating revenue, one live pre-launch, one taken to investor demo — and lead engineer on Limpid&Co\u2019s production software in Amsterdam, including a platform presented at Web Summit 2025. TypeScript, Next.js, PostgreSQL, production LLM systems, Stripe billing.';

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
      'Multi-tenant SaaS, event-driven and idempotent systems, production incident response, release QA, technical proposals and scoping',
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
    title: 'Independent Product Engineer',
    company: 'Self-employed · Upwork Top Rated Plus',
    period: '2025 – Present',
    oneLiner:
      'The startups and the Limpid&Co platforms below were shipped through this practice.',
    bullets: [
      'Built four startups from zero to a live product as founding engineer. Two are generating revenue.',
      'Built Limpid&Co\u2019s production software in Amsterdam (AI Navigator, Company Challenges, and the Phase 2 program that followed Web Summit 2025). Top Rated Plus on Upwork, 100% Job Success, every completed engagement rated 5.0.',
    ],
    detailedBullets: [
      'Built four startups from zero to a live product as founding engineer. Two are generating revenue.',
      'Built Limpid&Co\u2019s production software in Amsterdam: AI Navigator, Company Challenges, and the Phase 2 program won after Web Summit 2025.',
      'Top Rated Plus on Upwork, 100% Job Success, every completed engagement rated 5.0.',
    ],
  },
  {
    title: 'Lead Engineer',
    company: 'Limpid&Co',
    location: 'Amsterdam',
    period: 'Oct 2025 – Jun 2026',
    oneLiner:
      'Three production platforms for one enterprise client. AI Navigator, Company Challenges, and the Phase 2 program after Web Summit 2025.',
    bullets: [
      'Built AI Navigator as a live production platform (navigator.leadingwith.ai): GPT-4o assistant that navigates the product and runs analyses, a 25-zone sentiment engine on 1,000+ employee responses, and an 8-dimension capability maturity model. Delivered in time for Web Summit 2025, then wrote and won the Phase 2 production contract (scope, team, budget).',
      'Built Company Challenges as a live production platform (companychallenges.com): author a challenge once, run it across any number of cohorts, TipTap authoring, Stripe billing, lifecycle email. Traced a production outage to a PostgREST regression after a Supabase upgrade and shipped the fix the same day.',
    ],
    detailedBullets: [
      'Lead engineer on Limpid&Co\u2019s production software in Amsterdam. Three pieces of shipped work: AI Navigator, Company Challenges, and the Phase 2 production program.',
      'AI Navigator (navigator.leadingwith.ai): built the full production platform, including a GPT-4o assistant that opens screens and runs analyses, a 25-zone sentiment engine on 1,000+ employee survey responses, and an 8-dimension capability maturity model with automated gap detection. Live. Presented at Web Summit 2025.',
      'Wrote the Phase 2 production proposal after Phase 1 — scope, team, budget — and won the follow-on contract.',
      'Company Challenges (companychallenges.com): built the full production platform. Content is authored once and reused across cohorts. TipTap authoring, Stripe billing, Resend email, Vercel cron.',
      'Owned production support. Traced an aggregate-query outage to a PostgREST regression after a Supabase upgrade and shipped the fix the same day.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'Dyia',
    period: 'May 2026 – Jun 2026',
    oneLiner: 'Field-service SaaS. Built from zero. Live in production with paying subscribers. dyia.io',
    bullets: [
      'Built the entire production product in two months: crew dispatch on Google Maps, invoicing, job profitability, an Anthropic reporting assistant on live job data, and tiered Stripe subscriptions with signed, idempotent webhooks. Roughly 70 API routes.',
      'Launched to paying subscribers. Diagnosed and fixed the first live billing incident in production, then wrote the release QA checklist that has gated every release since.',
    ],
    detailedBullets: [
      'Founding engineer. Built Dyia from a blank repo to a live SaaS with paying subscribers in two months.',
      'Production surface: dispatch, invoicing, job profitability, Anthropic reporting on live job and profit data — roughly 70 API routes.',
      'Stripe subscriptions with signed webhook verification and idempotent plan grants.',
      'Sentry across edge and server runtimes. Used it to find and fix a live billing incident.',
      'Wrote the release QA checklist that has gated every release since.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'Animalia',
    period: 'Apr 2026 – Jun 2026',
    oneLiner: 'Pet wellness e-commerce. Built from zero. Live storefront, pre-launch. animalia.market',
    bullets: [
      'Only engineer. Built the production storefront from a raw supplier catalog: typed domain layer over Shopify Storefront, Cart, and Admin APIs (33 GraphQL operations), on Next.js 16 and TypeScript.',
      'Wrote the merchandising engine as deterministic, revenue-weighted ranking — no LLM in the page render path — and an AI photography pipeline that generates brand-constrained images with fal.ai and writes them back through the Admin API.',
    ],
    detailedBullets: [
      'Only engineer. Built the production storefront from zero to live on Next.js 16, Tailwind 4, and TypeScript.',
      'Typed domain layer over Shopify Storefront, Cart, and Admin APIs, 33 GraphQL operations.',
      'Merchandising engine is plain ranking code weighted by revenue. No model call at request time, so ranking is unit-testable and fast.',
      'AI photography pipeline reads the catalog, generates brand-constrained images with fal.ai, and writes them back through the Admin API.',
    ],
  },
  {
    title: 'Platform Engineer',
    company: 'Strengthening the Saints',
    period: 'Feb 2026 – Jun 2026',
    oneLiner: 'Church discipleship platform. Production multi-tenant Postgres. Team build.',
    bullets: [
      'Shipped production features on a live multi-tenant platform: 84 routes, 82 migrations, 200+ row-level security policies so each congregation\u2019s data stays its own.',
      'Built sermon and study authoring on TipTap with scripture insertion. Every push runs lint, typecheck, build, and Playwright smoke tests.',
    ],
    detailedBullets: [
      'Production platform engineer on a team build: 84 routes, 82 migrations, row-level security isolating each congregation.',
      'Built the TipTap authoring experience for sermons and studies, including scripture verse insertion and text normalization.',
      'Shipped through CI: lint, typecheck, build, and Playwright smoke tests on every push.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'AI Blueprint',
    period: 'Jan 2026 – Mar 2026',
    oneLiner: 'AI creative platform. Built from zero. In production and generating revenue.',
    bullets: [
      'Built the full production platform: multi-studio generation on fal.ai, Clerk auth, Stripe subscriptions, and a paid credit economy on Next.js 15 and Supabase. Live and generating revenue.',
      'Designed the billing core the product depends on: atomic SQL credit ledger that cannot go negative under concurrent spend, credits reserved during generation and refunded when a model fails, Stripe webhooks that cannot double-charge on replay.',
    ],
    detailedBullets: [
      'Founding engineer from first commit to production revenue.',
      'Atomic SQL credit ledger with a non-negative constraint under concurrent spend.',
      'Credits are reserved when a generation starts and refunded if the model fails.',
      'Idempotent Stripe webhooks and duplicate-subscription guards. Replayed events cannot double-charge or double-grant.',
      'Stack: Next.js 15, Supabase, fal.ai, Clerk.',
    ],
  },
  {
    title: 'Founding Engineer',
    company: 'Drip',
    location: 'San Diego, CA',
    period: 'Oct 2025 – Dec 2025',
    oneLiner: 'AI relationship companion. Built from zero, solo, to investor-demo stage.',
    bullets: [
      'Only engineer. Built the full production product in three months: 98 API routes, 38 migrations, dual-store memory (Postgres + Pinecone), and an operator console where a human approves every AI-drafted message before it sends.',
      'Privacy is enforced in the retrieval queries, not the prompt: two partners share one companion and cannot read each other\u2019s memories.',
    ],
    detailedBullets: [
      'Only engineer. Built the full product in three months and took it to investor-demo stage: 98 API routes, 38 migrations.',
      'Dual-store memory: Postgres for structured data, Pinecone for semantic recall, rollback across both stores when one write fails.',
      'Ownership-scoped embedding queries. Privacy does not depend on prompt instructions.',
      'Operator console: draft, approve, send. No AI-drafted message reaches a user without a human.',
    ],
  },
  {
    title: 'AI Automation Lead',
    company: 'Yorali USA',
    location: 'Boynton Beach, FL',
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
    location: 'Miami, FL',
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
