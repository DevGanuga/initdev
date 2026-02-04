'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="relative pt-8 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0084ff]/5 via-transparent to-transparent" />
      
      <div className="container-custom relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0084ff]/10 rounded-full border border-[#0084ff]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#0084ff]" />
            <span className="text-sm text-[#0084ff]">Start Your Project</span>
          </div>
          
          <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light text-white mb-4 leading-tight">
            Start a Pilot Sprint
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We integrate into your workflow, deliver real output, and expand from there if it fits.
            No lengthy discovery phases.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
