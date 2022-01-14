import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlacesService } from './services/places.service';
import { Place } from './entities/place.entity';
import { PlaceController } from './controllers/place.controller';

@Module({
  controllers: [PlaceController],
  providers: [PlacesService],
  imports: [TypeOrmModule.forFeature([Place])],
})
export class PlaceModule {}
