'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}

interface Article {
  author: Author;
  content: string;
}

interface ArticleSidebarProps {
  article: Article;
}

export default function ArticleSidebar({ article }: ArticleSidebarProps) {
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeSection] = useState<string>('');

  useEffect(() => {
    // Generate table of contents from content
    const parser = new DOMParser();
    const doc = parser.parseFromString(article.content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');
    
    const toc = Array.from(headings).map((heading, index) => ({
      id: `heading-${index}`,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1)),
    }));
    
    setTableOfContents(toc);
  }, [article.content]);

  useEffect(() => {
    // Track scroll position for active section highlighting
    const handleScroll = () => {
      // const scrollPosition = window.scrollY + 100;
      // Logic to determine active section based on scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-24 space-y-8">
      {/* Author Bio Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
            {article.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{article.author.name}</div>
            <div className="text-sm text-gray-600">{article.author.role}</div>
          </div>
        </div>
        <p className="text-gray-600">{article.author.bio}</p>
      </motion.div>

      {/* Table of Contents */}
      {tableOfContents.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
          <nav className="space-y-2">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block transition-colors ${
                  item.level === 2 ? 'font-medium' : 'ml-4 text-sm'
                } ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6"
      >
        <div className="text-3xl mb-3">📬</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Get More Insights</h3>
        <p className="text-sm text-gray-600 mb-4">
          Join 52,000+ founders getting our weekly engineering insights.
        </p>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Subscribe
        </button>
      </motion.div>

    </div>
  );
}
