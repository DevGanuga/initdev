import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { SocialProof } from '@/components/sections/SocialProof';
import { TechStack } from '@/components/sections/TechStack';
import { EngagementFlow } from '@/components/sections/EngagementFlow';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { faqs } from '@/lib/data/faqs';

/**
 * No 'use client' here: this page only composes sections that are themselves
 * client components. Marking the page as client made it impossible to export
 * metadata, which is what left every route sharing the root layout's title
 * and canonical.
 */
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/**
 * Mirrors the FAQ actually rendered on this page — structured data must match
 * visible content. Note that Google restricted FAQPage rich results to
 * government and health sites in 2023, so this aids machine understanding
 * rather than producing SERP dropdowns.
 */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />

      <div id="problem">
        <ProblemSection />
      </div>

      <CaseStudyPreview />
      <SelectedWork />
      <SocialProof />
      <TechStack />
      <EngagementFlow />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
