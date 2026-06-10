export interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Tutorial {
  id: number;
  title: string;
  content: string;
  category: string;
  level: string;
  imageUrl: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Tool {
  name: string;
  description: string;
  icon: string;
  url: string;
  tag: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  emoji: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface HomeData {
  aiNews: NewsItem[];
  spaceNews: NewsItem[];
  technology: NewsItem[];
  webDevelopment: NewsItem[];
  digitalMarketing: NewsItem[];
  tutorials: Tutorial[];
  latestBlog: BlogPost[];
}

export interface ContactDto {
  name: string;
  email: string;
  subject: string;
  message: string;
}
