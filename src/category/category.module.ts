import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
// import { SubcategoryModule } from './subcategory/subcategory.module';
// import { SubcategoryController } from './subcategory/subcategory.controller';
// import { Subcategory } from './subcategory/subcategory.entity';
// import { SubcategoryService } from './subcategory/subcategory.service';

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  // controllers: [CategoryController, SubcategoryController],
  // imports: [
  //   TypeOrmModule.forFeature([Category]),
  //   TypeOrmModule.forFeature([Subcategory]),
  // ],
  // providers: [CategoryService, SubcategoryService],
})
export class CategoryModule {}
