import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/api';
import ArticleCard from '@/components/ArticleCard';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Essays, notes and deep dives on tech and building.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <CategoryHero 
        accent="#0f7a52" 
        label="✍️ Blog" 
        description="Essays, notes and deep dives on tech and building." 
        breadcrumbPath="Blog"
        image="/images/blog.png"
      />
      <section className="section">
        {posts.length > 0 ? (
          <div className="card-grid">
            {posts.map((post) => (
              <ArticleCard
                key={post.id}
                article={post}
                href={`/blog/${post.slug}`}
                badge={post.category}
                meta={`By ${post.author}`}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">No posts yet.</p>
        )}
      </section>
    </>
  );
}
