'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { staggerContainer, fadeInUp, ANIMATION_DURATION, ANIMATION_DELAY } from '@/lib/animations';
import { Award, Shield, Star, Zap, Users } from 'lucide-react';

const trustIndicators = [
  { 
    name: 'Y Combinator', 
    text: 'YC Alumni',
    icon: Star,
    color: 'text-gold',
  },
  { 
    name: 'TechStars', 
    text: 'TechStars',
    icon: Zap,
    color: 'text-volt',
  },
  { 
    name: 'AWS', 
    text: 'AWS Partners',
    icon: Shield,
    color: 'text-azure',
  },
  { 
    name: 'Google Cloud', 
    text: 'GCP Certified',
    icon: Award,
    color: 'text-silver',
  },
  { 
    name: 'Microsoft', 
    text: 'Azure Expert',
    icon: Users,
    color: 'text-pearl',
  },
];

interface TrustIndicatorsProps {
  className?: string;
  showIcons?: boolean;
}

export function TrustIndicators({ className, showIcons = false }: TrustIndicatorsProps) {
  return (
    <motion.div
      className={cn(
        'flex flex-wrap items-center justify-center gap-4 md:gap-6',
        className
      )}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.span 
        className="text-micro text-steel"
        variants={fadeInUp}
      >
        TRUSTED BY
      </motion.span>
      
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {trustIndicators.map((indicator, index) => {
          const Icon = indicator.icon;
          
          return (
            <motion.div
              key={indicator.name}
              className="flex items-center gap-2 group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ 
                duration: ANIMATION_DURATION.fast,
                delay: index * ANIMATION_DELAY.stagger 
              }}
            >
              {showIcons && (
                <Icon className={cn(
                  'w-4 h-4 transition-colors',
                  'text-silver/40 group-hover:' + indicator.color
                )} />
              )}
              <span className={cn(
                'text-sm font-medium transition-all',
                'text-silver/60 group-hover:text-silver',
                'group-hover:drop-shadow-[0_0_8px_rgba(187,247,108,0.3)]'
              )}>
                {indicator.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
