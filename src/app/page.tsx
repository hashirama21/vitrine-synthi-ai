import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/Faq';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import CustomAssetsSection from '@/components/ia/CustomActionAsset';
import Testimonials from '@/components/Testimonials';
import TrustSection from '@/components/TrustSection';
import React from 'react';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a1a]">
      <Hero />
      <TrustSection/>
      <Features />
      <CustomAssetsSection /> 
      <Testimonials/>
      <BlogSection />
      <FAQSection/>
      {/*<Footer/> */}
    </main>
  );
}