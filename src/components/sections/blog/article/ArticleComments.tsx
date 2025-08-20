'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
}

interface ArticleCommentsProps {
  articleId: string;
}

// Mock comments data
const mockComments: Comment[] = [
  {
    id: '1',
    author: 'Alex Thompson',
    content: 'Great article! The 4-week timeline seems aggressive but your process breakdown makes it seem achievable. Have you found certain types of MVPs work better with this timeline than others?',
    timestamp: '2 days ago',
    replies: [
      {
        id: '1-1',
        author: 'Marcus Chen',
        content: 'Thanks Alex! You\'re right that some MVPs fit better. B2B SaaS products and marketplaces tend to work really well with our 4-week sprint. Consumer apps with complex UX might need 6 weeks.',
        timestamp: '1 day ago',
      },
    ],
  },
  {
    id: '2',
    author: 'Sarah Johnson',
    content: 'The emphasis on daily deployments is interesting. How do you handle client feedback when things are changing so rapidly?',
    timestamp: '3 days ago',
  },
];

export default function ArticleComments({ }: ArticleCommentsProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim() || !authorEmail.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: newComment,
      timestamp: 'Just now',
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setIsSubmitting(false);
  };

  const handleSubmitReply = async (parentId: string) => {
    if (!replyContent.trim()) return;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const reply: Comment = {
      id: `${parentId}-${Date.now()}`,
      author: authorName || 'Anonymous',
      content: replyContent,
      timestamp: 'Just now',
    };

    setComments(comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply],
        };
      }
      return comment;
    }));

    setReplyContent('');
    setReplyingTo(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 pt-16 border-t border-gray-200"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email * (won&apos;t be published)
              </label>
              <input
                type="email"
                id="email"
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Comment *
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                {comment.author.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-gray-900">{comment.author}</span>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-gray-700 mb-4">{comment.content}</p>
                
                {/* Reply Button */}
                <button
                  onClick={() => setReplyingTo(comment.id)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Reply
                </button>

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="mt-4 pl-4 border-l-2 border-gray-200">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Write your reply..."
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleSubmitReply(comment.id)}
                        className="px-4 py-1 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700"
                      >
                        Post Reply
                      </button>
                      <button
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyContent('');
                        }}
                        className="px-4 py-1 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-200">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white text-sm font-bold">
                          {reply.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-semibold text-gray-900 text-sm">{reply.author}</span>
                            <span className="text-xs text-gray-500">{reply.timestamp}</span>
                          </div>
                          <p className="text-gray-700 text-sm">{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Comments */}
      {comments.length > 5 && (
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Load More Comments
          </button>
        </div>
      )}
    </motion.div>
  );
}
