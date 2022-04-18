import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Subcategory } from './subcategory.entity';

@Injectable()
export class SubcategoryService extends TypeOrmCrudService<Subcategory> {
  constructor(@InjectRepository(Subcategory) subcategoryRepository: Repository<Subcategory>) {
    super(subcategoryRepository);
  }
}
