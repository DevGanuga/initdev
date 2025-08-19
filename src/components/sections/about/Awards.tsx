'use client';

import { motion } from 'framer-motion';

const awards = [
  {
    year: '2024',
    title: 'Best Technical Partner',
    organization: 'TechCrunch Startup Awards',
    description: 'Recognized for exceptional MVP delivery and startup success rate',
    icon: '🏆',
  },
  {
    year: '2024',
    title: 'Fastest Growing Dev Agency',
    organization: 'Clutch.co',
    description: 'Top 1% growth rate among development agencies globally',
    icon: '🚀',
  },
  {
    year: '2023',
    title: 'Innovation Excellence Award',
    organization: 'AWS Partner Network',
    description: 'For pioneering cloud-native architectures for startups',
    icon: '💡',
  },
  {
    year: '2023',
    title: 'Top B2B Service Provider',
    organization: 'G2 Crowd',
    description: '4.9/5 rating from 127 verified client reviews',
    icon: '⭐',
  },
  {
    year: '2022',
    title: 'Security First Award',
    organization: 'InfoSec Global',
    description: 'Excellence in implementing security-by-design principles',
    icon: '🔒',
  },
  {
    year: '2022',
    title: 'Developer Choice Award',
    organization: 'GitHub Universe',
    description: 'For contributions to open-source and developer tools',
    icon: '💻',
  },
];

const press = [
  {
    outlet: 'TechCrunch',
    headline: 'InitDev: The Technical Co-Founder Startups Have Been Waiting For',
    date: 'March 2024',
    link: '#',
  },
  {
    outlet: 'Forbes',
    headline: 'How InitDev Is Revolutionizing The MVP Development Process',
    date: 'February 2024',
    link: '#',
  },
  {
    outlet: 'VentureBeat',
    headline: 'From 0 to Product-Market Fit: The InitDev Approach',
    date: 'January 2024',
    link: '#',
  },
  {
    outlet: 'The Information',
    headline: 'Why VCs Are Recommending InitDev to Their Portfolio Companies',
    date: 'December 2023',
    link: '#',
  },
];

const certifications = [
  { name: 'AWS Advanced Partner', icon: '☁️' },
  { name: 'ISO 27001 Certified', icon: '🛡️' },
  { name: 'SOC 2 Type II', icon: '✅' },
  { name: 'Google Cloud Partner', icon: '🌐' },
  { name: 'Microsoft Gold Partner', icon: '💼' },
  { name: 'GDPR Compliant', icon: '🔐' },
];

export default function Awards() {
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
            Recognition & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry recognition for our commitment to excellence, innovation, and client success
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-blue-600 mb-1">{award.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{award.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{award.organization}</p>
                  <p className="text-xs text-gray-500">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">In the Press</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {press.map((article, index) => (
              <motion.a
                key={article.headline}
                href={article.link}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-blue-500 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {article.outlet}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <p className="text-gray-700">{article.headline}</p>
                <div className="mt-3 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Read article →
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Certifications & Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center">
                <div className="text-4xl mb-2">{cert.icon}</div>
                <div className="text-sm font-medium">{cert.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Media Kit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">For Media Inquiries</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download our media kit for logos, company information, founder bios, and press releases.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Download Media Kit
            </button>
            <button className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Press Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
