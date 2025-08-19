'use client';

import { motion } from 'framer-motion';

const philosophyPillars = [
  {
    title: 'VALIDATE',
    icon: '🎯',
    subtitle: 'Test Before You Build',
    description: 'Test your hypothesis with real code, real users, real data. We build MVPs that answer the critical question: will people pay for this?',
    principles: [
      'User interviews are lies, user behavior is truth',
      'Ship to learn, not to perfect',
      'Measure what matters, ignore vanity metrics',
      'Kill bad ideas fast, double down on winners',
    ],
  },
  {
    title: 'SHIP',
    icon: '🚀',
    subtitle: 'Speed Is Your Moat',
    description: 'Launch in weeks, not quarters. Daily deployments, weekly features, monthly pivots if needed. Speed is your competitive advantage.',
    principles: [
      'Done is better than perfect',
      'Deploy daily or die slowly',
      'Features in production > features in planning',
      'First mover advantage beats perfect execution',
    ],
  },
  {
    title: 'ITERATE',
    icon: '🔄',
    subtitle: 'Evolution Over Revolution',
    description: 'Product-market fit isn\'t a destination, it\'s a process. We measure, learn, and evolve based on what your users actually do, not what they say.',
    principles: [
      'Small changes, big insights',
      'Data drives decisions, not opinions',
      'Every failure is a lesson, every lesson is progress',
      'Compound improvements beat moonshots',
    ],
  },
];

export default function Philosophy() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three principles that guide everything we build. Born from experience, 
            validated by results, proven by success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {philosophyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow h-full">
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-lg font-medium text-blue-600 mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {pillar.description}
                </p>
                <div className="space-y-3">
                  {pillar.principles.map((principle) => (
                    <div key={principle} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-sm text-gray-700">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy in Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Philosophy in Action</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">What We Believe</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Startups die from inaction, not imperfection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>The best code is the code that ships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Users don&apos;t care about your tech stack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  <span>Revenue validates everything</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">What We Don&apos;t</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✗</span>
                  <span>Perfection over progress</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✗</span>
                  <span>Technology for technology&apos;s sake</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✗</span>
                  <span>Building in a vacuum</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✗</span>
                  <span>Endless planning without execution</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
