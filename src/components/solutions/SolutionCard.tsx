'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Cpu, Bot, Zap, Settings } from 'lucide-react';
import { Solution } from '../../../models/Solution';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

const SolutionCard = ({ solution, index }: SolutionCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    gsap.fromTo(card, 
      { 
        y: 50, 
        opacity: 0,
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [index]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'robotique':
      case 'robotics':
        return <Bot className="w-5 h-5" />;
      case 'ia':
      case 'ai':
      case 'artificial intelligence':
        return <Cpu className="w-5 h-5" />;
      case 'automatisation':
      case 'automation':
        return <Settings className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative group">
      <Link href={`/solutions/${solution.slug}`}>
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#6b7db8]/20 hover:border-[#6b7db8]/40 transition-all duration-500 h-full"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6b7db8]/5 via-transparent to-[#6b7db8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          {/* Header with image/icon */}
          <div className="relative h-48 w-full bg-gradient-to-br from-[#6b7db8]/10 to-[#6b7db8]/5 overflow-hidden">
            {solution.images && solution.images.length > 0 ? (
              <Image
                src={solution.images[0]}
                alt={solution.titre || solution.titre}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : solution.icon ? (
              <Image
                src={solution.icon}
                alt={solution.titre || solution.titre}
                fill
                className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="p-6 bg-[#6b7db8]/20 rounded-2xl text-[#6b7db8]">
                  {getCategoryIcon(solution.categorie)}
                </div>
              </div>
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Category indicator */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-[#6b7db8]/30">
                {getCategoryIcon(solution.categorie)}
                <span className="text-xs text-[#6b7db8] font-medium">
                  {solution.categorie}
                </span>
              </div>
            </div>

            {/* Arrow indicator */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 bg-[#6b7db8]/20 backdrop-blur-sm rounded-lg text-[#6b7db8]">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Tags */}
            {solution.tags && solution.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {solution.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs px-3 py-1 rounded-full bg-[#6b7db8]/10 text-[#6b7db8] border border-[#6b7db8]/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {solution.tags.length > 3 && (
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-700/50 text-gray-400 border border-gray-600/50">
                    +{solution.tags.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-white group-hover:text-[#8a9fd9] transition-colors duration-300 line-clamp-2">
              {solution.titre || solution.titre}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
              {solution.description_courte || solution.description_longue}
            </p>

            {/* Footer info */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                {solution.technologies_utilisees && (
                  <span>
                    <span className="font-medium text-[#6b7db8]">{solution.technologies_utilisees.length}</span> Tech
                  </span>
                )}
                {solution.fonctionnalites && (
                  <>
                    <span>•</span>
                    <span>
                      <span className="font-medium text-[#6b7db8]">{solution.fonctionnalites.length}</span> Features
                    </span>
                  </>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#6b7db8] rounded-full"></div>
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {solution.description_longue|| 'Available'}
                </span>
              </div>
            </div>
          </div>

          {/* Hover border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6b7db8]/10 via-transparent to-[#6b7db8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
        </div>
      </Link>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SolutionCard;