import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './portfolio.entity';

@Module({
  providers: [PortfolioService],
  controllers: [PortfolioController],
  imports: [TypeOrmModule.forFeature([Portfolio])],
})
export class PortfolioModule {}
