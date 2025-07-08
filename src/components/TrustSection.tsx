'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustSection = () => {
  const logos = [
    { src: '/images/dribbble.png', alt: 'Dribbble' },
    { src: '/images/xxpeng.png', alt: 'Xpeng' },
    { src: '/images/ubora.png', alt: 'ubora' },
    { src: '/images/founders_hub.png', alt: 'Founders Hub' },
    { src: '/images/SurveyMonkey.jpg', alt: 'SurveyMonkey' },
    { src: '/images/verox.webp', alt: 'Veroxfloor' },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: index * 0.1,
          ease: 'easeOut',
        },
      }));
    }
  }, [controls, inView]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider font-medium">
            They trust us
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto whitespace-nowrap scroll-smooth -ml-4 -mr-4" // Added scroll classes
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={controls}
              custom={index}
              className="m-14 p-2 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 hover:scale-105 transform transition-transform duration-300 inline-block" // Added inline-block
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={20}
                className="w-auto h-12 md:h-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;