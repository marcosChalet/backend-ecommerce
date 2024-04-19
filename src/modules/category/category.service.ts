import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryDTO } from './dtos/category.dto';
import { CategoryListDTO } from './dtos/categoryList.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  getAllCategories() {
    return this.categoryRepository.getAll();
  }

  createCategory(category: CategoryDTO) {
    return this.categoryRepository.create(category);
  }

  createManyCategories(categories: CategoryListDTO) {
    return this.categoryRepository.createMany(categories);
  }
}
