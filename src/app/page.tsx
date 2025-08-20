'use client';


import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessOverview } from '@/components/sections/ProcessOverview';
import { TechStack } from '@/components/sections/TechStack';
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';


export default function HomePage() {
  return (
    <>

      <main className="bg-[#0a0a0a] overflow-hidden">
        {/* Hero - Full screen with video */}
        <HeroSection />
        
        {/* Stats - Quick proof points */}
        <StatsSection />
        
        {/* Why Choose Us - Visual grid layout */}
        <WhyChooseUs />
        
        {/* Process - Timeline/steps visualization */}
        <ProcessOverview />
        
        {/* Tech Stack - Interactive cards */}
        <TechStack />
        
        {/* Case Study Preview - Featured project */}
        <CaseStudyPreview />
        
        {/* FAQ - Accordion style */}
        <FAQSection />
        
        {/* CTA - Final conversion push */}
        <CTASection />
      </main>

    </>
  );
}