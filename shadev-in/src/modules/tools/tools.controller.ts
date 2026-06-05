import { Controller, Get, Render } from '@nestjs/common';
import { ToolsService } from './tools.service';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  @Render('tools')
  index() {
    return {
      title: 'Tools',
      description: 'Free developer, design and marketing tools.',
      accent: '#0c8599',
      tools: this.toolsService.findAll(),
    };
  }
}
