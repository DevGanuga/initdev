/**
 * Single source of truth for the talent page.
 *
 * Timeline months are indexed from Jun 2025 = 0 so the delivery chart, the
 * command palette and the case studies can never drift apart. `end` is
 * exclusive: an engagement running Jun–Aug is [0, 3).
 */

export const TIMELINE_MONTHS = [
  'jun 25', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
  'jan 26', 'feb', 'mar', 'apr', 'may', 'jun',
];

export const TIMELINE_SPAN = TIMELINE_MONTHS.length; // jun 2025 through jun 2026

export const person = {
  name: 'Dev Ganugapenta',
  title: 'full stack engineer',
  focus: 'full-stack & ai applications / saas / payments infrastructure',
  location: 'west palm beach, fl',
  phone: '(954) 305-4540',
  phoneHref: 'tel:+19543054540',
  email: 'dganuga@gmail.com',
  github: 'DevGanuga',
  githubUrl: 'https://github.com/DevGanuga',
  linkedin: 'https://www.linkedin.com/in/dev-ganuga-4b3b6431a',
  upwork: 'https://www.upwork.com/freelancers/~01f0e7e8b52c4ea315',
  resume: '/resume/Dev-Ganugapenta-Resume.pdf',
  resumeDetailed: '/resume/Dev-Ganugapenta-Resume-Detailed.pdf',
  status: 'open to w2 roles',
  summary:
    'i build production platforms from a blank repo and take them to market. three startups in the last year as lead or sole engineer — two generating revenue — limpid&co\u2019s production software in amsterdam, including a platform presented at web summit 2025, and animalia, a personal marketplace.',
};

export const roleTypes = [
  'full stack engineer',
  'ai application engineer',
  'product engineer',
  'founding engineer',
];

export const stats = [
  { value: '7', label: 'production platforms shipped', sub: 'jun 2025 to jun 2026' },
  { value: '4', label: 'products built from zero', sub: '3 startups + animalia, personal' },
  { value: '3', label: 'platforms for one enterprise client', sub: 'limpid&co, amsterdam' },
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
  period: string;
  duration: string;
  statusLabel: string;
  url: string | null;
  github: string | null;
  /** full technical deep dive */
  pdf: string | null;
  /** condensed one-page summary */
  onePager: string | null;
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
    tagline: 'enterprise ai readiness platform · limpid&co, amsterdam',
    role: 'lead full stack engineer',
    kind: 'client',
    start: 4,
    end: 13,
    period: 'oct 2025 – jun 2026',
    duration: 'oct 25 – jun 26',
    statusLabel: 'delivered, live in production',
    url: 'https://navigator.leadingwith.ai',
    github: null,
    pdf: '/portfolio/ai-navigator-showcase.pdf',
    onePager: null,
    problem:
      'enterprises roll out ai and adoption stalls. leadership cannot see which teams are resisting, or why. limpid&co needed a live platform in time for web summit 2025.',
    approach: [
      'built the production platform: gpt-4o assistant that navigates the product and runs analyses',
      '25-zone sentiment engine on 1,000+ employee responses — five resistance reasons against five discomfort levels',
      '8-dimension capability maturity model with automated gap detection',
    ],
    outcome:
      'live in production at navigator.leadingwith.ai. presented at web summit 2025. i wrote the phase 2 production proposal (scope, team, budget) and won the follow-on contract.',
    tech: ['next.js', 'openai gpt-4o', 'postgres', 'data viz', 'enterprise auth'],
    barFrom: '#6366f1',
    barTo: '#3b82f6',
    dot: '#818cf8',
  },
  {
    id: 'dyia',
    name: 'Dyia',
    tagline: 'ai business operating system for the trades · built from zero',
    role: 'full stack developer (contract)',
    kind: 'studio',
    start: 11,
    end: 13,
    period: 'may 2026 – jun 2026',
    duration: 'may – jun 26',
    statusLabel: 'live, paying subscribers',
    url: 'https://dyia.io',
    github: 'https://github.com/DevGanuga/dyiabase-master',
    pdf: '/portfolio/dyia-technical-showcase.pdf',
    onePager: '/portfolio/dyia-one-pager.pdf',
    problem:
      'service businesses run dispatch in one tool, invoicing in another, and cannot see which jobs are profitable.',
    approach: [
      'built the full production product in two months: dispatch, invoicing, job profitability, ~70 api routes',
      'tiered stripe subscriptions with signed webhook verification and idempotent plan grants',
      'anthropic reporting on live job data, google maps crew dispatch, sentry in production',
    ],
    outcome:
      'live at dyia.io with paying subscribers. i diagnosed and fixed the first live billing incident, then wrote the release qa checklist that has gated every release since.',
    tech: ['next.js 15', 'supabase', 'anthropic', 'stripe', 'google maps', 'sentry'],
    barFrom: '#10b981',
    barTo: '#14b8a6',
    dot: '#34d399',
  },
  {
    id: 'animalia',
    name: 'Animalia',
    tagline: 'personal project · pet wellness marketplace',
    role: 'sole engineer',
    kind: 'studio',
    start: 10,
    end: 13,
    period: 'apr 2026 – jun 2026',
    duration: 'apr – jun 26',
    statusLabel: 'storefront live, pre-launch',
    url: 'https://www.animalia.market',
    github: 'https://github.com/DevGanuga/animaliamarket',
    pdf: '/portfolio/animalia-technical-showcase.pdf',
    onePager: '/portfolio/animalia-one-pager.pdf',
    problem:
      'a raw supplier catalog had to become a store that could launch. putting an llm in the page render path would have made it slow and untestable.',
    approach: [
      'only engineer. built the production storefront: typed layer over shopify storefront, cart, and admin apis (33 graphql operations)',
      'merchandising is deterministic ranking weighted by revenue — no llm at render time',
      'ai photography pipeline generates brand-constrained images with fal.ai and writes them back to the catalog',
    ],
    outcome:
      'storefront is live at animalia.market, pre-launch. ranking is unit-testable because it never calls a model at request time.',
    tech: ['next.js 16', 'shopify graphql', 'fal.ai', 'typescript', 'tailwind 4'],
    barFrom: '#14b8a6',
    barTo: '#06b6d4',
    dot: '#2dd4bf',
  },
  {
    id: 'company-challenges',
    name: 'Company Challenges',
    tagline: 'enterprise learning platform · limpid&co, amsterdam',
    role: 'lead full stack engineer',
    kind: 'client',
    start: 10,
    end: 13,
    period: 'apr 2026 – jun 2026',
    duration: 'apr – jun 26',
    statusLabel: 'delivered, invoiced',
    url: 'https://companychallenges.com',
    github: null,
    pdf: '/portfolio/company-challenges-technical-showcase.pdf',
    onePager: '/portfolio/company-challenges-one-pager.pdf',
    problem:
      'limpid&co needed to author a challenge once and run it across any number of cohorts, without copying content each time.',
    approach: [
      'built the production platform: authored material is separate from cohort instances',
      'tiptap authoring, stripe billing, resend email, vercel cron lifecycle emails',
      'owned production support when a supabase upgrade broke aggregate queries',
    ],
    outcome:
      'live at companychallenges.com, delivered and invoiced. i traced the outage to a postgrest regression and shipped the fix the same day.',
    tech: ['next.js 15', 'supabase', 'tiptap', 'stripe', 'resend'],
    barFrom: '#f97316',
    barTo: '#f59e0b',
    dot: '#fb923c',
  },
  {
    id: 'sts',
    name: 'Strengthening the Saints',
    tagline: 'church discipleship platform',
    role: 'full stack engineer, team build',
    kind: 'studio',
    start: 8,
    end: 13,
    period: 'feb 2026 – jun 2026',
    duration: 'feb – jun 26',
    statusLabel: 'shipped, team build',
    url: null,
    github: null,
    pdf: '/portfolio/sts-technical-showcase.pdf',
    onePager: '/portfolio/sts-one-pager.pdf',
    problem:
      'each congregation had to own its own data. that is an architecture problem, not a settings toggle.',
    approach: [
      'production features on a live multi-tenant postgres platform with row-level security',
      'tiptap authoring for sermons and studies, with scripture verse insertion',
      'ci on every push: lint, typecheck, build, playwright smoke tests',
    ],
    outcome:
      'shipped on a team-built production platform: 84 routes, 82 migrations, 200+ rls policies.',
    tech: ['next.js 16', 'supabase + rls', 'tiptap', 'tailwind 4', 'zustand', 'playwright'],
    barFrom: '#84cc16',
    barTo: '#eab308',
    dot: '#a3e635',
  },
  {
    id: 'ai-blueprint',
    name: 'AI Blueprint',
    tagline: 'ai creative suite · built from zero',
    role: 'lead full stack & ai engineer',
    kind: 'studio',
    start: 7,
    end: 10,
    period: 'jan 2026 – mar 2026',
    duration: 'jan – mar 26',
    statusLabel: 'in production, generating revenue',
    url: 'https://aiblueprintrt.com',
    github: null,
    pdf: '/portfolio/ai-blueprint-technical-showcase.pdf',
    onePager: '/portfolio/ai-blueprint-one-pager.pdf',
    problem:
      'customers pay real money for generations that fail. a naive ledger either double-charges on webhook replay or eats the credit.',
    approach: [
      'built the full production platform: multi-studio generation, clerk auth, stripe, paid credits',
      'atomic sql credit ledger that cannot go negative under concurrent spend',
      'credits reserved during generation and refunded if the model fails; stripe webhooks are idempotent',
    ],
    outcome:
      'in production and generating revenue.',
    tech: ['next.js 15', 'supabase', 'fal.ai', 'stripe', 'clerk'],
    barFrom: '#a855f7',
    barTo: '#d946ef',
    dot: '#c084fc',
  },
  {
    id: 'drip',
    name: 'Drip',
    tagline: 'relationship-wellness companion · san diego, ca · built from zero',
    role: 'lead full stack developer & gtm engineer',
    kind: 'studio',
    start: 4,
    end: 7,
    period: 'oct 2025 – dec 2025',
    duration: 'oct – dec 25',
    statusLabel: 'investor-demo ready',
    url: 'https://drip.love',
    github: null,
    pdf: '/portfolio/drip-technical-showcase.pdf',
    onePager: '/portfolio/drip-one-pager.pdf',
    problem:
      'two partners share one companion. neither can ever read the other\u2019s memories. a leaked retrieval breaks the product.',
    approach: [
      'only engineer. built the full product in three months: 98 api routes, 38 migrations',
      'dual-store memory: postgres + pinecone, ownership-scoped retrieval at the query layer',
      'operator console: a human approves every ai-drafted message before it sends',
    ],
    outcome:
      'taken to investor-demo stage. privacy is in the retrieval queries, not the prompt.',
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
    line: 'production llm systems, from retrieval to review',
    items: [
      'openai structured output + streaming',
      'anthropic claude extraction',
      'pinecone retrieval + embeddings',
      'human-in-the-loop review flows',
      'tavus video, fal.ai generation',
      'n8n agent workflows',
    ],
  },
  {
    key: 'billing',
    label: 'payments and billing',
    line: 'stripe, credits, and webhooks in production',
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
    line: 'multi-tenant postgres and full-stack delivery',
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
    institution: 'McFatter Technical College',
    credential: 'technical degree: computer science & network support',
    detail: 'davie, fl · education',
    year: '2024',
  },
  {
    institution: 'Harvard Business School',
    credential: 'core (credential of readiness): analytics, strategy & management',
    detail: 'certification',
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
