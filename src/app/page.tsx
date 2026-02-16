'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview';
import { SocialProof } from '@/components/sections/SocialProof';
import { TechStack } from '@/components/sections/TechStack';
import { EngagementFlow } from '@/components/sections/EngagementFlow';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <div className="overflow-hidden">
        {/* Hook & Value Prop */}
        <HeroSection />
        
        {/* Problem / Capabilities */}
        <div id="problem">
          <ProblemSection />
        </div>
        
        {/* What We Build (tabbed) */}
        <CaseStudyPreview />
        
        {/* Trust Signals & Track Record */}
        <SocialProof />
        
        {/* Technical Credibility (tabbed) */}
        <TechStack />
        
        {/* How to Start Working Together */}
        <EngagementFlow />
        
        {/* Why Us Over Alternatives (tabbed) */}
        <ComparisonSection />
        
        {/* Objection Handling (accordion) */}
        <FAQSection />
        
        {/* Final Push */}
        <CTASection />
      </div>
    </>
  );
}
