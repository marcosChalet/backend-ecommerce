import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/product.repository';
import { ProductDTO } from './dtos/product.dto';
import { UpdateProductDTO } from './dtos/updateProduct.dto';
import { ProductListDTO } from './dtos/productList.dto';

@Injectable()
export class ProductService {
  constructor(private readonly usersRepository: UsersRepository) {}

  addProduct(product: ProductDTO) {
    return this.usersRepository.create(product);
  }

  addManyProduct(product: ProductListDTO) {
    return this.usersRepository.createMany(product);
  }

  async getProducts(
    page: number = 1,
    perPage: number = 10,
    order: 'desc' | 'asc',
    orderType: 'price' | 'discount_percent',
    category: number,
  ) {
    const offset = (page - 1) * perPage;
    let filter = { where: {} } as any;

    filter = {
      orderBy: {
        [orderType]: order,
      },
      where: {},
    };

    if (category > 0) {
      filter.where = {
        category_id: category,
      };
    }

    if (orderType === 'discount_percent') {
      filter.orderBy = {
        discount_price: {
          sort: 'desc',
          nulls: 'last',
        },
      };
    }

    const products = await this.usersRepository.findAll(
      offset,
      perPage,
      filter.orderBy as never,
      filter.where as never,
    );

    const totalProducts = await this.usersRepository.count();
    const pageCount = Math.ceil(totalProducts / perPage);
    const productCount = products.length;
    let hasNextPage = false;
    let hasPrevPage = false;
    let nextPage = '';
    let prevPage = '';

    if (offset + productCount < totalProducts) {
      nextPage = `/users?page=${page + 1}&perPage=${perPage}`;
      hasNextPage = true;
    }

    if (page > 1 && (page - 1) * perPage > 0) {
      prevPage = `/users?page=${page - 1}&perPage=${perPage}`;
      hasPrevPage = true;
    }

    return {
      products,
      productCount,
      totalProducts,
      pageCount,
      hasNextPage,
      hasPrevPage,
      nextPage,
      prevPage,
    };
  }

  async getOurProducts() {
    const p = await this.usersRepository.findOurProducts();
    const ourProducts = p.map((obj: any) => {
      return obj.product;
    });
    return ourProducts;
  }

  async getRelatedProducts() {
    const p = await this.usersRepository.findRelatedProducts();
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
    const offset = (page - 1) * perPage;
    const products = await this.usersRepository.specialProducts(
      offset,
      perPage,
      order,
    );

    const totalProducts = await this.usersRepository.countSpecialProducts();
    const pageCount = Math.ceil(totalProducts / perPage);
    const productCount = products.length;
    let hasNextPage = false;
    let hasPrevPage = false;
    let nextPage = '';
    let prevPage = '';

    if (offset + productCount < totalProducts) {
      nextPage = `/users?page=${page + 1}&perPage=${perPage}`;
      hasNextPage = true;
    }

    if (page > 1 && (page - 1) * perPage > 0) {
      prevPage = `/users?page=${page - 1}&perPage=${perPage}`;
      hasPrevPage = true;
    }

    return {
      products,
      productCount,
      pageCount,
      hasNextPage,
      hasPrevPage,
      nextPage,
      prevPage,
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
