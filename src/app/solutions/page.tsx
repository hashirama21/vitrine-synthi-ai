
import { Metadata } from 'next';
import { getSolutions } from '../../../lib/appWrite';
import FuturisticSolutionsClient from '@/components/solutions/FuturisticSolutionsClient';

export const metadata: Metadata = {
  title: 'Futuristic Technological Solutions | Innovation & Robotics',
  description: 'Discover our revolutionary technological solutions in robotics, AI, and automation domains.',
  keywords: 'robotics, artificial intelligence, automation, technology, innovation, futuristic solutions',
  openGraph: {
    title: 'Futuristic Technological Solutions',
    description: 'Revolutionary solutions in robotics, AI and automation',
    type: 'website',
  },
};

export const revalidate = 3600;

export default async function SolutionsPage() {
  try {
    const solutionsData = await getSolutions({
      status: ['active'],
      pageSize: 12,
      useCache: true
    });

    return <FuturisticSolutionsClient solutions={solutionsData} />;
  } catch (error) {
    console.error('Error loading solutions:', error);
    throw error;
  }
}