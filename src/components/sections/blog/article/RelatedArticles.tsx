'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface RelatedArticlesProps {
  currentArticleId: string;
  tags: string[];
}

// Mock related articles data
const mockRelatedArticles = [
  {
    id: '2',
    title: 'The Real Cost of Technical Debt: A Founder\'s Guide',
    excerpt: 'Technical debt isn\'t always bad. Here\'s how to make strategic decisions.',
    category: 'Engineering',
    readTime: '6 min read',
    author: 'Sarah Rodriguez',
    publishedAt: '2024-01-12',
    image: '/images/blog/technical-debt.jpg',
  },
  {
    id: '3',
    title: 'Implementing AI Without the Hype: Practical Use Cases',
    excerpt: 'Cut through the AI buzz and discover practical applications.',
    category: 'AI & Machine Learning',
    readTime: '10 min read',
    author: 'David Kim',
    publishedAt: '2024-01-10',
    image: '/images/blog/ai-practical.jpg',
  },
  {
    id: '4',
    title: 'Zero to SOC2 in 90 Days: Our Compliance Playbook',
    excerpt: 'How we help startups achieve SOC2 compliance without slowing down.',
    category: 'Cybersecurity',
    readTime: '12 min read',
    author: 'Sarah Rodriguez',
    publishedAt: '2024-01-08',
    image: '/images/blog/soc2.jpg',
  },
];

export default function RelatedArticles({ currentArticleId, tags }: RelatedArticlesProps) {
  // Filter out current article and get related ones
  const relatedArticles = mockRelatedArticles.filter(article => article.id !== currentArticleId).slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${article.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    {/* Article Image */}
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl opacity-50">📄</span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    
                    {/* Article Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 font-medium">{article.author}</span>
                        <span className="text-gray-500">{formatDate(article.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* View All Articles CTA */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
