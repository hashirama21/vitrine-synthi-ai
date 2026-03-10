'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const industryPairs = [
  {
    number: '01',
    items: [
      {
        icon: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/64219ef18a0df0b09b3cc52c_icons%2006.svg',
        title: 'Medicine & Biotech',
        description: 'In-depth visualization of potential risks and valuable insight into possible abnormalities.',
      },
      {
        icon: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421a00681ec56d33234d37a_icons%2005.svg',
        title: 'Stores, Offices and Warehouses',
        description: 'Inventory management, customer behavior and in-store analysis, shelf space management to increase the revenue and save costs on operations.',
      },
    ],
  },
  {
    number: '02',
    items: [
      {
        icon: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421a102a66eb1e71170f0da_icons%2003.svg',
        title: 'Manufacturing and Construction',
        description: 'Product defects and quality inspection, construction site safety surveillance.',
      },
      {
        icon: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421a0f9bf8c410e8ba3c45a_icons%2002.svg',
        title: 'Fitness and Sports',
        description: 'Pose tracking algorithms for helpful insights into body position while exercising.',
      },
    ],
  },
  {
    number: '03',
    items: [
      {
        icon: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421a158bf8c4166bba3c7c8_icons%2004.svg',
        title: 'ADAS and Smart Cities',
        description: 'Traffic lights and signs detection and recognition, pedestrians detection, lane departure warning.',
      },
      {
        icon: 'https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/6421a150514374026bceac7b_icons%2001.svg',
        title: 'Metaverse & AR',
        description: 'Computer vision and augmented reality to help users to communicate with meta worlds – and beyond.',
      },
    ],
  },
];

export default function IndustryPairs() {
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
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight">
            AI solutions for your Industry
          </h2>
        </motion.div>

        {/* Industry pairs */}
        <div className="space-y-16">
          {industryPairs.map((pair, pairIndex) => (
            <motion.div
              key={pair.number}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: pairIndex * 0.2 }}
            >
              {/* Number */}
              <div className="lg:w-24 flex-shrink-0">
                <span className="text-6xl lg:text-8xl font-bold text-[#6b7db8]/20 font-mono">
                  {pair.number}
                </span>
              </div>

              {/* Pair items */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                {pair.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[120px] h-[120px] mb-6 transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
