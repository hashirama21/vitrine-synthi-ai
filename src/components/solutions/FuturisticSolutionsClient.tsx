'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticlesBackground from './ParticlesBackground';
import SolutionCard from './SolutionCard';
import FilterBar from './FilterBar';
import { Solution } from '../../../models/Solution';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


interface FuturisticSolutionsClientProps {
  solutions: {
    solutions: Solution[];
    total: number;
    hasMore: boolean;
  };
}

export default function FuturisticSolutionsClient({ solutions }: FuturisticSolutionsClientProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredSolutions, setFilteredSolutions] = useState(solutions.solutions);

  const categories = [...new Set(solutions.solutions.map(s => s.categorie))];

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: -50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredSolutions(solutions.solutions);
    } else {
      setFilteredSolutions(solutions.solutions.filter(s => s.categorie === selectedCategory));
    }
  }, [selectedCategory, solutions.solutions]);

  return (
    <>
      <ParticlesBackground />
      
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white min-h-screen overflow-hidden">
        <div 
          className="fixed w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        />

        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div ref={headerRef} className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-radial from-indigo-500/20 to-transparent blur-3xl" />
            
            <div className="relative">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 text-lg tracking-wider uppercase font-light">
                Our Technological Solutions
              </p>
              
              <h1 className="text-6xl md:text-7xl font-black mb-8 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200">
                  FUTURE
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                  SOLUTIONS
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full animate-shine" />
              </h1>

              <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
            </div>
          </div>

          <FilterBar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div 
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10"
          >
            {filteredSolutions.map((solution, index) => (
              <SolutionCard 
                key={solution.id} 
                solution={solution} 
                index={index} 
              />
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/20">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                  {solutions.total}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  Total Solutions
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/20">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {categories.length}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  Categories
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/20">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {solutions.solutions.reduce((acc, s) => acc + s.technologies_utilisees.length, 0)}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  Technologies
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/20">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                  100%
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">
                  Innovation
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 space-x-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-indigo-400/50 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>
        </div>

        <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/30" />
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        
        .animate-shine {
          animation: shine 3s infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}