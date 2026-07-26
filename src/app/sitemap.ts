import { MetadataRoute } from 'next';

/**
 * Only routes that actually exist and are worth indexing.
 *
 * lastModified is deliberately omitted rather than set to Date.now(): a
 * sitemap that claims every page changed today on every request is a
 * freshness signal Google learns to distrust. Reinstate it per-route when
 * there is a real modification date to report.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://initdev.co';

  const routes: Array<{ path: string; priority: number }> = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/cases', priority: 0.9 },
    { path: '/process', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
