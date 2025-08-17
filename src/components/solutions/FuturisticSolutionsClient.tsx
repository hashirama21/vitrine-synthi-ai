'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SolutionCard from './SolutionCard';
import FilterBar from './FilterBar';
import FloatingGeometry from './FloatingGeometry';
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredSolutions, setFilteredSolutions] = useState(solutions.solutions);

  const categories = [...new Set(solutions.solutions.map(s => s.categorie))];

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out"
        }
      );
    }
  }, []);

  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredSolutions(solutions.solutions);
    } else {
      setFilteredSolutions(solutions.solutions.filter(s => s.categorie === selectedCategory));
    }
  }, [selectedCategory, solutions.solutions]);

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* Floating Geometry - decorative element */}
      <FloatingGeometry />

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(107, 125, 184, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107, 125, 184, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-[#6b7db8]/10 to-transparent blur-3xl" />
          
          <div className="relative space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-[#6b7db8]/10 border border-[#6b7db8]/20 text-[#6b7db8] uppercase text-sm font-semibold tracking-widest rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#6b7db8] rounded-full mr-3"></div>
              Our Technological Arsenal
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Advanced
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9]">
                Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive suite of cutting-edge technologies designed to transform your business operations and drive innovation.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] mx-auto rounded-full mt-8" />
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Solutions Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 mt-16"
        >
          {filteredSolutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id} 
              solution={solution} 
              index={index} 
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredSolutions.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 p-4 bg-[#6b7db8]/10 rounded-2xl border border-[#6b7db8]/20">
              <svg className="w-full h-full text-[#6b7db8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.417-1.007-5.862-2.625M15 21H9a2 2 0 01-2-2V5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Solutions Found</h3>
            <p className="text-gray-400 mb-6">No solutions match the current filter criteria.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-6 py-3 bg-[#6b7db8] hover:bg-[#5a6ba3] text-white font-medium rounded-xl transition-colors duration-300"
            >
              Show All Solutions
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-24 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-[#6b7db8]/15 hover:border-[#6b7db8]/30 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] mb-3">
                {solutions.total}
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                Total Solutions
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-[#6b7db8]/15 hover:border-[#6b7db8]/30 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] mb-3">
                {categories.length}
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                Categories
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-[#6b7db8]/15 hover:border-[#6b7db8]/30 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] mb-3">
                {solutions.solutions.reduce((acc, s) => acc + (s.technologies_utilisees?.length || 0), 0)}
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                Technologies
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-[#6b7db8]/15 hover:border-[#6b7db8]/30 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] mb-3">
                100%
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                Innovation Rate
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-20">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-[#6b7db8]/60"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/20" />

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}