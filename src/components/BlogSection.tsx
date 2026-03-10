'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format',
    categories: ['AI', 'Robotics'],
    title: 'Unlocking the potential of AI: Robotics applied to African market.',
    date: 'February 17, 2025',
    readTime: '3 min read',
    excerpt:
      'Discover how AI and robotics are transforming African markets with innovative solutions.',
  },
  {
    id: 2,
    image: null,
    categories: ['AI', 'Testimonies'],
    title: 'Case studies from companies that have adopted our solutions.',
    date: 'February 15, 2025',
    readTime: '4 min read',
    excerpt:
      'Real success stories from businesses leveraging our AI-powered solutions.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
    categories: ['Tech trends'],
    title: 'Interviews and analyses on AI and innovation trends.',
    date: 'February 12, 2025',
    readTime: '4 min read',
    excerpt:
      'Expert insights on the latest trends shaping the future of artificial intelligence.',
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">
            Monitoring and Innovation
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight mb-4">
            Blog &amp; News
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Stay updated with the latest insights, trends, and innovations in
            artificial intelligence and technology.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-2xl border border-[#6b7db8]/15 bg-gray-900/50 overflow-hidden hover:border-[#6b7db8]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6b7db8]/15 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#6b7db8] to-[#8a9fd9] flex items-center justify-center">
                    <div className="text-white/80 text-4xl font-bold">AI</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#6b7db8]/15 text-[#6b7db8] text-xs font-medium rounded-full border border-[#6b7db8]/20"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-tight mb-3 group-hover:text-[#b3c0de] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-[#6b7db8]/10">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#6b7db8]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="w-1 h-1 bg-[#6b7db8] rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#6b7db8]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <button className="flex items-center gap-1.5 text-[#6b7db8] font-semibold text-sm hover:translate-x-1 transition-transform duration-300">
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 border-2 border-[#6b7db8]/30 text-[#6b7db8] font-semibold rounded-xl hover:bg-[#6b7db8]/10 hover:border-[#6b7db8]/50 transition-all duration-300"
          >
            View All Articles
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
