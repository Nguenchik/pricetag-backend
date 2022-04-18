import { Module } from '@nestjs/common';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dishes } from './dishes.entity';
import { Type } from './type/type.entity';
import { TypeService } from './type/type.service';
import { TypeController } from './type/type.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dishes]),
    TypeOrmModule.forFeature([Type]),
  ],
  controllers: [DishesController, TypeController],
  providers: [DishesService, TypeService],
})
export class DishesModule {}
