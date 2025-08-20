'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  fullScreen?: boolean;
  text?: string;
}

export function LoadingSpinner({ 
  size = 'medium', 
  color = '#0084ff',
  fullScreen = false,
  text
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const spinner = (
    <div className="relative">
      <motion.div
        className={`${sizeClasses[size]} rounded-full border-2 border-transparent`}
        style={{
          borderTopColor: color,
          borderRightColor: color,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div 
        className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-2 opacity-20`}
        style={{ borderColor: color }}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <motion.div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {spinner}
        {text && (
          <motion.p 
            className="mt-4 text-white/60 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {spinner}
      {text && <p className="text-white/60 text-sm">{text}</p>}
    </div>
  );
}
