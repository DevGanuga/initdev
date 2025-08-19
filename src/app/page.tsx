'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { TeamSection } from '@/components/sections/TeamSection';
import { SimpleEngagementSection } from '@/components/sections/SimpleEngagementSection';
import { SimpleCTASection } from '@/components/sections/SimpleCTASection';
import { SectionTransition } from '@/components/ui/SectionTransition';

export default function Home() {
  return (
    <motion.main 
      className="bg-[#0a0a0a] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      
      <SectionTransition variant="tech" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>
      
      <SectionTransition variant="fade" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TechnologySection />
      </motion.div>
      
      <SectionTransition variant="tech" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProcessSection />
      </motion.div>
      
      <SectionTransition variant="fade" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TeamSection />
      </motion.div>
      
      <SectionTransition variant="tech" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SimpleEngagementSection />
      </motion.div>
      
      <SectionTransition variant="fade" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SimpleCTASection />
      </motion.div>
    </motion.main>
  );
}