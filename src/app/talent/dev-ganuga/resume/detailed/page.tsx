import type { Metadata } from 'next';
import { ResumeDocument } from '../ResumeDocument';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Detailed Resume',
  description:
    'Full Stack Engineer, AI Applications. Detailed engineering résumé with architecture and delivery evidence per project.',
  robots: { index: false },
};

export default function DetailedResumePage() {
  return <ResumeDocument variant="detailed" />;
}
