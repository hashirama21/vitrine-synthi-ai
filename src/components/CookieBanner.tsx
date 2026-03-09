'use client';

import { useEffect, useState } from 'react';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookiesAccepted')) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookiesAccepted', type);
    setShow(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 p-4 transition-transform duration-500 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <p className="text-white text-sm">
            We use cookies to enhance your experience and analyze site traffic.
            <a href="/privacy" className="text-purple-400 hover:underline ml-1">Learn more</a>
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => accept('all')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            Accept All
          </button>
          <button
            onClick={() => accept('essential')}
            className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:border-purple-600 transition-colors duration-300"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
