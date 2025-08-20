'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast can you actually deliver?",
      answer: "We ship MVPs in 4-8 weeks. No excuses, no delays. We've done it 47+ times. Our secret? Senior engineers who've been there before, no learning on your dime."
    },
    {
      question: "What makes you different from agencies?",
      answer: "We&apos;re not an agency. We&apos;re 3 senior engineers who code. No account managers, no junior devs, no bureaucracy. You talk directly to the people building your product."
    },
    {
      question: "Do you work with startups or enterprises?",
      answer: "Both. Startups love our speed. Enterprises love our reliability. We adapt our process to your needs, not the other way around."
    },
    {
      question: "What if I need ongoing support?",
      answer: "We offer flexible monthly retainers for continuous development. But here's the thing - our code is so clean and documented, your team can take over anytime."
    },
    {
      question: "What technologies do you work with?",
      answer: "Modern stack only. React, Next.js, Node, Python, Go, AWS, and more. We choose based on your needs, not our preferences. If it scales, we know it."
    },
    {
      question: "How much does it cost?",
      answer: "Projects start at $10k. We're not the cheapest, but we're the best value. You get senior expertise without enterprise overhead. Most clients save 60% vs traditional agencies."
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center">
            Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-xl text-white/60 text-center mb-12">
            Straight talk, no BS
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#0084ff]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#0084ff]" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-white/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
