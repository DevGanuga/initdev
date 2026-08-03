import type { Metadata } from 'next';
import { PrintButton } from './PrintButton';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Resume',
  description: 'senior product engineer at initdev. next.js, supabase, openai, anthropic, stripe. west palm beach, fl. open to remote w2 roles.',
  robots: { index: false },
};

export default function ResumePage() {
  return <ResumeDocument />;
}

/* Every entry is a single product treated as its own job, ordered by end
   date, newest first. Dates come from the actual git history of each repo. */

const entries = [
  {
    title: 'dyia, lead engineer',
    org: 'initdev studio',
    period: '2025 - present',
    sub: 'field-service saas. live in production with paying subscribers.',
    bullets: [
      'took it from zero to revenue. tiered stripe subscriptions with signed webhook verification and idempotent plan grants.',
      'anthropic-powered business intelligence over live job and profit data. google maps dispatch for crews.',
      'sentry across edge and server runtimes. documented qa packs gate every release, 5 rounds and counting.',
    ],
    links: [
      { label: 'live', href: 'https://dyia.io' },
      { label: 'source', href: 'https://github.com/DevGanuga/dyiabase-master' },
      { label: 'deep dive', href: 'https://initdev.co/portfolio/dyia-technical-showcase.pdf' },
    ],
  },
  {
    title: 'animalia, sole engineer',
    org: 'initdev studio',
    period: 'dec 2025 - present',
    sub: 'headless shopify marketplace for pet wellness. storefront live, pre-launch.',
    bullets: [
      'typed domain layer unifying shopify storefront, cart and admin apis across 33 graphql operations.',
      'deterministic merchandising engine that turns raw supplier catalog text into ranked, revenue-weighted storefront copy. no llm in the hot path, fully testable.',
      'ai product photography pipeline that pulls from the admin api, generates brand-constrained imagery and writes back automatically.',
    ],
    links: [
      { label: 'live', href: 'https://www.animalia.market' },
      { label: 'source', href: 'https://github.com/DevGanuga/animaliamarket' },
      { label: 'deep dive', href: 'https://initdev.co/portfolio/animalia-technical-showcase.pdf' },
    ],
  },
  {
    title: 'ai navigator, lead engineer',
    org: 'client contract via initdev',
    period: 'oct 2025 - present',
    sub: 'enterprise ai readiness platform. live, phase 2 now in development under contract.',
    bullets: [
      'gpt-4o chat with action execution, a 25-zone organizational sentiment heatmap and a capability maturity framework.',
      'authored the phase 2 production proposal myself: team structure, milestones, financials.',
    ],
    links: [
      { label: 'live', href: 'https://navigator.leadingwith.ai' },
      { label: 'deep dive', href: 'https://initdev.co/portfolio/ai-navigator-showcase.pdf' },
    ],
  },
  {
    title: 'company challenges, sole engineer',
    org: 'client contract via initdev',
    period: 'jan 2026 - jun 2026',
    sub: 'enterprise learning platform. live, invoiced, delivered.',
    bullets: [
      'reusable content architecture: author a challenge once, deploy it across unlimited cohorts with no duplication.',
      'tiptap rich content editing across 73 source files. vercel cron lifecycle emails.',
      'when a supabase upgrade silently broke aggregate queries in production, i found the postgrest regression and shipped the fix within hours.',
    ],
    links: [
      { label: 'live', href: 'https://companychallenges.com' },
      { label: 'deep dive', href: 'https://initdev.co/portfolio/company-challenges-technical-showcase.pdf' },
    ],
  },
  {
    title: 'ai blueprint, primary engineer',
    org: 'initdev studio',
    period: 'nov 2025 - mar 2026',
    sub: 'multi-studio ai creative platform. active, revenue-generating.',
    bullets: [
      'real-money credit economy: atomic sql spend under non-negative constraints, credits escrowed during generation, automatic refunds when a model fails.',
      'idempotent stripe webhooks. replayed events cannot double-charge or double-grant. billing stays correct even when the ai does not.',
      'identity-preserving image generation on fal.ai with webhook plus polling dual-path delivery, so a missed callback never loses a job.',
    ],
    links: [
      { label: 'deep dive', href: 'https://initdev.co/portfolio/ai-blueprint-technical-showcase.pdf' },
    ],
  },
  {
    title: 'convoai studio, primary engineer',
    org: 'initdev studio',
    period: 'nov 2025 - mar 2026',
    sub: 'real-time ai video platform with a clinical triage pipeline.',
    bullets: [
      'built the full tavus api v2 integration layer. 672-line typed client: personas, replicas, conversations, live webhook event routing.',
      'clinical pipeline: video conversation into claude structured symptom extraction, into a generated pdf report, into automated delivery.',
      'dual-path completion with deduplication, because third-party event delivery cannot be trusted in a clinical context.',
    ],
    links: [
      { label: 'source', href: 'https://github.com/DevGanuga/narratorapp' },
      { label: 'deep dive', href: 'https://initdev.co/portfolio/convoai-studio-technical-showcase.pdf' },
    ],
  },
  {
    title: 'drip, sole engineer',
    org: 'initdev studio',
    period: 'apr 2025 - feb 2026',
    sub: 'privacy-first ai relationship companion. investor-demo ready. 528 commits on the production app, sole author.',
    bullets: [
      'hard privacy constraint: two partners share one ai companion and neither can ever see the other\u2019s memories. enforced at the data model, the pinecone retrieval layer and the prompt.',
      'dual-store memory, postgres plus pinecone, with rollback on failure so a write never lands in one store without the other.',
      'openai conversation engine: strict json-schema output, 3-attempt backoff, conversation chaining. 98 api routes, 38 migrations.',
      'human-in-the-loop operator console. every ai-drafted message passes a draft, approve, send state machine before it reaches a user.',
    ],
    links: [
      { label: 'deep dive', href: 'https://initdev.co/portfolio/drip-technical-showcase.pdf' },
    ],
  },
  {
    title: 'inflio, sole engineer',
    org: 'independent build',
    period: 'jun 2025 - feb 2026',
    sub: 'production-scale ai video platform. closed after market validation.',
    bullets: [
      '399 typescript files, 119k lines, built solo. clip generation, transcription, subtitle editing, multi-platform scheduling and publishing.',
      'made the commercial call to shut it down, then did it properly: 14,600 lines of dead code removed, clean 27-second build.',
    ],
    links: [
      { label: 'source', href: 'https://github.com/DevGanuga/inflio' },
    ],
  },
  {
    title: 'consulting engineer, ai and full-stack',
    org: 'upwork, top rated plus (top 3% performer tier)',
    period: '2025 - present',
    sub: '100% job success score. every completed engagement rated 5.0.',
    bullets: [
      'enterprise saas hardening and multi-user rollout, full-stack ownership for a dtc startup, an automated ai content repurposing system on long-term retainer, and ai sales-agent infrastructure on n8n and gohighlevel.',
      'client words, not mine: "an expert at modern development." "going above and beyond to take care of any details along the way."',
    ],
    links: [
      { label: 'verified history', href: 'https://www.upwork.com/freelancers/~01f0e7e8b52c4ea315' },
    ],
  },
  {
    title: 'ai automation lead',
    org: 'yorali usa, boynton beach fl',
    period: '2023 - 2024',
    sub: 'full-time. owned ai sales automation across the company.',
    bullets: [
      'cut customer acquisition costs 45% and manual process load 60% with custom tooling held at 99.8% uptime.',
      'trained a team of 8 to 95% adoption and a 30% lift in sales productivity.',
    ],
    links: [],
  },
  {
    title: 'business development manager',
    org: '4d global, an inc. 5000 company, miami fl',
    period: '2023',
    sub: 'full-time. healthcare revenue operations.',
    bullets: [
      'systematized outbound and appointment booking: 35% more successful appointments, 25% growth in qualified leads, 20% cost reduction through vendor negotiation.',
    ],
    links: [],
  },
];

function ResumeDocument() {
  return (
    <>
      <style>{`
        @media print {
          @page { margin: 0.5in 0.6in; size: letter; }
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
          ← portfolio
        </a>
      </div>

      <div className="page min-h-screen bg-white max-w-[816px] mx-auto shadow-xl my-8 print:my-0 print:shadow-none font-sans text-[#111]">
        <div className="px-12 py-10 print:px-0 print:py-0">

          {/* header */}
          <header className="mb-4 pb-3 border-b-2 border-black">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h1 className="text-[27px] font-bold tracking-tight text-black leading-none">
                Dev Ganugapenta
              </h1>
              <p className="text-[12px] text-gray-600">west palm beach, fl. remote (us)</p>
            </div>
            <p className="text-[13.5px] font-semibold text-gray-800 mt-1.5 mb-2">
              senior product engineer, initdev. ai products, saas platforms, payments infrastructure.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11.5px] text-gray-600">
              <a href="mailto:dganuga@gmail.com" className="keep-link text-blue-700 hover:underline">dganuga@gmail.com</a>
              <a href="https://www.linkedin.com/in/dev-ganuga-4b3b6431a" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">linkedin.com/in/dev-ganuga-4b3b6431a</a>
              <a href="https://github.com/DevGanuga" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">github.com/DevGanuga</a>
              <a href="https://initdev.co/hire" target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline">initdev.co/hire</a>
            </div>
          </header>

          {/* profile */}
          <section className="mb-4">
            <p className="text-[12.5px] text-gray-800 leading-[1.6]">
              i&apos;m the senior engineer initdev puts on its hardest builds. give me an ambiguous
              business problem and you get back a live platform. my specialty is the hard seam in
              modern software: putting probabilistic ai systems into production where money, privacy
              or clinical data is on the line. billing that survives failure, llm pipelines built for
              the reality that models time out and return garbage, multi-tenant postgres locked down
              with row-level security. 1,197 github contributions in the last twelve months, 96% of
              them shipped commits. every entry below is live, client-billed or investor-facing.
              none of it is a demo.
            </p>
          </section>

          {/* core expertise */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.14em] text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              core expertise
            </h2>
            <div className="text-[11.5px] text-gray-800 leading-[1.7]">
              <p><strong>ai engineering:</strong> llm integration (openai, anthropic claude), schema-enforced structured output, retrieval-augmented memory (pinecone, embeddings), human-in-the-loop design, agent workflows (langgraph, n8n), multimodal pipelines (tavus video, fal.ai image generation)</p>
              <p><strong>payments and billing:</strong> stripe subscriptions, idempotent webhook processing, atomic credit-ledger economies, escrowed spend with automatic refunds on failure, customer portal, tiered pricing</p>
              <p><strong>platform:</strong> typescript, next.js app router, react, node.js, postgresql (supabase, rls), redis, rest and graphql api design, shopify headless commerce, vercel edge and cron, sentry, ci/cd</p>
            </div>
          </section>

          {/* experience: one entry per product, newest end date first */}
          <section className="mb-4">
            <h2 className="text-[11px] font-bold tracking-[0.14em] text-gray-500 mb-2 border-b border-gray-300 pb-1">
              experience
            </h2>

            {entries.map((e) => (
              <div key={e.title} className="entry mb-3.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[13px] font-bold text-black">{e.title}</h3>
                  <span className="text-[11px] text-gray-500 font-mono flex-shrink-0 ml-4">{e.period}</span>
                </div>
                <p className="text-[11.5px] text-gray-500 mb-1.5 italic">
                  {e.org}. {e.sub}
                  {e.links.length > 0 && (
                    <>
                      {' '}
                      {e.links.map((l, i) => (
                        <span key={l.href}>
                          {i > 0 && ' / '}
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="keep-link text-blue-700 hover:underline not-italic">{l.label}</a>
                        </span>
                      ))}
                    </>
                  )}
                </p>
                <ul className="space-y-1 text-[12px] text-gray-800 leading-[1.5]">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-gray-400 flex-shrink-0 mt-0.5">-</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* education and credentials */}
          <section>
            <h2 className="text-[11px] font-bold tracking-[0.14em] text-gray-500 mb-1.5 border-b border-gray-300 pb-1">
              education and credentials
            </h2>
            <div className="space-y-1 text-[12px] text-gray-800">
              <div className="flex justify-between gap-4">
                <span><strong>harvard business school</strong>, credential of readiness: analytics, strategy &amp; management</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2025</span>
              </div>
              <div className="flex justify-between gap-4">
                <span><strong>mcfatter technical college</strong>, technical degree, computer science and network support services</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2024</span>
              </div>
              <div className="flex justify-between gap-4">
                <span><strong>stanford university school of engineering</strong>, strategic planning professional</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2024</span>
              </div>
              <div className="flex justify-between gap-4">
                <span><strong>ibm</strong>, python for data science, ai and development specialist</span>
                <span className="text-gray-500 font-mono flex-shrink-0">2024</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
