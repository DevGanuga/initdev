'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const founders = [
  {
    name: 'Marcus Chen',
    role: 'Co-Founder & Lead Architect',
    bio: 'Former CTO at TechVault (acquired by Oracle). 15+ years building scalable systems. Specializes in distributed architecture and high-performance computing.',
    expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps'],
    image: '/images/team/marcus.jpg',
    achievements: [
      'Built 3 successful startups',
      'Oracle acquisition for $45M',
      'AWS Solutions Architect',
    ],
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Co-Founder & Security Lead',
    bio: 'Ex-Security Engineer at Stripe. Cybersecurity expert with a track record of implementing zero-trust architectures for fintech and healthcare.',
    expertise: ['Cybersecurity', 'Compliance', 'Zero-Trust Architecture'],
    image: '/images/team/sarah.jpg',
    achievements: [
      'CISSP & CEH Certified',
      'Built SOC2 systems for 20+ startups',
      'Bug bounty hall of fame',
    ],
  },
  {
    name: 'David Kim',
    role: 'Co-Founder & AI/ML Lead',
    bio: 'Previously ML Engineer at DeepMind. PhD in Computer Science from Stanford. Pioneered production ML systems serving millions of users.',
    expertise: ['Machine Learning', 'AI Integration', 'Data Engineering'],
    image: '/images/team/david.jpg',
    achievements: [
      'PhD Stanford CS',
      'Published 12 ML papers',
      '3 patents in NLP',
    ],
  },
];

export default function FoundingTeam() {
  const [selectedFounder, setSelectedFounder] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Founding Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Battle-tested engineers who&apos;ve been where you are – and know how to get you where you&apos;re going.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedFounder(selectedFounder === index ? null : index)}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 relative">
                {/* Placeholder for founder image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-700">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{founder.role}</p>
                <p className="text-gray-600 mb-4">{founder.bio}</p>
                
                {/* Expertise badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {founder.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expanded achievements section */}
                <motion.div
                  initial={false}
                  animate={{ height: selectedFounder === index ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {founder.achievements.map((achievement) => (
                        <li key={achievement} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
