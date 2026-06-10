import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * GET /api/home
   * Returns aggregated home page data (latest articles per category)
   */
  @Get('home')
  async home() {
    return this.appService.getHomeData();
  }

  /**
   * GET /api/posts
   * Legacy endpoint — returns all posts for external consumers
   */
  @Get('posts')
  async apiPosts() {
    return this.appService.getApiPosts();
  }
}
