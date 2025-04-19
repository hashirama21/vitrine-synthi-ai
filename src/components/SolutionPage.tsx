'use client';

import Link from 'next/link';
import { FC } from 'react';
import { Solution, SolutionFeature } from '../../models/Solution';

interface FeatureCardProps {
  feature: SolutionFeature;
}

const FeatureCard: FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-indigo-900 rounded-full p-4 mb-4">
        <div className="text-blue-400">
          {/* We'll use a simple div with a className for icons */}
          <div className={`${feature.icon} h-6 w-6`}></div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  );
};

interface SolutionPageProps {
  solution: Solution;
}

const SolutionPage: FC<SolutionPageProps> = ({ solution }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-white">
              <div className="h-8">
                <img src="/logo.svg" alt="Synthi AI" className="h-full" />
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-blue-400">Home</Link>
              <Link href="/about" className="text-white hover:text-blue-400">About</Link>
              <Link href="/services" className="text-white hover:text-blue-400">Services</Link>
              <Link href="/solutions" className="text-white hover:text-blue-400">Solutions</Link>
              <Link href="/faqs" className="text-white hover:text-blue-400">FAQs</Link>
            </nav>
          </div>
          <Link 
            href="/contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Get In Touch
          </Link>
        </div>
      </header>

      {/* Solution Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/solutions" className="text-blue-400 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Solution / {solution.title}
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">
          {solution.title}
        </h1>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">{solution.subtitle}</h2>
          <p className="text-gray-400 mb-12">{solution.introText}</p>
          
          <div className="text-left mb-12">
            <p className="text-gray-400 mb-6">{solution.description}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-24">
          {solution.features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8">
              <Link href="/" className="block mb-4">
                <img src="/logo.svg" alt="Synthi AI" className="h-8" />
              </Link>
              <p className="text-gray-400 text-sm">
                Dedicated to stay at the forefront of technological advancements through AI-driven solutions.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <div className="h-5 w-5 bg-gray-700 rounded-md flex items-center justify-center">X</div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <div className="h-5 w-5 bg-gray-700 rounded-md flex items-center justify-center">IG</div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <div className="h-5 w-5 bg-gray-700 rounded-md flex items-center justify-center">LI</div>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <div className="h-5 w-5 bg-gray-700 rounded-md flex items-center justify-center">DC</div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-blue-400 font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-blue-400">Services</Link></li>
                <li><Link href="/solutions" className="text-gray-400 hover:text-blue-400">Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-blue-400 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/lab" className="text-gray-400 hover:text-blue-400">Synthi AI Lab</Link></li>
                <li><Link href="/academy" className="text-gray-400 hover:text-blue-400">Synthi AI Academy</Link></li>
                <li><Link href="/solutions" className="text-gray-400 hover:text-blue-400">Synthi AI Solutions</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-blue-400">Blog & news</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-blue-400 font-semibold mb-4">Useful</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-blue-400">Support</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400">Privacy Policy</Link></li>
              </ul>
              <div className="flex items-center mt-4">
                <div className="flex items-center mr-2">
                  <span className="text-gray-400">English</span>
                  <svg className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>Copyright ©2025, all rights reserved to Synthi AI. Designed by <a href="#" className="text-blue-400">King Kelly</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolutionPage;