import type { Metadata } from 'next';
import { getTutorials } from '@/lib/api';
import ArticleCard from '@/components/ArticleCard';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Tutorials',
  description: 'Step-by-step guides for building modern web applications.',
};

export default async function TutorialsPage() {
  const tutorials = await getTutorials();

  return (
    <>
      <CategoryHero accent="#c07e1a" label="📚 Tutorials" description="Step-by-step guides for building modern web applications." />
      <section className="section">
        {tutorials.length > 0 ? (
          <div className="card-grid">
            {tutorials.map((tutorial) => (
              <ArticleCard
                key={tutorial.id}
                article={tutorial}
                href={`/tutorials/${tutorial.slug}`}
                badge={tutorial.level}
                meta={tutorial.category}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">No tutorials yet.</p>
        )}
      </section>
    </>
  );
}
