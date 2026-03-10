'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const logos = [
  { src: '/images/farmstomarket.png', alt: 'FarmstoMarket', width: 140 },
  { src: '/images/ndinga-eats.png', alt: 'Ndinga Eats', width: 130 },
  { src: '/images/ubora.png', alt: 'Ubora', width: 120 },
  { src: '/images/founders_hub.png', alt: 'Founders Hub', width: 140 },
  { src: '/images/SurveyMonkey.jpg', alt: 'SurveyMonkey', width: 150 },
  { src: '/images/verox.webp', alt: 'Veroxfloor', width: 130 },
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-12 lg:py-16 bg-black overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="relative h-12 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-500"
              style={{ width: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                sizes={`${logo.width}px`}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
