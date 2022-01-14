import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Place } from '../entities/place.entity';

@Injectable()
export class PlacesService extends TypeOrmCrudService<Place> {
  constructor(@InjectRepository(Place) placesRepository: Repository<Place>) {
    super(placesRepository);
  }
}
