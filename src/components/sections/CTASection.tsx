'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0084ff]/10 via-[#00a6ff]/5 to-[#0084ff]/10" />
      
      <div className="container-custom relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0084ff]/10 rounded-full border border-[#0084ff]/20 mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-[#0084ff]" />
            <span className="text-sm text-[#0084ff] font-medium">Limited Availability</span>
          </motion.div>

          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light text-white mb-6 leading-tight">
            Ready to Ship Your
            <span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
              Next Big Thing?
            </span>
          </h2>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            We only take on 3 projects per month to maintain our quality. 
            Book a call now to secure your spot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-[#0084ff]/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <a
              href="mailto:hello@initdev.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              hello@initdev.com
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>2 spots available this month</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span>Avg response: 2 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
