'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingGeometry from './FloatingGeometry';
import StatCard from './StatCard';
import ImageGallery from './ImageGallery';
import { Solution } from '../../../models/Solution';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


interface FuturisticSolutionDetailProps {
  solution: Solution;
  relatedSolutions?: Solution[];
}

export default function FuturisticSolutionDetail({ solution, relatedSolutions = [] }: FuturisticSolutionDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Robotique': return 'R';
      case 'IA': return 'AI';
      case 'Automatisation': return 'A';
      default: return 'T';
    }
  };

  useEffect(() => {
    setIsLoaded(true);

    // Hero entrance animation
    if (heroRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-title',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        '-=0.8'
      )
      .fromTo('.hero-tags',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        '-=0.4'
      );
    }

    // Content parallax animation
    if (contentRef.current) {
      gsap.set('.content-section', { y: 100, opacity: 0 });
      
      ScrollTrigger.batch('.content-section', {
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
          });
        }
      });
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10" />
        {/* Futuristic grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      {/* Back navigation */}
      <div className="relative z-20 p-6">
        <Link 
          href="/solutions"
          className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-all duration-300 group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-wider">Back to Solutions</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text content */}
          <div className="space-y-8">
            <div className="hero-title">
              <h1 className="text-5xl lg:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200">
                  {solution.titre}
                </span>
              </h1>
            </div>

            <div className="hero-subtitle">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {solution.description_courte}
              </p>
            </div>

            {/* Tags */}
            <div className="hero-tags flex flex-wrap gap-3">
              {solution.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full text-sm font-medium text-indigo-200 hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400/50 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <StatCard label="Category" value={solution.categorie} delay={0.2} />
              <StatCard label="Technologies" value={solution.technologies_utilisees.length.toString()} delay={0.4} />
              <StatCard label="Features" value={solution.fonctionnalites.length.toString()} delay={0.6} />
            </div>
          </div>

          {/* Visual area with 3D geometries */}
          <div className="relative">
            <FloatingGeometry />
            
            {/* Main image or icon */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-xl border border-indigo-500/30">
              {solution.images && solution.images.length > 0 ? (
                <Image
                  src={solution.images[0]}
                  alt={solution.titre}
                  fill
                  className="object-cover"
                />
              ) : solution.icon ? (
                <Image
                  src={solution.icon}
                  alt={solution.titre}
                  fill
                  className="object-contain p-8"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl opacity-60 font-bold text-purple-200">
                    {getCategoryIcon(solution.categorie)}
                  </div>
                </div>
              )}

              {/* Holographic scan effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-full animate-scan" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-6 py-16 space-y-20">
        
        {/* Image gallery */}
        {solution.images && solution.images.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Visual Overview
            </h2>
            <ImageGallery images={solution.images} title={solution.titre} />
          </section>
        )}

        {/* Detailed description */}
        <section className="content-section">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Complete Description
            </h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {solution.description_longue}
              </p>
            </div>
          </div>
        </section>

        {/* Technologies used */}
        {solution.technologies_utilisees && solution.technologies_utilisees.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.technologies_utilisees.map((tech, index) => (
                <div 
                  key={tech.id}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {tech.icone && (
                      <div className="w-12 h-12 relative">
                        <Image
                          src={tech.icone}
                          alt={tech.nom}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors">
                        {tech.nom}
                      </h3>
                      <p className="text-sm text-indigo-400 capitalize">
                        {tech.type}
                      </p>
                    </div>
                  </div>
                  
                  {tech.url_doc && (
                    <a
                      href={tech.url_doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-indigo-300 transition-colors flex items-center space-x-1"
                    >
                      <span>Documentation</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key features */}
        {solution.fonctionnalites && solution.fonctionnalites.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.fonctionnalites.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-1 group-hover:shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300" />
                  <div className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Use cases */}
        {solution.use_cases && solution.use_cases.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.use_cases.map((useCase, index) => (
                <div 
                  key={useCase.id}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 group"
                >
                  {useCase.image && (
                    <div className="w-full h-32 relative mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={useCase.image}
                        alt={useCase.titre}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {useCase.titre}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Objectives */}
        {solution.objectifs && solution.objectifs.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Objectives & Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.objectifs.map((objective, index) => (
                <div 
                  key={objective.id}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 group"
                >
                  {objective.icon && (
                    <div className="w-12 h-12 relative mb-4">
                      <Image
                        src={objective.icon}
                        alt={objective.titre}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {objective.titre}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* External links */}
        {solution.liens_externes && solution.liens_externes.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              External Resources
            </h2>
            <div className="space-y-4">
              {solution.liens_externes.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-lg hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-300 group-hover:text-white transition-colors">
                      {link}
                    </span>
                    <svg className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Author */}
        <section className="content-section">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Solution Creator
            </h2>
            <div className="flex items-center space-x-6">
              {solution.auteur.photo && (
                <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-indigo-500/50">
                  <Image
                    src={solution.auteur.photo}
                    alt={solution.auteur.nom}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {solution.auteur.nom}
                </h3>
                <p className="text-indigo-300 mb-2">
                  {solution.auteur.poste}
                </p>
                {solution.auteur.email && (
                  <a 
                    href={`mailto:${solution.auteur.email}`}
                    className="text-sm text-gray-400 hover:text-indigo-300 transition-colors flex items-center space-x-1"
                  >
                    <span>{solution.auteur.email}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related solutions */}
        {relatedSolutions && relatedSolutions.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Related Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSolutions.map((relatedSolution, index) => (
                <Link
                  key={relatedSolution.id}
                  href={`/solutions/${relatedSolution.slug}`}
                  className="block bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-xl overflow-hidden border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 group"
                >
                  <div className="aspect-video relative bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
                    {relatedSolution.images && relatedSolution.images.length > 0 ? (
                      <Image
                        src={relatedSolution.images[0]}
                        alt={relatedSolution.titre}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl opacity-60 font-bold text-purple-200">
                        {getCategoryIcon(relatedSolution.categorie)}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {relatedSolution.titre}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedSolution.description_courte}
                    </p>
                    <div className="flex items-center mt-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to top button */}
        <div className="flex justify-center pt-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 group"
          >
            <span className="flex items-center space-x-2">
              <span>Back to Top</span>
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .animate-scan {
          animation: scan 3s infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}