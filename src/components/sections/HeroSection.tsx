'use client';

import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-[#0a0a0a] flex items-center">
      {/* Video Background - Simple parallax only */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://mybycketvercelprojecttest.s3.sa-east-1.amazonaws.com/animation-bg.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Simple gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>
      
      {/* Content - Clean and focused */}
      <div className="relative z-10 container-custom">
        <div className="max-w-5xl">
          {/* Main Headline */}
          <motion.h1 
            className="text-[clamp(3rem,7vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Elite Developers.
            <span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
              Exceptional Delivery.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-white/70 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            More focused than Upwork. More reliable than freelancers. 
            We connect you with genius-level developers who actually ship.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#0084ff] hover:bg-[#0066cc] text-white font-medium rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <a
              href="/cases"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View Case Studies
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-white/60 text-sm">100% Success Rate</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-white/60 text-sm">5.0 Average Rating</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Available Now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}