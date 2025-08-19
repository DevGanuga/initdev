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

        {/* Social Media & Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com/initdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/initdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/initdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://discord.gg/initdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
