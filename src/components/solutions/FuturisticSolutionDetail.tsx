'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Define the Solution model based on usage in the original code
interface Technology {
  id: string;
  nom: string;
  type: string;
  icone?: string;
  url_doc?: string;
}

interface UseCase {
  id: string;
  titre: string;
  description: string;
  image?: string;
}

interface Objective {
  id: string;
  titre: string;
  description: string;
  icon?: string;
}

interface Author {
  nom: string;
  poste: string;
  photo?: string;
  email?: string;
}

interface Solution {
  id: string;
  slug: string;
  titre: string;
  description_courte: string;
  description_longue: string;
  categorie: string;
  tags: string[];
  technologies_utilisees: Technology[];
  fonctionnalites: string[];
  use_cases: UseCase[];
  objectifs: Objective[];
  liens_externes: string[];
  images?: string[];
  icon?: string;
  auteur: Author;
}

interface FuturisticSolutionDetailProps {
  solution: Solution;
  relatedSolutions?: Solution[];
}

interface ImageGalleryProps {
  images: string[];
  title: string;
}

// StatCard Component
const StatCard = ({ label, value, delay }: { label: string; value: string; delay: number }) => {
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statRef.current) {
      gsap.fromTo(
        statRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay, ease: 'power3.out' }
      );
    }
  }, [delay]);

  return (
    <div
      ref={statRef}
      className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-lg rounded-lg p-4 border border-indigo-400/20"
    >
      <div className="text-sm text-indigo-300 uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
};

// ImageGallery Component
const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    gsap.fromTo(
      galleryRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div ref={galleryRef} className="relative group">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-400/30 shadow-xl shadow-indigo-500/10 group-hover:shadow-indigo-500/20 transition-shadow duration-500">
          <Image
            src={images[currentImage]}
            alt={`${title} - Image ${currentImage + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-full border border-indigo-400/40 text-white hover:bg-indigo-600/60 hover:border-indigo-400/60 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Toggle fullscreen"
          >
            <Expand className="w-5 h-5" />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full border border-indigo-400/40 text-white hover:bg-indigo-600/60 hover:border-indigo-400/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover/btn:scale-110" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full border border-indigo-400/40 text-white hover:bg-indigo-600/60 hover:border-indigo-400/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:scale-110" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? 'bg-indigo-400 shadow-lg shadow-indigo-400/40 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-indigo-400/40 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {currentImage + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="flex space-x-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImage
                    ? 'border-indigo-400 shadow-lg shadow-indigo-400/30 scale-105'
                    : 'border-gray-600/40 hover:border-indigo-400/50 hover:scale-102'
                }`}
                aria-label={`Select image ${index + 1}`}
              >
                <Image src={image} alt={`${title} thumbnail ${index + 1}`} fill className="object-cover" />
                {index === currentImage && <div className="absolute inset-0 bg-indigo-400/20" />}
              </button>
            ))}
          </div>
        )}
      </div>
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-6">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={images[currentImage]}
              alt={`${title} - Fullscreen`}
              fill
              className="object-contain"
              priority
            />
            <button
              onClick={toggleFullscreen}
              className="absolute top-6 right-6 p-3 bg-black/60 backdrop-blur-md rounded-full border border-indigo-400/40 text-white hover:bg-indigo-600/60 hover:border-indigo-400/60 transition-all duration-300"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/60 backdrop-blur-md rounded-full border border-indigo-400/40 text-white hover:bg-indigo-600/60 hover:border-indigo-400/60 transition-all duration-300 flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/60 backdrop-blur-md rounded-full border border-indigo-400/40 text-white hover:bg-indigo-600/60 hover:border-indigo-400/60 transition-all duration-300 flex items-center justify-center"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? 'bg-indigo-400 shadow-lg shadow-indigo-400/40 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

// FloatingGeometry Component
const FloatingGeometry = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{ x: number; y: number; size: number; speedX: number; speedY: number }> = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />;
};

// Main Component
export default function FuturisticSolutionDetail({ solution, relatedSolutions = [] }: FuturisticSolutionDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Robotique':
        return 'R';
      case 'IA':
        return 'AI';
      case 'Automatisation':
        return 'A';
      default:
        return 'T';
    }
  };

  useEffect(() => {
    setIsLoaded(true);

    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        '.hero-title',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: 'power4.out' }
      )
        .fromTo(
          '.hero-subtitle',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=1'
        )
        .fromTo(
          '.hero-tags',
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(2)' },
          '-=0.6'
        );
    }

    if (contentRef.current) {
      gsap.set('.content-section', { y: 80, opacity: 0 });
      ScrollTrigger.batch('.content-section', {
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: 'power3.out',
          });
        },
        start: 'top 85%',
      });
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <div className="relative z-20 p-6 md:p-8">
        <Link
          href="/solutions"
          className="inline-flex items-center space-x-3 text-indigo-300 hover:text-indigo-200 transition-all duration-400 group"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
          <span className="text-sm font-medium uppercase tracking-widest">Back to Solutions</span>
        </Link>
      </div>

      <div ref={heroRef} className="relative z-10 container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-10">
            <div className="hero-title">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200">
                  {solution.titre}
                </span>
              </h1>
            </div>
            <div className="hero-subtitle">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{solution.description_courte}</p>
            </div>
            <div className="hero-tags flex flex-wrap gap-4">
              {solution.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-md border border-indigo-400/40 rounded-full text-sm font-medium text-indigo-100 hover:from-indigo-600/40 hover:to-purple-600/40 hover:border-indigo-400/60 transition-all duration-400 shadow-md hover:shadow-indigo-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6">
              <StatCard label="Category" value={solution.categorie} delay={0.2} />
              <StatCard label="Technologies" value={solution.technologies_utilisees.length.toString()} delay={0.4} />
              <StatCard label="Features" value={solution.fonctionnalites.length.toString()} delay={0.6} />
            </div>
          </div>
          <div className="relative">
            <FloatingGeometry />
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-lg border border-indigo-400/40 shadow-xl shadow-indigo-500/20">
              {solution.images && solution.images.length > 0 ? (
                <Image
                  src={solution.images[0]}
                  alt={solution.titre}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : solution.icon ? (
                <Image src={solution.icon} alt={solution.titre} fill className="object-contain p-10" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-9xl font-extrabold text-purple-200/60">{getCategoryIcon(solution.categorie)}</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-full animate-[scan_4s_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <div ref={contentRef} className="relative z-10 container mx-auto px-6 md:px-8 py-20 md:py-32 space-y-24">
        {solution.images && solution.images.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Visual Showcase
            </h2>
            <ImageGallery images={solution.images} title={solution.titre} />
          </section>
        )}
        <section className="content-section">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-indigo-400/30 shadow-lg shadow-indigo-500/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Detailed Overview
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
              {solution.description_longue}
            </div>
          </div>
        </section>
        {solution.technologies_utilisees && solution.technologies_utilisees.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.technologies_utilisees.map((tech, index) => (
                <div
                  key={tech.id}
                  className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg p-6 rounded-xl border border-indigo-400/40 hover:border-indigo-400/60 transition-all duration-500 group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {tech.icone && (
                      <div className="w-12 h-12 relative">
                        <Image
                          src={tech.icone}
                          alt={tech.nom}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-400"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors duration-400">
                        {tech.nom}
                      </h3>
                      <p className="text-sm text-indigo-300 capitalize">{tech.type}</p>
                    </div>
                  </div>
                  {tech.url_doc && (
                    <a
                      href={tech.url_doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-indigo-200 transition-colors duration-400 flex items-center space-x-2"
                    >
                      <span>Documentation</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
        {solution.fonctionnalites && solution.fonctionnalites.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.fonctionnalites.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-400 group"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex-shrink-0 mt-1 group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-400" />
                  <div className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-400">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {solution.use_cases && solution.use_cases.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.use_cases.map((useCase, index) => (
                <div
                  key={useCase.id}
                  className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg p-6 rounded-xl border border-indigo-400/40 hover:border-indigo-400/60 transition-all duration-500 group"
                >
                  {useCase.image && (
                    <div className="w-full h-36 relative mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={useCase.image}
                        alt={useCase.titre}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-400">
                    {useCase.titre}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        {solution.objectifs && solution.objectifs.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Objectives & Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.objectifs.map((objective, index) => (
                <div
                  key={objective.id}
                  className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg p-6 rounded-xl border border-indigo-400/40 hover:border-indigo-400/60 transition-all duration-500 group"
                >
                  {objective.icon && (
                    <div className="w-12 h-12 relative mb-4">
                      <Image
                        src={objective.icon}
                        alt={objective.titre}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-400"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-400">
                    {objective.titre}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{objective.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        {solution.liens_externes && solution.liens_externes.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              External Resources
            </h2>
            <div className="space-y-4">
              {solution.liens_externes.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg border border-indigo-400/40 hover:from-indigo-600/30 hover:to-purple-600/30 hover:border-indigo-400/60 transition-all duration-400 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-200 group-hover:text-white transition-colors duration-400">{link}</span>
                    <svg
                      className="w-5 h-5 text-indigo-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
        <section className="content-section">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-indigo-400/30 shadow-lg shadow-indigo-500/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Solution Creator
            </h2>
            <div className="flex items-center space-x-6">
              {solution.auteur.photo && (
                <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-indigo-400/50 shadow-lg shadow-indigo-500/20">
                  <Image src={solution.auteur.photo} alt={solution.auteur.nom} fill className="object-cover" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{solution.auteur.nom}</h3>
                <p className="text-indigo-300 mb-2">{solution.auteur.poste}</p>
                {solution.auteur.email && (
                  <a
                    href={`mailto:${solution.auteur.email}`}
                    className="text-sm text-gray-400 hover:text-indigo-200 transition-colors duration-400 flex items-center space-x-2"
                  >
                    <span>{solution.auteur.email}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
        {relatedSolutions && relatedSolutions.length > 0 && (
          <section className="content-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Related Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSolutions.map((relatedSolution) => (
                <Link
                  key={relatedSolution.id}
                  href={`/solutions/${relatedSolution.slug}`}
                  className="block bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-xl overflow-hidden border border-indigo-400/40 hover:border-indigo-400/60 transition-all duration-500 group"
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
                      <div className="w-full h-full flex items-center justify-center text-5xl font-extrabold text-purple-200/60">
                        {getCategoryIcon(relatedSolution.categorie)}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-400">
                      {relatedSolution.titre}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{relatedSolution.description_courte}</p>
                    <div className="flex items-center mt-4 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-400">
                      <span className="text-sm font-medium">Learn more</span>
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        <div className="flex justify-center pt-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-400 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 group"
          >
            <span className="flex items-center space-x-3">
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
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}