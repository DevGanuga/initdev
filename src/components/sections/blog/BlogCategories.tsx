'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'All Articles', count: 247, icon: '📚' },
  { name: 'Engineering', count: 89, icon: '⚙️' },
  { name: 'Startup Strategy', count: 56, icon: '🚀' },
  { name: 'Product Development', count: 42, icon: '🛠️' },
  { name: 'AI & Machine Learning', count: 31, icon: '🤖' },
  { name: 'DevOps & Cloud', count: 28, icon: '☁️' },
  { name: 'Cybersecurity', count: 24, icon: '🔒' },
  { name: 'Data Engineering', count: 19, icon: '📊' },
  { name: 'Case Studies', count: 15, icon: '📈' },
  { name: 'Tutorials', count: 38, icon: '📝' },
];

export default function BlogCategories() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              selectedCategory === category.name
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </div>
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${
              selectedCategory === category.name
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
