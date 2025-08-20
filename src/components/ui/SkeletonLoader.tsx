'use client';

import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  count?: number;
  animation?: boolean;
}

export function SkeletonLoader({
  className = '',
  variant = 'rectangular',
  width,
  height,
  count = 1,
  animation = true
}: SkeletonLoaderProps) {
  const baseClasses = 'bg-white/10 overflow-hidden';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl'
  };

  const defaultSizes = {
    text: { width: '100%', height: '1rem' },
    circular: { width: '3rem', height: '3rem' },
    rectangular: { width: '100%', height: '4rem' },
    card: { width: '100%', height: '12rem' }
  };

  const finalWidth = width || defaultSizes[variant].width;
  const finalHeight = height || defaultSizes[variant].height;

  const skeleton = (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className} relative`}
      style={{
        width: finalWidth,
        height: finalHeight
      }}
    >
      {animation && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index}>{skeleton}</div>
        ))}
      </div>
    );
  }

  return skeleton;
}

// Predefined skeleton patterns for common UI elements
export function CardSkeleton() {
  return (
    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
      <SkeletonLoader variant="rectangular" height="200px" className="mb-4" />
      <SkeletonLoader variant="text" className="mb-2" />
      <SkeletonLoader variant="text" width="60%" className="mb-4" />
      <div className="flex gap-2">
        <SkeletonLoader variant="text" width="80px" />
        <SkeletonLoader variant="text" width="80px" />
      </div>
    </div>
  );
}

export function ListSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-lg">
          <SkeletonLoader variant="circular" />
          <div className="flex-1 space-y-2">
            <SkeletonLoader variant="text" width="40%" />
            <SkeletonLoader variant="text" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <div className="bg-white/5 p-4 border-b border-white/10">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonLoader key={i} variant="text" />
          ))}
        </div>
      </div>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="p-4 border-b border-white/5">
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonLoader key={i} variant="text" width={i === 0 ? "60%" : "80%"} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
