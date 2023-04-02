import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Factory, FactoryChartData } from './factories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FactoriesService {
  constructor(
    @InjectRepository(Factory)
    private factoryRepository: Repository<Factory>,
    @InjectRepository(FactoryChartData)
    private factoryChartDataRepository: Repository<FactoryChartData>,
  ) {}

  async getFactories(): Promise<Factory[]> {
    return await this.factoryRepository.find();
  }

  async getFactoriesChartData(): Promise<FactoryChartData[]> {
    return await this.factoryChartDataRepository.find();
  }

  async getFactoriesChartDataByFactory(
    factoryId: string,
  ): Promise<FactoryChartData[]> {
    return await this.factoryChartDataRepository.find({
      relations: ['factory'],
      where: {
        factory: {
          id: factoryId,
        },
      },
    });
  }
}
