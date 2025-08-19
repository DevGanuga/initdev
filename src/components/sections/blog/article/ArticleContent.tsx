'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  useEffect(() => {
    // Add copy functionality to code blocks
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((block) => {
      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.textContent = 'Copy';
      button.onclick = () => {
        navigator.clipboard.writeText(block.textContent || '');
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      };
      block.appendChild(button);
    });
  }, [content]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="prose prose-lg max-w-none"
    >
      <style jsx global>{`
        .prose {
          color: #374151;
        }
        
        .prose h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #111827;
        }
        
        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #111827;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .prose ul {
          margin-bottom: 1.5rem;
        }
        
        .prose ul li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        
        .prose ul li::marker {
          color: #3b82f6;
        }
        
        .prose ol li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        
        .prose strong {
          font-weight: 600;
          color: #111827;
        }
        
        .prose a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .prose a:hover {
          color: #2563eb;
          text-decoration: underline;
        }
        
        .prose blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #6b7280;
        }
        
        .prose pre {
          background-color: #1f2937;
          color: #e5e7eb;
          padding: 1.5rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 2rem 0;
          position: relative;
        }
        
        .prose code {
          background-color: #f3f4f6;
          color: #dc2626;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-weight: 500;
        }
        
        .prose pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
          font-size: 0.875rem;
        }
        
        .copy-code-button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          padding: 0.25rem 0.75rem;
          background-color: #374151;
          color: #e5e7eb;
          border: 1px solid #4b5563;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .copy-code-button:hover {
          background-color: #4b5563;
        }
        
        .prose img {
          border-radius: 0.5rem;
          margin: 2rem auto;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .prose table {
          width: 100%;
          margin: 2rem 0;
          border-collapse: collapse;
        }
        
        .prose table th {
          background-color: #f9fafb;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .prose table td {
          padding: 0.75rem;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .prose hr {
          margin: 3rem 0;
          border-color: #e5e7eb;
        }
      `}</style>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </motion.article>
  );
}
