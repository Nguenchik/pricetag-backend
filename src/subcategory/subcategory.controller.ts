import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Subcategory } from './subcategory.entity';
import { SubcategoryService } from './subcategory.service';

@Crud({
  model: {
    type: Subcategory,
  },
  // query: {
  //   join: {
  //     menu: {
  //       eager: true,
  //     },
  //   },
  // },
})
@Controller('subcategory')
export class SubcategoryController implements CrudController<Subcategory> {
  constructor(public service: SubcategoryService) {}
}
