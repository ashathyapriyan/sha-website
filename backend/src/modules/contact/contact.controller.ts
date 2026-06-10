import { Body, Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from '../../common/dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  /**
   * POST /api/contact
   * Saves contact form submission to database
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async submit(@Body() dto: ContactDto) {
    const saved = await this.contactService.create(dto);
    return {
      success: true,
      message: `Thanks ${dto.name}! Your message has been received.`,
      id: saved.id,
    };
  }

  /**
   * GET /api/contact
   * Returns all contact submissions (admin use)
   */
  @Get()
  async findAll() {
    return this.contactService.findAll();
  }
}
