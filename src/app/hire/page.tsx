import type { Metadata } from 'next';
import { HirePageClient } from './HirePageClient';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Senior Full-Stack Engineer',
  description:
    'Senior full-stack engineer based in West Palm Beach, FL. 18 months of production AI and SaaS work. 6 production applications built end-to-end — Next.js, Supabase, OpenAI, Anthropic, Stripe. Upwork Top Rated Plus, 100% Job Success. Open to senior W2 engineering roles on-site or remote.',
  openGraph: {
    title: 'Dev Ganugapenta — Senior Full-Stack Engineer',
    description:
      'Senior full-stack engineer. 6 production apps built end-to-end. Next.js · Supabase · OpenAI · Anthropic · Stripe. Upwork Top Rated Plus · 100% JSS. Open to senior W2 roles.',
    url: 'https://initdev.co/hire',
  },
};

export default function HirePage() {
  return <HirePageClient />;
}
