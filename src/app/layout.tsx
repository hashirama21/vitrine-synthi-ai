import { Navbar } from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Synthi AI - Empowering sectors with powerful AI',
  description: 'AI-powered solutions to drive growth and efficiency for businesses across sectors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a1a] text-white`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
