import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Type } from './type.entity';
import { TypeService } from './type.service';

@Crud({
  model: {
    type: Type,
  },
})
@Controller('type')
export class TypeController implements CrudController<Type> {
  constructor(public service: TypeService) {}
}
