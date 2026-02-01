'use client';

import { ArrowRight, Code2, Users, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[#030306]">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,100,255,0.12),transparent)]" />
        
        {/* Accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06)_0%,transparent_70%)]" />
      </div>
      
      <motion.div 
        className="container-custom relative z-10"
        style={{ opacity, y }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500/50" />
            <span className="text-xs text-blue-400/90 uppercase tracking-[0.2em] font-medium">
              Custom Software Development
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500/50" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[clamp(2.5rem,8vw,5rem)] font-extralight tracking-[-0.03em] text-white/95">
              We Build Software
            </span>
            <span className="block text-[clamp(2.5rem,8vw,5rem)] font-extralight tracking-[-0.03em]">
              <span className="text-gradient-blue">That Works</span>
            </span>
          </motion.h1>

          {/* Value prop */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            A small team of senior engineers building{' '}
            <span className="text-white font-normal">production-ready applications</span>.
            Web apps, APIs, and systems designed to scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="/contact"
              className="btn-premium group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a
              href="/services"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>What We Build</span>
            </motion.a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Code2, text: 'Full-Stack Development' },
                { icon: Users, text: 'Senior Engineers' },
                { icon: Shield, text: 'Production-Ready Code' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <feature.icon className="w-3.5 h-3.5 text-blue-400/70" />
                  <span className="text-xs text-gray-400 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="w-0.5 h-2 bg-gradient-to-b from-blue-400/60 to-transparent rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
