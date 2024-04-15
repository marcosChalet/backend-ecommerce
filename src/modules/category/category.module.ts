import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryController } from './category.controller';

@Module({
  providers: [CategoryService, CategoryRepository],
  controllers: [CategoryController],
})
export class CategoryModule {}
