import Hero from '@/components/Hero';
import OpenCVHero from '@/components/OpenCVHero';
import TrustSection from '@/components/TrustSection';
import ExpertsSection from '@/components/ExpertsSection';
import IndustriesShowcase from '@/components/IndustriesShowcase';
import StatsTestimonials from '@/components/StatsTestimonials';
import IndustryPairs from '@/components/IndustryPairs';
import Services from '@/components/Services';
import TeamSection from '@/components/ia/TeamSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <OpenCVHero />
      <TrustSection />
      <ExpertsSection />
      <IndustriesShowcase />
      <StatsTestimonials />
      <IndustryPairs />
      <Services />
      <TeamSection />
    </div>
  );
}
