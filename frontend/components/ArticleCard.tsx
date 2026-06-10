import Link from 'next/link';
import { formatDate, excerpt } from '@/lib/api';
import type { NewsItem, BlogPost, Tutorial } from '@/lib/types';

type Article = NewsItem | BlogPost | Tutorial;

interface Props {
  article: Article;
  href: string;
  badge: string;
  meta?: string;
}

export default function ArticleCard({ article, href, badge, meta }: Props) {
  return (
    <article className="card">
      <Link href={href} className="card-link">
        {article.imageUrl && (
          <div
            className="card-image"
            style={{ backgroundImage: `url('${article.imageUrl}')` }}
          />
        )}
        <div className="card-body">
          <span className="card-badge">{badge}</span>
          <h3 className="card-title">{article.title}</h3>
          <p className="card-excerpt">{excerpt(article.content, 120)}</p>
          <div className="card-meta">
            {meta && <span>{meta}</span>}
            <span>{formatDate(article.createdAt)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
