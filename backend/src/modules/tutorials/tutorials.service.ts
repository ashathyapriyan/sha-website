import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tutorial } from './tutorial.entity';

@Injectable()
export class TutorialsService {
  constructor(
    @InjectRepository(Tutorial)
    private readonly tutorialRepo: Repository<Tutorial>,
  ) {}

  findAll(limit?: number): Promise<Tutorial[]> {
    return this.tutorialRepo.find({
      where: { published: true },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async findBySlug(slug: string): Promise<Tutorial> {
    const tutorial = await this.tutorialRepo.findOne({
      where: { slug, published: true },
    });
    if (!tutorial) {
      throw new NotFoundException('Tutorial not found');
    }
    return tutorial;
  }

  count(): Promise<number> {
    return this.tutorialRepo.count();
  }

  async seed(items: Partial<Tutorial>[]): Promise<void> {
    for (const item of items) {
      await this.tutorialRepo.save(this.tutorialRepo.create(item));
    }
  }
}
