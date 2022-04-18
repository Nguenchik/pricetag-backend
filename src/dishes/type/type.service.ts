import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Type } from './type.entity';

@Injectable()
export class TypeService extends TypeOrmCrudService<Type> {
  constructor(@InjectRepository(Type) placesRepository: Repository<Type>) {
    super(placesRepository);
  }
}
