'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="relative pt-8 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-display text-pearl mb-6">
            Engineering Insights &
            <span className="text-gradient-volt">
              {' '}Startup Wisdom
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-silver leading-relaxed">
            Technical deep-dives, startup strategies, and hard-won lessons from engineers 
            who&apos;ve built and sold companies. No fluff, just actionable insights.
          </p>
          
          {/* Featured Topics */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['MVP Development', 'Technical Architecture', 'Startup Growth', 'AI/ML', 'DevOps', 'Product-Market Fit'].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-midnight border border-steel/50 rounded-full text-sm font-medium text-pearl hover:border-volt hover:text-volt transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-volt">247</div>
              <div className="text-sm text-silver">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-azure">14</div>
              <div className="text-sm text-silver">Expert Authors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-volt">52K</div>
              <div className="text-sm text-silver">Monthly Readers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
