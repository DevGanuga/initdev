import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
}
