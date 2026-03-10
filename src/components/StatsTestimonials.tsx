'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatsTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [companies, setCompanies] = useState(0);
  const [growth, setGrowth] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;
    const interval = setInterval(() => {
      const p = step / steps;
      const ease = 1 - Math.pow(1 - p, 3);
      setCompanies(Math.round(ease * 102));
      setGrowth(Math.round(ease * 309) / 10);
      step++;
      if (step > steps) clearInterval(interval);
    }, stepDuration);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - opencv.ai style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">
            Our expertise is helping businesses grow
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight max-w-2xl">
            We&apos;ve helped a lot of people with their projects
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Stats */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Stat 1 */}
            <div className="mb-10">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">two - three weeks</h3>
              <div className="flex gap-2 items-baseline">
                <span className="text-white text-sm">Average time to complete project</span>
              </div>
              <span className="text-gray-500 text-sm">for average size average stuff</span>
            </div>

            <div className="flex gap-12 lg:gap-16">
              {/* Stat 2 */}
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{companies}+</h3>
                <div className="text-white text-sm">We&apos;ve helped</div>
                <div className="text-gray-500 text-sm">companies for last 5 years</div>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{growth}%</h3>
                <div className="text-white text-sm">Average grow</div>
                <div className="text-gray-500 text-sm">for company that uses our AI expertise</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Quote card - opencv.ai style */}
          <motion.div
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-[#6b7db8]/20 rounded-2xl backdrop-blur-sm">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-6">
                what people saying about us
              </div>
              <blockquote className="text-white text-lg lg:text-xl font-medium leading-relaxed mb-8 italic">
                &ldquo;Synthi AI is a widely recognized and respected company in the field of artificial intelligence and computer vision. Their expertise in developing tailored AI solutions for African markets is unmatched.&rdquo;
              </blockquote>
              <div className="h-px bg-[#6b7db8]/20 mb-6" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fe6dcc6f634c2358fc46d_Quote%20Man.png"
                    alt="Partner"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">Partner CEO</div>
                    <div className="text-gray-500 text-xs">Technology Partner</div>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.prod.website-files.com/63c52559b778cc3f23684b69/651fe6f8b1acf26632134252_Quote%20Company.png"
                  alt="Company"
                  className="h-12 w-auto opacity-60"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
