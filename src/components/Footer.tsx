'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <footer className="bg-black text-white border-t border-[#6b7db8]/10">

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-[#6b7db8]/10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          <div className="max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent leading-tight">
              Sign up<br />for our newsletter
            </h2>
          </div>

          <div className="flex-1 max-w-md w-full">
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-gray-900/50 border border-[#6b7db8]/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#6b7db8]/50 transition-colors duration-300"
              />

              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#6b7db8]/30 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-3">
              By submitting this form, you consent to receiving our newsletter and allowing us to store your email address.
            </p>
          </div>

        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* Logo + description */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Synthi AI"
              width={150}
              height={60}
              className="mb-6 w-auto h-auto max-w-[150px]"
              priority
            />

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We create practical Artificial Intelligence and Computer Vision
              solutions for startups and enterprise companies across Africa.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>

            <nav className="space-y-3">
              <Link href="/labs" className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300">
                Portfolio
              </Link>

              <Link href="/solutions" className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300">
                Services
              </Link>

              <Link href="/about" className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300">
                About us
              </Link>

              <Link href="/about" className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300">
                Careers
              </Link>

              <a
                href="mailto:contact@synthi-ai.com"
                className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>

            <nav className="space-y-3">
              <Link href="/blog" className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300">
                Blog
              </Link>

              <Link href="/privacy" className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300">
                Privacy Policy
              </Link>

              <Link href="/terms" className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300">
                Terms & Conditions
              </Link>

              <button
                onClick={openCookieSettings}
                className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300"
              >
                Cookie Settings
              </button>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-6">Social</h4>

            <nav className="space-y-3">
              <a
                href="https://www.linkedin.com/company/synthi-ai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300"
              >
                LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@SYNTHIAI-y2o"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300"
              >
                YouTube
              </a>

              <a
                href="https://www.instagram.com/synthiai4/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@synthi_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300"
              >
                TikTok
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>

            <div className="space-y-5">

              <address className="not-italic text-gray-500 text-sm leading-relaxed space-y-1">
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  Cameroon
                </p>
                <p>Douala, Cameroon</p>

                <a
                  href="tel:+237620207980"
                  className="block hover:text-[#6b7db8] transition-colors duration-300"
                >
                  +237 620 207 980
                </a>
              </address>

              <address className="not-italic text-gray-500 text-sm leading-relaxed space-y-1">
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  United States — HQ
                </p>

                <p>United States</p>

                <a
                  href="tel:+12025550100"
                  className="block hover:text-[#6b7db8] transition-colors duration-300"
                >
                  +1 (202) 555-0100
                </a>
              </address>

              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  Email
                </p>

                <a
                  href="mailto:contact@synthi-ai.com"
                  className="text-gray-500 text-sm hover:text-[#6b7db8] transition-colors duration-300"
                >
                  contact@synthi-ai.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#6b7db8]/10 mt-10 pt-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} synthi-ai.com
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;