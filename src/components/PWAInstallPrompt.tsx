'use client';

import { useEffect, useState, useRef } from 'react';

export function PWAInstallPrompt() {
  const [show, setShow] = useState(false);
  const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    const handler = (e: Event) => {
      e.preventDefault();
      deferredPromptRef.current = e as BeforeInstallPromptEvent;
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (deferredPromptRef.current) {
      deferredPromptRef.current.prompt();
      await deferredPromptRef.current.userChoice;
      deferredPromptRef.current = null;
      setShow(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-2xl shadow-lg backdrop-blur-xl border border-purple-600/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <h3 className="font-bold">Install Synthi AI App</h3>
            <p className="text-sm opacity-90">Get offline access and faster insights</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={install}
            className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
          >
            Install
          </button>
          <button
            onClick={() => setShow(false)}
            className="text-white/70 hover:text-white px-2 transition-colors duration-300"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
