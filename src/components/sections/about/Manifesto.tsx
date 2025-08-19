'use client';

import { motion } from 'framer-motion';

const manifestoPoints = [
  {
    number: '01',
    title: 'Ship or Die',
    content: 'Ideas are worthless. Execution is everything. We ship code that works, not presentations that impress.',
  },
  {
    number: '02',
    title: 'Speed Is a Feature',
    content: 'The market doesn\'t wait. Your competitors won\'t either. We move fast and fix things faster.',
  },
  {
    number: '03',
    title: 'Revenue Is Reality',
    content: 'Vanity metrics are for VCs. Revenue is for survivors. We build products people pay for.',
  },
  {
    number: '04',
    title: 'Users > Opinions',
    content: 'Your users don\'t care about your assumptions. We build based on behavior, not beliefs.',
  },
  {
    number: '05',
    title: 'Simple Scales',
    content: 'Complexity kills startups. We choose boring technology that works over exciting technology that might.',
  },
  {
    number: '06',
    title: 'Done > Perfect',
    content: 'Perfect products don\'t exist. Shipped products do. We optimize for learning, not perfection.',
  },
  {
    number: '07',
    title: 'Data Decides',
    content: 'Opinions are hypotheses. Data is truth. We measure everything and assume nothing.',
  },
  {
    number: '08',
    title: 'Fail Fast, Learn Faster',
    content: 'Every failure is tuition for success. We embrace mistakes that teach, avoid mistakes that repeat.',
  },
  {
    number: '09',
    title: 'Ownership Is Everything',
    content: 'We don\'t build your product. We build it with you. Your success is our success.',
  },
  {
    number: '10',
    title: 'No BS, Ever',
    content: 'Transparency builds trust. Trust builds empires. We tell you what you need to hear, not what you want to hear.',
  },
];

export default function Manifesto() {
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
            The InitDev Manifesto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ten commandments we live by. These aren&apos;t just words – they&apos;re the principles 
            that have launched 127 successful products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl font-bold text-gray-200 group-hover:text-blue-100 transition-colors">
                  {point.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">
                    {point.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            This Is How We Build
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            If this resonates with you, if you&apos;re tired of agencies that don&apos;t get it, 
            if you&apos;re ready to ship and scale – we should talk.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Let&apos;s Build Your Empire
          </button>
        </motion.div>
      </div>
    </section>
  );
}
