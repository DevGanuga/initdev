'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How quickly can we start working together?',
        a: 'We can typically start within 48-72 hours of signing. For urgent projects, we offer same-day kickoff with our Rapid Strike package.',
      },
      {
        q: 'Do you sign NDAs?',
        a: 'Absolutely. We can sign your NDA or provide our standard mutual NDA. We take confidentiality seriously and have never had a breach in 5 years.',
      },
      {
        q: 'What\'s your minimum engagement?',
        a: 'Our minimum engagement is $25,000 for a 4-week MVP sprint. However, we offer consultation calls to scope smaller projects.',
      },
    ],
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        q: 'How long does it take to build an MVP?',
        a: 'Our standard MVP timeline is 4 weeks from kickoff to launch. Complex projects may take 6-8 weeks. We\'ve never missed a deadline.',
      },
      {
        q: 'What\'s your development process?',
        a: 'We follow a rapid iteration process: Week 1 is discovery and architecture, Weeks 2-3 are core development, Week 4 is testing and deployment. You get daily updates and weekly demos.',
      },
      {
        q: 'How involved do I need to be?',
        a: 'We need about 2-3 hours per week of your time for feedback and decisions. We handle everything else. You\'ll have a dedicated Slack channel for async communication.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What tech stack do you use?',
        a: 'We\'re stack-agnostic but specialize in React/Next.js, Node.js/Python, PostgreSQL/MongoDB, and AWS/GCP. We choose the best tools for your specific needs.',
      },
      {
        q: 'Do you provide ongoing support?',
        a: 'Yes, we offer maintenance packages starting at $5,000/month. This includes bug fixes, minor features, monitoring, and 24/7 emergency support.',
      },
      {
        q: 'Who owns the code?',
        a: 'You own 100% of the code and IP from day one. We provide full source code, documentation, and deployment guides. No vendor lock-in.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'How do you price projects?',
        a: 'We offer fixed-price packages based on scope and timeline. No hourly billing, no surprises. You know exactly what you\'re paying upfront.',
      },
      {
        q: 'What payment terms do you offer?',
        a: '50% upfront, 50% on delivery for projects under $50K. For larger projects, we offer monthly milestone-based payments.',
      },
      {
        q: 'Do you offer equity-based engagements?',
        a: 'In rare cases, yes. For exceptional founders with proven traction, we may consider partial equity compensation. Let\'s discuss your situation.',
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = selectedCategory 
    ? faqs.filter(category => category.category === selectedCategory)
    : faqs;

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with InitDev
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Questions
          </button>
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {filteredFaqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const itemId = `${category.category}-${index}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <div
                      key={itemId}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-900 pr-8">
                          {item.q}
                        </span>
                        <span className={`text-2xl transition-transform ${
                          isOpen ? 'rotate-45' : ''
                        }`}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-600">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is standing by to help.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Chat with Us
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Email Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
