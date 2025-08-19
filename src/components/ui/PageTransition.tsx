'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="min-h-screen"
      >
        {/* Subtle page loading bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ originX: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
        </motion.div>
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
