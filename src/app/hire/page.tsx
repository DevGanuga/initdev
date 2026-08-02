import type { Metadata } from 'next';
import { HirePageClient } from './HirePageClient';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Product Engineer & Systems Architect',
  description:
    'Product engineer and systems architect based in West Palm Beach, FL. Technically led five startups as sole engineering owner — AI products, SaaS platforms, payments infrastructure. Next.js, Supabase, OpenAI, Anthropic, Stripe. Upwork Top Rated Plus, 100% Job Success. Open to senior W2 roles, remote.',
  openGraph: {
    title: 'Dev Ganugapenta — Product Engineer & Systems Architect',
    description:
      'Product engineer & architect. 5 startups technically led, 6 production platforms shipped. Next.js · Supabase · OpenAI · Anthropic · Stripe. Open to senior W2 roles.',
    url: 'https://initdev.co/hire',
  },
};

export default function HirePage() {
  return <HirePageClient />;
}
