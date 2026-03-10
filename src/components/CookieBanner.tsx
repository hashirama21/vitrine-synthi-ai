'use client';

import { useEffect, useState, useCallback } from 'react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'cookie-preferences';
const RE_PROMPT_DAYS = 180;

function getStoredPreferences(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const prefs: CookiePreferences = JSON.parse(stored);
    const daysSince = (Date.now() - prefs.timestamp) / (1000 * 60 * 60 * 24);
    if (daysSince > RE_PROMPT_DAYS) return null;
    return prefs;
  } catch {
    return null;
  }
}

function savePreferences(prefs: Omit<CookiePreferences, 'timestamp'>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, timestamp: Date.now() }));
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [functional, setFunctional] = useState(false);

  const closeBanner = useCallback(() => {
    setShow(false);
    setShowCustomize(false);
  }, []);

  useEffect(() => {
    const existing = getStoredPreferences();
    if (!existing) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      const existing = getStoredPreferences();
      if (existing) {
        setAnalytics(existing.analytics);
        setMarketing(existing.marketing);
        setFunctional(existing.functional);
      }
      setShowCustomize(true);
      setShow(true);
    };
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, []);

  const acceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true, functional: true });
    closeBanner();
  };

  const rejectAll = () => {
    savePreferences({ essential: true, analytics: false, marketing: false, functional: false });
    closeBanner();
  };

  const saveCustom = () => {
    savePreferences({ essential: true, analytics, marketing, functional });
    closeBanner();
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#0d0d2b]/95 backdrop-blur-xl border-t border-[#6b7db8]/20 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          {/* Main banner */}
          {!showCustomize && (
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-white font-semibold text-base mb-1">We value your privacy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. You can choose which categories of cookies you allow.{' '}
                  <a href="/privacy" className="text-[#6b7db8] hover:underline">Learn more</a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] text-white font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-[#6b7db8]/30 transition-all duration-300"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-2.5 border border-gray-600 text-white font-semibold text-sm rounded-lg hover:border-[#6b7db8] transition-colors duration-300"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="px-6 py-2.5 text-[#6b7db8] font-semibold text-sm rounded-lg hover:bg-[#6b7db8]/10 transition-colors duration-300"
                >
                  Customize
                </button>
              </div>
            </div>
          )}

          {/* Customize panel */}
          {showCustomize && (
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-white font-semibold text-base mb-1">Cookie Preferences</h3>
                <p className="text-gray-400 text-sm">
                  Manage your cookie settings. Essential cookies are always active as they are necessary for the site to function.
                </p>
              </div>

              <div className="space-y-3">
                {/* Essential - always on */}
                <div className="flex items-center justify-between py-3 border-b border-[#6b7db8]/10">
                  <div>
                    <p className="text-white text-sm font-medium">Essential</p>
                    <p className="text-gray-500 text-xs">Required for the site to function. Cannot be disabled.</p>
                  </div>
                  <div className="w-11 h-6 bg-[#6b7db8] rounded-full relative cursor-not-allowed opacity-70">
                    <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between py-3 border-b border-[#6b7db8]/10">
                  <div>
                    <p className="text-white text-sm font-medium">Analytics</p>
                    <p className="text-gray-500 text-xs">Help us understand how visitors interact with our site.</p>
                  </div>
                  <button
                    onClick={() => setAnalytics(!analytics)}
                    className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
                      analytics ? 'bg-[#6b7db8]' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                        analytics ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between py-3 border-b border-[#6b7db8]/10">
                  <div>
                    <p className="text-white text-sm font-medium">Marketing</p>
                    <p className="text-gray-500 text-xs">Used to deliver relevant ads and track campaign effectiveness.</p>
                  </div>
                  <button
                    onClick={() => setMarketing(!marketing)}
                    className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
                      marketing ? 'bg-[#6b7db8]' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                        marketing ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                {/* Functional */}
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-white text-sm font-medium">Functional</p>
                    <p className="text-gray-500 text-xs">Enable enhanced functionality and personalization.</p>
                  </div>
                  <button
                    onClick={() => setFunctional(!functional)}
                    className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
                      functional ? 'bg-[#6b7db8]' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                        functional ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={saveCustom}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] text-white font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-[#6b7db8]/30 transition-all duration-300"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 border border-gray-600 text-white font-semibold text-sm rounded-lg hover:border-[#6b7db8] transition-colors duration-300"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
