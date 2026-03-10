'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-black overflow-hidden border-t border-[#6b7db8]/10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Heading */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight">
              Sign up<br />for our newsletter
            </h2>
          </motion.div>

          {/* Form */}
          <motion.div
            className="flex-1 max-w-md w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="flex gap-3"
            >
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-900/50 border border-[#6b7db8]/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#6b7db8]/50 transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6b7db8]/30 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3">
              By submitting this form, you consent to receiving our newsletter and allowing us to store your email address.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
