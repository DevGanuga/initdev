'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';

// Mock data for articles
const mockArticles = [
  {
    id: '1',
    title: 'Building Your MVP in 4 Weeks: A Technical Roadmap',
    excerpt: 'Learn the exact process we use to ship production-ready MVPs in just 4 weeks. From architecture decisions to deployment strategies.',
    author: {
      name: 'Marcus Chen',
      avatar: '/images/authors/marcus.jpg',
      role: 'Co-Founder & Lead Architect',
    },
    category: 'Product Development',
    readTime: '8 min read',
    publishedAt: '2024-01-15',
    image: '/images/blog/mvp-roadmap.jpg',
    tags: ['MVP', 'Architecture', 'Startup'],
    featured: true,
  },
  {
    id: '2',
    title: 'The Real Cost of Technical Debt: A Founder\'s Guide',
    excerpt: 'Technical debt isn\'t always bad. Here\'s how to make strategic decisions about when to accrue it and when to pay it down.',
    author: {
      name: 'Sarah Rodriguez',
      avatar: '/images/authors/sarah.jpg',
      role: 'Security Lead',
    },
    category: 'Engineering',
    readTime: '6 min read',
    publishedAt: '2024-01-12',
    image: '/images/blog/technical-debt.jpg',
    tags: ['Engineering', 'Best Practices', 'Strategy'],
    featured: false,
  },
  {
    id: '3',
    title: 'Implementing AI Without the Hype: Practical Use Cases',
    excerpt: 'Cut through the AI buzz and discover practical, revenue-generating applications that actually work for startups.',
    author: {
      name: 'David Kim',
      avatar: '/images/authors/david.jpg',
      role: 'AI/ML Lead',
    },
    category: 'AI & Machine Learning',
    readTime: '10 min read',
    publishedAt: '2024-01-10',
    image: '/images/blog/ai-practical.jpg',
    tags: ['AI', 'Machine Learning', 'Product'],
    featured: true,
  },
  {
    id: '4',
    title: 'Zero to SOC2 in 90 Days: Our Compliance Playbook',
    excerpt: 'How we help startups achieve SOC2 compliance without slowing down development. Includes templates and checklists.',
    author: {
      name: 'Sarah Rodriguez',
      avatar: '/images/authors/sarah.jpg',
      role: 'Security Lead',
    },
    category: 'Cybersecurity',
    readTime: '12 min read',
    publishedAt: '2024-01-08',
    image: '/images/blog/soc2.jpg',
    tags: ['Security', 'Compliance', 'SOC2'],
    featured: false,
  },
  {
    id: '5',
    title: 'Kubernetes for Startups: When You Actually Need It',
    excerpt: 'Everyone\'s using Kubernetes, but should you? A pragmatic guide to container orchestration for early-stage startups.',
    author: {
      name: 'Marcus Chen',
      avatar: '/images/authors/marcus.jpg',
      role: 'Co-Founder & Lead Architect',
    },
    category: 'DevOps & Cloud',
    readTime: '7 min read',
    publishedAt: '2024-01-05',
    image: '/images/blog/kubernetes.jpg',
    tags: ['DevOps', 'Kubernetes', 'Infrastructure'],
    featured: false,
  },
  {
    id: '6',
    title: 'Real-Time Data Pipelines: Architecture That Scales',
    excerpt: 'Building data pipelines that can handle millions of events per second without breaking the bank. Includes cost optimization strategies.',
    author: {
      name: 'David Kim',
      avatar: '/images/authors/david.jpg',
      role: 'AI/ML Lead',
    },
    category: 'Data Engineering',
    readTime: '9 min read',
    publishedAt: '2024-01-03',
    image: '/images/blog/data-pipelines.jpg',
    tags: ['Data', 'Architecture', 'Scaling'],
    featured: false,
  },
];

export default function BlogListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'featured'>('latest');
  const articlesPerPage = 6;

  // Calculate pagination
  const totalPages = Math.ceil(mockArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = mockArticles.slice(startIndex, endIndex);

  // Featured article (first featured article)
  const featuredArticle = mockArticles.find(a => a.featured);

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Featured Article */}
        {featuredArticle && currentPage === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <ArticleCard article={featuredArticle} featured />
          </motion.div>
        )}

        {/* Sort Options */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {currentPage === 1 ? 'Latest Articles' : `Articles (Page ${currentPage})`}
          </h2>
          <div className="flex gap-2">
            {(['latest', 'popular', 'featured'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="flex gap-1">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;
              const isNearCurrent = Math.abs(page - currentPage) <= 2;
              const isEndPage = page === 1 || page === totalPages;
              
              if (!isNearCurrent && !isEndPage) {
                if (page === 2 && currentPage > 4) {
                  return <span key={page} className="px-2">...</span>;
                }
                if (page === totalPages - 1 && currentPage < totalPages - 3) {
                  return <span key={page} className="px-2">...</span>;
                }
                return null;
              }
              
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        {/* Article count */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, mockArticles.length)} of {mockArticles.length} articles
        </div>
      </div>
    </section>
  );
}
