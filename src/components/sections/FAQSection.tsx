'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What do you build?",
      answer: "Custom software across the stack — SaaS platforms, internal tools, AI-assisted products, consumer apps, and the secure infrastructure underneath them. Multi-tenant systems, role-based access, complex workflows. Production ready, not demos."
    },
    {
      question: "Do you handle security and infrastructure?",
      answer: "Yes. Security isn't an afterthought — we do secure architecture and threat modeling up front, plus application hardening, audits, network design, and monitoring. We also own cloud infrastructure, CI/CD, and observability so what we ship is reliable and defensible in production."
    },
    {
      question: "How does delivery work?",
      answer: "Sprint-based. Written specs, defined scope, clear acceptance criteria. Product and delivery managed through Linear. Playwright E2E testing and CI checks before anything ships."
    },
    {
      question: "What does the team look like?",
      answer: "Dedicated PM, backend and frontend engineers, QA, performance engineers, and cybersecurity professionals. A structured team that plugs into your workflow."
    },
    {
      question: "How fast can you start?",
      answer: "First call within 48 hours. Scoped proposal in 3-5 days. Development starts as soon as you sign off, typically within two weeks of first contact. If we don't have capacity, we'll tell you upfront instead of stretching your project thin."
    },
    {
      question: "What if I need ongoing support?",
      answer: "We offer flexible monthly retainers for continuous work. And because everything ships documented and tested in your repos, your own team can take it over whenever you want — you're never locked in."
    },
    {
      question: "What technologies do you work with?",
      answer: "React, Next.js, Node, Python, Go, Postgres, and AWS, plus the AI and data tooling around them. We pick the stack that fits your problem and your team — not whatever we used last."
    },
    {
      question: "How much does it cost?",
      answer: "Engagements start at $10k, and every sprint is fixed-scope and fixed-price - you see exactly what you're paying for before we write a line of code. No hourly billing surprises, no scope creep. If your budget is under $10k, we're probably not the right fit, and we'll tell you that on the first call."
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
            Common Questions
          </h2>
          <p className="text-xl text-white/60 text-center mb-12">
            Direct answers. No fluff.
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
