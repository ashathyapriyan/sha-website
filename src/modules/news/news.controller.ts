import { Controller, Get, Param, Render } from '@nestjs/common';
import { NewsService } from './news.service';

const CATEGORY_META: Record<
  string,
  { view: string; title: string; label: string; description: string; accent: string }
> = {
  'ai-news': {
    view: 'ai-news',
    title: 'AI News',
    label: '🤖 AI News',
    description: 'The latest in artificial intelligence, machine learning and LLMs.',
    accent: '#0f7a52',
  },
  'space-news': {
    view: 'space-news',
    title: 'Space News',
    label: '🚀 Space News',
    description: 'Rockets, missions, astronomy and the final frontier.',
    accent: '#3b5bdb',
  },
  technology: {
    view: 'technology',
    title: 'Technology',
    label: '💻 Technology',
    description: 'Gadgets, hardware, software and the future of tech.',
    accent: '#c07e1a',
  },
  'web-development': {
    view: 'web-development',
    title: 'Web Development',
    label: '🌐 Web Development',
    description: 'Frameworks, tooling and best practices for the modern web.',
    accent: '#9b2c8a',
  },
  'digital-marketing': {
    view: 'digital-marketing',
    title: 'Digital Marketing',
    label: '📈 Digital Marketing',
    description: 'SEO, growth, content and performance marketing.',
    accent: '#0c8599',
  },
};

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('ai-news')
  @Render('ai-news')
  aiNews() {
    return this.renderList('ai-news');
  }

  @Get('space-news')
  @Render('space-news')
  spaceNews() {
    return this.renderList('space-news');
  }

  @Get('technology')
  @Render('technology')
  technology() {
    return this.renderList('technology');
  }

  @Get('web-development')
  @Render('web-development')
  webDevelopment() {
    return this.renderList('web-development');
  }

  @Get('digital-marketing')
  @Render('digital-marketing')
  digitalMarketing() {
    return this.renderList('digital-marketing');
  }

  @Get('ai-news/:slug')
  @Render('article')
  aiNewsArticle(@Param('slug') slug: string) {
    return this.renderArticle('ai-news', slug);
  }

  @Get('space-news/:slug')
  @Render('article')
  spaceNewsArticle(@Param('slug') slug: string) {
    return this.renderArticle('space-news', slug);
  }

  @Get('technology/:slug')
  @Render('article')
  technologyArticle(@Param('slug') slug: string) {
    return this.renderArticle('technology', slug);
  }

  @Get('web-development/:slug')
  @Render('article')
  webDevArticle(@Param('slug') slug: string) {
    return this.renderArticle('web-development', slug);
  }

  @Get('digital-marketing/:slug')
  @Render('article')
  marketingArticle(@Param('slug') slug: string) {
    return this.renderArticle('digital-marketing', slug);
  }

  private async renderList(category: string) {
    const meta = CATEGORY_META[category];
    const articles = await this.newsService.findByCategory(category);
    return {
      title: meta.title,
      description: meta.description,
      categoryLabel: meta.label,
      categoryDescription: meta.description,
      accent: meta.accent,
      basePath: '/' + category,
      articles,
    };
  }

  private async renderArticle(category: string, slug: string) {
    const meta = CATEGORY_META[category];
    const article = await this.newsService.findOne(category, slug);
    return {
      title: article.title,
      description: article.content.substring(0, 150),
      accent: meta.accent,
      categoryLabel: meta.label,
      backPath: '/' + category,
      backLabel: meta.title,
      article,
    };
  }
}
