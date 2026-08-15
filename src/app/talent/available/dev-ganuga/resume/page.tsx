import type { Metadata } from 'next';
import { PrintButton } from './PrintButton';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Resume',
  description:
    'Senior Product Engineer at InitDev. Next.js, Supabase, OpenAI, Anthropic, Stripe. West Palm Beach, FL. Open to remote W2 roles.',
  robots: { index: false },
};

export default function ResumePage() {
  return <ResumeDocument />;
}

/*
  Engagements are 30–90 day delivery cycles.
  Ordered by end date, newest first.
  Dyia wrapped ~Jul 2026 (one month before Aug 2026).
*/

const entries = [
  {
    title: 'Lead Engineer',
    company: 'Dyia (InitDev)',
    period: 'May 2026 – Jul 2026',
    oneLiner: 'Field-service SaaS. Live with paying subscribers. dyia.io',
    bullets: [
      'Owned end-to-end delivery: Stripe subscriptions, Anthropic business intelligence, Google Maps dispatch.',
      'Shipped production monitoring (Sentry) and a release QA process used across subsequent builds.',
    ],
  },
  {
    title: 'Lead Engineer',
    company: 'AI Navigator (client via InitDev)',
    period: 'May 2026 – Present',
    oneLiner: 'Enterprise AI readiness platform. Phase 2 under contract. navigator.leadingwith.ai',
    bullets: [
      'Built GPT-4o assistant with in-app action execution, 25-zone sentiment heatmap, and capability maturity scoring.',
      'Delivered Phase 1 on contract; authored and won the Phase 2 production proposal.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Animalia (InitDev)',
    period: 'Apr 2026 – Jun 2026',
    oneLiner: 'Headless Shopify storefront for pet wellness. animalia.market',
    bullets: [
      'Typed domain layer over Shopify Storefront, Cart, and Admin APIs (33 GraphQL operations).',
      'Built deterministic merchandising and AI product photography pipelines for catalog ops.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Company Challenges (client via InitDev)',
    period: 'Apr 2026 – Jun 2026',
    oneLiner: 'Enterprise learning platform. Live and delivered. companychallenges.com',
    bullets: [
      'Reusable content architecture: author once, deploy across unlimited cohorts.',
      'Rich content editing, lifecycle email automation, and production incident response.',
    ],
  },
  {
    title: 'Primary Engineer',
    company: 'AI Blueprint (InitDev)',
    period: 'Jan 2026 – Mar 2026',
    oneLiner: 'Multi-studio AI creative platform with a real-money credit economy.',
    bullets: [
      'Designed atomic credit ledger with escrowed spend and automatic refunds on model failure.',
      'Idempotent Stripe webhooks and dual-path fal.ai job delivery for billing integrity.',
    ],
  },
  {
    title: 'Primary Engineer',
    company: 'ConvoAI Studio (InitDev)',
    period: 'Nov 2025 – Jan 2026',
    oneLiner: 'Real-time AI video platform with a clinical triage pipeline.',
    bullets: [
      'Built typed Tavus API v2 client and Claude-based symptom extraction into PDF reports.',
      'Dual-path webhook completion with deduplication for reliable clinical delivery.',
    ],
  },
  {
    title: 'Sole Engineer',
    company: 'Drip (InitDev)',
    period: 'Oct 2025 – Dec 2025',
    oneLiner: 'Privacy-first AI relationship companion. Investor-demo ready.',
    bullets: [
      'Dual-store memory (Postgres + Pinecone) with ownership-scoped retrieval between partners.',
      'OpenAI conversation engine, 98 API routes, and a human-in-the-loop operator console.',
    ],
  },
  {
    title: 'Consulting Engineer',
    company: 'Upwork — Top Rated Plus',
    period: '2025 – Present',
    oneLiner: '100% Job Success. AI SaaS, full-stack, and automation engagements.',
    bullets: [
      'Delivered enterprise SaaS hardening, DTC full-stack builds, and AI automation retainers.',
      'Every completed engagement rated 5.0.',
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
  },
  {
    title: 'Business Development Manager',
    company: '4D Global (Inc. 5000)',
    period: '2023',
    oneLiner: 'Miami, FL. Full-time. Healthcare revenue operations.',
    bullets: [
      'Improved appointment conversion 35% and qualified leads 25% through outbound automation.',
    ],
  },
];

function ResumeDocument() {
  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0.5in 0.55in; size: letter; }
          html, body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            min-height: 0 !important;
            height: auto !important;
          }
          .no-print, .fixed { display: none !important; }
          .page {
            box-shadow: none !important;
            min-height: 0 !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          a { color: inherit !important; text-decoration: none !important; }
          .keep-link { color: #1d4ed8 !important; }
          .entry { break-inside: avoid; }
        }
        body { background: #f4f4f4; }
      `}</style>

      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <PrintButton />
        <a
          href="/hire"
          className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg border border-gray-200"
        >
          ← Portfolio
        </a>
      </div>

      <div className="page min-h-screen bg-white max-w-[816px] mx-auto shadow-xl my-8 print:my-0 print:shadow-none font-sans text-[#111]">
        <div className="px-12 py-10 print:px-0 print:py-0">

          {/* Header */}
          <header className="mb-3.5 pb-2.5 border-b border-black">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h1 className="text-[26px] font-bold tracking-tight text-black leading-none">
                Dev Ganugapenta
              </h1>
              <p className="text-[12px] text-gray-600">West Palm Beach, FL · Remote (US)</p>
            </div>
            <p className="text-[13px] font-semibold text-gray-800 mt-1.5 mb-1.5">
              Senior Product Engineer · AI Products · SaaS · Payments
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] text-gray-600">
              <a href="mailto:dganuga@gmail.com" className="keep-link text-blue-700 hover:underline">dganuga@gmail.com</a>
              <a href="https://www.linkedin.com/in/dev-ganuga-4b3b6431a" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">linkedin.com/in/dev-ganuga-4b3b6431a</a>
              <a href="https://github.com/DevGanuga" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">github.com/DevGanuga</a>
              <a href="https://initdev.co/hire" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">initdev.co/hire</a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-3.5">
            <p className="text-[12.5px] text-gray-800 leading-[1.55]">
              Senior product engineer at InitDev. Owns 30–90 day delivery cycles from domain model
              to production: AI integration, Stripe billing, and multi-tenant Postgres. Ships live
              products for startups and enterprise clients, not demos.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-3.5">
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Skills
            </h2>
            <p className="text-[11.5px] text-gray-800 leading-[1.55]">
              TypeScript · Next.js · React · Node.js · PostgreSQL · Supabase · Stripe · OpenAI ·
              Anthropic · Pinecone · fal.ai · Shopify GraphQL · Vercel · Sentry · n8n
            </p>
          </section>

          {/* Experience */}
          <section className="mb-3.5">
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-300 pb-1">
              Experience
            </h2>

            {entries.map((e) => (
              <div key={`${e.company}-${e.period}`} className="entry mb-3">
                <div className="flex justify-between items-baseline gap-3">
                  <h3 className="text-[13px] font-bold text-black leading-tight">
                    {e.title} · {e.company}
                  </h3>
                  <span className="text-[11px] text-gray-500 flex-shrink-0">{e.period}</span>
                </div>
                <p className="text-[11.5px] text-gray-500 mb-1">{e.oneLiner}</p>
                <ul className="space-y-0.5 text-[12px] text-gray-800 leading-[1.45]">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section>
            <h2 className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Education & Certifications
            </h2>
            <div className="space-y-1 text-[12px] text-gray-800">
              <div className="flex justify-between gap-4">
                <span>
                  <strong>Harvard Business School</strong> — Credential of Readiness: Analytics, Strategy &amp; Management
                </span>
                <span className="text-gray-500 flex-shrink-0">2025</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>
                  <strong>McFatter Technical College</strong> — Technical Degree, Computer Science &amp; Network Support
                </span>
                <span className="text-gray-500 flex-shrink-0">2024</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>
                  <strong>Stanford University School of Engineering</strong> — Strategic Planning Professional
                </span>
                <span className="text-gray-500 flex-shrink-0">2024</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>
                  <strong>IBM</strong> — Python for Data Science, AI &amp; Development Specialist
                </span>
                <span className="text-gray-500 flex-shrink-0">2024</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
