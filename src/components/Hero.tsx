'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import React from 'react';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: 'power3.out', repeat: -1, repeatDelay: 4 } 
    });
    
    // Animation 3D pour le titre
    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0, rotationX: -90, transformOrigin: '50% 50%' },
      { y: 0, opacity: 1, rotationX: 0, duration: 1 }
    )
    .fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0, rotationY: -90, transformOrigin: '50% 50%' },
      { y: 0, opacity: 1, rotationY: 0, duration: 1 },
      '-=0.5'
    )
    .fromTo(
      buttonRef.current,
      { y: 20, opacity: 0, scale: 0.5, transformOrigin: '50% 50%' },
      { y: 0, opacity: 1, scale: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      spanRef.current,
      { opacity: 0, rotationZ: 180, transformOrigin: '50% 50%' },
      { opacity: 1, rotationZ: 0, duration: 1 },
      '-=0.5'
    );
  }, []);

  return (
    <section className="relative min-h-screen sm:min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden px-4 md:px-8 py-16">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />
      </div>
      
      {/* Content */}
      <div className="container mx-auto z-10 relative">
        <span 
          ref={spanRef}
          className="mb-10 block text-1xl sm:text-2xl md:text-3xl font-bold text-white"
        >
          SYNTHI AI Impact <br/>
        </span>
        <h1 
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Empowering sectors with <br/>
          <span>powerful</span> <span className="text-blue-400">AI-driven solutions</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 mb-8"
        >
          Our dedication to staying at the forefront of technological advancements ensures that our clients remain competitive in the market.
        </p>
        <div ref={buttonRef} className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/solutions" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          >
            Embrace The Future Now !
          </Link>
        </div>
      </div>
    </section>
  );
}