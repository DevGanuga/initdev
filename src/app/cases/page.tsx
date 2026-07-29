import type { Metadata } from 'next';
import { CasesContent } from './CasesContent';

export const metadata: Metadata = {
  title: 'Case Studies — Flagship Products, Built End-to-End',
  description:
    'Dyia, Drip, AI Blueprint, Animalia, ConvoAI Studio — flagship products built end-to-end, with the commit counts, API routes, and architecture decisions behind each one. All live in production.',
  alternates: { canonical: '/cases' },
  openGraph: {
    title: 'Case Studies — Flagship Products, Built End-to-End | InitDev',
    description:
      'Flagship products with the engineering record behind each one: commits, API routes, and architecture decisions. All live in production.',
    url: '/cases',
  },
};

export default function CasesPage() {
  return <CasesContent />;
}
