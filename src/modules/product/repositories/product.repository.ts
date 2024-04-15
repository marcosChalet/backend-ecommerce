import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { ProductDTO } from '../dtos/product.dto';
import { Prisma } from '@prisma/client';
import { UpdateProductDTO } from '../dtos/updateProduct.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: ProductDTO) {
    try {
      const { category, ...filteredData } = data;
      return await this.prismaService.product.create({
        data: {
          ...filteredData,
          category: { connect: { id: category } },
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error(`The category ${data.category} does not exist!`);
        }
      }
      throw new Error('Error while creating the product');
    }
  }

  async findAll() {
    return await this.prismaService.product.findMany();
  }

  async specialProducts() {
    return await this.prismaService.product.findMany({
      where: {
        OR: [
          { is_new: true },
          {
            AND: [
              { discount_price: { not: null } },
              { discount_percent: { not: null } },
            ],
          },
        ],
      },
    });
  }

  async update(id: number, data: UpdateProductDTO) {
    const { category, ...filteredData } = data;
    let myCategoryId = category;

    if (!category) {
      const data = await this.prismaService.product.findUnique({
        where: { id },
        select: {
          category_id: true,
        },
      });

      myCategoryId = data.category_id;
    }

    return await this.prismaService.product.update({
      data: {
        ...filteredData,
        category: { connect: { id: myCategoryId } },
      },
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    try {
      return await this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error(`The product with id=${id} does not exist!`);
        }
      }
      throw new Error('Error while creating the product');
    }
  }
}
