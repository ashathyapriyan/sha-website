import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutorial } from './tutorial.entity';
import { TutorialsService } from './tutorials.service';
import { TutorialsController } from './tutorials.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tutorial])],
  controllers: [TutorialsController],
  providers: [TutorialsService],
  exports: [TutorialsService],
})
export class TutorialsModule {}
