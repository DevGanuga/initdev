import type { Metadata } from 'next';
import { CasesContent } from './CasesContent';

export const metadata: Metadata = {
  title: 'Selected Work — Products Live in Production',
  description:
    'Real software with real users, not mockups: SaaS platforms, AI products, marketplaces, and consumer apps we have designed, built, and shipped. Open any of them and look around.',
  alternates: { canonical: '/cases' },
  openGraph: {
    title: 'Selected Work — Products Live in Production | InitDev',
    description:
      'SaaS platforms, AI products, marketplaces, and consumer apps we have designed, built, and shipped. Real software with real users.',
    url: '/cases',
  },
};

export default function CasesPage() {
  return <CasesContent />;
}
