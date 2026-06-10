import { Injectable } from '@nestjs/common';
import { NewsService } from './modules/news/news.service';
import { BlogService } from './modules/blog/blog.service';
import { TutorialsService } from './modules/tutorials/tutorials.service';

@Injectable()
export class AppService {
  constructor(
    private readonly newsService: NewsService,
    private readonly blogService: BlogService,
    private readonly tutorialsService: TutorialsService,
  ) {}

  /**
   * Aggregated home page data — used by GET /api/home
   */
  async getHomeData() {
    const [aiNews, spaceNews, technology, webDevelopment, digitalMarketing, tutorials, latestBlog] =
      await Promise.all([
        this.newsService.findByCategory('ai-news', 3),
        this.newsService.findByCategory('space-news', 3),
        this.newsService.findByCategory('technology', 3),
        this.newsService.findByCategory('web-development', 3),
        this.newsService.findByCategory('digital-marketing', 3),
        this.tutorialsService.findAll(3),
        this.blogService.findAll(3),
      ]);

    return {
      aiNews,
      spaceNews,
      technology,
      webDevelopment,
      digitalMarketing,
      tutorials,
      latestBlog,
    };
  }

  /**
   * Legacy all-posts endpoint — used by GET /api/posts
   */
  async getApiPosts() {
    const [news, blog, tutorials] = await Promise.all([
      this.newsService.findAll(),
      this.blogService.findAll(),
      this.tutorialsService.findAll(),
    ]);

    return {
      news: news.map((n) => ({
        id: n.id,
        type: 'news',
        title: n.title,
        category: n.category,
        slug: n.slug,
        url: `/${n.category}/${n.slug}`,
        createdAt: n.createdAt,
      })),
      blog: blog.map((b) => ({
        id: b.id,
        type: 'blog',
        title: b.title,
        author: b.author,
        slug: b.slug,
        url: `/blog/${b.slug}`,
        createdAt: b.createdAt,
      })),
      tutorials: tutorials.map((t) => ({
        id: t.id,
        type: 'tutorial',
        title: t.title,
        level: t.level,
        slug: t.slug,
        url: `/tutorials/${t.slug}`,
        createdAt: t.createdAt,
      })),
    };
  }
}
