import About from '@/components/About';
import FAQSection from '@/components/Faq';
import AboutUsSection from '@/components/ia/AboutUsSection';
import AssetsDisplaySection from '@/components/ia/AssetDisplaySection';
import CallToActionSection from '@/components/ia/CallToActionSection';
import CustomAssetsSection from '@/components/ia/CustomActionAsset';
import FeaturesDisplaySection from '@/components/ia/TeamSection';
import FeaturesOverviewSection from '@/components/ia/FeaturesOverviewSection';
import VisionStatementSection from '@/components/ia/VisionStatementSection';
import VisionSection from '@/components/Vision';
import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a1a]">
    <AboutUsSection />
    <VisionStatementSection />
    <CustomAssetsSection />
    <FeaturesOverviewSection />
    <FeaturesDisplaySection />
    <AssetsDisplaySection />
    <CallToActionSection />
    {/* <FAQSection /> */}
    </main>
  );
}