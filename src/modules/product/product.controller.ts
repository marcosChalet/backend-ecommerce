import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './dtos/product.dto';
import { UpdateProductDTO } from './dtos/updateProduct.dto';
import { ProductListDTO } from './dtos/productList.dto';

@Controller('api/v1/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(@Body() product: ProductDTO) {
    return this.productService.addProduct(product);
  }

  @Post('many')
  addManyProducts(@Body() product: ProductListDTO) {
    return this.productService.addManyProduct(product);
  }

  @Get()
  getProducts(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('perPage', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
    @Query('order', new DefaultValuePipe('asc')) order: 'asc' | 'desc',
    @Query('category', new DefaultValuePipe(-1), ParseIntPipe)
    category: number,
    @Query('orderType', new DefaultValuePipe('price'))
    orderType: 'price' | 'discount_percent',
  ) {
    return this.productService.getProducts(
      page,
      perPage,
      order,
      orderType,
      category,
    );
  }

  @Get('our-products')
  getOurProducts() {
    return this.productService.getOurProducts();
  }

  @Get('special')
  getNewOrPromotionProducts(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('perPage', new DefaultValuePipe(10), ParseIntPipe) perPage: number,
    @Query('order', new DefaultValuePipe('asc')) order: 'asc' | 'desc',
  ) {
    return this.productService.getSpecialProducts(page, perPage, order);
  }

  @Get(':id')
  findProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOneProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: UpdateProductDTO,
  ) {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}
