import type { Metadata } from 'next';
import { ResumeDocument } from './ResumeDocument';

export const metadata: Metadata = {
  title: 'Dev Ganugapenta — Resume',
  description:
    'Full Stack Engineer, AI Applications. Next.js, Supabase, OpenAI, Anthropic, Stripe. West Palm Beach, FL. Open to remote W2 roles.',
  robots: { index: false },
};

export default function ResumePage() {
  return <ResumeDocument variant="standard" />;
}
