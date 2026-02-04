'use client';

import { motion } from 'framer-motion';

export default function EmergencySupport() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">🚨</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Emergency Support Hotline
            </h2>
            <p className="text-xl mb-8 opacity-90">
              For production-critical issues requiring immediate attention
            </p>
            
            {/* Emergency Contact Info */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm uppercase tracking-wide opacity-90 mb-2">
                    24/7 Hotline
                  </div>
                  <a href="tel:+1-555-911-0000" className="text-2xl font-bold hover:underline">
                    +1 (555) 911-0000
                  </a>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide opacity-90 mb-2">
                    Emergency Email
                  </div>
                  <a href="mailto:emergency@initdev.com" className="text-xl font-bold hover:underline">
                    emergency@initdev.com
                  </a>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide opacity-90 mb-2">
                    Response Time
                  </div>
                  <div className="text-2xl font-bold">
                    &lt; 15 minutes
                  </div>
                </div>
              </div>
            </div>

            {/* When to Use Emergency Support */}
            <div className="text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">When to Use Emergency Support:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">⚡</span>
                  <span>Production system is down or experiencing critical errors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">⚡</span>
                  <span>Security breach or suspected unauthorized access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">⚡</span>
                  <span>Data loss or corruption affecting business operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">⚡</span>
                  <span>Critical integration failures blocking customer transactions</span>
                </li>
              </ul>

              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm opacity-90">
                  <strong>Note:</strong> Emergency support is available exclusively for active clients 
                  with maintenance contracts. For non-critical issues, please use standard support channels.
                </p>
              </div>
            </div>

            {/* Emergency Response Process */}
            <div className="mt-12 grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">1️⃣</div>
                <div className="text-sm font-medium">Call Hotline</div>
                <div className="text-xs opacity-75">Immediate answer</div>
              </div>
              <div>
                <div className="text-3xl mb-2">2️⃣</div>
                <div className="text-sm font-medium">Triage Issue</div>
                <div className="text-xs opacity-75">2-5 minutes</div>
              </div>
              <div>
                <div className="text-3xl mb-2">3️⃣</div>
                <div className="text-sm font-medium">Deploy Team</div>
                <div className="text-xs opacity-75">Within 15 minutes</div>
              </div>
              <div>
                <div className="text-3xl mb-2">4️⃣</div>
                <div className="text-sm font-medium">Resolve & Report</div>
                <div className="text-xs opacity-75">ASAP + post-mortem</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
