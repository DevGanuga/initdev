'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0084ff]/10 via-[#00a6ff]/5 to-[#0084ff]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>
      
      <div className="container-custom relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light text-white mb-6 leading-tight">
              Ready to Build
              <span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
                Something Great?
              </span>
            </h2>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about your project. We&apos;ll give you an honest assessment 
              and see if we&apos;re the right fit.
            </p>

            {/* What to expect */}
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {[
                'No-pressure conversation',
                'Honest technical feedback',
                'Clear next steps'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-[#0084ff]" />
                  <span className="text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-semibold text-lg rounded-xl shadow-2xl shadow-[#0084ff]/25 hover:shadow-[#0084ff]/40 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
              
              <a
                href="mailto:hello@initdev.com"
                className="inline-flex items-center justify-center px-8 py-5 bg-white/5 backdrop-blur-sm text-white font-medium text-lg rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                hello@initdev.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}