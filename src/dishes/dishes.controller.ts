import { Controller, Get, Post, Res, Body, Param, Patch } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Dishes } from './dishes.entity';
import { DishesService } from './dishes.service';
import { Place } from '../place/entities/place.entity';
import { DishesDto } from './dishes.dto';

// @Crud({
//   model: {
//     type: Dishes,
//   },
//   query: {
//     join: {
//       category: {
//         eager: true,
//       },
//     },
//   },
// })

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  async getAllDishes(): Promise<any> {
    console.log(1);
    return this.dishesService.findAll();
  }
  @Get('/:id')
  async getDishes(@Param('id') id): Promise<any> {
    console.log(2, id);
    return this.dishesService.getDishesById(id);
    // return this.dishesService.findAll();
  }
  @Post()
  async createDishes(@Body() dishes: Dishes): Promise<any> {
    return this.dishesService.createDish(dishes);
  }
  @Patch('/:id')
  async update(@Param('id') id, @Body() dishes: Dishes): Promise<any> {
    // contactData.id = Number(id);
    // console.log('Update #' + contactData.id)
    return this.dishesService.updateDish(dishes);
  }
}
