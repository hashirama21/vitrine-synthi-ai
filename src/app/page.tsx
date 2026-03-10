import Hero from '@/components/Hero';
import OpenCVHero from '@/components/OpenCVHero';
import TrustSection from '@/components/TrustSection';
import ExpertsSection from '@/components/ExpertsSection';
import IndustriesShowcase from '@/components/IndustriesShowcase';
import StatsTestimonials from '@/components/StatsTestimonials';
import IndustryPairs from '@/components/IndustryPairs';
import SolutionsGrid from '@/components/SolutionsGrid';
import Services from '@/components/Services';
import TeamSection from '@/components/ia/TeamSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Our Hero section - preserved */}
      <Hero />
      {/* opencv.ai Hero with background video - right after ours */}
      <OpenCVHero />
      {/* Trust logos marquee */}
      <TrustSection />
      {/* "We are experts" + horizontal badge scroll + about card */}
      <ExpertsSection />
      {/* Tabbed industry showcase with opencv.ai images */}
      <IndustriesShowcase />
      {/* Stats + Testimonial quote card */}
      <StatsTestimonials />
      {/* Numbered industry pairs with opencv.ai icons */}
      <IndustryPairs />
      {/* Solutions grid with opencv.ai images */}
      <SolutionsGrid />
      {/* Pricing / Services cards */}
      <Services />
      {/* Team */}
      <TeamSection />
    </div>
  );
}
