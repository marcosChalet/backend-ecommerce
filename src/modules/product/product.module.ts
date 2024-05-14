import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UsersRepository } from './repositories/product.repository';
import { SortStrategyManager } from './sort-strategies/sort-strategy.manager';

@Module({
  imports: [],
  providers: [ProductService, UsersRepository, SortStrategyManager],
  controllers: [ProductController],
  exports: [],
})
export class ProductModule {}
