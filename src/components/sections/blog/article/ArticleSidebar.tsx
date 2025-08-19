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
  const [activeSection, setActiveSection] = useState<string>('');

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
      const scrollPosition = window.scrollY + 100;
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
        <p className="text-gray-600 mb-4">{article.author.bio}</p>
        <div className="flex gap-3">
          {article.author.linkedin && (
            <a
              href={article.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          {article.author.twitter && (
            <a
              href={article.author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          )}
        </div>
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

      {/* Share Article */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Article</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </button>
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </button>
        </div>
      </motion.div>
    </div>
  );
}
