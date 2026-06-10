import { Controller, Get, Param, Render } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';

@Controller('tutorials')
export class TutorialsController {
  constructor(private readonly tutorialsService: TutorialsService) {}

  @Get()
  @Render('tutorials')
  async list() {
    const tutorials = await this.tutorialsService.findAll();
    return {
      title: 'Tutorials',
      description: 'Step-by-step guides to build real things.',
      accent: '#c07e1a',
      tutorials,
    };
  }

  @Get(':slug')
  @Render('article')
  async single(@Param('slug') slug: string) {
    const tutorial = await this.tutorialsService.findBySlug(slug);
    return {
      title: tutorial.title,
      description: tutorial.content.substring(0, 150),
      accent: '#c07e1a',
      categoryLabel: '📚 Tutorial · ' + tutorial.level,
      backPath: '/tutorials',
      backLabel: 'Tutorials',
      article: tutorial,
    };
  }
}
