import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { News } from './modules/news/news.entity';
import { Blog } from './modules/blog/blog.entity';
import { Tutorial } from './modules/tutorials/tutorial.entity';
import { Contact } from './modules/contact/contact.entity';

import { NewsModule } from './modules/news/news.module';
import { BlogModule } from './modules/blog/blog.module';
import { TutorialsModule } from './modules/tutorials/tutorials.module';
import { ToolsModule } from './modules/tools/tools.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ContactModule } from './modules/contact/contact.module';

import { NewsService } from './modules/news/news.service';
import { BlogService } from './modules/blog/blog.service';
import { TutorialsService } from './modules/tutorials/tutorials.service';
import { seedNews, seedBlog, seedTutorials } from './common/seed-data';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: process.env.DATABASE_PATH || 'shadev.sqlite',
      entities: [News, Blog, Tutorial, Contact],
      synchronize: true,
    }),
    NewsModule,
    BlogModule,
    TutorialsModule,
    ToolsModule,
    PortfolioModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly newsService: NewsService,
    private readonly blogService: BlogService,
    private readonly tutorialsService: TutorialsService,
  ) {}

  async onModuleInit() {
    if ((await this.newsService.count()) === 0) {
      await this.newsService.seed(seedNews);
    }
    if ((await this.blogService.count()) === 0) {
      await this.blogService.seed(seedBlog);
    }
    if ((await this.tutorialsService.count()) === 0) {
      await this.tutorialsService.seed(seedTutorials);
    }
  }
}
