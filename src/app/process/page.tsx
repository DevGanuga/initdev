'use client';

import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { SimpleCTASection } from '@/components/sections/SimpleCTASection';
import { PageHero } from '@/components/ui/PageHero';

export default function ProcessPage() {
  return (
    <motion.main 
      className="bg-[#050505] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        eyebrow="How we work"
        icon={GitBranch}
        title="A clear path from"
        highlight="spec to shipped"
        subtitle="No black boxes and no surprises — written scope, two-week sprints, and code you own at every step."
      />

      <ProcessSection />
      <SimpleCTASection />
    </motion.main>
  );
}
