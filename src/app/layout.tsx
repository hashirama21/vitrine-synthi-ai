import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import type { Metadata } from 'next';
import { Viewport } from 'next/dist/lib/metadata/types/extra-types';
import { BackToTopButton } from '@/components/BackToTopButton';
import { CookieBanner } from '@/components/CookieBanner';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';

const inter = Inter({ subsets: ['latin'] });

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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg z-50 font-semibold"
        >
          Skip to main content
        </a>

        <PWAInstallPrompt />

        <div id="route-loading" className="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-4 animate-pulse">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        <CookieBanner />

        <div
          id="main-content"
          className="bg-surface text-white"
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

        <BackToTopButton />
      </body>
    </html>
  );
}
