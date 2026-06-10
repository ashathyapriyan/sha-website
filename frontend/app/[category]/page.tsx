import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsByCategory } from '@/lib/api';
import ArticleCard from '@/components/ArticleCard';
import CategoryHero from '@/components/CategoryHero';
import { getCategoryMeta, NEWS_CATEGORY_SLUGS } from '@/lib/constants';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return NEWS_CATEGORY_SLUGS.map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategoryMeta(category);
  if (!meta) return {};
  return {
    title: meta.label,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = getCategoryMeta(category);
  if (!meta) notFound();

  const articles = await getNewsByCategory(category);

  const imgMap: Record<string, string> = {
    'ai-news': '/images/ai.png',
    'web-development': '/images/web.png',
    'digital-marketing': '/images/marketing.png',
  };

  return (
    <>
      <CategoryHero
        accent={meta.accent}
        label={`${meta.icon} ${meta.label}`}
        description={meta.description}
        breadcrumbPath={meta.label}
        image={imgMap[category] || '/images/blog.png'}
      />
      <section className="section">
        {articles.length > 0 ? (
          <div className="card-grid">
            {articles.map((item) => (
              <ArticleCard
                key={item.id}
                article={item}
                href={`/${category}/${item.slug}`}
                badge={meta.label}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">No articles yet. Check back soon!</p>
        )}
      </section>
    </>
  );
}
