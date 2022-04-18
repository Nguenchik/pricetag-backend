import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategoryController } from './subcategory.controller';
import { Subcategory } from './subcategory.entity';
import { SubcategoryService } from './subcategory.service';

@Module({
  controllers: [SubcategoryController],
  imports: [TypeOrmModule.forFeature([Subcategory])],
  providers: [SubcategoryService],
})
export class SubcategoryModule {}
