'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface StatCardProps {
  label: string;
  value: string;
  delay: number;
}

const StatCard = ({ label, value, delay }: StatCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(cardRef.current,
      { scale: 0, rotationY: 180 },
      { 
        scale: 1, 
        rotationY: 0,
        duration: 0.8,
        delay: delay,
        ease: "back.out(1.7)"
      }
    );
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
          {value}
        </div>
        <div className="text-gray-300 text-sm uppercase tracking-wider">
          {label}
        </div>
      </div>

      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
    </div>
  );
};

export default StatCard;