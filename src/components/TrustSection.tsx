'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const logos = [
    { 
      src: '/images/farmstomarket.png', 
      alt: 'FarmstoMarket',
      category: 'Startup'
    },
    { 
      src: '/images/ndinga-eats.png', 
      alt: 'Ndinga Eats',
      category: 'Startup'
    },
    { 
      src: '/images/ubora.png', 
      alt: 'Ubora',
      category: 'Health AI'
    },
    { 
      src: '/images/founders_hub.png', 
      alt: 'Founders Hub',
      category: 'Startup'
    },
    { 
      src: '/images/SurveyMonkey.jpg', 
      alt: 'SurveyMonkey',
      category: 'Analytics'
    },
    { 
      src: '/images/verox.webp', 
      alt: 'Veroxfloor',
      category: 'IoT'
    },
  ];

  // Duplicate for infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  const stats = [
    {
      icon: <Users className="w-6 h-6 text-[#6b7db8]" />,
      number: "50+",
      label: "AI Partners"
    },
    {
      icon: <Award className="w-6 h-6 text-[#6b7db8]" />,
      number: "98%",
      label: "Success Rate"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#6b7db8]" />,
      number: "200%",
      label: "ROI Growth"
    },
    {
      icon: <Star className="w-6 h-6 text-[#6b7db8]" />,
      number: "4.9/5",
      label: "Rating"
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-16 lg:py-24 bg-black overflow-hidden"
    >
      {/* Background decorative elements - subtle tech pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#6b7db8] rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-1 h-1 bg-[#6b7db8] rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-[#6b7db8]/50 rounded-full animate-pulse animation-delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-[#6b7db8]/10 border border-[#6b7db8]/20 text-[#6b7db8] uppercase text-xs font-semibold tracking-widest rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#6b7db8] rounded-full mr-2 animate-pulse"></span>
              They Trust Us
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join innovative companies transforming their businesses with our AI and robotics solutions.
          </motion.p>
        </motion.div>

        {/* Infinite Scroll Section */}
        <motion.div
          className="relative overflow-hidden py-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <motion.div
            className="flex items-center space-x-20"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear" as const,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 relative group"
              >
                <div className="w-full h-full relative filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out transform hover:scale-105">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="192px"
                  />
                </div>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6b7db8]/5 via-[#6b7db8]/10 to-[#6b7db8]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Category label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-[#6b7db8] font-medium px-2 py-1 bg-[#6b7db8]/10 rounded-full backdrop-blur-sm border border-[#6b7db8]/20">
                    {logo.category}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action 
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-[#6b7db8] hover:bg-[#5a6ba3] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#6b7db8]/20 transition-all duration-300 group"
          >
            <span>Join Our AI Revolution</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.div>
          </motion.button>
        </motion.div> */}
      </div>

      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;