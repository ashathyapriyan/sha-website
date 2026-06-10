import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  /**
   * GET /api/portfolio
   * Returns combined projects + skills data
   */
  @Get()
  getAll() {
    return {
      projects: this.portfolioService.getProjects(),
      skills: this.portfolioService.getSkills(),
    };
  }

  /**
   * GET /api/portfolio/projects
   */
  @Get('projects')
  getProjects() {
    return this.portfolioService.getProjects();
  }

  /**
   * GET /api/portfolio/skills
   */
  @Get('skills')
  getSkills() {
    return this.portfolioService.getSkills();
  }
}
