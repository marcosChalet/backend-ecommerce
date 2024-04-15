import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './dtos/product.dto';
import { UpdateProductDTO } from './dtos/updateProduct.dto';

@Controller('api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(@Body() product: ProductDTO) {
    return this.productService.addProduct(product);
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get('special')
  getNewOrPromotionProducts() {
    return this.productService.getSpecialProducts();
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() product: UpdateProductDTO) {
    return this.productService.updateProduct(+id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}
