import BlogSection from '@/components/BlogSection';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import CustomAssetsSection from '@/components/ia/CustomActionAsset';
import TeamSection from '@/components/ia/TeamSection';
import Services from '@/components/Services';
import TrustSection from '@/components/TrustSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSection/>
      <Features />
      <CustomAssetsSection />
      <Services />
      <TeamSection />
      <BlogSection />
    </div>
  );
}
