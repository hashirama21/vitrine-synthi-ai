'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const industries = [
  {
    id: 'agriculture',
    label: 'Agriculture',
    description: 'CROP MONITORING',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fd02f8bd395dc4f23d5cd_IND%20-%201.jpg',
    detail: 'AI-powered crop disease detection, yield prediction, smart irrigation and agricultural monitoring across Africa.'
  },
  {
    id: 'health',
    label: 'Medicine & Biotech',
    description: 'MEDICAL IMAGING',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fd030a4a88f4e8e7e8baf_IND%20-%202.jpg',
    detail: 'In-depth visualization of potential risks and valuable insight into possible abnormalities for early disease detection.'
  },
  {
    id: 'retail',
    label: 'Stores & Warehouses',
    description: 'RETAIL AI',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fd03025635db7a0eaede7_IND%20-%203.jpg',
    detail: 'Inventory management, customer behavior analysis, and shelf space management to increase revenue and reduce costs.'
  },
  {
    id: 'finance',
    label: 'Finance & Fintech',
    description: 'FINTECH AI',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fd031b8b108eb8e21ec04_IND%20-%204.jpg',
    detail: 'Financial inclusion, fraud detection, and AI-driven risk management tailored for African markets.'
  },
  {
    id: 'industry',
    label: 'Manufacturing',
    description: 'SMART AUTOMATION',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fd34983b146d0fe1e637a_IND%20-%205.jpg',
    detail: 'Product defect detection, quality inspection, and construction site safety surveillance with computer vision.'
  },
  {
    id: 'smart-city',
    label: 'ADAS & Smart Cities',
    description: 'URBAN AI',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fd34bde8423b60d817ce5_IND%20-%206.jpg',
    detail: 'Traffic detection, pedestrian safety, lane departure warning and smart urban infrastructure.'
  },
  {
    id: 'automotive',
    label: 'Automotive',
    description: 'VEHICLE AI',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fd3499de38d298ec449e4_IND%20-%207.jpg',
    detail: 'Computer vision solutions for autonomous driving, vehicle tracking and automotive AI applications.'
  },
];

export default function IndustriesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - opencv.ai style */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight">
            AI solutions for your Industry
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Image display - Main area */}
          <motion.div
            className="flex-1 relative rounded-l-2xl lg:rounded-l-2xl rounded-t-2xl lg:rounded-tr-none overflow-hidden bg-gray-900/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ minHeight: '500px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  scale: 1.5,
                  rotateX: 96
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateX: 0
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
                style={{ transformOrigin: 'center center' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industries[activeTab].image}
                  alt={industries[activeTab].label}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Description label */}
                <div className="absolute top-6 left-6">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/80 text-xs font-semibold tracking-widest uppercase bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg"
                  >
                    {industries[activeTab].description}
                  </motion.div>
                </div>

                {/* Bottom description */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-sm max-w-lg leading-relaxed"
                  >
                    {industries[activeTab].detail}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Tab Navigation - Right sidebar */}
          <motion.div
            className="lg:w-64 flex-shrink-0 bg-gray-900/80 rounded-r-2xl lg:rounded-r-2xl rounded-b-2xl lg:rounded-bl-none border-l border-[#6b7db8]/10"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
              {industries.map((industry, index) => (
                <button
                  key={industry.id}
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)}
                  className={`
                    relative flex items-center gap-3 px-5 py-5 text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal w-full min-w-[140px] lg:min-w-0 border-b border-[#6b7db8]/10 last:border-b-0
                    ${activeTab === index
                      ? 'bg-[#6b7db8]/15 text-white'
                      : 'bg-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'
                    }
                  `}
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTabBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#6b7db8] hidden lg:block"
                    />
                  )}
                  <span className="font-semibold text-sm">{industry.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA row - opencv.ai style */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between p-6 bg-gray-900/50 border border-[#6b7db8]/10 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="mb-4 sm:mb-0">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">interested?</div>
            <h3 className="text-white font-bold text-lg">Check out our portfolio for more &rarr;</h3>
          </div>
          <a
            href="/labs"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6b7db8]/30 transition-all duration-300 hover:scale-105"
          >
            Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
