import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin, FaDiscord, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0c1b] text-white py-12 mt-12" style={{ width: '1440px', height: '500px' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image src="/logo.png" alt="logo" width={170} height={70} className="mb-3" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Dedicated to stay at the forefront of technological advancements through AI-driven solutions.
              </p>
            </div>
            <div className="flex space-x-3">
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-[#161a36] p-2 rounded">
                <FaTwitter className="text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://www.instagram.com/synthiai4/" target="_blank" rel="noopener noreferrer" className="bg-[#161a36] p-2 rounded">
                <FaInstagram className="text-gray-400 hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/synthi-ai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-[#161a36] p-2 rounded">
                <FaLinkedin className="text-gray-400 hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://www.youtube.com/@SYNTHIAI-y2o" target="_blank" rel="noopener noreferrer" className="bg-[#161a36] p-2 rounded">
                <FaYoutube className="text-gray-400 hover:text-indigo-400 transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@synthi_ai" target="_blank" rel="noopener noreferrer" className="bg-[#161a36] p-2 rounded">
                <FaTiktok className="text-gray-400 hover:text-indigo-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="ml-40">
            <h3 className="text-blue-500 font-semibold text-lg mb-6">Pages</h3>
            <ul className="space-y-8">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="ml-36">
            <h3 className="text-blue-500 font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-8">
              <li><Link href="/synthi-ai-lab" className="text-gray-400 hover:text-white transition-colors">Synthi AI Lab</Link></li>
              <li><Link href="/academy" className="text-gray-400 hover:text-white transition-colors">Synthi AI Academy</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">Synthi AI Solutions</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog & News</Link></li>
            </ul>
          </div>

          {/* Useful */}
          <div className="ml-40">
            <h3 className="text-blue-500 font-semibold text-lg mb-6">Useful</h3>
            <ul className="space-y-8">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li>
                <div className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-700">
                    <span className="text-xs">🌐</span>
                  </span>
                  <span>English</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-xs text-gray-500 text-center">
          <p>Copyright ©2025. All rights reserved to Synthi AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;