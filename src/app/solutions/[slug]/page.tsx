// app/solutions/[slug]/page.tsx
import SolutionPage from '@/components/SolutionPage';
import { notFound } from 'next/navigation';
import { getSolutionBySlug, getSolutions } from '../../../../lib/appWrite';

// Generate static params for all solutions
export async function generateStaticParams() {
    const solutions = await getSolutions();

return solutions.map((solution) => ({
    slug: solution.slug,
}));
}

// Revalidate every hour
export const revalidate = 3600;

export default async function SolutionDetailPage({ params }: { params: { slug: string } }) {
    const solution = await getSolutionBySlug(params.slug);

    if (!solution) {
    notFound();
}

    return <SolutionPage solution={solution} />;
}



/**
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=67ffb7180021bf8e2875
NEXT_PUBLIC_DATABASE_ID=67ffb8bf00073a7eeaa4
NEXT_PUBLIC_COLLECTION_ID_SOLUTIONS=votre_collection_id

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('67ffb7180021bf8e2875');
 */