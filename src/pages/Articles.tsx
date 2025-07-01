
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: 'Building Scalable React Applications with Modern Architecture',
      excerpt: 'Exploring component composition, state management patterns, and performance optimization techniques for large-scale React applications.',
      date: '2024-06-15',
      readTime: '8 min read',
      category: 'React',
      tags: ['React', 'Architecture', 'Performance'],
      featured: true
    },
    {
      title: 'Full-Stack Development with Node.js and MongoDB',
      excerpt: 'A comprehensive guide to building robust backend APIs with Node.js, Express, and MongoDB integration.',
      date: '2024-05-20',
      readTime: '12 min read',
      category: 'Backend',
      tags: ['Node.js', 'MongoDB', 'API Design']
    },
    {
      title: 'Advanced TypeScript Patterns for Better Code Quality',
      excerpt: 'Dive deep into TypeScript advanced features, utility types, and design patterns that improve code maintainability.',
      date: '2024-04-10',
      readTime: '10 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'Design Patterns', 'Code Quality']
    },
    {
      title: 'AWS Deployment Strategies for Modern Web Applications',
      excerpt: 'Learn how to deploy and scale web applications using AWS services, including EC2, S3, and CloudFront.',
      date: '2024-03-25',
      readTime: '15 min read',
      category: 'DevOps',
      tags: ['AWS', 'Deployment', 'Cloud']
    },
    {
      title: 'Real-time Applications with Socket.io and WebSockets',
      excerpt: 'Building interactive, real-time features using Socket.io, WebSockets, and modern JavaScript frameworks.',
      date: '2024-02-18',
      readTime: '9 min read',
      category: 'Real-time',
      tags: ['Socket.io', 'WebSockets', 'Real-time']
    },
    {
      title: 'Database Optimization Techniques for High Performance',
      excerpt: 'Advanced database optimization strategies, indexing techniques, and query performance improvements.',
      date: '2024-01-30',
      readTime: '11 min read',
      category: 'Database',
      tags: ['Database', 'Optimization', 'Performance']
    }
  ];

  const categories = ['All', 'React', 'Backend', 'TypeScript', 'DevOps', 'Real-time', 'Database'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-6"
    >
      {/* Gradient Backgrounds */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Articles & Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and experiences in modern web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? 'gradient-blur text-white'
                  : 'glass-morphism text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="glass-morphism rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Featured</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                    {articles[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {articles[0].title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(articles[0].date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {articles[0].readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {articles[0].tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/20 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="flex items-center gap-2 gradient-blur px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Article
                  <ArrowRight size={16} />
                </motion.button>
              </div>
              <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center p-8">
                <motion.div
                  className="text-8xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  📚
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass-morphism rounded-2xl overflow-hidden group hover:animate-glow transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary/20 text-gray-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <motion.div
              className="text-6xl mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              📬
            </motion.div>
            <h2 className="text-3xl font-bold text-gradient mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new articles, tutorials, and insights on modern web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <motion.button
                className="gradient-blur px-6 py-3 rounded-full text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Articles;
