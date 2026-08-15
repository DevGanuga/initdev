import type { Metadata } from 'next';
import { HirePageClient } from './HirePageClient';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Senior Product Engineer at InitDev',
  description:
    'senior product engineer at initdev, west palm beach fl. 8 products built end to end: ai platforms, saas, payments infrastructure. next.js, supabase, openai, anthropic, stripe. upwork top rated plus, 100% job success. open to senior w2 roles, remote.',
  openGraph: {
    title: 'Dev Ganugapenta — Senior Product Engineer at InitDev',
    description:
      'initdev\u2019s top engineer, available for the right senior w2 role. 8 products built end to end. next.js / supabase / openai / anthropic / stripe.',
    url: 'https://initdev.co/hire',
    images: [
      {
        url: 'https://initdev.co/images/dev/og-hire.png',
        width: 1200,
        height: 630,
        alt: 'Dev Ganugapenta, senior product engineer at InitDev, open to senior W2 roles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Ganugapenta — Senior Product Engineer at InitDev',
    description:
      'initdev\u2019s top engineer, available for the right senior w2 role. 8 products built end to end.',
    images: ['https://initdev.co/images/dev/og-hire.png'],
  },
};

export default function HirePage() {
  return <HirePageClient />;
}
