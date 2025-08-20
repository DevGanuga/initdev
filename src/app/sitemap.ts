import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://initdev.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/process',
    '/cases',
    '/blog',
    '/contact',
    '/solutions',
    '/demo',
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add blog posts dynamically (mock for now)
  const blogPosts = [
    '/blog/mvp-in-4-weeks',
    '/blog/technical-debt-guide',
    '/blog/ai-implementation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
