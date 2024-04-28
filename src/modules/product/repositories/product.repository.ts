import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { ProductDTO } from '../dtos/product.dto';
import { Prisma } from '@prisma/client';
import { UpdateProductDTO } from '../dtos/updateProduct.dto';
import { ProductListDTO } from '../dtos/productList.dto';

@Injectable()
export class UsersRepository {
  private readonly specialProductRule = {
    OR: [
      { is_new: true },
      {
        AND: [
          { discount_price: { not: null } },
          { discount_percent: { not: null } },
        ],
      },
    ],
  };

  constructor(private readonly prismaService: PrismaService) {}

  async create(data: ProductDTO) {
    try {
      const { category, ...filteredData } = data;
      return await this.prismaService.product.create({
        data: {
          ...filteredData,
          category: { connect: { id: category } },
          colors: { connect: data.colors.map((colorId) => ({ id: colorId })) },
          sizes: { connect: data.sizes.map((sizeId) => ({ id: sizeId })) },
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

  async createMany(data: ProductListDTO) {
    try {
      return data.products.map(async (product: ProductDTO) => {
        return await this.create(product);
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error(`Any category does not exist!`);
        }
      }
      throw new Error('Error while creating the product');
    }
  }

  async findAll(offset: number, perPage: number, orderBy: never, where: never) {
    return await this.prismaService.product.findMany({
      skip: offset,
      take: perPage,
      orderBy,
      where,
      include: {
        colors: {
          select: {
            color_hex: true,
          },
        },
        sizes: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOurProducts() {
    return await this.prismaService.ourProducts.findMany({
      select: {
        product: true,
      },
    });
  }

  async findRelatedProducts() {
    return await this.prismaService.relatedProducts.findMany({
      select: {
        product: true,
      },
    });
  }

  async findOne(id: number) {
    return (
      await this,
      this.prismaService.product.findUnique({
        where: {
          id,
        },
        include: {
          colors: {
            select: {
              color_hex: true,
            },
          },
          sizes: {
            select: {
              name: true,
            },
          },
        },
      })
    );
  }

  async specialProducts(
    offset: number,
    perPage: number,
    order: Prisma.SortOrder,
  ) {
    return await this.prismaService.product.findMany({
      where: this.specialProductRule,
      skip: offset,
      take: perPage,
      orderBy: {
        id: order,
      },
      include: {
        colors: {
          select: {
            color_hex: true,
          },
        },
        sizes: {
          select: {
            name: true,
          },
        },
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

  async count() {
    return await this.prismaService.product.count();
  }

  async countByCategory(category_id: number) {
    return await this.prismaService.product.count({
      where: {
        category_id,
      },
    });
  }

  async countSpecialProducts() {
    return await this.prismaService.product.count({
      where: this.specialProductRule,
    });
  }
}
