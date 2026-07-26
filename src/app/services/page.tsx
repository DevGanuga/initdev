import type { Metadata } from 'next';
import { ServicesContent } from './ServicesContent';

export const metadata: Metadata = {
  title: 'Custom Software, AI & Secure Infrastructure',
  description:
    'What we build, end to end: custom software, AI products, APIs and integrations, and secure cloud infrastructure — delivered in fixed-scope sprints by a senior team.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Custom Software, AI & Secure Infrastructure | InitDev',
    description:
      'Custom software, AI products, APIs and integrations, and secure cloud infrastructure — delivered in fixed-scope sprints by a senior team.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
