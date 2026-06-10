export const CATEGORIES = [
  {
    slug: 'ai-news',
    label: 'AI News',
    icon: '🤖',
    path: '/ai-news',
    accent: '#0f7a52',
    blurb: 'Machine learning, LLMs & AI research.',
    description: 'The latest in artificial intelligence, machine learning and LLMs.',
  },
  {
    slug: 'space-news',
    label: 'Space News',
    icon: '🚀',
    path: '/space-news',
    accent: '#3b5bdb',
    blurb: 'Rockets, missions & astronomy.',
    description: 'Rockets, missions, astronomy and the final frontier.',
  },
  {
    slug: 'technology',
    label: 'Technology',
    icon: '💻',
    path: '/technology',
    accent: '#c07e1a',
    blurb: 'Gadgets, hardware & software.',
    description: 'Gadgets, hardware, software and the future of tech.',
  },
  {
    slug: 'web-development',
    label: 'Web Development',
    icon: '🌐',
    path: '/web-development',
    accent: '#9b2c8a',
    blurb: 'Frameworks, tooling & the web.',
    description: 'Frameworks, tooling and best practices for the modern web.',
  },
  {
    slug: 'digital-marketing',
    label: 'Digital Marketing',
    icon: '📈',
    path: '/digital-marketing',
    accent: '#0c8599',
    blurb: 'SEO, growth & content.',
    description: 'SEO, growth, content and performance marketing.',
  },
] as const;

export const NEWS_CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);

export const getCategoryMeta = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);

export const ALL_NAV_LINKS = [
  { label: 'AI News', href: '/ai-news' },
  { label: 'Space', href: '/space-news' },
  { label: 'Technology', href: '/technology' },
  { label: 'Web Dev', href: '/web-development' },
  { label: 'Marketing', href: '/digital-marketing' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Tools', href: '/tools' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
];

export const EXTRA_CATEGORY_CARDS = [
  { label: 'Tutorials', icon: '📚', path: '/tutorials', accent: '#c07e1a', blurb: 'Step-by-step build guides.' },
  { label: 'Tools', icon: '🔧', path: '/tools', accent: '#0c8599', blurb: 'Free developer & design utilities.' },
  { label: 'Portfolio', icon: '👤', path: '/portfolio', accent: '#9b2c8a', blurb: 'Projects & work by Sha.' },
  { label: 'Blog', icon: '✍️', path: '/blog', accent: '#0f7a52', blurb: 'Essays, notes & deep dives.' },
  { label: 'Contact', icon: '📬', path: '/contact', accent: '#111111', blurb: 'Get in touch.' },
];
