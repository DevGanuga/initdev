'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "We went from idea to $2M in funding in 8 weeks. InitDev didn't just build our MVP, they built our future.",
      author: "Sarah Chen",
      role: "CEO, FinTech Startup",
      company: "Series A Funded",
      rating: 5,
      results: ["400% faster delivery", "$500K under budget", "Zero technical debt"]
    },
    {
      quote: "After 3 failed attempts with other developers, InitDev rescued our project and delivered in 6 weeks what others couldn't in 6 months.",
      author: "Michael Torres",
      role: "CTO, Healthcare Platform",
      company: "50K+ Active Users",
      rating: 5,
      results: ["99.9% uptime", "2M API calls/day", "60% cost reduction"]
    },
    {
      quote: "Direct access to senior engineers who actually understand business. No PMs, no juniors, just results.",
      author: "Emma Watson",
      role: "Founder, E-commerce",
      company: "$10M ARR",
      rating: 5,
      results: ["3x conversion rate", "Handle Black Friday", "Built in 4 weeks"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#0084ff] text-sm font-medium tracking-wider uppercase mb-4 block">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            See what happens when you work with developers who actually ship
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-[#0084ff]/10 to-[#00a6ff]/10 rounded-3xl p-8 md:p-12 border border-[#0084ff]/20">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-[#0084ff]/20" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <motion.p
                key={activeIndex}
                className="text-2xl md:text-3xl text-white font-light text-center mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </motion.p>

              <motion.div
                key={`author-${activeIndex}`}
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-white font-medium text-lg">{testimonials[activeIndex].author}</p>
                <p className="text-white/60">{testimonials[activeIndex].role}</p>
                <p className="text-[#0084ff] text-sm mt-1">{testimonials[activeIndex].company}</p>
              </motion.div>

              {/* Results */}
              <motion.div
                key={`results-${activeIndex}`}
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {testimonials[activeIndex].results.map((result) => (
                  <span key={result} className="px-4 py-2 bg-white/5 rounded-full text-sm text-white/80">
                    ✓ {result}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'w-8 bg-[#0084ff]' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-white/60">Success Rate</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">47+</div>
            <div className="text-sm text-white/60">Projects Shipped</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">$50M+</div>
            <div className="text-sm text-white/60">Client Funding Raised</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5.0</div>
            <div className="text-sm text-white/60">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
