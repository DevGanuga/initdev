'use client';

import { motion } from 'framer-motion';

const values = [
  {
    icon: '⚡',
    title: 'Speed',
    subtitle: 'Move Fast, Learn Faster',
    description: 'We ship in days what others debate for months. Speed isn\'t reckless – it\'s strategic.',
    examples: [
      'Daily deployments',
      'Weekly feature releases',
      '24-hour bug fixes',
      '4-week MVPs',
    ],
  },
  {
    icon: '🎯',
    title: 'Focus',
    subtitle: 'Depth Over Breadth',
    description: 'We don\'t do everything. We do what matters exceptionally well.',
    examples: [
      'Core features first',
      'One goal per sprint',
      'No feature creep',
      'Revenue-driving priorities',
    ],
  },
  {
    icon: '💎',
    title: 'Quality',
    subtitle: 'Excellence in Essentials',
    description: 'We don\'t gold-plate, but what we ship works flawlessly where it counts.',
    examples: [
      'Zero critical bugs',
      '99.9% uptime',
      'Clean, maintainable code',
      'Security by default',
    ],
  },
  {
    icon: '🤝',
    title: 'Partnership',
    subtitle: 'Your Success Is Ours',
    description: 'We\'re not vendors, we\'re co-founders. We win when you win.',
    examples: [
      'Shared goals',
      'Transparent communication',
      'Proactive problem solving',
      'Long-term thinking',
    ],
  },
  {
    icon: '📊',
    title: 'Data-Driven',
    subtitle: 'Measure Everything',
    description: 'Opinions are hypotheses. Data is truth. We track, measure, and optimize relentlessly.',
    examples: [
      'Analytics from day one',
      'A/B test everything',
      'User behavior tracking',
      'ROI measurement',
    ],
  },
  {
    icon: '🔄',
    title: 'Iteration',
    subtitle: 'Continuous Evolution',
    description: 'Perfect is the enemy of good. We ship, learn, and improve in rapid cycles.',
    examples: [
      'Weekly iterations',
      'User feedback loops',
      'Rapid prototyping',
      'Continuous deployment',
    ],
  },
];

export default function Values() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six principles that guide every line of code, every decision, every deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {value.title}
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                {value.subtitle}
              </p>
              <p className="text-gray-600 mb-6">
                {value.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">In Practice:</p>
                {value.examples.map((example) => (
                  <div key={example} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {example}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Values in Action
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">27</div>
              <div className="text-gray-600">Average Days to MVP</div>
              <div className="text-sm text-gray-500 mt-1">Speed + Focus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
              <div className="text-gray-600">Client Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Quality + Partnership</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">3.2x</div>
              <div className="text-gray-600">Average ROI</div>
              <div className="text-sm text-gray-500 mt-1">Data-Driven + Iteration</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
