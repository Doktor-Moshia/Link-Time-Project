// src/pages/BlogPage.jsx
import React from "react";
import { motion } from "framer-motion";
import firstaidHero from "../assets/firstaid_hero.png";
import firefightingHero from "../assets/firefighting_hero.png";
import sheHero from "../assets/she_hero.png";

const blogPosts = [
  {
    id: 1,
    title: 'Essential First Aid Tips Every Workplace Should Know',
    excerpt: 'Learn the most critical first aid skills that can save lives in workplace emergencies.',
    date: '2024-08-10',
    author: 'Mary Ndlovu',
    category: 'First Aid',
    image: firstaidHero,
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Fire Safety: Prevention is Better Than Cure',
    excerpt: 'Understanding fire prevention techniques and emergency response procedures.',
    date: '2024-08-05',
    author: 'John Moyo',
    category: 'Fire Safety',
    image: firefightingHero,
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'The Importance of Safety Representatives in the Workplace',
    excerpt: 'How SHE representatives contribute to creating safer work environments.',
    date: '2024-07-28',
    author: 'Linda Maseko',
    category: 'Occupational Safety',
    image: sheHero,
    readTime: '6 min read'
  }
];

const BlogPage = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Safety Training Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stay informed with the latest safety tips, training insights, and industry news from our expert instructors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with Safety Tips
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest safety training tips, industry updates, and course announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
