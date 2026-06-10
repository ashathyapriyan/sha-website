import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from '../../common/dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  @Render('contact')
  show() {
    return {
      title: 'Contact',
      description: 'Get in touch with shadev.in',
      accent: '#0f7a52',
    };
  }

  @Post()
  @Render('contact')
  async submit(@Body() dto: ContactDto) {
    await this.contactService.create(dto);
    return {
      title: 'Contact',
      description: 'Get in touch with shadev.in',
      accent: '#0f7a52',
      success: true,
      name: dto.name,
    };
  }
}
