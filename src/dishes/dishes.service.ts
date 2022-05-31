import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dishes } from './dishes.entity';
import { DishesDto } from './dishes.dto';

@Injectable()
export class DishesService extends TypeOrmCrudService<Dishes> {
  constructor(
    @InjectRepository(Dishes) private dishesRepository: Repository<Dishes>,
  ) {
    super(dishesRepository);
  }

  getDishesById(id: number) {
    return this.dishesRepository
      .createQueryBuilder('dishes')
      .leftJoinAndSelect('dishes.subcategory', 'subcategory')
      .innerJoinAndSelect('subcategory.category', 'category')
      .innerJoinAndSelect('category.place', 'place')
      .where('subcategory.id = :subcategoryId', { subcategoryId: id })
      .getMany();
  }

  findAll() {
    return this.dishesRepository.find();
  }

  async createDish(dishes: Dishes): Promise<Dishes> {
    return await this.dishesRepository.save(dishes);
  }

  async updateDish(dishes: Dishes): Promise<any> {
    console.log('dishes', dishes);
    return await this.dishesRepository.update(dishes.id, dishes);
  }
  //     return this.dishesRepository
  //       .createQueryBuilder('dishes')
  //       .leftJoinAndSelect('dishes.place', 'place')
  //       .leftJoinAndSelect('dishes.category', 'category')
  // .leftJoinAndSelect('dishes.subcategory', 'subcategory')
  //       .where('dishes.id = :dishesId', { dishes: id })
  // .where('category.id = :categoryId', { categoryId: 10 })
  //       .getOne();
}
