import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNewsArticle, getNewsByCategory, excerpt } from '@/lib/api';
import ArticleDetail from '@/components/ArticleDetail';
import { getCategoryMeta, NEWS_CATEGORY_SLUGS } from '@/lib/constants';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const all: { category: string; slug: string }[] = [];
  for (const category of NEWS_CATEGORY_SLUGS) {
    try {
      const articles = await getNewsByCategory(category);
      articles.forEach((a) => all.push({ category, slug: a.slug }));
    } catch { /* skip on build error */ }
  }
  return all;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const meta = getCategoryMeta(category);
  try {
    const article = await getNewsArticle(category, slug);
    return {
      title: article.title,
      description: excerpt(article.content, 160),
      openGraph: {
        title: article.title,
        description: excerpt(article.content, 160),
        images: article.imageUrl ? [article.imageUrl] : [],
      },
    };
  } catch {
    return { title: meta?.label ?? category };
  }
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const meta = getCategoryMeta(category);
  if (!meta) notFound();

  let article;
  try {
    article = await getNewsArticle(category, slug);
  } catch {
    notFound();
  }

  return (
    <ArticleDetail
      article={article}
      backPath={`/${category}`}
      backLabel={meta.label}
      categoryLabel={`${meta.icon} ${meta.label}`}
      accent={meta.accent}
    />
  );
}
