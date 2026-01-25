'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function Logo({
  size = 'md',
  animated = true
}: LogoProps) {
  const sizes = {
    sm: { height: 32, width: 90 },
    md: { height: 48, width: 140 },
    lg: { height: 64, width: 180 }
  };

  const currentSize = sizes[size];

  return (
    <motion.div
      className="cursor-pointer select-none"
      whileHover={animated ? { scale: 1.02 } : {}}
      whileTap={animated ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Image
        src="/1966510796844172572-removebg-preview.png"
        alt="InitDev"
        width={currentSize.width}
        height={currentSize.height}
        className="h-auto w-auto"
        style={{
          height: currentSize.height,
          width: 'auto'
        }}
        priority
      />
    </motion.div>
  );
}
