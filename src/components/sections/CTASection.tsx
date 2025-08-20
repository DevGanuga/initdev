'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageSquare, Rocket, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CTASection() {
  const [spotsLeft] = useState(2);
  const [timeUntilNext, setTimeUntilNext] = useState({ days: 14, hours: 23 });

  useEffect(() => {
    // Simulate countdown
    const timer = setInterval(() => {
      setTimeUntilNext(prev => {
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1 };
        }
        return { days: prev.days - 1, hours: 23 };
      });
    }, 3600000); // Update every hour
    
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { icon: <MessageSquare className="w-5 h-5" />, text: "30-min strategy call" },
    { icon: <Rocket className="w-5 h-5" />, text: "Start within 48 hours" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Weekly progress updates" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0084ff]/10 via-[#00a6ff]/5 to-[#0084ff]/10 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>
      
      <div className="container-custom relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Urgency Badge */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-400 font-medium">
                Only {spotsLeft} spots left for {new Date().toLocaleString('default', { month: 'long' })}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">
                Next opening in {timeUntilNext.days} days
              </span>
            </div>
          </motion.div>

          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light text-white mb-6 leading-tight">
              Your Competition Is
              <span className="block bg-gradient-to-r from-[#0084ff] to-[#00a6ff] bg-clip-text text-transparent">
                Already Building
              </span>
            </h2>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Every day you wait is a day your competitors get ahead. 
              Let&apos;s ship your MVP before they even finish their requirements doc.
            </p>

            {/* What happens next */}
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-2 rounded-lg bg-[#0084ff]/10 text-[#0084ff]">
                    {step.icon}
                  </div>
                  <span className="text-white/80">{step.text}</span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/20" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-semibold text-lg rounded-xl shadow-2xl shadow-[#0084ff]/25 hover:shadow-3xl hover:shadow-[#0084ff]/40 transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Lock In Your Spot Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] to-[#0084ff]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <a
                href="mailto:hello@initdev.com"
                className="inline-flex items-center justify-center px-8 py-5 bg-white/5 backdrop-blur-sm text-white font-medium text-lg rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Quick Question? Email Us
              </a>
            </div>
          </div>

          {/* Guarantee */}
          <motion.div
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-medium mb-2">100% Risk-Free Guarantee</h3>
                <p className="text-white/60 text-sm">
                  If we don&apos;t deliver your MVP on time and to spec, you get a full refund. 
                  No questions asked. That&apos;s how confident we are in our process.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final urgency */}
          <div className="text-center mt-8">
            <p className="text-white/40 text-sm">
              ⚡ Average response time: 2 hours • 🏆 47+ successful launches • 💯 100% on-time delivery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}