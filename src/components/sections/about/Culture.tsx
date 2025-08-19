'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const cultureAspects = [
  {
    title: 'Remote-First, Results-Focused',
    description: 'We work from 12 countries across 5 continents. Location doesn\'t matter, output does.',
    image: '/images/culture/remote.jpg',
    stats: ['12 Countries', '5 Continents', '24/7 Coverage'],
  },
  {
    title: 'Continuous Learning',
    description: 'Weekly tech talks, monthly hackathons, unlimited learning budget. We invest in growth.',
    image: '/images/culture/learning.jpg',
    stats: ['52 Tech Talks/Year', '$5K Learning Budget', '12 Hackathons'],
  },
  {
    title: 'Work-Life Integration',
    description: 'Unlimited PTO, flexible hours, no meetings on Fridays. We trust you to manage your time.',
    image: '/images/culture/balance.jpg',
    stats: ['Unlimited PTO', 'Flexible Hours', 'No-Meeting Fridays'],
  },
  {
    title: 'Open Source Contributors',
    description: 'We give back to the community. 20% time for open source, speaking, and writing.',
    image: '/images/culture/opensource.jpg',
    stats: ['147 OS Projects', '52 Tech Articles', '23 Conference Talks'],
  },
];

const perks = [
  { icon: '💻', title: 'Top-Tier Equipment', description: 'Latest MacBook Pro, monitors, and any tools you need' },
  { icon: '🏥', title: 'Health Coverage', description: '100% health, dental, and vision for you and family' },
  { icon: '💰', title: 'Equity Options', description: 'Real ownership in the company\'s success' },
  { icon: '✈️', title: 'Annual Retreats', description: 'Team gatherings in amazing locations worldwide' },
  { icon: '📚', title: 'Learning Budget', description: '$5,000/year for courses, conferences, books' },
  { icon: '🏠', title: 'Home Office Setup', description: '$2,000 stipend for your perfect workspace' },
];

const teamPhotos = [
  { alt: 'Team hackathon', category: 'Events' },
  { alt: 'Remote workspace', category: 'Workspaces' },
  { alt: 'Team retreat', category: 'Retreats' },
  { alt: 'Conference talk', category: 'Speaking' },
  { alt: 'Team celebration', category: 'Celebrations' },
  { alt: 'Pair programming', category: 'Collaboration' },
];

export default function Culture() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
            Life at InitDev
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve built a culture where brilliant engineers do their best work, 
            grow continuously, and actually enjoy Mondays.
          </p>
        </motion.div>

        {/* Culture Aspects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cultureAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {index === 0 ? '🌍' : index === 1 ? '📚' : index === 2 ? '⚖️' : '🚀'}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{aspect.title}</h3>
                <p className="text-gray-600 mb-4">{aspect.description}</p>
                <div className="flex gap-3">
                  {aspect.stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perks & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Perks & Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="flex items-start gap-4">
                <div className="text-3xl">{perk.icon}</div>
                <div>
                  <h4 className="font-semibold mb-1">{perk.title}</h4>
                  <p className="text-sm opacity-90">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Photos Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Behind the Scenes
          </h3>
          
          {/* Category filters */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {['Events', 'Workspaces', 'Retreats', 'Speaking', 'Celebrations', 'Collaboration'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {teamPhotos
              .filter((photo) => !selectedCategory || photo.category === selectedCategory)
              .map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="h-full flex items-center justify-center relative">
                    <div className="text-4xl opacity-50">📸</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We&apos;re always looking for exceptional engineers who share our values and want to build 
            the future of technical co-founding.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
