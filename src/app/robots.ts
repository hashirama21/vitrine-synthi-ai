import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/signin', '/signup', '/api/'],
    },
    sitemap: [
      'https://synthi-ai.com/sitemap.xml',
      'https://www.synthi-ai.com/sitemap.xml',
    ],
  };
}
