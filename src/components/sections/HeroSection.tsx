'use client';

import { ArrowRight, Sparkles, Code2, Zap, Shield, Rocket, Database, Cloud, Cpu, Layers } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Innovation', 'Excellence', 'Performance', 'Scale'];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);



  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated video background from shadcn component */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle blue background gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,132,255,0.15)] via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[rgba(0,132,255,0.1)] via-transparent to-transparent opacity-50" />
        
        {/* Hero Video Background */}
        <video
          className="absolute -top-[20%] left-0 w-full h-[120%] object-cover z-0 bg-[#111]"
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
        
        {/* Interactive parallax layer */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 132, 255, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      <motion.div 
        className="container-custom relative z-10"
        style={{ opacity, scale, y }}
      >
        <div className="max-w-5xl">
          {/* Premium badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass-subtle rounded-full mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            </motion.div>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
              Ship Fast • Scale Smart • Win Markets
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="mb-8 relative">
              <span className="block">Build</span>
              <span className="block h-[1.2em] relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 text-gradient-blue"
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block text-white mt-2">At Scale</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Elite engineering teams delivering production-ready systems in 
            <span className="text-white font-normal"> 4-8 weeks</span>. 
            We transform ambitious visions into scalable solutions that grow with your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="/contact" className="btn-premium group">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="#cases" className="btn-secondary">
                <span>View Case Studies</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator with glow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
          <div className="relative w-6 h-10 border border-gray-600 rounded-full flex justify-center bg-black/50 backdrop-blur-sm">
            <motion.div
              className="w-1 h-2 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">Scroll</div>
        </motion.div>
      </motion.div>
    </section>
  );
}