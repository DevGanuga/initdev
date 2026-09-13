import type { Metadata } from 'next';
import { HirePageClient } from './HirePageClient';

const PAGE_URL = 'https://initdev.co/talent/dev-ganuga';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Full Stack Engineer, AI Applications',
  description:
    'full stack engineer, west palm beach fl. seven production platforms in a year: three startups built from zero, animalia as a personal project, plus limpid&co in amsterdam. next.js, supabase, openai, anthropic, stripe. open to w2 roles, remote.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Dev Ganugapenta — Full Stack Engineer, AI Applications',
    description:
      'full stack engineer, open to w2 roles. seven production platforms in a year. next.js / supabase / openai / anthropic / stripe.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://initdev.co/images/dev/og-hire.png',
        width: 1200,
        height: 630,
        alt: 'Dev Ganugapenta, full stack engineer, open to W2 roles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Ganugapenta — Full Stack Engineer, AI Applications',
    description:
      'full stack engineer, open to w2 roles. seven production platforms in a year.',
    images: ['https://initdev.co/images/dev/og-hire.png'],
  },
};

export default function TalentPage() {
  return <HirePageClient />;
}
