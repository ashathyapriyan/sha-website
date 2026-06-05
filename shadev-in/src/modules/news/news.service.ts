import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepo: Repository<News>,
  ) {}

  findByCategory(category: string, limit?: number): Promise<News[]> {
    return this.newsRepo.find({
      where: { category, published: true },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async findOne(category: string, slug: string): Promise<News> {
    const item = await this.newsRepo.findOne({
      where: { category, slug, published: true },
    });
    if (!item) {
      throw new NotFoundException('Article not found');
    }
    return item;
  }

  findAll(limit?: number): Promise<News[]> {
    return this.newsRepo.find({
      where: { published: true },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  count(): Promise<number> {
    return this.newsRepo.count();
  }

  async seed(items: Partial<News>[]): Promise<void> {
    for (const item of items) {
      const entity = this.newsRepo.create(item);
      await this.newsRepo.save(entity);
    }
  }
}
