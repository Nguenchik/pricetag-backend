import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Place } from '../entities/place.entity';
import { PlacesService } from '../services/places.service';

@Crud({
  model: {
    type: Place,
  },
  query: {
    join: {
      menu: {
        eager: true,
      },
    },
  },
})
@Controller('places')
export class PlaceController implements CrudController<Place> {
  constructor(public service: PlacesService) {}
}
