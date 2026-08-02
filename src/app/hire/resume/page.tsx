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
          @page { margin: 0.5in 0.6in; size: letter; }
          html, body { background: white !important; }
          .no-print { display: none !important; }
          .page { box-shadow: none !important; }
          a { color: inherit !important; text-decoration: none !important; }
          .keep-link { color: #1d4ed8 !important; }
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

          {/* ── Header ── */}
          <header className="mb-4 pb-3 border-b-2 border-black">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h1 className="text-[27px] font-bold tracking-tight text-black leading-none">
                Dev Ganugapenta
              </h1>
              <p className="text-[12px] text-gray-600">West Palm Beach, FL · Remote (US)</p>
            </div>
            <p className="text-[13.5px] font-semibold text-gray-800 mt-1.5 mb-2">
              Founding Engineer &amp; Technical Lead — AI Applications, SaaS Platforms, Payments Infrastructure
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11.5px] text-gray-600">
              <a href="mailto:dganuga@gmail.com" className="keep-link text-blue-700 hover:underline">dganuga@gmail.com</a>
              <a href="https://www.linkedin.com/in/dev-ganuga-4b3b6431a" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">linkedin.com/in/dev-ganuga-4b3b6431a</a>
              <a href="https://github.com/DevGanuga" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">github.com/DevGanuga</a>
              <a href="https://initdev.co/hire" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">initdev.co/hire</a>
            </div>
          </header>

          {/* ── Profile ── */}
          <section className="mb-4">
            <p className="text-[12.5px] text-gray-800 leading-[1.6]">
              Founding engineer to five early-stage startups — the technical half of the founder
              partnership, owning every decision from first schema to production incident. Specialty:
              the hardest seam in modern software — putting probabilistic AI systems into production
              where correctness is non-negotiable. Real-money Stripe billing designed to survive
              failure, LLM pipelines engineered for the reality that models time out and return
              malformed output, multi-tenant Postgres secured with row-level security. 1,197 GitHub
              contributions in the last twelve months, 96% shipped commits. Every system below is
              live, client-billed, or investor-facing. None of it is a demo.
            </p>
          </section>

          {/* ── Core Expertise (ATS layer) ── */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Core Expertise
            </h2>
            <div className="text-[11.5px] text-gray-800 leading-[1.7]">
              <p><strong>AI Engineering:</strong> LLM integration (OpenAI, Anthropic Claude), schema-enforced structured output, retrieval-augmented memory (Pinecone vector search, embeddings), Human-in-the-Loop system design, agentic workflows (LangGraph, n8n), multimodal pipelines (Tavus video AI, fal.ai image generation)</p>
              <p><strong>Payments &amp; Billing:</strong> Stripe subscriptions, idempotent webhook processing, atomic credit-ledger economies, escrowed spend with automatic refund on failure, customer portal, tiered pricing</p>
              <p><strong>Platform:</strong> TypeScript, Next.js App Router, React, Node.js, PostgreSQL (Supabase, RLS, 38+ migration schemas), Redis, REST &amp; GraphQL API design, Shopify headless commerce, Vercel edge/cron, Sentry, CI/CD</p>
            </div>
          </section>

          {/* ── Experience ── */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 mb-2 border-b border-gray-300 pb-1">
              Experience
            </h2>

            {/* Founding Engineer */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[13.5px] font-bold text-black">Founding Engineer &amp; Technical Lead — Early-Stage Startups</h3>
                <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">2024 – Present</span>
              </div>
              <p className="text-[11.5px] text-gray-500 mb-2 italic">
                Drip · Dyia · AI Blueprint · ConvoAI Studio · Inflio · Remote — sole technical owner alongside non-technical founders
              </p>
              <p className="text-[12px] text-gray-700 mb-2 leading-[1.55]">
                The technical half of five founder partnerships — not a hired implementer. Owned
                architecture, cloud infrastructure, data modeling, billing, AI systems, deployment,
                and production operations on every platform. The recurring theme: systems where AI
                unreliability meets money, privacy, or clinical data, and the engineering has to
                absorb the difference.
              </p>
              <ul className="space-y-2 text-[12px] text-gray-800 leading-[1.5]">
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Drip · AI relationship platform</strong> — Solved a genuinely hard privacy problem:
                    two partners share one AI companion, yet neither may ever access the other&apos;s private
                    memories. Designed ownership-scoped vector retrieval (Pinecone embedding filters enforced at
                    the query layer) synchronized with Postgres under a rollback-on-failure consistency contract —
                    a write never lands in one store without the other. Built the OpenAI conversation engine:
                    strict JSON-schema structured output, 3-attempt exponential backoff, conversation chaining via
                    previous_response_id. Every AI-drafted message passes a human operator&apos;s draft→approve→send
                    state machine before delivery. 98 API routes, 38 migrations, sole author.{' '}
                    <a href="https://initdev.co/portfolio/drip-technical-showcase.pdf" className="keep-link text-blue-700 hover:underline text-[11px]">deep dive</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>AI Blueprint · AI creative platform</strong> — Engineered a real-money credit economy
                    for AI generation: atomic SQL spend under non-negative constraints, credits escrowed during
                    generation, automatic refunds when a model fails, and idempotent Stripe webhook processing.
                    Billing that stays correct even when the AI doesn&apos;t. Four creative studios on a shared
                    subscription gate.{' '}
                    <a href="https://initdev.co/portfolio/ai-blueprint-technical-showcase.pdf" className="keep-link text-blue-700 hover:underline text-[11px]">deep dive</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Dyia · field-service SaaS</strong> — Carried a service-business platform to
                    revenue-ready production: tiered Stripe subscriptions with signed webhook verification and
                    idempotent plan grants, Anthropic-powered business intelligence, geographic dispatch on
                    Google Maps, Sentry instrumentation across edge and server runtimes, documented QA cycles
                    gating every release.{' '}
                    <a href="https://dyia.io" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline text-[11px]">live</a>{' · '}
                    <a href="https://github.com/DevGanuga/dyiabase-master" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline text-[11px]">source</a>{' · '}
                    <a href="https://initdev.co/portfolio/dyia-technical-showcase.pdf" className="keep-link text-blue-700 hover:underline text-[11px]">deep dive</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>ConvoAI Studio · clinical AI video platform</strong> — Built the full Tavus API v2
                    integration layer (672-line typed client: personas, replicas, conversations, dynamic
                    call-to-action injection, real-time webhook event routing) and a triage pipeline where a
                    video conversation flows into Claude structured symptom extraction, a generated PDF clinical
                    report, and automated delivery — hardened with dual-path webhook/polling completion and
                    conversation-level deduplication, because third-party event delivery cannot be trusted in a
                    clinical context.{' '}
                    <a href="https://github.com/DevGanuga/narratorapp" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline text-[11px]">source</a>{' · '}
                    <a href="https://initdev.co/portfolio/convoai-studio-technical-showcase.pdf" className="keep-link text-blue-700 hover:underline text-[11px]">deep dive</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Inflio · AI video platform</strong> — Designed and built a production-scale platform
                    solo: 399 TypeScript files, 119K lines — clip generation, transcription, subtitle editing,
                    multi-platform scheduling and publishing. Made the honest commercial call to close it after
                    market validation, then shut it down like a professional: 14,600+ lines of dead code removed,
                    naming conventions enforced, clean 27-second build.{' '}
                    <a href="https://github.com/DevGanuga/inflio" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline text-[11px]">source</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Animalia · headless commerce (own venture)</strong> — Typed domain layer unifying
                    Shopify Storefront, Cart, and Admin GraphQL APIs across 33 operations. Built a deterministic
                    merchandising engine that converts raw supplier catalog text into ranked, revenue-weighted
                    storefront intelligence — no LLM in the hot path, fully testable — plus an AI
                    product-photography pipeline that pulls from the Admin API, generates brand-constrained
                    imagery, and writes back automatically.{' '}
                    <a href="https://www.animalia.market" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline text-[11px]">live</a>{' · '}
                    <a href="https://github.com/DevGanuga/animaliamarket" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline text-[11px]">source</a>{' · '}
                    <a href="https://initdev.co/portfolio/animalia-technical-showcase.pdf" className="keep-link text-blue-700 hover:underline text-[11px]">deep dive</a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Enterprise Delivery */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[13.5px] font-bold text-black">Enterprise Delivery Engineer — InitDev</h3>
                <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">2025 – Present</span>
              </div>
              <p className="text-[11.5px] text-gray-500 mb-2 italic">Commercial client contracts · invoiced production delivery · Remote</p>
              <ul className="space-y-2 text-[12px] text-gray-800 leading-[1.5]">
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>Company Challenges · enterprise learning platform</strong> — Designed a reusable
                    content architecture that lets administrators author a challenge once and deploy it across
                    unlimited sprint cohorts without duplication; TipTap rich-content editing across 73 source
                    files; Vercel Cron lifecycle emails. When a Supabase platform upgrade silently broke aggregate
                    queries in production, diagnosed the PostgREST regression and shipped the fix within hours.{' '}
                    <a href="https://companychallenges.com" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline text-[11px]">live</a>{' · '}
                    <a href="https://initdev.co/portfolio/company-challenges-technical-showcase.pdf" className="keep-link text-blue-700 hover:underline text-[11px]">deep dive</a>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>
                    <strong>AI Navigator · enterprise AI readiness platform</strong> — Delivered GPT-4o chat with
                    action execution, a 25-zone organizational sentiment heatmap, and a capability maturity
                    assessment framework for an enterprise consulting client; authored the follow-on production
                    proposal covering team structure, milestones, and financials.
                  </span>
                </li>
              </ul>
            </div>

            {/* Upwork */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[13.5px] font-bold text-black">Consulting Engineer — AI &amp; Full-Stack</h3>
                <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">2025 – Present</span>
              </div>
              <p className="text-[11.5px] text-gray-500 mb-2 italic">
                Upwork · Top Rated Plus (platform&apos;s top-3% performer tier) · 100% Job Success Score · every engagement rated 5.0
              </p>
              <ul className="space-y-1.5 text-[12px] text-gray-800 leading-[1.5]">
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>Ran a client practice in parallel with the platforms above — enterprise SaaS hardening and multi-user rollout, end-to-end full-stack ownership for a DTC startup, a fully automated AI content repurposing and publishing system for a long-term retainer, and AI sales-agent infrastructure on n8n + GoHighLevel.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>Client-written reviews on record: &ldquo;an expert at modern development&rdquo; · &ldquo;going above and beyond to take care of any details along the way&rdquo; · &ldquo;brought my AI app vision to life with quality work.&rdquo;</span>
                </li>
              </ul>
            </div>

            {/* Yorali */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[13.5px] font-bold text-black">AI Automation Lead — Yorali USA</h3>
                <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">2023 – 2024</span>
              </div>
              <p className="text-[11.5px] text-gray-500 mb-2 italic">Full-time · Boynton Beach, FL</p>
              <ul className="space-y-1.5 text-[12px] text-gray-800 leading-[1.5]">
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>Owned company-wide AI sales automation: cut customer acquisition costs 45% and manual process load 60% with custom tooling held at 99.8% uptime across cross-departmental integrations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>Drove adoption, not just delivery — trained a team of 8 to 95% adoption and a 30% lift in sales productivity. This role is where automation engineering turned into a software career.</span>
                </li>
              </ul>
            </div>

            {/* 4D Global */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[13.5px] font-bold text-black">Business Development Manager — 4D Global (Inc. 5000)</h3>
                <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">2023</span>
              </div>
              <p className="text-[11.5px] text-gray-500 mb-2 italic">Full-time · Miami, FL</p>
              <ul className="space-y-1.5 text-[12px] text-gray-800 leading-[1.5]">
                <li className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">▸</span>
                  <span>Systematized outbound and appointment booking at a fast-growth healthcare revenue company — 35% more successful appointments, 25% growth in qualified leads, 20% operational cost reduction through vendor negotiation. The commercial grounding behind every product decision since.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── Education & Credentials ── */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Education &amp; Credentials
            </h2>
            <div className="space-y-1 text-[12px] text-gray-800">
              <div className="flex justify-between gap-4">
                <span><strong>Harvard Business School</strong> — Credential of Readiness (CORe): Analytics, Strategy &amp; Management</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2025</span>
              </div>
              <div className="flex justify-between gap-4">
                <span><strong>McFatter Technical College</strong> — Technical Degree, Computer Science &amp; Network Support Services</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2024</span>
              </div>
              <div className="flex justify-between gap-4">
                <span><strong>Stanford University School of Engineering</strong> — Strategic Planning Professional</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2024</span>
              </div>
              <div className="flex justify-between gap-4">
                <span><strong>IBM</strong> — Python for Data Science, AI &amp; Development Specialist</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2024</span>
              </div>
            </div>
          </section>

          {/* ── Links ── */}
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              Portfolio
            </h2>
            <p className="text-[11.5px] text-gray-700 leading-[1.7]">
              Interactive portfolio with all technical deep-dives:{' '}
              <a href="https://initdev.co/hire" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">initdev.co/hire</a>
              {' '}· Code:{' '}
              <a href="https://github.com/DevGanuga" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">github.com/DevGanuga</a>
              {' '}· Verified client history:{' '}
              <a href="https://www.upwork.com/freelancers/~01f0e7e8b52c4ea315" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">upwork.com/freelancers/~01f0e7e8b52c4ea315</a>
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
