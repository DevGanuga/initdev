'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';
import { SkeletonLoader } from './SkeletonLoader';

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  fallback?: string;
  showSkeleton?: boolean;
  animateOnLoad?: boolean;
}

export function LazyImage({
  src,
  alt,
  fallback = '/placeholder.jpg',
  showSkeleton = true,
  animateOnLoad = true,
  className = '',
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {showSkeleton && !isLoaded && (
        <div className="absolute inset-0 z-10">
          <SkeletonLoader variant="rectangular" width="100%" height="100%" />
        </div>
      )}
      
      {isInView && (
        <motion.div
          initial={animateOnLoad ? { opacity: 0, scale: 1.1 } : false}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <Image
            src={error ? fallback : src}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            {...props}
          />
        </motion.div>
      )}
    </div>
  );
}
