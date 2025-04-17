import { Client, Databases, Query } from 'appwrite';
import { Solution } from '../models/Solution';

const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('67ffb7180021bf8e2875');

export const databases = new Databases(client);

export const COLLECTION_ID_SOLUTIONS = "67ffb953002223306e18"
export const DATABASE_ID = "67ffb8bf00073a7eeaa4";

export async function getSolutions(): Promise<Solution[]> {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID_SOLUTIONS
  );
  
  // Map Appwrite documents to Solution type
  return response.documents.map(doc => ({
    id: doc.$id,
    slug: doc.slug,
    title: doc.title,
    subtitle: doc.subtitle,
    description: doc.description,
    introText: doc.introText,
    features: doc.features,
    tags: doc.tags,
    image: doc.image
  })) as Solution[];
}

export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  const response = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID_SOLUTIONS,
    [
      Query.equal('slug', slug)
    ]
  );
  
  if (response.documents.length === 0) {
    return null;
  }

  const doc = response.documents[0];
  
  // Map Appwrite document to Solution type
  return {
    id: doc.$id,
    slug: doc.slug,
    title: doc.title,
    subtitle: doc.subtitle,
    description: doc.description,
    introText: doc.introText,
    features: doc.features,
    tags: doc.tags,
    image: doc.image
  } as Solution;
}