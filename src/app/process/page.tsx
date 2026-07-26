import type { Metadata } from 'next';
import { ProcessContent } from './ProcessContent';

export const metadata: Metadata = {
  title: 'Our Process — From Spec to Shipped',
  description:
    'How an engagement runs: written scope and acceptance criteria, two-week sprints, and clean handover. No black boxes, and you own the code at every step.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Our Process — From Spec to Shipped | InitDev',
    description:
      'Written scope and acceptance criteria, two-week sprints, and clean handover. No black boxes, and you own the code at every step.',
    url: '/process',
  },
};

export default function ProcessPage() {
  return <ProcessContent />;
}
