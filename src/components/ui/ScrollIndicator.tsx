'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.button
      onClick={scrollToNextSection}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone hover:text-accent transition-colors cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.8, 
        duration: 0.5 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to next section"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="group-hover:text-accent transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
      <motion.span
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-stone opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
      >
        Scroll to explore
      </motion.span>
    </motion.button>
  );
}
