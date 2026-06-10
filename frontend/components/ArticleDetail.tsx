import Link from 'next/link';
import { formatDate } from '@/lib/api';
import type { NewsItem, BlogPost, Tutorial } from '@/lib/types';

type Article = NewsItem | BlogPost | Tutorial;

interface Props {
  article: Article;
  backPath: string;
  backLabel: string;
  categoryLabel: string;
  accent?: string;
}

export default function ArticleDetail({
  article,
  backPath,
  backLabel,
  categoryLabel,
  accent = '#0f7a52',
}: Props) {
  const author = 'author' in article ? article.author : undefined;
  const level = 'level' in article ? article.level : undefined;

  return (
    <main>
      <div className="article">
        <Link href={backPath} className="back-link" style={{ color: accent }}>
          ← {backLabel}
        </Link>

        <span className="article-tag" style={{ color: accent }}>
          {categoryLabel}
          {level ? ` · ${level}` : ''}
        </span>

        <div className="article-head">
          <h1>{article.title}</h1>
          <div className="article-meta">
            {author && <span>By {author}</span>}
            <span>{formatDate(article.createdAt)}</span>
          </div>
        </div>

        {article.imageUrl && (
          <div
            className="article-hero-image"
            style={{ backgroundImage: `url('${article.imageUrl}')` }}
          />
        )}

        <div className="article-body">
          {article.content.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="article-foot">
          <Link href={backPath} className="back-link" style={{ color: accent }}>
            ← Back to {backLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
