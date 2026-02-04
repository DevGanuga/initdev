'use client';

import { motion } from 'framer-motion';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { SimpleCTASection } from '@/components/sections/SimpleCTASection';

export default function ServicesPage() {
  return (
    <motion.main 
      className="bg-[#0a0a0a] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,132,255,0.1)] via-transparent to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-light text-white mb-6">
              Our
              {' '}<span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Four ways we can help. Pick one, we&apos;ll obsess over it until it&apos;s perfect.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <TechnologySection />
      <SimpleCTASection />
    </motion.main>
  );
}
