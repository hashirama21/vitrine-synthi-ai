'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const partnerLogos = [
  { src: '/images/farmstomarket.png', alt: 'FarmstoMarket' },
  { src: '/images/ndinga-eats.png', alt: 'Ndinga Eats' },
  { src: '/images/ubora.png', alt: 'Ubora' },
  { src: '/images/founders_hub.png', alt: 'Founders Hub' },
  { src: '/images/SurveyMonkey.jpg', alt: 'SurveyMonkey' },
];

export default function OpenCVHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-poster-00001.jpg"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655382c93a7499c677d6e2ad_RENDER-site-HEVC-HEVC-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Background Video - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-poster-00001.jpg"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/655386615d413a08b225a6c0_mobile render-HEVC-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Video overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Headline - opencv.ai 3D entry animation */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1]"
            initial={{ y: '100%', opacity: 0, rotateX: 0, scale: 1 }}
            animate={isVisible ? { y: 0, opacity: 1, rotateX: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            AI &amp; Computer Vision solutions
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.h2
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ y: '100%', opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Automate, innovate, and deliver better experiences with custom AI solutions tailored for Africa and beyond
        </motion.h2>

        {/* Partner logos */}
        <motion.div
          className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap mb-12"
          initial={{ y: '100%', opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {partnerLogos.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 lg:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
            />
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
