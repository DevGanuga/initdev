import type { Metadata } from 'next';
import CertificationsPageClient from './CertificationsPageClient';

export const metadata: Metadata = {
  title: 'Team Certifications | InitDev',
  description:
    'Shared InitDev team certifications across strategy, AI, and production reliability — supporting sprint-based delivery.',
};

export default function CertificationsPage() {
  return <CertificationsPageClient />;
}
