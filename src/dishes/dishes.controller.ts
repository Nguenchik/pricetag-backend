import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Dishes } from './dishes.entity';
import { DishesService } from './dishes.service';
import { Place } from '../place/entities/place.entity';

@Crud({
  model: {
    type: Dishes,
  },
  query: {
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('dishes')
export class DishesController implements CrudController<Dishes> {
  constructor(public service: DishesService) {}
}
