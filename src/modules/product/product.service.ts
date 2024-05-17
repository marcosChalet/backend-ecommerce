import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/product.repository';
import { ProductDTO } from './dtos/product.dto';
import { UpdateProductDTO } from './dtos/updateProduct.dto';
import { ProductListDTO } from './dtos/productList.dto';
import { SortStrategyManager } from './sort-strategies/sort-strategy.manager';
import { FilterBuilder } from './filters/filter.bilder';

enum PaginationType {
  Default = -1,
  Category,
  SpecialProducts,
}

@Injectable()
export class ProductService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly sortStrategyManager: SortStrategyManager,
    private readonly filterBuilder: FilterBuilder,
  ) {}

  addProduct(product: ProductDTO) {
    return this.usersRepository.create(product);
  }

  addManyProduct(product: ProductListDTO) {
    return this.usersRepository.createMany(product);
  }

  getOffset(page: number, perPage: number) {
    return (page - 1) * perPage;
  }

  async getPagination(
    paginationType: PaginationType,
    category: number,
    page: number,
    perPage: number,
    numProducts: number,
  ) {
    const offset = this.getOffset(page, perPage);
    let totalProducts: number = 0;

    switch (paginationType) {
      case PaginationType.Category:
        totalProducts = await this.usersRepository.countByCategory(category);
        break;
      case PaginationType.SpecialProducts:
        totalProducts = await this.usersRepository.countSpecialProducts();
        break;
      default:
        totalProducts = await this.usersRepository.count();
    }

    const pageCount = Math.ceil(totalProducts / perPage);
    const hasNextPage = offset + numProducts < totalProducts;
    const hasPrevPage = page > 1 && this.getOffset(page, perPage) > 0;

    return {
      totalProducts,
      pageCount,
      hasNextPage,
      hasPrevPage,
      nextPage: hasNextPage ? `/users?page=${page + 1}&perPage=${perPage}` : '',
      prevPage: hasPrevPage ? `/users?page=${page - 1}&perPage=${perPage}` : '',
    };
  }

  async getProducts(
    page: number = 1,
    perPage: number = 10,
    sortType: 'desc' | 'asc',
    orderBy: 'price' | 'discount_percent',
    category: number = 1,
    maxPrice: number | null = null,
    minPrice: number | null = null,
    colors: string[] | null = null,
  ) {
    const offset = this.getOffset(page, perPage);
    const sortCriteria = this.sortStrategyManager
      .getStrategy(orderBy)
      .getSortCriteria(sortType);

    if (colors) {
      colors = colors.map((color) => `#${color}`);
    }

    const filter = { orderBy: sortCriteria, where: {} } as any;
    filter.where = this.filterBuilder
      .setCategory(category > 0 ? category : null)
      .setMinPrice(minPrice)
      .setMaxPrice(maxPrice)
      .setColors(colors)
      .build()
      .getFilters();

    const products = await this.usersRepository.findAll(
      offset,
      perPage,
      filter.orderBy as never,
      filter.where as never,
    );

    const pagination = await this.getPagination(
      category > 0 ? PaginationType.Category : PaginationType.Default,
      category,
      page,
      perPage,
      products.length,
    );

    return {
      products,
      productCount: products.length,
      pagination,
    };
  }

  async getOurProducts() {
    const p = await this.usersRepository.findOurProducts();
    const ourProducts = p.map((obj: any) => {
      return obj.product;
    });
    return ourProducts;
  }

  async getSpecialProducts(
    page: number = 1,
    perPage: number = 10,
    order: 'desc' | 'asc',
  ) {
    const offset = this.getOffset(page, perPage);
    const products = await this.usersRepository.specialProducts(
      offset,
      perPage,
      order,
    );

    const pagination = await this.getPagination(
      PaginationType.SpecialProducts,
      -1,
      page,
      perPage,
      products.length,
    );

    return {
      products,
      productCount: products.length,
      pagination,
    };
  }

  findOneProduct(id: number) {
    return this.usersRepository.findOne(id);
  }

  updateProduct(id: number, product: UpdateProductDTO) {
    return this.usersRepository.update(id, product);
  }

  deleteProduct(id: number) {
    return this.usersRepository.delete(id);
  }
}
