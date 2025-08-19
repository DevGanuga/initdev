'use client';

import { motion } from 'framer-motion';

export default function CompanyStory() {
  return (
    <section className="section container-custom">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-hero text-pearl mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-silver">
              <p>
                InitDev started in 2019 when three senior engineers kept seeing the same problem: 
                brilliant founders with game-changing ideas getting stuck in technical quicksand. 
                Agencies were too slow. Freelancers were unreliable. In-house CTOs were too expensive.
              </p>
              <p>
                We&apos;d each built and sold our own startups. We knew the struggle firsthand – 
                the late nights debugging, the pivot decisions at 3 AM, the rush of that first 
                paying customer. We also knew what it took to win: speed, focus, and battle-tested 
                technical execution.
              </p>
              <p>
                So we created InitDev – a collective of senior engineers who become your technical 
                co-founder without the equity drama. We bring startup DNA, enterprise experience, 
                and a track record of shipping products that scale.
              </p>
              <p className="font-semibold text-pearl">
                Today, we&apos;re 14 engineers strong, with expertise spanning full-stack development, 
                cybersecurity, AI/ML, and data engineering. We&apos;ve helped launch 127 products, 
                with 89% still operating and growing.
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-midnight to-charcoal p-8 border border-steel/30"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="card rounded-lg p-6">
                  <div className="text-3xl font-bold text-volt">127</div>
                  <div className="text-sm text-silver mt-1">Products Launched</div>
                </div>
                <div className="card rounded-lg p-6">
                  <div className="text-3xl font-bold text-azure">89%</div>
                  <div className="text-sm text-silver mt-1">Still Operating</div>
                </div>
                <div className="card rounded-lg p-6">
                  <div className="text-3xl font-bold text-volt">$42M</div>
                  <div className="text-sm text-silver mt-1">Total Funding Raised</div>
                </div>
                <div className="card rounded-lg p-6">
                  <div className="text-3xl font-bold text-gold">14</div>
                  <div className="text-sm text-silver mt-1">Senior Engineers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
