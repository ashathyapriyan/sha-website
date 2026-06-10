import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTutorial, getTutorials, excerpt } from '@/lib/api';
import ArticleDetail from '@/components/ArticleDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const tutorials = await getTutorials();
    return tutorials.map((t) => ({ slug: t.slug }));
  } catch { return []; }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const tutorial = await getTutorial(slug);
    return {
      title: tutorial.title,
      description: excerpt(tutorial.content, 160),
      openGraph: { title: tutorial.title, description: excerpt(tutorial.content, 160), images: tutorial.imageUrl ? [tutorial.imageUrl] : [] },
    };
  } catch { return {}; }
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;
  let tutorial;
  try { tutorial = await getTutorial(slug); } catch { notFound(); }

  return (
    <ArticleDetail
      article={tutorial}
      backPath="/tutorials"
      backLabel="Tutorials"
      categoryLabel="📚 Tutorials"
      accent="#c07e1a"
    />
  );
}
