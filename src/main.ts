import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { join } from 'path';
import hbs = require('hbs');
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));
  hbs.registerHelper('formatDate', (date: Date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  });
  hbs.registerHelper('excerpt', (text: string, len = 140) => {
    if (!text) return '';
    return text.length > len ? text.substring(0, len).trim() + '…' : text;
  });

  app.setViewEngine('hbs');
  app.set('view options', { layout: 'layouts/main' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`shadev.in running on http://localhost:${port}`);
}
bootstrap();
