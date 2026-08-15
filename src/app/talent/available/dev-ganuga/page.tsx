import type { Metadata } from 'next';
import { HirePageClient } from './HirePageClient';

const PAGE_URL = 'https://initdev.co/talent/available/dev-ganuga';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Senior Software Engineer, Full-Stack & AI',
  description:
    'senior software engineer at initdev, west palm beach fl. nine production platforms shipped in a year: ai systems, saas, payments infrastructure. next.js, supabase, openai, anthropic, stripe. upwork top rated plus, 100% job success. open to senior w2 roles, remote.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Dev Ganugapenta — Senior Software Engineer, Full-Stack & AI',
    description:
      'initdev\u2019s top engineer, available for the right senior w2 role. nine production platforms shipped in a year. next.js / supabase / openai / anthropic / stripe.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://initdev.co/images/dev/og-hire.png',
        width: 1200,
        height: 630,
        alt: 'Dev Ganugapenta, senior software engineer at InitDev, open to senior W2 roles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Ganugapenta — Senior Software Engineer, Full-Stack & AI',
    description:
      'initdev\u2019s top engineer, available for the right senior w2 role. nine production platforms shipped in a year.',
    images: ['https://initdev.co/images/dev/og-hire.png'],
  },
};

export default function TalentPage() {
  return <HirePageClient />;
}
