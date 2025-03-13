
import BlogNews from '@/components/BlogNews';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/Faq';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import TrustSection from '@/components/TrustSection';
import React from 'react';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a1a]">
      <Hero />
      <TrustSection/>
      <Features />
      <Solutions />
      <Testimonials/>
      <BlogSection />
      <BlogNews/>
      <FAQSection/>
      {/*<Footer/> */}
    </main>
  );
}