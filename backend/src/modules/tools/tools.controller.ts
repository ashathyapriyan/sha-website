import { Controller, Get } from '@nestjs/common';
import { ToolsService } from './tools.service';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  /**
   * GET /api/tools
   * Returns all available developer tools
   */
  @Get()
  findAll() {
    return this.toolsService.findAll();
  }
}
