'use client';

import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a1a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Right Content Section with Autonomous 3D Animations */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-[#0d0d1a] text-white">
            {/* Statistics Card with Continuous Animation */}
            <motion.div 
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 0.98, 1],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
              className="bg-[#171727] text-white p-6 rounded-xl shadow-lg w-64"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Statistics</h3>
                <button className="text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="2" fill="currentColor"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <circle cx="12" cy="18" r="2" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28 flex items-center justify-center mb-2">
                  <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#333345" strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="100"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4080ff" />
                        <stop offset="50%" stopColor="#ff4f70" />
                        <stop offset="100%" stopColor="#ffaa00" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-3xl font-bold">436</span>
                </div>
                
                <div className="flex justify-between w-full mt-2 text-xs">
                  <div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                      <span>Income</span>
                    </div>
                    <p className="font-semibold text-lg ml-4">305</p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                      <span>Expense</span>
                    </div>
                    <p className="font-semibold text-lg ml-4">98</p>
                  </div>
                </div>
                
                <button className="mt-6 bg-[#20203a] hover:bg-[#2a2a4a] text-white py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2">
                  <span>All Activity</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Credit Cards with Continuous 3D Animation */}
            <motion.div 
              animate={{
                y: [0, 10, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
              className="relative h-80 w-80 flex items-center justify-center perspective-1000"
            >
              {/* First Credit Card */}
              <motion.div
                animate={{
                  rotate: [6, 10, 2, 6],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }
                }}
                className="absolute transform rotate-6 z-10"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-64 h-40 rounded-xl p-4 shadow-xl flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-white opacity-80">Peter White</div>
                  </div>
                  <div className="text-base font-medium text-white">**** **** **** 0000</div>
                  <div className="text-xs text-white opacity-80">03/26 - Debit</div>
                </div>
              </motion.div>

              {/* Second Credit Card */}
              <motion.div
                animate={{
                  rotate: [-6, -10, -2, -6],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }
                }}
                className="absolute transform -rotate-6 z-20"
              >
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-64 h-40 rounded-xl p-4 shadow-xl flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-white opacity-80">Emre Huayde Bastas</div>
                  </div>
                  <div className="text-base font-medium text-white">**** **** **** 0000</div>
                  <div className="text-xs text-white opacity-80">10/26 - Credit</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
                    {/* Left Content Section */}
                    <motion.div 
            animate={{ 
              x: [0, 5, -5, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror"
              }
            }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm uppercase text-blue-400 tracking-wider mb-3">
              ABOUT US
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Artificial intelligence for a sustainable future
            </h3>
            <div className="text-gray-300 space-y-4">
              <p>
                At Synthi AI, we develop advanced solutions in artificial intelligence (AI), robotics, and computer vision to accelerate innovation and address the strategic challenges of businesses and institutions.
              </p>
              <p>
                Our ambition is clear: to make Africa a global leader in AI by creating ethical, high-performance, and accesible technologies capable of transforming key sectors such as health, agriculture, finance and climate.
              </p>
              <p>
                We believe that AI is not just a technology, but a powerful lever for development and economic transformation. That's why we collaborate with researchers, startups, businesses, and governments to build a strong technological ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}