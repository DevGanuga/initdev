/**
 * Résumé content, shared by the 2-page ATS variant and the 3-page detailed
 * variant. Entries are ordered by end date, newest first; every engagement
 * is closed out and dated with its real month range.
 */

export const contact = {
  name: 'Dev Ganugapenta',
  headline: 'Senior Software Engineer · Full-Stack & AI Applications',
  location: 'West Palm Beach, FL · Remote (US)',
  email: 'dganuga@gmail.com',
  linkedin: 'linkedin.com/in/dev-ganuga-4b3b6431a',
  github: 'github.com/DevGanuga',
  site: 'initdev.co/talent/available/dev-ganuga',
};

export const summary =
  'Senior software engineer specializing in full-stack and AI applications. Shipped nine production platforms in a year at InitDev for startup and enterprise clients: LLM systems architected for model failure, Stripe billing that stays correct through webhook replay, and multi-tenant Postgres with row-level security. Owns products end to end, from domain model to production.';

export const skillGroups = [
  { label: 'Languages', items: 'TypeScript, JavaScript, SQL, Python' },
  {
    label: 'AI / LLM',
    items:
      'OpenAI GPT-4o, Anthropic Claude, Pinecone embeddings, fal.ai, Tavus, agent workflows (LangGraph, n8n)',
  },
  { label: 'Frontend', items: 'React, Next.js (App Router), Tailwind CSS, Framer Motion' },
  {
    label: 'Backend & Data',
    items: 'Node.js, PostgreSQL, Supabase (row-level security), REST, GraphQL (Shopify)',
  },
  {
    label: 'Payments',
    items: 'Stripe subscriptions, idempotent webhook processing, atomic credit ledgers',
  },
  {
    label: 'DevOps & Observability',
    items: 'Vercel, CI/CD, Sentry, Playwright, Google Maps API',
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
    title: 'Lead Engineer',
    company: 'AI Navigator — Leading with AI, a Limpid&Co division (client via InitDev)',
    period: 'Oct 2025 – Jun 2026',
    oneLiner:
      'Enterprise AI readiness platform, delivered and live in production. navigator.leadingwith.ai',
    bullets: [
      'Built a GPT-4o assistant that executes in-app navigation and analysis actions, plus a 25-zone sentiment engine scoring resistance reasons against discomfort levels across 1,000 employee responses.',
      'Delivered Phase 1 for a client presenting at Web Summit 2025; authored the Phase 2 production proposal, team structure and financials included, and won it.',
    ],
    detailedBullets: [
      'Built a GPT-4o assistant with in-app action execution: the model navigates the platform and runs analyses on the user\u2019s behalf rather than only answering questions.',
      'Designed a 25-zone sentiment engine scoring 5 resistance reasons against 5 discomfort levels across 1,000 employee survey responses, surfacing where AI adoption stalls and why.',
      'Implemented an 8-dimension capability maturity model scored against industry benchmarks with automated gap detection.',
      'Delivered Phase 1 on contract for a client presenting at Web Summit 2025; platform is live in production.',
      'Authored the winning Phase 2 production proposal, including team structure and financials.',
    ],
  },
  {
    title: 'Lead Engineer',
    company: 'Dyia (InitDev)',
    period: 'May 2026 – Jun 2026',
    oneLiner: 'Field-service SaaS, live with paying subscribers. dyia.io',
    bullets: [
      'Owned end-to-end delivery across 70 API routes: tiered Stripe subscriptions with signed webhook verification and idempotent plan grants, Anthropic-powered business intelligence, and Google Maps crew dispatch.',
      'Resolved a live billing incident end to end in production and wrote the release QA process that now gates every InitDev studio build.',
    ],
    detailedBullets: [
      'Shipped a field-service SaaS to live revenue across 70 API routes: dispatch, invoicing, and job profitability in one system.',
      'Built tiered Stripe subscriptions with signed webhook verification and idempotent plan grants.',
      'Integrated Anthropic-powered business intelligence reading live job and profit data.',
      'Instrumented Sentry across edge and server runtimes; diagnosed and resolved a live billing incident end to end.',
      'Documented the release QA process that now gates every InitDev studio build.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Animalia (InitDev)',
    period: 'Apr 2026 – Jun 2026',
    oneLiner: 'Headless Shopify storefront for pet wellness. animalia.market',
    bullets: [
      'Built a typed domain layer unifying Shopify Storefront, Cart, and Admin APIs across 33 GraphQL operations.',
      'Designed a deterministic merchandising engine, no LLM in the page render path, plus an AI product photography pipeline that writes back through the Admin API.',
    ],
    detailedBullets: [
      'Built a typed domain layer unifying Shopify Storefront, Cart, and Admin APIs across 33 GraphQL operations.',
      'Designed a deterministic merchandising engine ranking catalog copy by revenue weight; keeping the LLM out of the render path made ranking fully unit-testable and fast.',
      'Built an AI product photography pipeline that reads the Admin API, generates brand-constrained imagery with fal.ai, and writes results back to the catalog.',
      'Storefront live and pre-launch on Next.js 16, Tailwind 4, and TypeScript.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Company Challenges — Limpid&Co (client via InitDev)',
    period: 'Apr 2026 – Jun 2026',
    oneLiner: 'Enterprise learning platform, delivered and invoiced. companychallenges.com',
    bullets: [
      'Built a reusable content architecture: author a challenge once, run it across unlimited cohorts without duplicating content.',
      'Traced a production aggregate-query failure to a PostgREST regression after a Supabase upgrade and shipped the fix within hours.',
    ],
    detailedBullets: [
      'Built a reusable content architecture separating authored material from cohort instances: author once, run across unlimited cohorts.',
      'Implemented TipTap rich content editing across 73 source files and lifecycle email automation on Vercel cron.',
      'Owned production incident response: traced an aggregate-query failure to a PostgREST regression after a Supabase upgrade and shipped the fix within hours of it surfacing.',
      'Delivered and invoiced with Stripe billing and Resend transactional email.',
    ],
  },
  {
    title: 'Platform Engineer',
    company: 'Strengthening the Saints (InitDev, team build)',
    period: 'Feb 2026 – Jun 2026',
    oneLiner:
      'Church discipleship platform: 84 routes, 161 server actions, 204 RLS policies, 82 migrations.',
    bullets: [
      'Contributed across a multi-tenant Postgres platform with row-level security (204 policies) so each congregation owns its own data and shepherding workflows.',
      'Built TipTap authoring with scripture insertion; CI runs lint, typecheck, build, and Playwright smoke tests on every push.',
    ],
    detailedBullets: [
      'Contributed across a team-built platform at real scale: 84 routes, 161 server actions, and 204 row-level security policies across 82 migrations.',
      'Multi-tenant Postgres architecture where data ownership is an architectural requirement: each congregation owns its own data and shepherding workflows.',
      'Built TipTap authoring for sermons and studies with scripture verse insertion and text normalization.',
      'Shipped through a CI pipeline running lint, typecheck, build, and Playwright smoke tests on every push, with documented security remediation.',
    ],
  },
  {
    title: 'Primary Engineer',
    company: 'AI Blueprint (InitDev)',
    period: 'Jan 2026 – Mar 2026',
    oneLiner: 'Multi-studio AI creative platform with a real-money credit economy. Shipped, revenue.',
    bullets: [
      'Designed an atomic SQL credit ledger under a non-negative constraint, with credits escrowed during generation and automatically refunded when a model fails.',
      'Implemented idempotent Stripe webhooks and duplicate-subscription guards: replayed events cannot double-charge or double-grant.',
    ],
    detailedBullets: [
      'Designed an atomic SQL credit ledger under a non-negative constraint, so the ledger cannot go negative under concurrent spend.',
      'Built escrowed credit spend: credits are held during AI generation and automatically refunded when a model fails, so customers never pay for failed output.',
      'Implemented idempotent Stripe webhook processing with duplicate-subscription guards: replayed events cannot double-charge or double-grant.',
      'Shipped to revenue on Next.js 15, Supabase, fal.ai, and Clerk. Billing stays correct even when the AI does not.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Inflio (InitDev)',
    period: 'Jun 2025 – Feb 2026',
    oneLiner: 'AI video repurposing platform. 119k lines authored solo, wound down after validation.',
    bullets: [
      'Sole engineer across 399 TypeScript files and 260 commits: clip generation, transcription, subtitle editing, and multi-platform publishing.',
      'Wound the product down after market validation with a documented close-out: removed 14,600 lines of dead code and left a clean 27-second build.',
    ],
    detailedBullets: [
      'Sole engineer for eight months across 399 TypeScript files and 119k lines: clip generation, transcription, subtitle editing, and scheduling.',
      'Built multi-platform publishing across the major social destinations from a single pipeline.',
      'Validated the build, not the market; made the shutdown call and executed it properly: 14,600 lines of dead code removed, a clean 27-second build left behind.',
    ],
  },
  {
    title: 'Primary Engineer',
    company: 'ConvoAI Studio (InitDev)',
    period: 'Nov 2025 – Jan 2026',
    oneLiner: 'Real-time AI video platform with a clinical triage pipeline.',
    bullets: [
      'Built a typed Tavus API v2 integration layer (personas, replicas, conversations, live webhook routing) and Claude structured symptom extraction into generated PDF reports.',
      'Designed dual-path completion with deduplication: a missed third-party callback degrades to polling instead of losing a patient report, and dedup guarantees it is never delivered twice.',
    ],
    detailedBullets: [
      'Built a full Tavus API v2 integration layer: personas, replicas, conversations, and live webhook event routing.',
      'Implemented Claude structured symptom extraction feeding generated PDF reports and automated delivery.',
      'Designed dual-path completion with deduplication because third-party delivery cannot be trusted clinically: a missed callback degrades to polling instead of losing the report.',
      'Delivery guarantees hold in both directions: the patient never misses a report and never receives it twice.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Drip (InitDev)',
    period: 'Oct 2025 – Dec 2025',
    oneLiner: 'Privacy-first AI relationship companion. Investor-demo ready.',
    bullets: [
      'Sole author of 528 commits across 98 API routes and 38 migrations: dual-store memory (Postgres + Pinecone) with ownership-scoped retrieval so partners can never read each other\u2019s memories.',
      'Built a human-in-the-loop operator console: every AI-drafted message passes draft, approve, send before reaching a user.',
    ],
    detailedBullets: [
      'Sole author of 528 commits across 98 API routes and 38 migrations in a three-month build.',
      'Designed dual-store memory: Postgres for structured data and Pinecone for semantic recall, with cross-store rollback on partial failure.',
      'Enforced privacy with ownership-scoped embedding filters at the query layer, not just the prompt: two partners share one AI companion and can never read each other\u2019s memories.',
      'Built a human-in-the-loop operator console: every AI-drafted message passes draft, approve, send before reaching a user.',
    ],
  },
  {
    title: 'Consulting Engineer',
    company: 'Upwork — Top Rated Plus',
    period: '2025 – Present',
    oneLiner: '100% Job Success. AI SaaS, full-stack, and automation engagements.',
    bullets: [
      'Delivered enterprise SaaS hardening, DTC full-stack builds, and AI automation engagements.',
      'Every completed engagement rated 5.0.',
    ],
    detailedBullets: [
      'Delivered enterprise SaaS hardening, DTC full-stack builds, and AI automation engagements for US clients.',
      'Top Rated Plus standing with 100% Job Success; every completed engagement rated 5.0.',
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
