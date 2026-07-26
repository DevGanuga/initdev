import type { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'About the Studio',
  description:
    'A development studio that runs like an in-house team you do not have to hire — a product manager, engineers, QA, and cybersecurity professionals, working from written specs and sprint scope.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About the Studio | InitDev',
    description:
      'A development studio that runs like an in-house team you do not have to hire — scoped in sprints, plugged into your workflow, accountable for what ships.',
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
