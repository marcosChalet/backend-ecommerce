import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { CategoryDTO } from '../dtos/category.dto';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.category.findMany();
  }

  create(data: CategoryDTO) {
    return this.prismaService.category.create({
      data,
    });
  }
}
