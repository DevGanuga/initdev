/**
 * Single source of truth for the hire page.
 *
 * Timeline months are indexed from TIMELINE_START (Oct 2025 = 0) so the
 * delivery chart, the command palette and the case studies can never drift
 * apart. `end` is exclusive: an engagement running Oct–Dec is [0, 3).
 */

export const TIMELINE_MONTHS = [
  'oct 25', 'nov', 'dec', 'jan 26', 'feb', 'mar',
  'apr', 'may', 'jun', 'jul', 'aug',
];

export const TIMELINE_SPAN = TIMELINE_MONTHS.length; // 11 months to "now"

export const person = {
  name: 'Dev Ganugapenta',
  title: 'senior product engineer at initdev',
  focus: 'ai products / saas platforms / systems architecture',
  location: 'west palm beach, fl',
  email: 'dganuga@gmail.com',
  github: 'DevGanuga',
  githubUrl: 'https://github.com/DevGanuga',
  linkedin: 'https://www.linkedin.com/in/dev-ganuga-4b3b6431a',
  upwork: 'https://www.upwork.com/freelancers/~01f0e7e8b52c4ea315',
  resume: '/resume/Dev-Ganugapenta-Resume.pdf',
  status: 'open to senior w2 roles',
  summary:
    'i take a domain and ship it. hand me an ambiguous business problem and you get back a live platform: privacy-first ai memory, real-money credit economies, clinical triage pipelines. billing, reliability and failure handling are thought through before the first commit.',
};

export const roleTypes = [
  'senior product engineer',
  'product architect',
  'staff product engineer',
  'founding engineer',
  'ai product engineer',
];

export const stats = [
  { value: '7', label: 'products shipped in 30–90 day cycles', sub: 'oct 2025 to now' },
  { value: '2', label: 'parallel builds at peak', sub: 'without slipping a cycle' },
  { value: '1,197', label: 'github contributions this year', sub: '96% shipped commits' },
  { value: '100%', label: 'job success, every review 5.0', sub: 'upwork top rated plus' },
];

export type Engagement = {
  id: string;
  name: string;
  tagline: string;
  role: string;
  kind: 'studio' | 'client';
  /** inclusive month index */
  start: number;
  /** exclusive month index */
  end: number;
  ongoing?: boolean;
  period: string;
  duration: string;
  statusLabel: string;
  url: string | null;
  github: string | null;
  pdf: string | null;
  problem: string;
  approach: string[];
  outcome: string;
  tech: string[];
  /** explicit gradient stops so the bar never depends on tailwind jit */
  barFrom: string;
  barTo: string;
  dot: string;
};

export const engagements: Engagement[] = [
  {
    id: 'ai-navigator',
    name: 'AI Navigator',
    tagline: 'enterprise ai readiness platform',
    role: 'lead engineer',
    kind: 'client',
    start: 7,
    end: 11,
    ongoing: true,
    period: 'may 2026 – present',
    duration: 'phase 2 under contract',
    statusLabel: 'live',
    url: 'https://navigator.leadingwith.ai',
    github: null,
    pdf: '/portfolio/ai-navigator-showcase.pdf',
    problem:
      'enterprises roll out ai and adoption quietly stalls. leadership cannot see which teams are resisting, or why, so every intervention is a guess.',
    approach: [
      'gpt-4o assistant that executes real navigation and analysis actions in-app, not just answers questions',
      '25-zone sentiment engine scoring 5 resistance reasons against 5 discomfort levels across 1,000 responses',
      '8-dimension capability maturity model scored against industry benchmark with automated gap detection',
    ],
    outcome:
      'phase 1 delivered and invoiced. i wrote the phase 2 production proposal, team structure and financials included, and it is now in development under contract.',
    tech: ['next.js', 'openai gpt-4o', 'postgres', 'data viz', 'enterprise auth'],
    barFrom: '#6366f1',
    barTo: '#3b82f6',
    dot: '#818cf8',
  },
  {
    id: 'dyia',
    name: 'Dyia',
    tagline: 'field-service saas',
    role: 'lead engineer',
    kind: 'studio',
    start: 7,
    end: 10,
    period: 'may 2026 – jul 2026',
    duration: '90 day cycle',
    statusLabel: 'live, paying subscribers',
    url: 'https://dyia.io',
    github: 'https://github.com/DevGanuga/dyiabase-master',
    pdf: '/portfolio/dyia-technical-showcase.pdf',
    problem:
      'service businesses run dispatch in one tool, invoicing in another and have no idea which jobs are actually profitable.',
    approach: [
      'tiered stripe subscriptions with signed webhook verification and idempotent plan grants',
      'anthropic-powered business intelligence reading live job and profit data',
      'google maps dispatch for crews, sentry across edge and server runtimes',
    ],
    outcome:
      'shipped to live revenue with paying subscribers. the documented release qa process built here now gates every studio build.',
    tech: ['next.js 15', 'supabase', 'anthropic', 'stripe', 'google maps', 'sentry'],
    barFrom: '#10b981',
    barTo: '#14b8a6',
    dot: '#34d399',
  },
  {
    id: 'animalia',
    name: 'Animalia',
    tagline: 'headless shopify storefront',
    role: 'sole engineer',
    kind: 'studio',
    start: 6,
    end: 9,
    period: 'apr 2026 – jun 2026',
    duration: '90 day cycle',
    statusLabel: 'storefront live, pre-launch',
    url: 'https://www.animalia.market',
    github: 'https://github.com/DevGanuga/animaliamarket',
    pdf: '/portfolio/animalia-technical-showcase.pdf',
    problem:
      'raw supplier catalog text needs to become a storefront that converts, and an llm sitting in the page render path is both slow and untestable.',
    approach: [
      'typed domain layer unifying shopify storefront, cart and admin apis across 33 graphql operations',
      'deterministic merchandising engine ranking catalog copy by revenue weight, no llm in the hot path',
      'ai product photography pipeline that reads the admin api, generates brand-constrained imagery and writes back',
    ],
    outcome:
      'storefront live and pre-launch. merchandising logic is fully unit-testable because the ranking never calls a model at request time.',
    tech: ['next.js 16', 'shopify graphql', 'fal.ai', 'typescript', 'tailwind 4'],
    barFrom: '#14b8a6',
    barTo: '#06b6d4',
    dot: '#2dd4bf',
  },
  {
    id: 'company-challenges',
    name: 'Company Challenges',
    tagline: 'enterprise learning platform',
    role: 'sole engineer',
    kind: 'client',
    start: 6,
    end: 9,
    period: 'apr 2026 – jun 2026',
    duration: '90 day cycle',
    statusLabel: 'delivered, invoiced',
    url: 'https://companychallenges.com',
    github: null,
    pdf: '/portfolio/company-challenges-technical-showcase.pdf',
    problem:
      'the client needed to author a challenge once and run it across unlimited cohorts, without duplicating content per cohort.',
    approach: [
      'reusable content architecture separating authored material from cohort instances',
      'tiptap rich content editing across 73 source files, vercel cron lifecycle emails',
      'production incident response when a supabase upgrade silently broke aggregate queries',
    ],
    outcome:
      'live, invoiced and delivered. i traced the aggregate failure to a postgrest regression and shipped the fix within hours of it surfacing.',
    tech: ['next.js 15', 'supabase', 'tiptap', 'stripe', 'resend'],
    barFrom: '#f97316',
    barTo: '#f59e0b',
    dot: '#fb923c',
  },
  {
    id: 'ai-blueprint',
    name: 'AI Blueprint',
    tagline: 'multi-studio ai creative platform',
    role: 'primary engineer',
    kind: 'studio',
    start: 3,
    end: 6,
    period: 'jan 2026 – mar 2026',
    duration: '90 day cycle',
    statusLabel: 'shipped, revenue',
    url: null,
    github: null,
    pdf: '/portfolio/ai-blueprint-technical-showcase.pdf',
    problem:
      'customers spend real money on ai generations that fail unpredictably. naive billing either double-charges on webhook replay or silently eats the credit.',
    approach: [
      'atomic sql credit spend under a non-negative constraint, so the ledger cannot go negative under concurrency',
      'credits escrowed during generation and automatically refunded when a model fails',
      'idempotent stripe webhooks: replayed events cannot double-charge or double-grant',
    ],
    outcome:
      'shipped and generating revenue. billing stays correct even when the ai does not, which is the whole point.',
    tech: ['next.js 15', 'supabase', 'fal.ai', 'stripe', 'clerk'],
    barFrom: '#a855f7',
    barTo: '#d946ef',
    dot: '#c084fc',
  },
  {
    id: 'convoai',
    name: 'ConvoAI Studio',
    tagline: 'real-time ai video platform',
    role: 'primary engineer',
    kind: 'studio',
    start: 1,
    end: 4,
    period: 'nov 2025 – jan 2026',
    duration: '90 day cycle',
    statusLabel: 'shipped',
    url: null,
    github: 'https://github.com/DevGanuga/narratorapp',
    pdf: '/portfolio/convoai-studio-technical-showcase.pdf',
    problem:
      'a clinical triage flow driven by live video, where a dropped third-party webhook means a patient report never gets delivered.',
    approach: [
      'full tavus api v2 integration layer: personas, replicas, conversations, live webhook event routing',
      'claude structured symptom extraction feeding generated pdf reports and automated delivery',
      'dual-path completion with deduplication, because third-party delivery cannot be trusted clinically',
    ],
    outcome:
      'shipped. a missed callback degrades to polling instead of losing the report, and dedup guarantees the patient never gets it twice.',
    tech: ['next.js 15', 'tavus api v2', 'anthropic', 'supabase', 'react-pdf'],
    barFrom: '#f43f5e',
    barTo: '#ef4444',
    dot: '#fb7185',
  },
  {
    id: 'drip',
    name: 'Drip',
    tagline: 'privacy-first ai companion',
    role: 'sole engineer',
    kind: 'studio',
    start: 0,
    end: 3,
    period: 'oct 2025 – dec 2025',
    duration: '90 day cycle',
    statusLabel: 'investor-demo ready',
    url: null,
    github: null,
    pdf: '/portfolio/drip-technical-showcase.pdf',
    problem:
      'two partners share one ai companion and neither may ever access the other\u2019s memories. a single leaked retrieval breaks the product and the trust behind it.',
    approach: [
      'dual-store memory, postgres for structured data and pinecone for semantic recall, with cross-store rollback',
      'ownership-scoped embedding filters enforcing privacy at the query layer, not just the prompt',
      'human-in-the-loop console: every ai-drafted message passes draft, approve, send before reaching a user',
    ],
    outcome:
      'investor-demo ready across 98 api routes and 38 migrations, authored solo. privacy holds at the data model, the retrieval layer and the prompt.',
    tech: ['next.js 15', 'supabase', 'pinecone', 'openai', 'stripe', 'clerk'],
    barFrom: '#3b82f6',
    barTo: '#6366f1',
    dot: '#60a5fa',
  },
];

export const capabilities = [
  {
    key: 'ai',
    label: 'ai engineering',
    line: 'llm systems that assume the model will fail',
    items: [
      'openai structured output + streaming',
      'anthropic claude extraction',
      'pinecone retrieval + embeddings',
      'human-in-the-loop review flows',
      'tavus video, fal.ai generation',
      'langgraph + n8n agent workflows',
    ],
  },
  {
    key: 'billing',
    label: 'payments and billing',
    line: 'money that stays correct through failure',
    items: [
      'stripe subscriptions + customer portal',
      'idempotent webhook processing',
      'atomic credit ledgers',
      'escrowed spend, automatic refunds',
      'tiered and usage pricing',
    ],
  },
  {
    key: 'platform',
    label: 'platform and data',
    line: 'the boring parts, done properly',
    items: [
      'typescript, next.js app router, react',
      'postgres + supabase row-level security',
      'schema design across 38–82 migrations',
      'rest and graphql api design',
      'shopify headless commerce',
      'vercel edge, cron, sentry, ci/cd',
    ],
  },
];

export const credentials = [
  {
    institution: 'Harvard Business School',
    credential: 'credential of readiness: analytics, strategy & management',
    detail: 'boston, ma',
    year: '2025',
  },
  {
    institution: 'Stanford University School of Engineering',
    credential: 'strategic planning professional',
    detail: 'certification',
    year: '2024',
  },
  {
    institution: 'IBM',
    credential: 'python for data science, ai & development specialist',
    detail: 'certification',
    year: '2024',
  },
  {
    institution: 'McFatter Technical College',
    credential: 'technical degree: computer science & network support',
    detail: 'davie, fl',
    year: '2024',
  },
];

export const testimonials = [
  {
    quote:
      'I contacted Dev for a long term project and his communication during has been great, going above and beyond to take care of any details along the way.',
    project: 'enterprise saas platform',
    endorsements: ['committed to quality', 'accountable for outcomes', 'detail oriented'],
  },
  {
    quote: 'Dev is bright, hard-working and an expert at modern development.',
    project: 'full-stack dtc platform',
    endorsements: ['committed to quality', 'accountable for outcomes'],
  },
  {
    quote:
      'Dev is a great Engineer, he has strong technical skills and has been able to bring my AI app vision to life with quality work. I would recommend Dev.',
    project: 'ai application build',
    endorsements: ['committed to quality'],
  },
  {
    quote:
      'Hired him to consult me on some AI tasks and he did a great job. Helped me understand what I was doing better and next steps to take.',
    project: 'ai architecture consultation',
    endorsements: ['clear communicator', 'solution oriented'],
  },
];

export const priorRoles = [
  {
    title: 'ai automation lead',
    org: 'yorali usa',
    period: '2023 – 2024',
    note: 'boynton beach, fl',
    bullets: [
      'cut customer acquisition cost 45% and manual process load 60%',
      'trained a team of 8 to 95% adoption, 30% lift in sales productivity',
    ],
  },
  {
    title: 'business development manager',
    org: '4d global, an inc. 5000 company',
    period: '2023',
    note: 'miami, fl',
    bullets: [
      '35% more successful appointments, 25% growth in qualified leads',
    ],
  },
];

export const sections = [
  { id: 'record', label: 'delivery record' },
  { id: 'proof', label: 'references' },
  { id: 'capabilities', label: 'capabilities' },
  { id: 'credentials', label: 'credentials' },
  { id: 'fit', label: 'role fit' },
  { id: 'contact', label: 'contact' },
];
