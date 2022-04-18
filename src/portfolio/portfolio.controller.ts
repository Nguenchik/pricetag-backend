import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Portfolio } from './portfolio.entity';
import { PortfolioService } from './portfolio.service';

@Crud({
  model: {
    type: Portfolio,
  },
  query: {
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('portfolio')
export class PortfolioController implements CrudController<Portfolio> {
  constructor(public service: PortfolioService) {}
}
