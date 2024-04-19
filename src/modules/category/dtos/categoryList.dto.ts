import { IsArray, ValidateNested } from 'class-validator';
import { CategoryDTO } from './category.dto';
import { Type } from 'class-transformer';

export class CategoryListDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryDTO)
  readonly categories: CategoryDTO[];
}
