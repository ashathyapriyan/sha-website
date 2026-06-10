import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts, excerpt } from '@/lib/api';
import ArticleDetail from '@/components/ArticleDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((p) => ({ slug: p.slug }));
  } catch { return []; }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    return {
      title: post.title,
      description: excerpt(post.content, 160),
      openGraph: { title: post.title, description: excerpt(post.content, 160), images: post.imageUrl ? [post.imageUrl] : [] },
    };
  } catch { return {}; }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try { post = await getBlogPost(slug); } catch { notFound(); }

  return (
    <ArticleDetail
      article={post}
      backPath="/blog"
      backLabel="Blog"
      categoryLabel="✍️ Blog"
      accent="#0f7a52"
    />
  );
}
