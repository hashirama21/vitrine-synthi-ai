'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const partners = [
  { src: '/images/farmstomarket.png', alt: 'FarmstoMarket', width: 160 },
  { src: '/images/ndinga-eats.png', alt: 'Ndinga Eats', width: 150 },
  { src: '/images/ubora.png', alt: 'Ubora', width: 140 },
  { src: '/images/founders_hub.png', alt: 'Founders Hub', width: 160 },
  { src: '/images/SurveyMonkey.jpg', alt: 'SurveyMonkey', width: 170 },
];

// Double for seamless loop
const marqueeLogos = [...partners, ...partners];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-16 lg:py-24 bg-[#070714] overflow-hidden">
      {/* Subtle borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7db8]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6b7db8]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#6b7db8] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Our Partners
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Trusted by innovators{' '}
            <span className="bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] bg-clip-text text-transparent">
              across Africa
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative"
      >
        {/* Fade edges — match bg */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#070714] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#070714] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex items-center gap-8 lg:gap-12 animate-marquee py-2">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="relative flex-shrink-0 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              style={{ width: logo.width + 20, height: 85 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-cover"
                sizes={`${logo.width + 20}px`}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
