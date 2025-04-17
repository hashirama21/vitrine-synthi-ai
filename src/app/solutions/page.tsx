import Image from 'next/image';
import Link from 'next/link';
import { getSolutions } from '../../../lib/appWrite';

export const revalidate = 3600; // Revalidate every hour

export default async function SolutionsPage() {
  const solutions = await getSolutions();
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">


      {/* Solutions Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-400 mb-4">Our solutions</p>
          <h1 className="text-4xl font-bold mb-8">Synthi AI Solutions</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <Link 
              href={`/solutions/${solution.slug}`} 
              key={solution.id}
              className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105"
            >
              <div className="bg-indigo-900 p-4">
                <div className="h-40 w-full relative bg-purple-800 rounded-lg overflow-hidden">
                  {solution.image ? (
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-purple-200 text-5xl">🤖</div>
                    </div>
                  )}
                </div>
                <div className="flex space-x-4 mt-4">
                  {solution.tags.map((tag) => (
                    <span key={tag} className="text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mt-4 text-white">{solution.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}