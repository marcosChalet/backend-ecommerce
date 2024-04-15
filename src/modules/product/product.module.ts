import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UsersRepository } from './repositories/product.repository';

@Module({
  imports: [],
  providers: [ProductService, UsersRepository],
  controllers: [ProductController],
  exports: [],
})
export class ProductModule {}
