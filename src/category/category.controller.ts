import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Crud({
  model: {
    type: Category,
  },
  query: {
    join: {
      menu: {
        eager: true,
      },
    },
  },
})
@Controller('categories')
export class CategoryController implements CrudController<Category> {
  constructor(public service: CategoryService) {}
}
