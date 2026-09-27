import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSolutions, getSolutionBySlug } from '../../../../lib/appWrite';
import FuturisticSolutionDetail from '@/components/solutions/FuturisticSolutionDetail';

export async function generateStaticParams() {
  try {
    const { solutions } = await getSolutions({ 
      //status: ['active'],
      useCache: false,
      pageSize: 100 
    });
    
    return solutions.map((solution) => ({
      slug: solution.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  try {
    const solution = await getSolutionBySlug(params.slug, { useCache: false });
    
    if (!solution) {
      return {
        title: 'Solution Not Found',
        description: 'This solution does not exist or has been removed.'
      };
    }

    return {
      title: `${solution.titre} | Technological Solutions`,
      description: solution.description_courte,
      keywords: solution.tags.join(', '),
      openGraph: {
        title: solution.titre,
        description: solution.description_courte,
        images: solution.images.length > 0 ? [solution.images[0]] : undefined,
        type: 'article',
      },
    };
  } catch (error) {
    return {
      title: 'Error | Technological Solutions',
      description: 'An error occurred while loading this solution.'
    };
  }
}

// Export statique : seules les pages générées par generateStaticParams (au build)
// sont produites. L'ISR (revalidate) et les params dynamiques ne sont pas supportés sur Pages.
export const dynamicParams = false;

interface SolutionDetailPageProps {
  params: { slug: string };
}

export default async function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  if (!params?.slug || typeof params.slug !== 'string') {
    notFound();
  }

  try {
    const solution = await getSolutionBySlug(params.slug, { useCache: true });

    if (!solution) {
      notFound();
    }

    const { solutions: allSolutions } = await getSolutions({ 
      //category: solution.categorie,
      pageSize: 4,
      useCache: true 
    });
    
    const relatedSolutions = allSolutions
      .filter(s => s.id !== solution.id)
      .slice(0, 3);

    return (
      <FuturisticSolutionDetail 
        solution={solution} 
        relatedSolutions={relatedSolutions}
      />
    );
  } catch (error) {
    console.error('Error loading solution:', error);
    notFound();
  }
}