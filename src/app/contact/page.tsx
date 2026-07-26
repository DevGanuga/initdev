import type { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Start a Project — Free Technical Assessment',
  description:
    'Tell us what you are building. Four quick steps, two minutes. You will get honest feedback on scope, timeline, and cost, plus a free strategy call with a senior engineer.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Start a Project — Free Technical Assessment | InitDev',
    description:
      'Four quick steps, two minutes. Honest feedback on scope, timeline, and cost, plus a free strategy call with a senior engineer.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
