'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const solutions = [
  {
    number: '01',
    title: 'Object Segmentation',
    description: 'Algorithms for quick real-time segmentation of different objects and scenes in complex environments, ideal for virtual reality, gaming, and AR applications.',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421710c885ad9404e1f2988_PRB%2001.jpg',
  },
  {
    number: '02',
    title: 'Object Detection & Tracking',
    description: 'Detection and recognition solutions for industrial safety, fashion analytics, cashier-less stores, road safety and more.',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421710ce6ce558f7c1b253d_PRB%2002.jpg',
  },
  {
    number: '03',
    title: '3D Solutions',
    description: 'Expertise in NeRF technique allows reconstruction of 3D surfaces with great accuracy using only 100 images dataset.',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421710ccdfb3e83ee2e2b5a_PRB%2003.jpg',
  },
  {
    number: '04',
    title: 'Pose Estimation',
    description: 'People tracking and detection solutions built using state-of-the-art algorithms and deep learning techniques, highly accurate in complex environments.',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421710bce09cd3499675e78_PRB%2004.jpg',
  },
  {
    number: '05',
    title: 'NLP & Language Models',
    description: 'Natural language processing solutions for text analysis, sentiment detection, chatbots, and multilingual AI systems tailored for African languages.',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421710cbbdb6903063c52ce_PRB%2005.jpg',
  },
  {
    number: '06',
    title: 'Edge & Low-power AI',
    description: 'Quantization and optimization techniques to speed up networks and enable inference on low-power devices with fixed-point computations.',
    image: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421710bbbdb69bab63c52be_PRB%2006.jpg',
  },
];

export default function SolutionsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">
            No matter what you need
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight max-w-2xl">
            Our solutions help businesses succeed
          </h2>
        </motion.div>

        {/* Solutions row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {solutions.slice(0, 3).map((solution, index) => (
            <motion.div
              key={solution.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-[#6b7db8]/10 hover:border-[#6b7db8]/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#6b7db8] text-xs font-mono font-bold">{solution.number}.</span>
                  <h3 className="text-white font-bold text-lg">{solution.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solutions row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.slice(3).map((solution, index) => (
            <motion.div
              key={solution.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 3) * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-[#6b7db8]/10 hover:border-[#6b7db8]/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#6b7db8] text-xs font-mono font-bold">{solution.number}.</span>
                  <h3 className="text-white font-bold text-lg">{solution.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
