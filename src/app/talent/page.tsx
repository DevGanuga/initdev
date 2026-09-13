import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PAGE_URL = 'https://initdev.co/talent';

export const metadata: Metadata = {
  title: 'Talent — InitDev',
  description:
    'independent engineers who have shipped production work through initdev engagements. each profile is authored and owned by the engineer it belongs to.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Talent — InitDev',
    description:
      'independent engineers who have shipped production work through initdev engagements.',
    url: PAGE_URL,
  },
};

/**
 * The directory lists independent engineers, not initdev staff. Profiles are
 * authored by the engineers themselves; initdev provides the venue and
 * verifies the delivery record from its own engagements. Contact goes to the
 * engineer directly, never through initdev.
 */
const profiles = [
  {
    slug: 'dev-ganuga',
    name: 'Dev Ganugapenta',
    title: 'full stack engineer',
    focus: 'full-stack & ai applications / saas / payments infrastructure',
    location: 'west palm beach, fl',
    status: 'open to w2 roles',
  },
];

export default function TalentIndexPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-[#0084ff]/30">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/85 border-b border-white/[0.06]">
        <div className="container-custom flex items-center h-16">
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
        </div>
      </header>

      <section className="container-custom pt-20 pb-10">
        <p className="text-[11px] font-mono text-white/30 tracking-wide mb-4">
          independent engineers
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-5">talent</h1>
        <p className="text-white/45 max-w-2xl leading-relaxed">
          engineers who have shipped production work through initdev engagements. each
          profile is authored and owned by the engineer it belongs to — the delivery
          record is theirs, verified by the work itself. reach out to them directly.
        </p>
      </section>

      <section className="container-custom pb-24">
        <ul className="grid gap-4 max-w-2xl">
          {profiles.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/talent/${p.slug}`}
                className="group block rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-white font-medium">{p.name}</h2>
                    <p className="text-sm text-white/50 mt-1">{p.title}</p>
                    <p className="text-xs text-white/35 mt-2">{p.focus}</p>
                    <p className="text-[11px] font-mono text-white/30 mt-3">
                      {p.location} · {p.status}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
