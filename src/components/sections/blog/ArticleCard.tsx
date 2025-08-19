'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface Author {
  name: string;
  avatar: string;
  role: string;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: Author;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (featured) {
    return (
      <Link href={`/blog/${article.id}`}>
        <motion.article
          whileHover={{ y: -4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-50">📄</span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                    {article.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{article.author.name}</div>
                    <div className="text-sm text-gray-500">{formatDate(article.publishedAt)}</div>
                  </div>
                </div>
                <span className="text-blue-600 font-medium hover:translate-x-1 transition-transform inline-block">
                  Read more →
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${article.id}`}>
      <motion.article
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full flex flex-col"
      >
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-50">📄</span>
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold">
                {article.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">{article.author.name}</div>
                <div className="text-gray-500">{formatDate(article.publishedAt)} · {article.readTime}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
