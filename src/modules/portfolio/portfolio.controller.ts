import { Controller, Get, Render } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  @Render('portfolio')
  index() {
    return {
      title: 'Portfolio',
      description: 'Projects, skills and work by Sha.',
      accent: '#9b2c8a',
      projects: this.portfolioService.getProjects(),
      skills: this.portfolioService.getSkills(),
    };
  }
}
