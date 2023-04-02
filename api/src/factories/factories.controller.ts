import { Controller, Get, Param } from '@nestjs/common';
import { FactoriesService } from './factories.service';

@Controller('factories')
export class FactoriesController {
  constructor(private readonly factoriesService: FactoriesService) {}

  @Get()
  getFactories() {
    return this.factoriesService.getFactories();
  }

  @Get('/data')
  getFactoriesData() {
    return this.factoriesService.getFactoriesChartData();
  }

  @Get(':id/data')
  getFactoryData(@Param('id') id: string) {
    return this.factoriesService.getFactoriesChartDataByFactory(id);
  }
}
