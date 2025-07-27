'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import React from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animate navbar items
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`w-full max-w-[1440px] h-[120px] z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a1a]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
   
      <div className="container mx-auto px-1 h-full">
        <div className="flex items-center justify-evenly h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <div className="text-white font-bold text-xl">
              <Image src="/logo.png" alt="logo" width={170} height={60} />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-14 h-full">
            <Link href="/" className="nav-item text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="nav-item text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="nav-item text-white hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="nav-item text-white hover:text-blue-400 transition-colors">
              Solutions
            </Link>
            <Link href="/faqs" className="nav-item text-white hover:text-blue-400 transition-colors">
              FAQs
            </Link>
          
          </div>
          
          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
            style={{ width: '200px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Get In Touch
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f0f1f] mt-4 rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/solutions"
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/faqs"
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center"
                style={{ width: '200px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};