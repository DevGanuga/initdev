'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessOverview } from '@/components/sections/ProcessOverview';
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview';
import { TechStack } from '@/components/sections/TechStack';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <div className="overflow-hidden">
        {/* Stage 1: Hook & Value Prop */}
        <HeroSection />
        
        {/* Stage 2: Problem Agitation */}
        <div id="problem">
          <ProblemSection />
        </div>
        
        {/* Stage 3: Social Proof & Credibility */}
        <StatsSection />
        <TestimonialsSection />
        
        {/* Stage 4: Solution Presentation */}
        <WhyChooseUs />
        
        {/* Stage 5: How It Works */}
        <ProcessOverview />
        
        {/* Stage 6: Results & Case Studies */}
        <CaseStudyPreview />
        
        {/* Stage 7: Technical Credibility */}
        <TechStack />
        
        {/* Stage 8: Objection Handling */}
        <FAQSection />
        
        {/* Stage 9: Final Push */}
        <CTASection />
      </div>
    </>
  );
}