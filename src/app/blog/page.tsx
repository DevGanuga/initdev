import { Metadata } from 'next';
import BlogListing from '@/components/sections/blog/BlogListing';
import BlogHero from '@/components/sections/blog/BlogHero';
import BlogCategories from '@/components/sections/blog/BlogCategories';
import BlogSearch from '@/components/sections/blog/BlogSearch';
import BlogNewsletter from '@/components/sections/blog/BlogNewsletter';



export const metadata: Metadata = {
  title: 'InitDev Blog | Engineering Insights & Startup Wisdom',
  description: 'Technical deep-dives, startup strategies, and engineering insights from the InitDev team. Learn from engineers who\'ve built and sold startups.',
  openGraph: {
    title: 'InitDev Blog | Engineering Insights & Startup Wisdom',
    description: 'Technical deep-dives and startup strategies from senior engineers.',
    url: 'https://initdev.com/blog',
  },
};

export default function BlogPage() {
  return (
    <>

      <main className="min-h-screen bg-obsidian">
        {/* Blog Hero */}
        <BlogHero />

        {/* Search and Categories */}
        <section className="py-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <BlogSearch />
              </div>
              <div>
                <BlogCategories />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Listing */}
        <BlogListing />

        {/* Newsletter Signup */}
        <BlogNewsletter />
      </main>

    </>
  );
}
