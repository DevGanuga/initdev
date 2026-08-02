import type { Metadata } from 'next';
import { PrintButton } from './PrintButton';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Resume',
  description: 'Senior Full-Stack Engineer. Next.js · Supabase · OpenAI · Anthropic · Stripe. West Palm Beach, FL. Open to remote W2 roles.',
  robots: { index: false },
};

export default function ResumePage() {
  return <ResumeDocument />;
}

function ResumeDocument() {
  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0.55in 0.6in; size: letter; }
          html, body { background: white !important; }
          .no-print { display: none !important; }
          .page { box-shadow: none !important; }
          a { color: inherit !important; text-decoration: none !important; }
          .print-link::after { content: none !important; }
        }
        body { background: #f4f4f4; }
      `}</style>

      {/* Print button — hidden in print */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <PrintButton />
        <a
          href="/hire"
          className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg border border-gray-200"
        >
          ← Portfolio
        </a>
      </div>

      {/* Resume page */}
      <div className="page min-h-screen bg-white max-w-[816px] mx-auto shadow-xl my-8 print:my-0 print:shadow-none font-sans text-[#111]">
        <div className="px-12 py-10 print:px-0 print:py-0">

          {/* ── Header ── */}
          <header className="mb-5 pb-4 border-b-2 border-black">
            <h1 className="text-[28px] font-bold tracking-tight text-black leading-none mb-1">
              Dev Ganugapenta
            </h1>
            <p className="text-[13px] font-semibold text-gray-600 mb-2.5 tracking-wide uppercase">
              Senior Full-Stack Engineer · AI Applications · SaaS · Production Systems
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-gray-600">
              <span>West Palm Beach, FL (Remote)</span>
              <a href="mailto:dganuga@gmail.com" className="text-blue-700 hover:underline">
                dganuga@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/dev-ganuga-4b3b6431a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                linkedin.com/in/dev-ganuga-4b3b6431a
              </a>
              <a
                href="https://github.com/DevGanuga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                github.com/DevGanuga
              </a>
              <a
                href="https://initdev.co/hire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                initdev.co/hire
              </a>
            </div>
          </header>

          {/* ── Summary ── */}
          <section className="mb-4">
            <p className="text-[12.5px] text-gray-700 leading-[1.55]">
              Full-stack engineer who architects and ships production systems end-to-end — cloud
              infrastructure, Postgres schema design, REST API layers, Stripe billing, and
              multi-service AI integration — all in production, all owned personally. Six systems
              built from a blank repo: data model through deployment, handling the hard parts
              (billing integrity, AI reliability patterns, cross-store consistency). Two systems
              delivered under enterprise client contract. Upwork Top Rated Plus · 100% Job Success
              Score · 500+ hours delivered.
            </p>
          </section>

          {/* ── Experience ── */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-200 pb-1">
              Experience
            </h2>

            {/* Role 1 */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-[13.5px] font-bold text-black">Contract Full-Stack Engineer</h3>
                <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">2025 – Present</span>
              </div>
              <p className="text-[12px] text-gray-500 mb-1.5 italic">
                Self-directed via InitDev · Remote · Contract / Independent
              </p>
              <p className="text-[12px] text-gray-600 mb-2 leading-snug">
                Architected and shipped six production systems from zero — full ownership of cloud
                infrastructure, database schema, API design, Stripe billing, and multi-service AI
                integration. Two systems delivered under enterprise client contract.
              </p>
              <ul className="space-y-1.5 text-[12px] text-gray-700 leading-snug">
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Drip</strong> — Privacy-first AI relationship platform. Dual-store memory (Supabase + Pinecone), OpenAI structured-output pipeline with retry/backoff, Human-in-the-Loop operator console (draft→approve→send state machine). Sole engineer, 528 commits, 38 database migrations.{' '}
                    <a href="https://initdev.co/portfolio/drip-technical-showcase.pdf" className="text-blue-600 hover:underline text-[11px]">[showcase]</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Dyia</strong> — Live SaaS for service businesses. Stripe subscription billing (webhooks, idempotent grants, customer portal), Google Maps routing, Anthropic AI intelligence layer, Sentry production monitoring. Dominant author of production codebase.{' '}
                    <a href="https://dyia.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-[11px]">[live]</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Company Challenges</strong> — Enterprise learning platform, delivered under client contract. Reusable content architecture, sprint scheduling, TipTap editor integration, Vercel Cron lifecycle emails, PostgREST incident response in production.{' '}
                    <a href="https://companychallenges.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-[11px]">[live]</a>{' '}
                    <a href="https://initdev.co/portfolio/company-challenges-technical-showcase.pdf" className="text-blue-600 hover:underline text-[11px]">[showcase]</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>AI Blueprint</strong> — Multi-studio AI creative platform. Full Stripe credit economy (atomic SQL spend, idempotent webhook processing, credits-on-hold, automatic failure refunds). Identity-preserving image generation via fal.ai Gemini 3 Pro.{' '}
                    <a href="https://initdev.co/portfolio/ai-blueprint-technical-showcase.pdf" className="text-blue-600 hover:underline text-[11px]">[showcase]</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>AI Navigator</strong> — Enterprise AI readiness platform delivered under client contract. GPT-4o chat with action execution, 25-zone sentiment heatmap, capability maturity assessment framework.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Animalia</strong> — Headless Shopify storefront. Deterministic merchandising engine (revenue-weighted ranking, concern labeling), AI product photography pipeline via fal.ai Admin API, 33 typed GraphQL operations.{' '}
                    <a href="https://www.animalia.market" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-[11px]">[live]</a>{' '}
                    <a href="https://initdev.co/portfolio/animalia-technical-showcase.pdf" className="text-blue-600 hover:underline text-[11px]">[showcase]</a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-[13.5px] font-bold text-black">Full-Stack Engineer (Solo Build)</h3>
                <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">2024</span>
              </div>
              <p className="text-[12px] text-gray-500 mb-1.5 italic">Inflio — AI Video Platform · Remote · Independent</p>
              <ul className="space-y-1 text-[12px] text-gray-700 leading-snug">
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>Built production-scale AI video platform from scratch: 399 TypeScript files, full cloud backend (Supabase + Vercel), AI clip generation, transcription, subtitle editing, multi-platform content scheduling and publishing pipeline.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>Commercially closed after market validation; conducted full engineering audit on shutdown — dead code removal, naming conventions, 27-second clean build.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Technical Skills ── */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-200 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[12px]">
              <div>
                <span className="font-semibold text-black">Languages: </span>
                <span className="text-gray-700">TypeScript 5, JavaScript (ES2024+), SQL (Postgres), Python</span>
              </div>
              <div>
                <span className="font-semibold text-black">Frameworks: </span>
                <span className="text-gray-700">Next.js 15/16 App Router, React 19, TipTap 3</span>
              </div>
              <div>
                <span className="font-semibold text-black">AI / ML: </span>
                <span className="text-gray-700">OpenAI (structured output, streaming), Anthropic Claude, fal.ai Gemini 3 Pro, Tavus API v2, Pinecone vector DB, HITL design</span>
              </div>
              <div>
                <span className="font-semibold text-black">Databases: </span>
                <span className="text-gray-700">Supabase + Postgres + RLS, IndexedDB, Upstash Redis, Pinecone</span>
              </div>
              <div>
                <span className="font-semibold text-black">Payments: </span>
                <span className="text-gray-700">Stripe subscriptions, idempotent webhooks, credit economy design, customer portal</span>
              </div>
              <div>
                <span className="font-semibold text-black">Infrastructure: </span>
                <span className="text-gray-700">Vercel (edge, cron, preview), Clerk auth, Sentry, GitHub Actions CI, Svix</span>
              </div>
              <div>
                <span className="font-semibold text-black">Commerce: </span>
                <span className="text-gray-700">Shopify Storefront / Cart / Admin GraphQL APIs (headless)</span>
              </div>
              <div>
                <span className="font-semibold text-black">Automation: </span>
                <span className="text-gray-700">n8n, Zapier, LangGraph, workflow orchestration</span>
              </div>
            </div>
          </section>

          {/* ── Education & Credentials ── */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-200 pb-1">
              Education & Credentials
            </h2>
            <div className="space-y-1.5 text-[12px]">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold text-black">Credential of Readiness (CORe): Analytics, Strategy & Management</span>
                  <span className="text-gray-600"> · Harvard Business School</span>
                </div>
                <span className="text-gray-500 font-mono flex-shrink-0 ml-4">Feb 2025</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold text-black">Technical Degree: Computer Science & Network Support Services</span>
                  <span className="text-gray-600"> · McFatter Technical College</span>
                </div>
                <span className="text-gray-500 font-mono flex-shrink-0 ml-4">Jun 2024</span>
              </div>
            </div>
          </section>

          {/* ── Certifications ── */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-200 pb-1">
              Certifications
            </h2>
            <div className="space-y-1 text-[12px]">
              <div className="flex justify-between">
                <span><span className="font-semibold text-black">Strategic Planning Professional</span> · Stanford University School of Engineering</span>
                <span className="text-gray-500 font-mono flex-shrink-0 ml-4">2024</span>
              </div>
              <div className="flex justify-between">
                <span><span className="font-semibold text-black">Python for Data Science, AI & Development Specialist</span> · IBM</span>
                <span className="text-gray-500 font-mono flex-shrink-0 ml-4">2024</span>
              </div>
            </div>
          </section>

          {/* ── Portfolio Links ── */}
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-500 mb-2 border-b border-gray-200 pb-1">
              Portfolio & Technical Showcases
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px]">
              <span>
                <span className="font-semibold">Portfolio: </span>
                <a href="https://initdev.co/hire" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">initdev.co/hire</a>
              </span>
              <span>
                <span className="font-semibold">Drip showcase: </span>
                <a href="https://initdev.co/portfolio/drip-technical-showcase.pdf" className="text-blue-700 hover:underline">PDF</a>
              </span>
              <span>
                <span className="font-semibold">AI Blueprint: </span>
                <a href="https://initdev.co/portfolio/ai-blueprint-technical-showcase.pdf" className="text-blue-700 hover:underline">PDF</a>
              </span>
              <span>
                <span className="font-semibold">Company Challenges: </span>
                <a href="https://initdev.co/portfolio/company-challenges-technical-showcase.pdf" className="text-blue-700 hover:underline">PDF</a>
              </span>
              <span>
                <span className="font-semibold">Animalia: </span>
                <a href="https://initdev.co/portfolio/animalia-technical-showcase.pdf" className="text-blue-700 hover:underline">PDF</a>
              </span>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
