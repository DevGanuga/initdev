'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0084ff] via-[#00a6ff] to-[#0084ff] origin-left z-[100] shadow-lg shadow-[#0084ff]/50"
        style={{ 
          scaleX,
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[20px] bg-gradient-to-r from-[#0084ff] via-[#00a6ff] to-[#0084ff] origin-left z-[99] blur-xl opacity-30"
        style={{ 
          scaleX,
          backgroundSize: '200% 100%',
        }}
      />
    </>
  );
}
