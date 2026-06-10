import { Controller, Get, Param, Query } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  /**
   * GET /api/blog
   * GET /api/blog?limit=3
   */
  @Get()
  async findAll(@Query('limit') limit?: string) {
    const take = limit ? parseInt(limit, 10) : undefined;
    return this.blogService.findAll(take);
  }

  /**
   * GET /api/blog/:slug
   * e.g. /api/blog/why-i-built-shadev-with-nestjs
   */
  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return this.blogService.findBySlug(slug);
  }
}
