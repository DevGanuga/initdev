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
  title: 'senior software engineer at initdev',
  focus: 'full-stack & ai applications / saas / payments infrastructure',
  location: 'west palm beach, fl',
  email: 'dganuga@gmail.com',
  github: 'DevGanuga',
  githubUrl: 'https://github.com/DevGanuga',
  linkedin: 'https://www.linkedin.com/in/dev-ganuga-4b3b6431a',
  upwork: 'https://www.upwork.com/freelancers/~01f0e7e8b52c4ea315',
  resume: '/resume/Dev-Ganugapenta-Resume.pdf',
  resumeDetailed: '/resume/Dev-Ganugapenta-Resume-Detailed.pdf',
  status: 'open to senior w2 roles',
  summary:
    'i build production ai systems end to end. llm integrations that assume the model will fail, stripe billing that stays correct through webhook replay, multi-tenant postgres that keeps every tenant\u2019s data its own. hand me an ambiguous business problem and you get back a live platform.',
};

export const roleTypes = [
  'senior software engineer',
  'senior full-stack engineer',
  'ai application engineer',
  'product engineer',
  'founding engineer',
];

export const stats = [
  { value: '9', label: 'production platforms shipped', sub: 'jun 2025 to jun 2026' },
  { value: '528', label: 'solo commits on one product', sub: 'drip: 98 api routes, 38 migrations' },
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
    tagline: 'enterprise ai readiness platform · leading with ai, a limpid&co division',
    role: 'lead engineer',
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
      'enterprises roll out ai and adoption quietly stalls. leadership cannot see which teams are resisting, or why, so every intervention is a guess. built for a client presenting at web summit 2025.',
    approach: [
      'gpt-4o assistant that executes real navigation and analysis actions in-app, not just answers questions',
      '25-zone sentiment engine scoring 5 resistance reasons against 5 discomfort levels across 1,000 responses',
      '8-dimension capability maturity model scored against industry benchmark with automated gap detection',
    ],
    outcome:
      'phase 1 delivered and invoiced. i wrote the phase 2 production proposal, team structure and financials included, and it won. engagement completed jun 2026, platform live in production.',
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
      'service businesses run dispatch in one tool, invoicing in another and have no idea which jobs are actually profitable.',
    approach: [
      'tiered stripe subscriptions across 70 api routes, with signed webhook verification and idempotent plan grants',
      'anthropic-powered business intelligence reading live job and profit data',
      'google maps dispatch for crews, sentry across edge and server runtimes',
    ],
    outcome:
      'shipped to live revenue with paying subscribers, and owned a live billing incident end to end when one hit. the documented release qa process built here now gates every studio build.',
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
    tagline: 'enterprise learning platform · limpid&co',
    role: 'sole engineer',
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
    id: 'sts',
    name: 'Strengthening the Saints',
    tagline: 'church discipleship platform',
    role: 'platform contributor, team build',
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
      'churches adopting digital tools risk centralizing what belongs to the local congregation. the platform had to strengthen the local church, not replace it, which makes data ownership an architectural requirement rather than a setting.',
    approach: [
      'multi-tenant postgres with row-level security so each church owns its own data and shepherding workflows',
      'tiptap authoring for sermons and studies, with scripture verse insertion and text normalization',
      'hq dashboard, structured discipleship plans, google oauth via supabase auth',
      'ci pipeline running lint, typecheck, build and playwright smoke tests on every push',
    ],
    outcome:
      'a team build at real platform scale: 84 routes, 161 server actions and 204 rls policies across 82 migrations. type-checks and builds clean, with ci and documented security remediation.',
    tech: ['next.js 16', 'supabase + rls', 'tiptap', 'tailwind 4', 'zustand', 'playwright'],
    barFrom: '#84cc16',
    barTo: '#eab308',
    dot: '#a3e635',
  },
  {
    id: 'ai-blueprint',
    name: 'AI Blueprint',
    tagline: 'multi-studio ai creative platform',
    role: 'primary engineer',
    kind: 'studio',
    start: 7,
    end: 10,
    period: 'jan 2026 – mar 2026',
    duration: 'jan – mar 26',
    statusLabel: 'shipped, revenue',
    url: null,
    github: null,
    pdf: '/portfolio/ai-blueprint-technical-showcase.pdf',
    onePager: '/portfolio/ai-blueprint-one-pager.pdf',
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
    start: 5,
    end: 8,
    period: 'nov 2025 – jan 2026',
    duration: 'nov 25 – jan 26',
    statusLabel: 'shipped',
    url: null,
    github: 'https://github.com/DevGanuga/narratorapp',
    pdf: '/portfolio/convoai-studio-technical-showcase.pdf',
    onePager: '/portfolio/convoai-studio-one-pager.pdf',
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
    start: 4,
    end: 7,
    period: 'oct 2025 – dec 2025',
    duration: 'oct – dec 25',
    statusLabel: 'investor-demo ready',
    url: null,
    github: null,
    pdf: '/portfolio/drip-technical-showcase.pdf',
    onePager: '/portfolio/drip-one-pager.pdf',
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
  {
    id: 'inflio',
    name: 'Inflio',
    tagline: 'ai video platform, wound down',
    role: 'sole engineer',
    kind: 'studio',
    start: 0,
    end: 8,
    period: 'jun 2025 – feb 2026',
    duration: 'jun 25 – feb 26',
    statusLabel: 'closed after validation',
    url: null,
    github: 'https://github.com/DevGanuga/inflio',
    pdf: null,
    onePager: null,
    problem:
      'creators lose hours turning long footage into clips, subtitles and scheduled posts. i wanted to know whether one platform could own that entire pipeline, so i built the whole thing to find out.',
    approach: [
      '399 typescript files and 119k lines authored solo: clip generation, transcription, subtitle editing',
      'multi-platform scheduling and publishing across the major social destinations',
      '260 commits over eight months as the single engineer on the codebase',
    ],
    outcome:
      'the build validated, the market did not. i made the call to shut it down and did it properly: 14,600 lines of dead code removed and a clean 27 second build left behind. knowing when to stop is part of the job.',
    tech: ['next.js', 'typescript', 'ai transcription', 'scheduling', 'multi-platform publishing'],
    barFrom: '#64748b',
    barTo: '#475569',
    dot: '#94a3b8',
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
