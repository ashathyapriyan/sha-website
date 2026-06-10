import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepo: Repository<Blog>,
  ) {}

  findAll(limit?: number): Promise<Blog[]> {
    return this.blogRepo.find({
      where: { published: true },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async findBySlug(slug: string): Promise<Blog> {
    const post = await this.blogRepo.findOne({
      where: { slug, published: true },
    });
    if (!post) {
      throw new NotFoundException('Blog post not found');
    }
    return post;
  }

  count(): Promise<number> {
    return this.blogRepo.count();
  }

  async seed(items: Partial<Blog>[]): Promise<void> {
    for (const item of items) {
      await this.blogRepo.save(this.blogRepo.create(item));
    }
  }
}
