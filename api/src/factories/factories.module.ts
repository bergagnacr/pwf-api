import { Module } from '@nestjs/common';
import { FactoriesService } from './factories.service';
import { FactoriesController } from './factories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factory, FactoryChartData } from './factories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Factory]),
    TypeOrmModule.forFeature([FactoryChartData]),
  ],
  providers: [FactoriesService],
  controllers: [FactoriesController],
})
export class FactoriesModule {}
