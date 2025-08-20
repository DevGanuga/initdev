'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { SimpleCTASection } from '@/components/sections/SimpleCTASection';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { TrustIndicators } from '@/components/ui/TrustIndicators';
import { 
  fadeInUp, 
  staggerContainer, 
  scaleIn,
  slideInLeft,
  ANIMATION_DURATION 
} from '@/lib/animations';
import { SHADOWS } from '@/lib/constants';
import { Sparkles, Zap, Shield, Rocket } from 'lucide-react';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      {/* Hero Section Demo */}
      <HeroSection />
      
      {/* Animation Showcase */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-hero mb-4"
              variants={fadeInUp}
            >
              Refined Animation System
            </motion.h2>
            <motion.p 
              className="text-xl text-silver max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Unified, performant, and beautiful animations throughout the experience
            </motion.p>
          </motion.div>

          {/* Animation Examples Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Fade In Up */}
            <motion.div
              className="p-6 rounded-xl bg-midnight border border-charcoal"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Sparkles className="w-8 h-8 text-volt mb-4" />
              <h3 className="text-xl font-bold mb-2">Fade In Up</h3>
              <p className="text-silver">Smooth entrance with upward motion</p>
            </motion.div>

            {/* Scale In */}
            <motion.div
              className="p-6 rounded-xl bg-midnight border border-charcoal"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Zap className="w-8 h-8 text-azure mb-4" />
              <h3 className="text-xl font-bold mb-2">Scale In</h3>
              <p className="text-silver">Elegant scaling entrance effect</p>
            </motion.div>

            {/* Slide In */}
            <motion.div
              className="p-6 rounded-xl bg-midnight border border-charcoal"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Shield className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-2">Slide In</h3>
              <p className="text-silver">Horizontal sliding entrance</p>
            </motion.div>
          </div>

          {/* Counter Demo */}
          <motion.div
            className="text-center mb-16 p-8 rounded-xl bg-midnight/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION.slow }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Animated Counters</h3>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-volt mb-2">
                  <AnimatedCounter value={1234} prefix="$" suffix="K" />
                </div>
                <p className="text-sm text-silver">Revenue</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-azure mb-2">
                  <AnimatedCounter value={98.7} suffix="%" decimals={1} />
                </div>
                <p className="text-sm text-silver">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <p className="text-sm text-silver">Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Button Variants */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION.slow }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Button System</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="large">
                <Rocket className="w-5 h-5" />
                Primary Action
              </Button>
              <Button variant="secondary" size="large">
                Secondary Action
              </Button>
              <Button variant="ghost" size="large">
                Ghost Action
              </Button>

            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Button variant="primary" size="medium">
                Medium Button
              </Button>
              <Button variant="primary" size="small">
                Small Button
              </Button>
            </div>
          </motion.div>

          {/* Trust Indicators Demo */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION.slow }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Trust Indicators</h3>
            <TrustIndicators showIcons={true} />
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            className="p-8 rounded-xl bg-midnight border border-volt/30"
            style={{ boxShadow: SHADOWS.glow }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION.slow }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Performance Optimizations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Animation FPS', value: '60', color: 'text-volt' },
                { label: 'Bundle Size', value: '-10%', color: 'text-azure' },
                { label: 'Load Time', value: '-33%', color: 'text-gold' },
                { label: 'Interactions', value: '100ms', color: 'text-crimson' },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: ANIMATION_DURATION.normal,
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-silver">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section Demo */}
      <SimpleCTASection />
    </main>
  );
}
