'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
    } catch {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📬</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Engineering Insights, Delivered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join 52,000+ founders and engineers. Get our best articles on building products, 
              technical deep-dives, and startup strategies – delivered weekly.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {/* Status Messages */}
            {subscribeStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm"
              >
                ✓ Success! Check your email to confirm your subscription.
              </motion.div>
            )}
            {subscribeStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>

          {/* Newsletter Benefits */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-1">Actionable Insights</h3>
              <p className="text-sm text-gray-600">
                Real strategies from real projects, not theory
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-1">Weekly Delivery</h3>
              <p className="text-sm text-gray-600">
                Curated content every Tuesday morning
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🎁</div>
              <h3 className="font-semibold text-gray-900 mb-1">Exclusive Content</h3>
              <p className="text-sm text-gray-600">
                Templates, tools, and resources for subscribers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
