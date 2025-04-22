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
          <div className={`${feature.icon} h-6 w-6`}>
          <img src={feature.icon} alt="Icone" className="h-full w-full object-contain" />
          </div>
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


    </div>
  );
};

export default SolutionPage;