import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labs & Portfolio - Synthi AI',
  description: 'Explore our portfolio of AI and computer vision projects across agriculture, healthcare, education, smart cities, and more. See what Synthi AI builds for Africa.',
  openGraph: {
    title: 'Labs & Portfolio - Synthi AI',
    description: 'Explore our portfolio of AI and computer vision projects across agriculture, healthcare, education, smart cities, and more.',
  },
};

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
