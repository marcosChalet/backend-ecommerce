import {
  IsOptional,
  IsInt,
  IsIn,
  Min,
  IsArray,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GetProductsDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  perPage: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  category: number;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortType: 'asc' | 'desc';

  @IsOptional()
  @IsIn(['price', 'discount_percent'])
  orderBy: 'price' | 'discount_percent';

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  maxPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  minPrice: number;

  @IsOptional()
  @IsArray()
  @Type(() => String)
  @IsString({ each: true })
  colors: string[] | null;

  constructor() {
    this.colors = null;
    this.orderBy = 'price';
    this.sortType = 'asc';
    this.category = -1;
    this.perPage = 16;
    this.page = 1;
  }
}
