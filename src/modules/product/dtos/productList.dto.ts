import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductDTO } from './product.dto';

export class ProductListDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  readonly products: ProductDTO[];
}
