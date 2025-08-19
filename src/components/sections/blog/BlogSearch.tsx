'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate search
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSearching(false);
    console.log('Searching for:', searchQuery);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, tutorials, guides..."
              className="w-full px-6 py-4 pr-32 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
        
        {/* Quick Search Suggestions */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500">Popular:</span>
          {['React Best Practices', 'MVP in 4 Weeks', 'Scaling Node.js', 'AI Integration'].map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => setSearchQuery(suggestion)}
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </form>
    </motion.div>
  );
}
