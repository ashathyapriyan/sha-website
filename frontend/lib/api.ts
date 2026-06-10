import type {
  HomeData,
  NewsItem,
  BlogPost,
  Tutorial,
  Tool,
  Project,
  Skill,
  ContactDto,
} from './types';

const BASE =
  process.env.NEXT_PUBLIC_API_URL ??
  (typeof window === 'undefined'
    ? 'http://localhost:3000/api'
    : '/api');

async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export function getHomeData(): Promise<HomeData> {
  return fetchJSON<HomeData>(`${BASE}/home`, { next: { revalidate: 1800 } });
}

// ─── News ─────────────────────────────────────────────────────────────────────
export function getNewsByCategory(
  category: string,
  limit?: number,
): Promise<NewsItem[]> {
  const params = new URLSearchParams({ category });
  if (limit) params.set('limit', String(limit));
  return fetchJSON<NewsItem[]>(`${BASE}/news?${params}`, {
    next: { revalidate: 3600 },
  });
}

export function getNewsArticle(
  category: string,
  slug: string,
): Promise<NewsItem> {
  return fetchJSON<NewsItem>(`${BASE}/news/${category}/${slug}`, {
    next: { revalidate: 86400 },
  });
}

// ─── Blog ─────────────────────────────────────────────────────────────────────
export function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  const params = limit ? `?limit=${limit}` : '';
  return fetchJSON<BlogPost[]>(`${BASE}/blog${params}`, {
    next: { revalidate: 3600 },
  });
}

export function getBlogPost(slug: string): Promise<BlogPost> {
  return fetchJSON<BlogPost>(`${BASE}/blog/${slug}`, {
    next: { revalidate: 86400 },
  });
}

// ─── Tutorials ────────────────────────────────────────────────────────────────
export function getTutorials(limit?: number): Promise<Tutorial[]> {
  const params = limit ? `?limit=${limit}` : '';
  return fetchJSON<Tutorial[]>(`${BASE}/tutorials${params}`, {
    next: { revalidate: 86400 },
  });
}

export function getTutorial(slug: string): Promise<Tutorial> {
  return fetchJSON<Tutorial>(`${BASE}/tutorials/${slug}`, {
    next: { revalidate: 86400 },
  });
}

// ─── Tools ────────────────────────────────────────────────────────────────────
export function getTools(): Promise<Tool[]> {
  return fetchJSON<Tool[]>(`${BASE}/tools`, { next: { revalidate: false } });
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
export function getPortfolio(): Promise<{ projects: Project[]; skills: Skill[] }> {
  return fetchJSON<{ projects: Project[]; skills: Skill[] }>(
    `${BASE}/portfolio`,
    { next: { revalidate: false } },
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export async function submitContact(
  dto: ContactDto,
): Promise<{ success: boolean; message: string }> {
  return fetchJSON(`${BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
    cache: 'no-store',
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function excerpt(text: string, len = 140): string {
  if (!text) return '';
  return text.length > len ? text.substring(0, len).trim() + '…' : text;
}
