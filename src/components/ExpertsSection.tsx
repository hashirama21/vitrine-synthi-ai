'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const badges = [
  {
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/642d7eb22141ba8ce4b0ac2c_badge-image-2.svg',
    alt: 'Recognition',
  },
  {
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/642d7f81a6675760c4a9201a_badge-image-3.svg',
    alt: 'Medical Industries',
  },
  {
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/642d7c3b10b2630240b1076d_badge-image-1.svg',
    alt: 'Detection',
  },
];

export default function ExpertsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrollX, setScrollX] = useState(0);

  // Horizontal auto-scroll for badges
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX(prev => prev - 0.5);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      {/* Section 1: "We are experts" + horizontal scroll badges */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - opencv.ai style */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">
              we are experts in AI and computer vision
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl">
              <span className="bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent">
                Practical AI solutions for startups and{' '}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] bg-clip-text text-transparent">
                  enterprises
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Full-width horizontal scrolling badges */}
        <motion.div
          className="relative overflow-hidden py-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="flex items-center gap-12 whitespace-nowrap"
            style={{ transform: `translateX(${scrollX}px)` }}
          >
            {[...badges, ...badges, ...badges].map((badge, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] lg:w-[500px] h-[280px] lg:h-[350px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={badge.image}
                  alt={badge.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 2: "We are the Synthi AI team" - opencv.ai stats + about card */}
      <div className="py-20 lg:py-32 border-t border-[#6b7db8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">
              Empowering Africa with AI innovation
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight max-w-2xl">
              We are the Synthi AI team
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Stats blocks */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 lg:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex-1 p-6 bg-gray-900/50 border border-[#6b7db8]/10 rounded-2xl hover:border-[#6b7db8]/30 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400 text-sm">AI projects deployed across Africa</div>
              </div>
              <div className="flex-1 p-6 bg-gray-900/50 border border-[#6b7db8]/10 rounded-2xl hover:border-[#6b7db8]/30 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400 text-sm">client satisfaction rate</div>
              </div>
            </motion.div>

            {/* Right: About gradient card */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative p-8 lg:p-10 bg-gradient-to-br from-[#6b7db8]/20 via-[#8a9fd9]/10 to-purple-500/10 border border-[#6b7db8]/20 rounded-2xl overflow-hidden">
                {/* Gradient glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#6b7db8]/20 rounded-full blur-3xl" />

                <h3 className="text-white font-bold text-xl mb-4 relative z-10">About us</h3>
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  We are a leading technology company specializing in advanced solutions in artificial intelligence,
                  custom software development, and robotics. We use the experience of developing optimized large-scale
                  AI and computer vision solutions to help companies build innovative products. Our mission is to harness
                  the power of AI to transform businesses and drive innovation across Africa and beyond.
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.png"
                    alt="Synthi AI"
                    className="h-10 w-auto opacity-80"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
