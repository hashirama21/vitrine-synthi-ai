'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    gsap.fromTo(card, 
      { 
        y: 100, 
        opacity: 0, 
        rotationX: 45,
        scale: 0.8
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        scale: 1,
        duration: 1.2, 
        delay: index * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.to(card, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out"
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - 100,
        y: y - 100,
        opacity: 0.6,
        duration: 0.3
      });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.3
      });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Robotique': return 'R';
      case 'IA': return 'AI';
      case 'Automatisation': return 'A';
      default: return 'T';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Robotique': return 'from-blue-500 to-cyan-500';
      case 'IA': return 'from-purple-500 to-pink-500';
      case 'Automatisation': return 'from-green-500 to-emerald-500';
      default: return 'from-indigo-500 to-purple-500';
    }
  };

  return (
    <div className="relative group perspective-1000">
      <Link href={`/solutions/${solution.slug}`}>
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-500 transform-gpu"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={glowRef}
            className="absolute w-48 h-48 bg-gradient-radial from-indigo-400/30 to-transparent rounded-full opacity-0 pointer-events-none"
            style={{ transform: 'translate(-50%, -50%)' }}
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" 
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
            </div>

            <div className="h-48 w-full relative bg-gradient-to-br from-purple-800/50 to-indigo-800/50 rounded-xl overflow-hidden mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
              
              {solution.images && solution.images.length > 0 ? (
                <Image
                  src={solution.images[0]}
                  alt={solution.titre}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : solution.icon ? (
                <Image
                  src={solution.icon}
                  alt={solution.titre}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-purple-200 animate-float">
                    {getCategoryIcon(solution.categorie)}
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {solution.tags.slice(0, 3).map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="text-xs px-3 py-1 rounded-full border border-indigo-400/50 bg-indigo-900/50 text-indigo-200 backdrop-blur-sm hover:bg-indigo-400/20 hover:border-indigo-300 hover:text-white hover:shadow-lg hover:shadow-indigo-400/25 transition-all duration-300"
                  style={{ animationDelay: `${tagIndex * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 group-hover:from-indigo-200 group-hover:to-cyan-200 transition-all duration-500">
              {solution.titre}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
              {solution.description_courte}
            </p>

            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(solution.categorie)} shadow-lg shadow-indigo-400/50 animate-pulse`} />
            </div>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-2 text-xs text-indigo-300">
                <span>{solution.technologies_utilisees.length} Tech</span>
                <span>•</span>
                <span>{solution.fonctionnalites.length} Features</span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-xl" />
          </div>
        </div>
      </Link>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .perspective-1000 {
          perspective: 1000px;
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