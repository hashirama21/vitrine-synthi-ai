import FAQSection from '@/components/Faq';
import AboutHero from '@/components/ia/AboutUsSection';
import IntroductionSection from '@/components/ia/VisionStatementSection';
import CoreValuesSection from '@/components/ia/FeaturesOverviewSection';
import WhyChooseUsSection from '@/components/ia/ProfessionalSectionsComplete';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Synthi AI | Our Mission & Vision',
  description: 'Learn about Synthi AI, our mission to make Africa a global leader in AI, our core values, and the team behind our innovative solutions.',
  openGraph: {
    title: 'About - Synthi AI | Our Mission & Vision',
    description: 'Learn about Synthi AI, our mission to make Africa a global leader in AI, our core values, and the team behind our innovative solutions.',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <IntroductionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <FAQSection />
    </div>
  );
}
