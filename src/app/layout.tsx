import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import type { Metadata } from 'next';
import { Viewport } from 'next/dist/lib/metadata/types/extra-types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://synthi-ai.com'),
  title: 'Synthi AI - Empowering sectors with powerful AI',
  description: 'AI-powered solutions to drive growth and efficiency for businesses across sectors',
  keywords: 'AI, artificial intelligence, machine learning, business solutions, innovation, technology, enterprise AI, software, data science',
  authors: [{ name: 'Synthi AI Team' }],
  creator: 'Synthi AI',
  publisher: 'Synthi AI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synthi-ai.com',
    siteName: 'Synthi AI',
    title: 'Synthi AI - AI-powered solutions',
    description: 'Advanced AI solutions to transform businesses and drive efficiency across various sectors.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Synthi AI - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synthi AI - The Future of Business Intelligence',
    description: 'Leverage the power of AI to gain a competitive edge. Fast, secure, and smart solutions.',
    images: ['/twitter-image.jpg'],
    creator: '@SynthiAIOfficial',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#212455ff',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: '<GOOGLE_SITE_VERIFICATION_CODE>',
    yandex: '<YANDEX_VERIFICATION_CODE>',
    yahoo: '<YAHOO_VERIFICATION_CODE>',
  },
  alternates: {
    canonical: 'https://synthi-ai.com',
    languages: {
      'en-US': 'https://synthi-ai.com/en',
    },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SYNTHI AI" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#090c48ff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Synthi AI",
              "description": "AI-powered solutions to drive growth and efficiency for businesses across sectors",
              "url": "https://synthi-ai.com",
              "logo": "https://synthi-ai.com/logo.png",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
              },
              "telephone": "+1-800-SYNTHI",
              "email": "contact@synthi-ai.com",
              "offers": {
                "@type": "Offer",
                "description": "AI solutions for business",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "featureList": [
                "Advanced machine learning models",
                "Predictive analytics",
                "Natural language processing",
                "Computer vision",
                "Data security and privacy",
                "Scalable cloud infrastructure"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "2500"
              },
              "sameAs": [
                "https://facebook.com/synthiaiofficial",
                "https://twitter.com/synthiaiofficial",
                "https://linkedin.com/company/synthi-ai"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased overflow-x-hidden`}
      >
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg z-50 font-semibold"
        >
          Skip to main content
        </a>

        {/* PWA Install Prompt */}
        <div id="pwa-install-prompt" className="hidden fixed bottom-4 left-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-2xl shadow-lg backdrop-blur-xl border border-purple-600/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-bold">Install Synthi AI App</h3>
                <p className="text-sm opacity-90">Get offline access and faster insights</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                id="pwa-install-btn"
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
              >
                Install
              </button>
              <button
                id="pwa-dismiss-btn"
                className="text-white/70 hover:text-white px-2 transition-colors duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Route Loading */}
        <div id="route-loading" className="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-4 animate-pulse">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Cookie Banner */}
        <div id="cookie-banner" className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 p-4 transform translate-y-full transition-transform duration-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <p className="text-white text-sm">
                We use cookies to enhance your experience and analyze site traffic.
                <a href="/privacy" className="text-purple-400 hover:underline ml-1">Learn more</a>
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                id="cookie-accept"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
              >
                Accept All
              </button>
              <button
                id="cookie-essential"
                className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:border-purple-600 transition-colors duration-300"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>

        {/* Template will handle Navbar, Main content, Footer conditionally */}
        <div 
          id="main-content"
          className="bg-[#0a0a1a] text-white"
          style={{
            background: `
              radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.06) 0%, transparent 50%),
              #0a0a1a
            `,
            backgroundAttachment: 'fixed'
          }}
        >
          {children}
        </div>

        {/* Back to Top */}
        <button
          id="back-to-top"
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-purple-600/30 transition-all duration-300 transform hover:scale-110 opacity-0 invisible z-30 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                const prompt = document.getElementById('pwa-install-prompt');
                if (prompt && !window.location.pathname.includes('/login')) {
                  prompt.classList.remove('hidden');
                }
              });
              document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
                if (deferredPrompt) {
                  deferredPrompt.prompt();
                  const { outcome } = await deferredPrompt.userChoice;
                  console.log('User choice:', outcome);
                  deferredPrompt = null;
                  document.getElementById('pwa-install-prompt')?.classList.add('hidden');
                }
              });
              document.getElementById('pwa-dismiss-btn')?.addEventListener('click', () => {
                document.getElementById('pwa-install-prompt')?.classList.add('hidden');
              });
              const backToTopBtn = document.getElementById('back-to-top');
              window.addEventListener('scroll', () => {
                if (!window.location.pathname.includes('/login')) {
                  if (window.pageYOffset > 300) {
                    backToTopBtn?.classList.remove('opacity-0', 'invisible');
                  } else {
                    backToTopBtn?.classList.add('opacity-0', 'invisible');
                  }
                }
              });
              backToTopBtn?.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });
              const cookieBanner = document.getElementById('cookie-banner');
              if (!localStorage.getItem('cookiesAccepted') && !window.location.pathname.includes('/login')) {
                setTimeout(() => {
                  cookieBanner?.classList.remove('translate-y-full');
                }, 2000);
              }
              document.getElementById('cookie-accept')?.addEventListener('click', () => {
                localStorage.setItem('cookiesAccepted', 'all');
                cookieBanner?.classList.add('translate-y-full');
              });
              document.getElementById('cookie-essential')?.addEventListener('click', () => {
                localStorage.setItem('cookiesAccepted', 'essential');
                cookieBanner?.classList.add('translate-y-full');
              });
              const link = document.createElement('link');
              link.rel = 'preload';
              link.href = '/fonts/inter-var.woff2';
              link.as = 'font';
              link.type = 'font/woff2';
              link.crossOrigin = 'anonymous';
              document.head.appendChild(link);
            `,
          }}
        />
      </body>
    </html>
  );
}