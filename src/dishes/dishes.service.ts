import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dishes } from './dishes.entity';

@Injectable()
export class DishesService extends TypeOrmCrudService<Dishes> {
  constructor(@InjectRepository(Dishes) placesRepository: Repository<Dishes>) {
    super(placesRepository);
  }
}
