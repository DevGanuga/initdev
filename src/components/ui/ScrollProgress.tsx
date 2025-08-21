'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 origin-left"
        style={{ scaleX }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-400 via-blue-300 to-transparent origin-left opacity-50 blur-sm"
        style={{ scaleX }}
      />
    </motion.div>
  );
}