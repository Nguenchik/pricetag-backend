import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Portfolio } from './portfolio.entity';

@Injectable()
export class PortfolioService extends TypeOrmCrudService<Portfolio> {
  constructor(@InjectRepository(Portfolio) portfolioRepository: Repository<Portfolio>) {
    super(portfolioRepository);
  }
}
