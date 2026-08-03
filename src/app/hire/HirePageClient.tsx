'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  CreditCard,
  Server,
  Download,
  CheckCircle,
  Briefcase,
  Star,
  Linkedin,
  Workflow,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Data ────────────────────────────────────────────────────────────────────

const person = {
  name: 'Dev Ganugapenta',
  title: 'senior product engineer at initdev',
  focus: 'ai products / saas platforms / systems architecture',
  location: 'west palm beach, fl',
  email: 'dganuga@gmail.com',
  github: 'DevGanuga',
  linkedin: 'https://www.linkedin.com/in/dev-ganuga-4b3b6431a',
  upwork: 'https://www.upwork.com/freelancers/~01f0e7e8b52c4ea315',
  status: 'open to senior w2 roles',
  summary:
    'i\u2019m the engineer initdev puts on its hardest builds. hand me an ambiguous business problem and you get back a live platform: privacy-first ai memory, real-money credit economies, clinical triage pipelines. everything i ship goes out with billing, reliability and failure handling already thought through. i don\u2019t take tickets. i take a domain and ship it.',
};

const roleTypes = [
  'senior product engineer',
  'product architect',
  'staff product engineer',
  'founding engineer',
  'ai product engineer',
];

const stats = [
  { value: '7', label: 'products shipped in 30–90 day cycles' },
  { value: '1,197', label: 'github contributions in the last year' },
  { value: '96%', label: 'of activity is shipped commits, not meetings' },
  { value: '100%', label: 'job success score, every engagement rated 5.0' },
];

const testimonials = [
  {
    quote:
      'I contacted Dev for a long term project and his communication during has been great, going above and beyond to take care of any details along the way.',
    project: 'enterprise saas platform',
    context: 'multi-user production build',
    endorsements: ['committed to quality', 'accountable for outcomes', 'detail oriented'],
  },
  {
    quote: 'Dev is bright, hard-working and an expert at modern development.',
    project: 'full-stack dtc platform',
    context: 'end-to-end client engagement',
    endorsements: ['committed to quality', 'accountable for outcomes'],
  },
  {
    quote:
      'Dev is a great Engineer, he has strong technical skills and has been able to bring my AI app vision to life with quality work. I would recommend Dev.',
    project: 'ai application build',
    context: 'production ai integration',
    endorsements: ['committed to quality'],
  },
  {
    quote:
      'Hired him to consult me on some AI tasks and he did a great job. Helped me understand what I was doing better and next steps to take. I would recommend.',
    project: 'ai architecture consultation',
    context: 'technical advisory',
    endorsements: ['committed to quality', 'clear communicator', 'solution oriented'],
  },
];

/* Big names lead. Phrased the way the resume phrases them. */
const credentials = [
  {
    institution: 'Harvard Business School',
    credential: 'credential of readiness: analytics, strategy & management',
    detail: 'boston, ma',
    year: '02/2025',
    accent: 'border-l-red-500/60',
  },
  {
    institution: 'Stanford University School of Engineering',
    credential: 'strategic planning professional',
    detail: 'certification',
    year: '2024',
    accent: 'border-l-rose-400/60',
  },
  {
    institution: 'IBM',
    credential: 'python for data science, ai & development specialist',
    detail: 'certification',
    year: '2024',
    accent: 'border-l-blue-500/60',
  },
  {
    institution: 'McFatter Technical College',
    credential: 'technical degree: computer science & network support services',
    detail: 'davie, fl',
    year: '06/2024',
    accent: 'border-l-cyan-500/60',
  },
];

const experience = [
  {
    title: 'senior product engineer',
    org: 'initdev',
    period: '2025 - present',
    type: '30–90 day delivery cycles',
    description:
      'lead engineer on initdev product builds. each engagement is a 30–90 day cycle from domain model to production: ai integration, billing, and multi-tenant data.',
    bullets: [
      'dyia (may–jul 2026). field-service saas to live revenue: stripe billing, anthropic intelligence, sentry monitoring.',
      'animalia (apr–jun 2026). headless shopify storefront: typed graphql domain layer, merchandising and ai photography pipelines.',
      'ai blueprint (jan–mar 2026). real-money credit economy with escrowed spend and idempotent stripe webhooks.',
      'convoai studio (nov 2025–jan 2026). tavus video ai and claude clinical extraction into pdf reports.',
      'drip (oct–dec 2025). privacy-first ai companion: dual-store memory, hitl operator console, 98 api routes.',
    ],
  },
  {
    title: 'enterprise delivery engineer',
    org: 'initdev, client contracts',
    period: '2025 - present',
    type: 'invoiced 30–90 day cycles',
    description:
      'scoped, built, and delivered production platforms for enterprise clients under contract.',
    bullets: [
      'ai navigator (may 2026–present). enterprise ai readiness platform: gpt-4o action chat, 25-zone sentiment heatmap. phase 2 under contract.',
      'company challenges (apr–jun 2026). enterprise learning platform: reusable content architecture, lifecycle emails. live and delivered.',
    ],
  },
  {
    title: 'consulting engineer',
    org: 'upwork, top rated plus',
    period: '2025 - present',
    type: '100% job success, every engagement 5.0',
    description:
      'ai saas, full-stack, and automation engagements alongside studio work.',
    bullets: [
      'enterprise saas hardening, dtc full-stack builds, and ai content / sales-agent automation retainers.',
    ],
  },
  {
    title: 'ai automation lead',
    org: 'yorali usa',
    period: '2023 - 2024',
    type: 'full-time, boynton beach fl',
    description:
      'owned ai-driven sales automation across the organization.',
    bullets: [
      'cut customer acquisition cost 45% and manual process load 60%.',
      'trained a team of 8 to 95% adoption; 30% lift in sales productivity.',
    ],
  },
  {
    title: 'business development manager',
    org: '4d global, an inc. 5000 company',
    period: '2023',
    type: 'full-time, miami fl',
    description:
      'outbound and appointment-booking operations at a healthcare revenue company.',
    bullets: [
      '35% more successful appointments, 25% growth in qualified leads.',
    ],
  },
];

const projects = [
  {
    name: 'dyia',
    tagline: 'saas for service businesses',
    role: 'lead engineer / may–jul 2026',
    status: 'live' as const,
    statusLabel: 'shipped',
    url: 'https://dyia.io' as string | null,
    github: 'https://github.com/DevGanuga/dyiabase-master' as string | null,
    pdf: '/portfolio/dyia-technical-showcase.pdf' as string | null,
    onePager: '/portfolio/dyia-one-pager.pdf' as string | null,
    highlight: 'stripe billing / anthropic intelligence / sentry / release qa',
    tech: ['next.js 15', 'supabase', 'anthropic', 'stripe', 'google maps', 'sentry'],
    accent: 'from-emerald-500/15 to-cyan-500/15',
  },
  {
    name: 'ai navigator',
    tagline: 'enterprise ai readiness platform',
    role: 'lead engineer, client contract / may 2026–present',
    status: 'live' as const,
    statusLabel: 'phase 2 in progress',
    url: 'https://navigator.leadingwith.ai',
    github: null,
    pdf: '/portfolio/ai-navigator-showcase.pdf',
    onePager: null,
    highlight: 'gpt-4o action chat / 25-zone sentiment heatmap / capability scoring',
    tech: ['next.js', 'openai gpt-4o', 'data viz', 'enterprise auth'],
    accent: 'from-indigo-500/15 to-blue-500/15',
  },
  {
    name: 'animalia',
    tagline: 'headless shopify storefront',
    role: 'sole engineer / apr–jun 2026',
    status: 'pre' as const,
    statusLabel: 'pre-launch',
    url: 'https://www.animalia.market',
    github: 'https://github.com/DevGanuga/animaliamarket',
    pdf: '/portfolio/animalia-technical-showcase.pdf',
    onePager: '/portfolio/animalia-one-pager.pdf',
    highlight: 'shopify graphql domain layer / merch engine / ai photography',
    tech: ['next.js 16', 'shopify apis', 'fal.ai', 'typescript', 'tailwind 4'],
    accent: 'from-teal-500/15 to-emerald-500/15',
  },
  {
    name: 'company challenges',
    tagline: 'enterprise learning platform',
    role: 'sole engineer, client contract / apr–jun 2026',
    status: 'live' as const,
    statusLabel: 'delivered',
    url: 'https://companychallenges.com',
    github: null,
    pdf: '/portfolio/company-challenges-technical-showcase.pdf',
    onePager: '/portfolio/company-challenges-one-pager.pdf',
    highlight: 'reusable content architecture / tiptap / lifecycle email',
    tech: ['next.js 15', 'supabase', 'tiptap', 'stripe', 'resend'],
    accent: 'from-orange-500/15 to-amber-500/15',
  },
  {
    name: 'ai blueprint',
    tagline: 'multi-studio ai creative platform',
    role: 'primary engineer / jan–mar 2026',
    status: 'active' as const,
    statusLabel: 'shipped',
    url: null,
    github: null,
    pdf: '/portfolio/ai-blueprint-technical-showcase.pdf',
    onePager: null,
    highlight: 'credit economy / fal.ai / idempotent stripe billing',
    tech: ['next.js 15', 'supabase', 'fal.ai', 'stripe', 'clerk'],
    accent: 'from-purple-500/15 to-pink-500/15',
  },
  {
    name: 'convoai studio',
    tagline: 'ai video conversation platform',
    role: 'primary engineer / nov 2025–jan 2026',
    status: 'active' as const,
    statusLabel: 'shipped',
    url: null,
    github: 'https://github.com/DevGanuga/narratorapp',
    pdf: '/portfolio/convoai-studio-technical-showcase.pdf',
    onePager: '/portfolio/convoai-studio-one-pager.pdf',
    highlight: 'tavus video ai / claude clinical extraction / webhook reliability',
    tech: ['next.js 15', 'tavus api v2', 'anthropic', 'supabase', 'react-pdf'],
    accent: 'from-rose-500/15 to-red-500/15',
  },
  {
    name: 'drip',
    tagline: 'ai relationship companion',
    role: 'sole engineer / oct–dec 2025',
    status: 'live' as const,
    statusLabel: 'investor-demo',
    url: null,
    github: null,
    pdf: '/portfolio/drip-technical-showcase.pdf',
    onePager: '/portfolio/drip-one-pager.pdf',
    highlight: 'privacy-first dual-store memory / hitl console / openai engine',
    tech: ['next.js 15', 'supabase', 'pinecone', 'openai', 'stripe', 'clerk'],
    accent: 'from-blue-500/15 to-indigo-500/15',
  },
];

const skills = [
  {
    key: 'frontend',
    icon: <Code2 className="w-4 h-4" />,
    label: 'frontend and frameworks',
    items: ['next.js 15/16 app router', 'react 19', 'typescript 5', 'tailwind css 4', 'framer motion', 'zustand 5', 'tiptap 3'],
  },
  {
    key: 'ai',
    icon: <Cpu className="w-4 h-4" />,
    label: 'ai and ml',
    items: ['openai (structured output, streaming)', 'anthropic claude (extraction)', 'fal.ai gemini 3 pro', 'tavus api v2', 'gpt-4o', 'pinecone vector db', 'hitl system design'],
  },
  {
    key: 'data',
    icon: <Database className="w-4 h-4" />,
    label: 'data and backend',
    items: ['supabase + postgres + rls', 'complex schema design (38-82 migrations)', 'cross-store consistency patterns', 'indexeddb offline-first', 'upstash redis', 'shopify graphql apis'],
  },
  {
    key: 'billing',
    icon: <CreditCard className="w-4 h-4" />,
    label: 'payments and billing',
    items: ['stripe subscriptions + webhooks', 'idempotent webhook processing', 'credit economy design', 'customer portal + checkout', 'tiered pricing'],
  },
  {
    key: 'infra',
    icon: <Server className="w-4 h-4" />,
    label: 'infrastructure',
    items: ['vercel (edge, cron, preview envs)', 'clerk auth middleware', 'sentry production monitoring', 'github actions ci', 'svix webhook verification'],
  },
  {
    key: 'automation',
    icon: <Workflow className="w-4 h-4" />,
    label: 'automation and integration',
    items: ['n8n workflow orchestration', 'zapier multi-service pipelines', 'langgraph agent workflows', 'gohighlevel + ai sales agents', 'notion api integrations', 'fastapi / node.js services'],
  },
];

const statusColor: Record<string, string> = {
  live: 'bg-emerald-400',
  active: 'bg-blue-400',
  pre: 'bg-amber-400',
};

// ─── Component ────────────────────────────────────────────────────────────────

export function HirePageClient() {
  return (
    <main className="min-h-screen bg-[#050505]">

      {/* ── Slim header: no agency funnel, one goal ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/85 border-b border-white/[0.06]">
        <div className="container-custom flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/1966510796844172572-removebg-preview.png"
              alt="InitDev"
              width={80}
              height={26}
              className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-[11px] text-white/30 font-mono border-l border-white/10 pl-3 tracking-wide">
              talent
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${person.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-white/60 hover:text-white rounded-lg border border-white/[0.08] hover:border-white/20 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              email me
            </a>
            <a
              href="/resume/Dev-Ganugapenta-Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-[#0084ff] text-white hover:bg-[#0074e0] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              resume (pdf)
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,100,255,0.07),transparent)]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-start">
            {/* Left: text */}
            <div>
              {/* pfp + open to work badge */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="/images/dev/pfp.png"
                    alt="Dev Ganugapenta"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">{person.status}</span>
                </span>
              </motion.div>

              <motion.h1
                className="text-[clamp(2.8rem,7vw,5rem)] font-extralight tracking-[-0.03em] text-white mb-3 leading-[1.05]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {person.name}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gradient-blue font-light mb-2"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
              >
                {person.title}
              </motion.p>

              <motion.p
                className="text-sm text-white/35 font-mono mb-7 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                {person.focus} · {person.location}
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-white/55 max-w-2xl leading-relaxed mb-9"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
              >
                {person.summary}
              </motion.p>

              {/* Role types */}
              <motion.div
                className="flex flex-wrap gap-2 mb-9"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.36 }}
              >
                {roleTypes.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.07] text-white/50"
                  >
                    {r}
                  </span>
                ))}
              </motion.div>

              {/* Actions */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
              >
                <a
                  href={`mailto:${person.email}`}
                  className="btn-premium inline-flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>get in touch</span>
                </a>
                <a
                  href={person.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#14a800] text-white text-sm font-medium hover:bg-[#118f00] transition-colors"
                >
                  <Star className="w-4 h-4 fill-white" />
                  <span>upwork profile</span>
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin</span>
                </a>
                <a
                  href={`https://github.com/${person.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>github</span>
                </a>
                <a
                  href="/resume/Dev-Ganugapenta-Resume.pdf"
                  download
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>resume (pdf)</span>
                </a>
              </motion.div>
            </div>

            {/* Right: photo (desktop only) */}
            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/5]">
                <Image
                  src="/images/dev/cv-photo.png"
                  alt="Dev Ganugapenta working"
                  fill
                  className="object-cover object-[65%_center]"
                  priority
                  sizes="400px"
                />
                {/* Subtle gradient fade on left edge to blend with page bg */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505]/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505]/70 to-transparent pointer-events-none" />
              </div>
              {/* Floating code badge */}
              <div className="absolute -bottom-3 -left-4 bg-[#0a0a0a] border border-white/[0.09] rounded-xl px-4 py-2.5 shadow-xl">
                <p className="text-[10px] text-white/30 font-mono mb-0.5">current focus</p>
                <p className="text-xs text-white/70 font-mono">next.js · ai · postgres</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-10 border-y border-white/[0.05]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl font-extralight text-gradient-blue mb-1.5">{s.value}</div>
                <div className="text-xs text-white/45 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider mb-3 block">
              01 / portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
              what i&apos;ve built
            </h2>
            <p className="text-white/45 max-w-xl">
              every product here was built at initdev with me as the engineering owner. every
              schema, api, billing system and deploy, personally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── References: proof before the history ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="container-custom">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[#0084ff] text-sm font-medium tracking-wider mb-2 block">
                02 / references
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
                what clients say
              </h2>
              <p className="text-white/40 text-sm max-w-lg">
                verified reviews from production engagements. saas platforms, ai applications, enterprise builds.
              </p>
            </div>
            <div className="sm:ml-auto flex-shrink-0">
              <a
                href={person.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-end gap-1.5 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-[#14a800]/40 hover:bg-white/[0.05] transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white/80">upwork</span>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 font-medium">
                    top rated plus
                  </span>
                </div>
                <p className="text-[11px] text-white/35 font-mono">
                  100% job success · 500+ hours delivered
                </p>
                <p className="text-[11px] text-[#14a800] font-medium inline-flex items-center gap-1">
                  view verified profile
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </p>
              </a>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-5 flex flex-col gap-4 hover:border-blue-500/20 transition-all"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[10px] text-white/30 ml-2 font-mono">5.0</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-white/65 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="flex flex-wrap items-end justify-between gap-3 pt-3 border-t border-white/[0.05]">
                  <div>
                    <p className="text-xs text-white/50 font-medium mb-0.5">{t.project}</p>
                    <p className="text-[11px] text-white/25 mb-1.5">{t.context}</p>
                    <div className="flex flex-wrap gap-1">
                      {t.endorsements.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/8 border border-blue-500/15 text-blue-400/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience / Resume ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[#0084ff] text-sm font-medium tracking-wider mb-3 block">
                03 / experience
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                work history
              </h2>
            </div>
          </motion.div>

          <div className="max-w-3xl space-y-6">
            {experience.map((e, i) => (
              <motion.div
                key={e.org}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 hover:border-blue-500/20 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-medium text-lg">{e.title}</h3>
                    <p className="text-blue-400 text-sm mt-0.5">{e.org}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/30 font-mono bg-white/[0.04] px-3 py-1 rounded-full block">
                      {e.period}
                    </span>
                    <span className="text-[11px] text-white/25 mt-1.5 block">{e.type}</span>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{e.description}</p>
                <ul className="space-y-2.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/45 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500/50 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="container-custom">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider mb-3 block">
              04 / technical skills
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              stack
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.key}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-5 hover:border-blue-500/20 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">{s.icon}</div>
                  <h3 className="text-white text-sm font-medium">{s.label}</h3>
                </div>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/45">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials: the big names lead ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="container-custom">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider mb-3 block">
              05 / credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
              Harvard. Stanford. IBM.
            </h2>
            <p className="text-white/45 max-w-xl">
              the formal backing behind the shipped work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {credentials.map((c, i) => (
              <motion.div
                key={c.institution}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`glass-card p-6 border-l-2 ${c.accent} hover:border-blue-500/20 transition-all`}
              >
                <div className="flex items-start justify-between gap-4 mb-2.5">
                  <h3 className="text-xl md:text-2xl text-white font-light leading-tight">
                    {c.institution}
                  </h3>
                  <span className="text-[11px] text-white/30 font-mono bg-white/[0.04] px-2.5 py-1 rounded-full flex-shrink-0">
                    {c.year}
                  </span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{c.credential}</p>
                <p className="text-xs text-white/25 mt-1.5">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I'm looking for ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#0084ff] text-sm font-medium tracking-wider mb-4 block">
                06 / what i&apos;m looking for
              </span>
              <h2 className="text-4xl font-light text-white mb-6">
                the right
                <span className="block text-gradient-blue">w2 role</span>
              </h2>
              <div className="space-y-4 text-white/55 text-sm leading-relaxed">
                <p>
                  i want to own a product surface, not a backlog column. my value is the full arc:
                  understand the business domain, model it into architecture, ship the product. i
                  want a role where that arc stays intact.
                </p>
                <p>
                  i&apos;m best at a company where ai is core to the product, not bolted on.
                  i&apos;ve shipped five distinct ai integrations to production and my architecture
                  starts from the assumption that models fail: retries, fallbacks, deduplication,
                  and billing that stays correct through all of it.
                </p>
                <p>
                  i want a small-to-mid product team where engineers sit in product decisions. not
                  a team of 200 where architecture is someone else&apos;s job.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {[
                {
                  icon: <Briefcase className="w-4 h-4" />,
                  label: 'role level',
                  value: 'senior / staff product engineer or architect, ic track',
                },
                {
                  icon: <Code2 className="w-4 h-4" />,
                  label: 'stack preference',
                  value: 'typescript / next.js / postgres, or adjacent',
                },
                {
                  icon: <Cpu className="w-4 h-4" />,
                  label: 'domain fit',
                  value: 'ai product, b2b saas, developer tools, fintech',
                },
                {
                  icon: <Server className="w-4 h-4" />,
                  label: 'company stage',
                  value: 'seed through series b',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-5 flex items-center gap-4 hover:border-blue-500/20 transition-all"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">{item.label}</div>
                    <div className="text-sm text-white/75">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="container-custom">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider mb-4 block">
              07 / contact
            </span>
            <h2 className="text-4xl font-light text-white mb-4">
              let&apos;s talk.
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              i respond to every message. if the role is a good fit i&apos;ll say so clearly.
              if it&apos;s not, i&apos;ll say that too.
            </p>

            {/* Attached resume */}
            <div className="glass-card p-5 flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/80 font-medium">Dev Ganugapenta, resume</p>
                  <p className="text-xs text-white/35 mt-0.5">every product as its own entry, dated. ats-friendly pdf.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/resume/Dev-Ganugapenta-Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-[#0084ff] text-white hover:bg-[#0074e0] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  download pdf
                </a>
                <Link
                  href="/hire/resume"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-white/[0.05] text-white/70 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  view online
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${person.email}`}
                className="btn-premium inline-flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                <span>{person.email}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={person.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#14a800] text-white text-sm font-medium hover:bg-[#118f00] transition-colors"
              >
                <Star className="w-4 h-4 fill-white" />
                <span>hire on upwork</span>
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin</span>
              </a>
              <a
                href={`https://github.com/${person.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>DevGanuga</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Slim footer ── */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            Dev Ganugapenta · senior product engineer at{' '}
            <Link href="/" className="text-white/50 hover:text-white transition-colors">
              initdev
            </Link>
          </p>
          <p className="text-xs text-white/25 font-mono">
            west palm beach, fl · remote (us) · {person.email}
          </p>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({ p }: { p: typeof projects[number] }) {
  return (
    <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-[#0084ff]/25 transition-all duration-300 h-full flex flex-col">
      {/* Accent strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${p.accent} opacity-70`} />

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white font-medium">{p.name}</h3>
            <p className="text-white/45 text-xs mt-0.5">{p.tagline}</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-3">
            <span className={`w-1.5 h-1.5 rounded-full ${statusColor[p.status]}`} />
            <span className="text-[10px] text-white/30">{p.statusLabel}</span>
          </div>
        </div>

        {/* Role */}
        <p className="text-[11px] text-white/30 font-mono mb-3">{p.role}</p>

        {/* Highlight */}
        <p className="text-xs text-blue-400/65 mb-4 leading-relaxed">{p.highlight}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4 flex-1 items-end">
          {p.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.04] text-white/35 border border-white/[0.05]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-3 border-t border-white/[0.05]">
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-emerald-400/60 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              <span>{new URL(p.url).hostname.replace('www.', '')}</span>
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-white/35 hover:text-white/70 transition-colors"
            >
              <Github className="w-3 h-3" />
              <span>source</span>
            </a>
          )}
          {p.onePager && (
            <a
              href={p.onePager}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-white/35 hover:text-white/70 transition-colors"
            >
              <Download className="w-3 h-3" />
              <span>one-pager</span>
            </a>
          )}
          {p.pdf && (
            <a
              href={p.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-blue-400/50 hover:text-blue-400 transition-colors ml-auto"
            >
              <Download className="w-3 h-3" />
              <span>deep dive</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
