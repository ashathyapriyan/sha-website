import { Controller, Get, Param, Render } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  @Render('blog')
  async list() {
    const posts = await this.blogService.findAll();
    return {
      title: 'Blog',
      description: 'Essays, notes and deep dives on tech and building.',
      accent: '#0f7a52',
      posts,
    };
  }

  @Get(':slug')
  @Render('article')
  async single(@Param('slug') slug: string) {
    const post = await this.blogService.findBySlug(slug);
    return {
      title: post.title,
      description: post.content.substring(0, 150),
      accent: '#0f7a52',
      categoryLabel: '✍️ Blog',
      backPath: '/blog',
      backLabel: 'Blog',
      article: post,
    };
  }
}
