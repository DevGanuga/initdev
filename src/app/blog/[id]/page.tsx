import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleContent from '@/components/sections/blog/article/ArticleContent';
import ArticleHeader from '@/components/sections/blog/article/ArticleHeader';
import ArticleSidebar from '@/components/sections/blog/article/ArticleSidebar';
import RelatedArticles from '@/components/sections/blog/article/RelatedArticles';
import ArticleComments from '@/components/sections/blog/article/ArticleComments';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

// Mock function to get article data
async function getArticle(id: string) {
  // In production, this would fetch from your CMS or database
  const mockArticle = {
    id,
    title: 'Building Your MVP in 4 Weeks: A Technical Roadmap',
    excerpt: 'Learn the exact process we use to ship production-ready MVPs in just 4 weeks.',
    content: `
      <h2>Introduction</h2>
      <p>Building an MVP (Minimum Viable Product) is a critical step in any startup's journey. At InitDev, we've refined our process over 127 successful product launches to deliver production-ready MVPs in just 4 weeks. Here's our exact roadmap.</p>
      
      <h2>Week 1: Discovery & Architecture</h2>
      <p>The first week is all about understanding your vision and making critical technical decisions that will impact the entire project.</p>
      
      <h3>Day 1-2: Requirements Gathering</h3>
      <p>We start with intensive discovery sessions to understand your business goals, target users, and core features. This isn't about building everything – it's about identifying the minimum set of features that will validate your hypothesis.</p>
      
      <h3>Day 3-4: Technical Architecture</h3>
      <p>Based on your requirements, we design the technical architecture. This includes choosing the tech stack, designing the database schema, and planning the infrastructure.</p>
      
      <h3>Day 5: Project Setup</h3>
      <p>We set up the development environment, CI/CD pipelines, and project structure. By the end of week 1, we have a deployable skeleton of your application.</p>
      
      <h2>Week 2-3: Core Development</h2>
      <p>This is where the magic happens. Our senior engineers work in parallel to build your MVP's core features.</p>
      
      <h3>Frontend Development</h3>
      <p>We build responsive, user-friendly interfaces using React/Next.js. Every component is designed with scalability in mind.</p>
      
      <h3>Backend Development</h3>
      <p>Our backend team builds robust APIs, implements business logic, and ensures data integrity. We use Node.js or Python depending on your specific needs.</p>
      
      <h3>Daily Deployments</h3>
      <p>We deploy daily to a staging environment. You can see progress in real-time and provide feedback continuously.</p>
      
      <h2>Week 4: Polish & Launch</h2>
      <p>The final week is about turning a functional product into a polished, production-ready application.</p>
      
      <h3>Testing & Quality Assurance</h3>
      <p>We conduct thorough testing including unit tests, integration tests, and user acceptance testing. Every critical path is tested multiple times.</p>
      
      <h3>Performance Optimization</h3>
      <p>We optimize load times, implement caching, and ensure your application can handle your expected user load.</p>
      
      <h3>Launch Preparation</h3>
      <p>We set up production infrastructure, configure monitoring and analytics, and create documentation. Your MVP is ready to meet real users.</p>
      
      <h2>The InitDev Advantage</h2>
      <p>What makes our 4-week MVP process different?</p>
      
      <ul>
        <li><strong>Senior Engineers Only:</strong> No junior developers learning on your dime</li>
        <li><strong>Parallel Execution:</strong> Multiple engineers working simultaneously</li>
        <li><strong>Battle-Tested Process:</strong> Refined over 127 successful launches</li>
        <li><strong>Production-Ready:</strong> Not a prototype, but a scalable foundation</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building an MVP in 4 weeks isn't easy, but with the right team and process, it's absolutely achievable. At InitDev, we've proven this time and time again. Ready to build your MVP? Let's talk.</p>
    `,
    author: {
      name: 'Marcus Chen',
      role: 'Co-Founder & Lead Architect',
      bio: 'Former CTO at TechVault (acquired by Oracle). 15+ years building scalable systems.',
      avatar: '/images/authors/marcus.jpg',
      linkedin: 'https://linkedin.com/in/marcuschen',
      twitter: 'https://twitter.com/marcuschen',
    },
    category: 'Product Development',
    tags: ['MVP', 'Architecture', 'Startup', 'Development Process'],
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    readTime: '8 min read',
    image: '/images/blog/mvp-roadmap.jpg',
  };

  if (!mockArticle) {
    return null;
  }

  return mockArticle;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle(id);
  
  if (!article) {
    return {
      title: 'Article Not Found | InitDev Blog',
    };
  }

  return {
    title: `${article.title} | InitDev Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      authors: [article.author.name],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <ArticleHeader article={article} />

        {/* Article Content */}
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ArticleContent content={article.content} />
                
                {/* Article Comments */}
                <ArticleComments articleId={article.id} />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <ArticleSidebar article={article} />
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <RelatedArticles currentArticleId={article.id} tags={article.tags} />
      </main>
      <Footer />
    </>
  );
}
