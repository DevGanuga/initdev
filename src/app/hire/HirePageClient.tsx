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
  GraduationCap,
  Award,
  Star,
  Linkedin,
  Workflow,
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
  title: 'Product Engineer · Systems Architect',
  focus: 'AI Products · SaaS Platforms · Domain Architecture',
  location: 'West Palm Beach, FL',
  email: 'dganuga@gmail.com',
  github: 'DevGanuga',
  linkedin: 'https://www.linkedin.com/in/dev-ganuga-4b3b6431a',
  status: 'Open to senior W2 roles',
  summary:
    'Product engineer who architects the whole thing — the domain model, the system design, and the product decisions in between. Founders across five startups handed me an ambiguous business problem and got back a live platform: privacy-first AI memory, real-money credit economies, deterministic merchandising engines, clinical triage pipelines. I don\'t take tickets; I take a domain, model it into coherent architecture, and ship it to production with the billing, reliability, and failure semantics already thought through.',
};

const roleTypes = [
  'Senior Product Engineer',
  'Product Architect',
  'Staff Product Engineer',
  'Founding Engineer',
  'AI Product Engineer',
];

const stats = [
  { value: '5', label: 'Startups built & technically led' },
  { value: '1,197', label: 'GitHub contributions in the last year' },
  { value: '96%', label: 'Of activity is shipped commits — not meetings' },
  { value: '100%', label: 'Job Success Score — every engagement 5.0' },
];

const testimonials = [
  {
    quote:
      'I contacted Dev for a long term project and his communication during has been great, going above and beyond to take care of any details along the way.',
    project: 'Enterprise SaaS Platform',
    context: 'Multi-user production build',
    endorsements: ['Committed to Quality', 'Accountable for Outcomes', 'Detail Oriented'],
  },
  {
    quote: 'Dev is bright, hard-working and an expert at modern development.',
    project: 'Full-Stack DTC Platform',
    context: 'End-to-end client engagement',
    endorsements: ['Committed to Quality', 'Accountable for Outcomes'],
  },
  {
    quote:
      'Dev is a great Engineer, he has strong technical skills and has been able to bring my AI app vision to life with quality work. I would recommend Dev.',
    project: 'AI Application Build',
    context: 'Production AI integration',
    endorsements: ['Committed to Quality'],
  },
  {
    quote:
      'Hired him to consult me on some AI tasks and he did a great job. Helped me understand what I was doing better and next steps to take. I would recommend.',
    project: 'AI Architecture Consultation',
    context: 'Technical advisory',
    endorsements: ['Committed to Quality', 'Clear Communicator', 'Solution Oriented'],
  },
];

const education = [
  {
    credential: 'Credential of Readiness (CORe)',
    field: 'Analytics, Strategy & Management',
    institution: 'Harvard Business School',
    location: 'Boston, MA',
    year: 'Feb 2025',
    icon: <GraduationCap className="w-5 h-5" />,
    accent: 'from-red-500/10 to-rose-500/10',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
  },
  {
    credential: 'Technical Degree',
    field: 'Computer Science & Network Support Services',
    institution: 'McFatter Technical College',
    location: 'Davie, FL',
    year: 'Jun 2024',
    icon: <GraduationCap className="w-5 h-5" />,
    accent: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
  },
];

const certifications = [
  {
    name: 'Strategic Planning Professional',
    issuer: 'Stanford University School of Engineering',
    year: '2024',
  },
  {
    name: 'Python for Data Science, AI & Development Specialist',
    issuer: 'IBM',
    year: '2024',
  },
];

const experience = [
  {
    title: 'Founding Engineer & Technical Lead',
    org: 'Drip · Dyia · AI Blueprint · ConvoAI Studio · Inflio',
    period: '2024 – Present',
    type: 'Sole technical owner · 5 startups',
    description:
      'The technical half of five founder partnerships — not a hired hand. Owned every technical decision from first schema to production incident: architecture, cloud infrastructure, data modeling, billing systems, AI pipelines, deployment, and monitoring. 1,197 GitHub contributions in the last twelve months, 96% of them shipped commits.',
    bullets: [
      'Drip — Architected the platform around a hard privacy constraint: two partners share one AI companion, neither may ever access the other’s memories. Dual-store design — Postgres for structured partner data, Pinecone for semantic retrieval — with ownership-scoped embedding filters enforcing privacy at the query layer and cross-store rollback so a write never lands in one store without the other. Built the OpenAI conversation engine: strict JSON-schema structured output, 3-attempt exponential backoff, conversation chaining via previous_response_id. 98 API routes, 38 migrations, HITL operator console with a draft→approve→send state machine.',
      'Dyia — Took a field-service SaaS from zero to live production revenue: tiered Stripe subscriptions with signed webhook verification and idempotent plan grants, Anthropic-powered business intelligence, geographic job dispatch with Google Maps clustering, Sentry instrumentation across edge and server runtimes, Vitest coverage, and documented QA evidence packs gating every release.',
      'AI Blueprint — Engineered a real-money credit economy for AI generation: atomic SQL spend under database-level non-negative constraints, credits escrowed while generation runs, automatic refunds on model failure, idempotent Stripe webhook processing. Dual-path fal.ai webhook + polling recovery with result deduplication. 36 pages across four creative studios behind one subscription gate, with identity-preserving Gemini 3 Pro prompt orchestration.',
      'ConvoAI Studio — Built the full Tavus API v2 integration layer (672-line typed client: personas, replicas, conversations, dynamic call-to-action injection, real-time webhook event routing) and a clinical triage pipeline: video conversation → Claude structured symptom extraction → generated PDF clinical report → automated delivery. Dual-path completion with conversation-level deduplication, because third-party event delivery cannot be trusted in a clinical context.',
      'Inflio — Designed and built a production-scale AI video platform: 399 TypeScript files, 119K LOC — clip generation, transcription, subtitle editing, multi-platform scheduling and publishing. Made the honest commercial call to close it after market validation, then shut it down like a professional: 14,600+ lines of dead code removed, clean 27-second build.',
      'Animalia — Own-venture headless commerce: typed domain layer unifying Shopify Storefront, Cart, and Admin GraphQL APIs across 33 operations; deterministic merchandising engine converting raw supplier catalog text into ranked, revenue-weighted storefront intelligence — no LLM in the hot path, fully testable; AI product-photography pipeline that pulls from the Admin API, generates brand-constrained imagery, and writes back automatically.',
    ],
  },
  {
    title: 'Enterprise Delivery Engineer',
    org: 'InitDev — enterprise client contracts',
    period: '2025 – Present',
    type: 'Commercial contracts · invoiced delivery',
    description:
      'Scoped, built, and delivered production platforms for enterprise clients under commercial contract — including proposal authorship, milestone planning, and client-facing QA protocol.',
    bullets: [
      'Company Challenges — Enterprise learning platform, live in production. Designed a reusable content architecture letting administrators author a challenge once and deploy across unlimited sprint cohorts without duplication; TipTap rich-content editing across 73 source files; Vercel Cron lifecycle emails. When a Supabase platform upgrade silently broke aggregate queries in production, diagnosed the PostgREST regression and shipped the fix within hours.',
      'AI Navigator — Enterprise AI readiness platform: GPT-4o chat with action execution, 25-zone organizational sentiment heatmap, capability maturity assessment framework. Authored the Phase 2 production proposal — team structure, milestone plan, and financial breakdown.',
    ],
  },
  {
    title: 'Consulting Engineer — AI & Full-Stack',
    org: 'Upwork · Top Rated Plus',
    period: '2025 – Present',
    type: 'Top-3% performer tier · 100% Job Success',
    description:
      'Ran a client practice in parallel with the startups above — enterprise SaaS hardening, AI application builds, and workflow automation. Every completed engagement rated 5.0 with verified client reviews.',
    bullets: [
      'Architected a fully automated AI content repurposing and publishing system — multi-platform pipeline integrating Zapier, Notion, and AI generation services for a long-term retained client.',
      'Led production hardening and multi-user rollout of an enterprise SaaS platform; owned full-stack development for a DTC startup end-to-end — client review: "an expert at modern development."',
      'Designed and deployed AI sales-agent infrastructure on n8n + GoHighLevel; retained for ongoing AI architecture advisory.',
    ],
  },
  {
    title: 'AI Automation Lead',
    org: 'Yorali USA',
    period: '2023 – 2024',
    type: 'Full-time · Boynton Beach, FL',
    description:
      'Owned AI-driven sales automation across the organization — the bridge role between business operations and engineering that led into full-stack product work.',
    bullets: [
      'Implemented AI-driven sales automation reducing customer acquisition costs by 45%',
      'Built custom automation tooling that cut manual processes by 60% while maintaining 99.8% system uptime across cross-departmental integrations',
      'Trained a team of 8 on the new systems — 95% adoption rate and 30% increase in sales productivity',
    ],
  },
  {
    title: 'Business Development Manager',
    org: '4D Global — an Inc. 5000 company',
    period: '2023',
    type: 'Full-time · Miami, FL',
    description:
      'Systematized outbound and appointment-booking operations at a fast-growth Inc. 5000 healthcare revenue company.',
    bullets: [
      'Streamlined cold outreach and booking workflows with automated follow-ups — 35% increase in successful appointments',
      'Built targeted client acquisition strategy producing 25% growth in qualified leads; negotiated vendor contracts reducing operational costs by 20%',
    ],
  },
  {
    title: 'Early Career — Operations & Digital Marketing',
    org: 'SK Stones · Independent e-commerce ventures',
    period: '2021 – 2022',
    type: 'Full-time & independent',
    description:
      'Ran multi-platform digital marketing at SK Stones and built independent e-commerce operations — including a Japanese import retailer that became the top-trending in its category in North America (Q1 2021). The operating and go-to-market grounding behind everything since.',
    bullets: [
      'Grew multi-platform social presence at SK Stones: 40% engagement lift, 95% positive sentiment',
      'Built international supply chain and fulfillment operations from scratch for direct-to-consumer retail',
    ],
  },
];

const projects = [
  {
    name: 'Drip',
    tagline: 'AI relationship companion',
    role: 'Sole engineer · full platform ownership',
    status: 'live' as const,
    statusLabel: 'Investor-demo',
    url: null as string | null,
    github: null as string | null,
    pdf: '/portfolio/drip-technical-showcase.pdf' as string | null,
    onePager: '/portfolio/drip-one-pager.pdf' as string | null,
    highlight: 'Privacy-first dual-store memory · HITL operator console · 98 API routes',
    tech: ['Next.js 15', 'Supabase', 'Pinecone', 'OpenAI', 'Stripe', 'Clerk'],
    accent: 'from-blue-500/15 to-indigo-500/15',
  },
  {
    name: 'Dyia',
    tagline: 'SaaS for service businesses',
    role: 'Lead engineer · dominant author',
    status: 'live' as const,
    statusLabel: 'Live in production',
    url: 'https://dyia.io',
    github: 'https://github.com/DevGanuga/dyiabase-master',
    pdf: '/portfolio/dyia-technical-showcase.pdf',
    onePager: '/portfolio/dyia-one-pager.pdf',
    highlight: 'Stripe billing · Anthropic AI intelligence · Sentry monitoring · documented QA cycles',
    tech: ['Next.js 15', 'Supabase', 'Anthropic', 'Stripe', 'Google Maps', 'Sentry'],
    accent: 'from-emerald-500/15 to-cyan-500/15',
  },
  {
    name: 'Company Challenges',
    tagline: 'Enterprise learning platform',
    role: 'Sole engineer · enterprise client delivery',
    status: 'live' as const,
    statusLabel: 'Live · Client contract',
    url: 'https://companychallenges.com',
    github: null,
    pdf: '/portfolio/company-challenges-technical-showcase.pdf',
    onePager: '/portfolio/company-challenges-one-pager.pdf',
    highlight: 'Reusable content architecture · TipTap editor · Production incident response',
    tech: ['Next.js 15', 'Supabase', 'TipTap', 'Stripe', 'Resend'],
    accent: 'from-orange-500/15 to-amber-500/15',
  },
  {
    name: 'AI Blueprint',
    tagline: 'Multi-studio AI creative platform',
    role: 'Primary engineer · led 3-person build',
    status: 'active' as const,
    statusLabel: 'Active',
    url: null,
    github: null,
    pdf: '/portfolio/ai-blueprint-technical-showcase.pdf',
    onePager: null,
    highlight: 'Stripe credit economy · fal.ai Gemini 3 Pro · Idempotent billing integrity',
    tech: ['Next.js 15', 'Supabase', 'fal.ai', 'Stripe', 'Clerk'],
    accent: 'from-purple-500/15 to-pink-500/15',
  },
  {
    name: 'ConvoAI Studio',
    tagline: 'AI video conversation platform',
    role: 'Primary engineer · full architecture',
    status: 'active' as const,
    statusLabel: 'Active',
    url: null,
    github: 'https://github.com/DevGanuga/narratorapp',
    pdf: '/portfolio/convoai-studio-technical-showcase.pdf',
    onePager: '/portfolio/convoai-studio-one-pager.pdf',
    highlight: 'Tavus video AI · Claude clinical extraction · Dual-path webhook/polling completion',
    tech: ['Next.js 15', 'Tavus API v2', 'Anthropic', 'Supabase', 'react-pdf'],
    accent: 'from-rose-500/15 to-red-500/15',
  },
  {
    name: 'Animalia',
    tagline: 'Headless Shopify storefront',
    role: 'Sole engineer · commerce architecture',
    status: 'pre' as const,
    statusLabel: 'Pre-launch',
    url: 'https://www.animalia.market',
    github: 'https://github.com/DevGanuga/animaliamarket',
    pdf: '/portfolio/animalia-technical-showcase.pdf',
    onePager: '/portfolio/animalia-one-pager.pdf',
    highlight: 'Deterministic merch engine · AI photography pipeline · 33 GraphQL ops',
    tech: ['Next.js 16', 'Shopify APIs', 'fal.ai', 'TypeScript', 'Tailwind 4'],
    accent: 'from-teal-500/15 to-emerald-500/15',
  },
];

const skills = [
  {
    key: 'frontend',
    icon: <Code2 className="w-4 h-4" />,
    label: 'Frontend & Frameworks',
    items: ['Next.js 15/16 App Router', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Framer Motion', 'Zustand 5', 'TipTap 3'],
  },
  {
    key: 'ai',
    icon: <Cpu className="w-4 h-4" />,
    label: 'AI & ML',
    items: ['OpenAI (structured output, streaming)', 'Anthropic Claude (extraction)', 'fal.ai Gemini 3 Pro', 'Tavus API v2', 'GPT-4o', 'Pinecone vector DB', 'HITL system design'],
  },
  {
    key: 'data',
    icon: <Database className="w-4 h-4" />,
    label: 'Data & Backend',
    items: ['Supabase + Postgres + RLS', 'Complex schema design (38–82 migrations)', 'Cross-store consistency patterns', 'IndexedDB offline-first', 'Upstash Redis', 'Shopify GraphQL APIs'],
  },
  {
    key: 'billing',
    icon: <CreditCard className="w-4 h-4" />,
    label: 'Payments & Billing',
    items: ['Stripe subscriptions + webhooks', 'Idempotent webhook processing', 'Credit economy design', 'Customer portal + checkout', 'Tiered pricing'],
  },
  {
    key: 'infra',
    icon: <Server className="w-4 h-4" />,
    label: 'Infrastructure',
    items: ['Vercel (edge, cron, preview envs)', 'Clerk auth middleware', 'Sentry production monitoring', 'GitHub Actions CI', 'Svix webhook verification'],
  },
  {
    key: 'automation',
    icon: <Workflow className="w-4 h-4" />,
    label: 'Automation & Integration',
    items: ['n8n workflow orchestration', 'Zapier multi-service pipelines', 'LangGraph agent workflows', 'GoHighLevel + AI sales agents', 'Notion API integrations', 'FastAPI / Node.js services'],
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

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,100,255,0.07),transparent)]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-start">
            {/* Left: text */}
            <div>
              {/* Open to work badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">{person.status}</span>
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
                  <span>Get in touch</span>
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`https://github.com/${person.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <Link
                  href="/hire/resume"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </Link>
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
                  src="/images/dev/working-2.jpeg"
                  alt="Dev Ganugapenta working"
                  fill
                  className="object-cover object-center"
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
                <p className="text-xs text-white/70 font-mono">Next.js · AI · Postgres</p>
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

      {/* ── Client Testimonials ── */}
      <section className="py-24 border-b border-white/[0.05]">
        <div className="container-custom">
          {/* Section header */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-2 block">
                Client Engagements
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
                What clients say
              </h2>
              <p className="text-white/40 text-sm max-w-lg">
                Verified reviews from production engagements — SaaS platforms, AI applications, and enterprise builds.
              </p>
            </div>
            <div className="sm:ml-auto flex-shrink-0">
              <div className="inline-flex flex-col items-end gap-1.5 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white/80">Upwork</span>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 font-medium">
                    Top Rated Plus
                  </span>
                </div>
                <p className="text-[11px] text-white/35 font-mono">
                  100% Job Success · 500+ hours delivered
                </p>
              </div>
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

      {/* ── Projects ── */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-2">
              What I&apos;ve built
            </h2>
            <p className="text-white/45 max-w-xl">
              Startups I built and technically led as the founders&apos; engineering
              partner — every schema, API, billing system, and deploy, personally.
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
              <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-3 block">
                Experience
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                Work history
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

      {/* ── Education & Credentials ── */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="container-custom">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-3 block">
              Education & Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Formal background
            </h2>
          </motion.div>

          {/* Degree cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-4 max-w-3xl">
            {education.map((e, i) => (
              <motion.div
                key={e.institution}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-5 hover:border-blue-500/20 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 ${e.iconBg} rounded-lg ${e.iconColor} flex-shrink-0`}>
                    {e.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm leading-snug">{e.credential}</h3>
                    <p className="text-white/45 text-xs mt-0.5 leading-snug">{e.field}</p>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white/60 text-sm font-medium">{e.institution}</p>
                    <p className="text-white/30 text-xs mt-0.5">{e.location}</p>
                  </div>
                  <span className="text-[11px] text-white/30 font-mono bg-white/[0.04] px-2.5 py-1 rounded-full">
                    {e.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification badges */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 max-w-3xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all flex-1"
              >
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/65 leading-snug font-medium">{c.name}</p>
                  <p className="text-[11px] text-white/30 mt-0.5">{c.issuer} · {c.year}</p>
                </div>
              </div>
            ))}
          </motion.div>
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
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-3 block">
              Technical Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Stack
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
              <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
                What I&apos;m looking for
              </span>
              <h2 className="text-4xl font-light text-white mb-6">
                The right
                <span className="block text-gradient-blue">W2 role</span>
              </h2>
              <div className="space-y-4 text-white/55 text-sm leading-relaxed">
                <p>
                  I want to own a product surface, not a backlog column. My value is the full arc —
                  understanding the business domain, modeling it into architecture, and shipping the
                  product — and I want a role where that arc stays intact.
                </p>
                <p>
                  I&apos;m best suited at a company where AI is core to the product — not bolted on.
                  I&apos;ve shipped five distinct AI integrations to production and my architecture
                  starts from the assumption that models fail: retries, fallbacks, deduplication,
                  and billing that stays correct through all of it.
                </p>
                <p>
                  I want to be on a small-to-mid product team where engineers sit in product
                  decisions — not a team of 200 where architecture is someone else&apos;s job.
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
                  label: 'Role level',
                  value: 'Senior / Staff Product Engineer or Architect — IC track',
                },
                {
                  icon: <Code2 className="w-4 h-4" />,
                  label: 'Stack preference',
                  value: 'TypeScript / Next.js / Postgres — or adjacent',
                },
                {
                  icon: <Cpu className="w-4 h-4" />,
                  label: 'Domain fit',
                  value: 'AI product, B2B SaaS, developer tools, fintech',
                },
                {
                  icon: <Server className="w-4 h-4" />,
                  label: 'Company stage',
                  value: 'Seed through Series B',
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
            <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl font-light text-white mb-4">
              Let&apos;s talk.
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              I respond to every message. If the role is a good fit I&apos;ll say so clearly —
              if it&apos;s not, I&apos;ll say that too.
            </p>
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
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
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
              <span>Source</span>
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
              <span>One-pager</span>
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
              <span>Deep dive</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
