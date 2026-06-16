'use client';

import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { SimpleCTASection } from '@/components/sections/SimpleCTASection';
import { PageHero } from '@/components/ui/PageHero';

export default function ServicesPage() {
  return (
    <motion.main 
      className="bg-[#050505] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        eyebrow="What we do"
        icon={Layers}
        title="Everything we build,"
        highlight="end to end"
        subtitle="From custom software and AI products to secure infrastructure — pick where you need us, and we obsess over it until it ships."
      />

      <ServicesSection />
      <TechnologySection />
      <SimpleCTASection />
    </motion.main>
  );
}
