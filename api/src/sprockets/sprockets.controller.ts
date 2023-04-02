import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { SprocketsService } from './sprockets.service';
import { Sprockets } from './sprockets.entity';

@Controller('sprockets')
export class SprocketsController {
  constructor(private readonly sprocketsService: SprocketsService) {}

  @Get()
  getSprockets() {
    return this.sprocketsService.getAllSprockets();
  }

  @Get(':id')
  getSprocketsById(@Param('id') id: string) {
    return this.sprocketsService.getSprocketById(id);
  }

  @Post()
  createSprocket(@Body() sprocket: Sprockets) {
    return this.sprocketsService.createSprocket(sprocket);
  }

  @Patch(':id')
  updateSprocket(@Param('id') id: string, @Body() sprocket: Sprockets) {
    return this.sprocketsService.updateSprocket(id, sprocket);
  }
}
