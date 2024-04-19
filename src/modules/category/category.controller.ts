import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dtos/category.dto';
import { CategoryListDTO } from './dtos/categoryList.dto';

@Controller('api/v1/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.getAllCategories();
  }

  @Post()
  createCategory(@Body() category: CategoryDTO) {
    try {
      return this.categoryService.createCategory(category);
    } catch (error) {
      return { sucess: false, message: error.message };
    }
  }

  @Post('many')
  createManyCategories(@Body() category: CategoryListDTO) {
    try {
      return this.categoryService.createManyCategories(category);
    } catch (error) {
      return { sucess: false, message: error.message };
    }
  }
}
