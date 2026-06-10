import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { NewsService } from './news.service';

const VALID_CATEGORIES = [
  'ai-news',
  'space-news',
  'technology',
  'web-development',
  'digital-marketing',
];

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  /**
   * GET /api/news
   * GET /api/news?category=ai-news
   * GET /api/news?category=ai-news&limit=3
   */
  @Get()
  async findAll(
    @Query('category') category?: string,
    @Query('limit') limit?: string,
  ) {
    const take = limit ? parseInt(limit, 10) : undefined;

    if (category) {
      if (!VALID_CATEGORIES.includes(category)) {
        throw new NotFoundException(`Category '${category}' not found`);
      }
      return this.newsService.findByCategory(category, take);
    }

    return this.newsService.findAll(take);
  }

  /**
   * GET /api/news/:category/:slug
   * e.g. /api/news/ai-news/open-source-llm-rivals-frontier-models
   */
  @Get(':category/:slug')
  async findOne(
    @Param('category') category: string,
    @Param('slug') slug: string,
  ) {
    if (!VALID_CATEGORIES.includes(category)) {
      throw new NotFoundException(`Category '${category}' not found`);
    }
    return this.newsService.findOne(category, slug);
  }
}
