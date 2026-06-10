import { Controller, Get, Param, Query } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';

@Controller('tutorials')
export class TutorialsController {
  constructor(private readonly tutorialsService: TutorialsService) {}

  /**
   * GET /api/tutorials
   * GET /api/tutorials?limit=3
   */
  @Get()
  async findAll(@Query('limit') limit?: string) {
    const take = limit ? parseInt(limit, 10) : undefined;
    return this.tutorialsService.findAll(take);
  }

  /**
   * GET /api/tutorials/:slug
   * e.g. /api/tutorials/build-rest-api-nestjs-typeorm
   */
  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return this.tutorialsService.findBySlug(slug);
  }
}
