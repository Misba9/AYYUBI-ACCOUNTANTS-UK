'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Category badge */}
            <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share button */}
            <Button variant="outline" size="sm" className="mb-8">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="prose prose-lg prose-slate dark:prose-invert max-w-none"
              >
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('-')) {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-4">
                        <li className="text-slate-700 dark:text-slate-300">
                          {paragraph.replace('- ', '')}
                        </li>
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </motion.article>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Tags:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Author info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    About the Author
                  </h3>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <p className="mb-3">
                      <strong>{post.author}</strong> is a qualified accountant with extensive 
                      experience in UK tax and business advisory services.
                    </p>
                    <Link
                      href="/about"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      View team →
                    </Link>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Need Professional Help?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Our expert team is here to help with all your accounting and tax needs.
                  </p>
                  <Button asChild className="w-full" size="sm">
                    <Link href="/contact">
                      Get Free Consultation
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Related Articles
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                More insights from our {post.category.toLowerCase()} expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.id}
                  post={relatedPost}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}