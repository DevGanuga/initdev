import type { Metadata } from 'next';
import { HirePageClient } from './HirePageClient';

const PAGE_URL = 'https://initdev.co/talent/dev-ganuga';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Senior Software Engineer, Full-Stack & AI',
  description:
    'senior software engineer, west palm beach fl. seven production platforms in a year: four startups built from zero, plus limpid&co in amsterdam. next.js, supabase, openai, anthropic, stripe. upwork top rated plus. open to senior w2 roles, remote.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Dev Ganugapenta — Senior Software Engineer, Full-Stack & AI',
    description:
      'senior software engineer, open to senior w2 roles. seven production platforms in a year. next.js / supabase / openai / anthropic / stripe.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://initdev.co/images/dev/og-hire.png',
        width: 1200,
        height: 630,
        alt: 'Dev Ganugapenta, senior software engineer, open to senior W2 roles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Ganugapenta — Senior Software Engineer, Full-Stack & AI',
    description:
      'senior software engineer, open to senior w2 roles. seven production platforms in a year.',
    images: ['https://initdev.co/images/dev/og-hire.png'],
  },
};

export default function TalentPage() {
  return <HirePageClient />;
}
