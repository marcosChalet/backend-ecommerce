import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/product.repository';
import { ProductDTO } from './dtos/product.dto';
import { UpdateProductDTO } from './dtos/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(private readonly usersRepository: UsersRepository) {}

  addProduct(product: ProductDTO) {
    return this.usersRepository.create(product);
  }

  getProducts() {
    return this.usersRepository.findAll();
  }

  getSpecialProducts() {
    return this.usersRepository.specialProducts();
  }

  updateProduct(id: number, product: UpdateProductDTO) {
    return this.usersRepository.update(id, product);
  }

  deleteProduct(id: number) {
    return this.usersRepository.delete(id);
  }
}
