import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Menu } from './menu.entity';
import { MenuService } from './menu.service';

@Crud({
  model: {
    type: Menu,
  },
})
@Controller('menu')
export class MenuController implements CrudController<Menu> {
  constructor(public service: MenuService) {}
}
