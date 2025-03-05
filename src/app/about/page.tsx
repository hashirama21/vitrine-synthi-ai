
import About from '@/components/About';
import Choose from '@/components/Choose';
import ContactUs from '@/components/ContactUs';
import FAQSection from '@/components/Faq';
import Missions from '@/components/Missions';
import OurValues from '@/components/OurValues';
import VisionSection from '@/components/Vision';
import React from 'react';



export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a1a]">
  
    <About/>
    <VisionSection/>  
    <Missions/>
    <OurValues/>
    <Choose/>
    <ContactUs/>
    <FAQSection/>
    </main>
  );
}