'use client';

import { ArrowRight, Star, Clock, Shield, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    { icon: <Zap className="w-4 h-4" />, text: "Ship in 4-8 weeks" },
    { icon: <Shield className="w-4 h-4" />, text: "Senior devs only" },
    { icon: <Clock className="w-4 h-4" />, text: "Start this week" }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-[#0a0a0a] flex items-center">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://mybycketvercelprojecttest.s3.sa-east-1.amazonaws.com/animation-bg.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-5xl">
          {/* Urgency Banner */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-red-400">
              Only 2 spots left this month • Next availability in {timeLeft.hours}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0084ff] to-[#0066cc] border-2 border-[#0a0a0a] flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
              ))}
            </div>
            <div className="text-sm text-white/60">
              <span className="text-white font-medium">47+ founders</span> shipped with us
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-[clamp(3rem,7vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Turn Your $10M Idea Into
            <span className="block bg-gradient-to-r from-[#0084ff] via-[#00a6ff] to-[#0084ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Working Code in 6 Weeks
            </span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            className="text-xl text-white/80 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Skip the agencies. Avoid the freelancers. Get direct access to senior engineers who&apos;ve shipped 
            <span className="text-white font-medium"> $50M+ in funded startups</span>. 
            We build MVPs that actually scale.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-[#0084ff]">{benefit.icon}</div>
                <span className="text-sm text-white">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-medium rounded-lg shadow-xl shadow-[#0084ff]/25 hover:shadow-2xl hover:shadow-[#0084ff]/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Claim Your Spot
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <a
              href="#problem"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              See Why We&apos;re Different
            </a>
          </motion.div>

          {/* Risk Reversal */}
          <motion.div
            className="flex items-center gap-2 text-sm text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Shield className="w-4 h-4 text-green-500" />
            <span>100% money-back guarantee if we don&apos;t deliver on time</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}