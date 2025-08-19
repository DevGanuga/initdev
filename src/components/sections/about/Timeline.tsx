'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Three engineers decide to solve the technical co-founder problem',
    highlight: 'Founded InitDev',
    metric: '3 Founders',
  },
  {
    year: '2020',
    title: 'First Success',
    description: 'Launched our first 10 MVPs, 8 reached product-market fit',
    highlight: '80% Success Rate',
    metric: '10 Products',
  },
  {
    year: '2021',
    title: 'Rapid Growth',
    description: 'Expanded team to 8 engineers, launched specialized service lines',
    highlight: 'Team Doubled',
    metric: '35 Products',
  },
  {
    year: '2022',
    title: 'Enterprise Clients',
    description: 'Started working with Fortune 500 innovation labs',
    highlight: 'Enterprise Scale',
    metric: '62 Products',
  },
  {
    year: '2023',
    title: 'AI Revolution',
    description: 'Integrated AI/ML capabilities, launched 30+ AI-powered products',
    highlight: 'AI Specialization',
    metric: '94 Products',
  },
  {
    year: '2024',
    title: 'Market Leaders',
    description: '14 engineers, 127 products launched, $42M raised by clients',
    highlight: 'Industry Leaders',
    metric: '127 Products',
  },
];

export default function Timeline() {
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From three engineers with a vision to the go-to technical partner for ambitious founders
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 mb-3">{milestone.description}</p>
                    <div className="inline-flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        {milestone.highlight}
                      </span>
                      <span className="text-sm font-bold text-gray-900">{milestone.metric}</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10"></div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start mb-8 pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg w-full">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                      {milestone.highlight}
                    </span>
                    <span className="text-xs font-bold text-gray-900">{milestone.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-4">The Next Chapter</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              We&apos;re building the future of technical co-founding. Our vision: 1,000 successful products 
              by 2030, creating $1B+ in market value for our clients.
            </p>
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-4xl font-bold">1,000</div>
                <div className="text-sm opacity-90">Products by 2030</div>
              </div>
              <div>
                <div className="text-4xl font-bold">$1B+</div>
                <div className="text-sm opacity-90">Client Value Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm opacity-90">Engineers Worldwide</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
