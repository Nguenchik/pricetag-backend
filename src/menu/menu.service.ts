import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Menu } from './menu.entity';

@Injectable()
export class MenuService extends TypeOrmCrudService<Menu> {
  constructor(@InjectRepository(Menu) placesRepository: Repository<Menu>) {
    super(placesRepository);
  }
}
