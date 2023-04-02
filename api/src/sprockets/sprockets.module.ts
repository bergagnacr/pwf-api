import { Module } from '@nestjs/common';
import { SprocketsController } from './sprockets.controller';
import { SprocketsService } from './sprockets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sprockets } from './sprockets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sprockets])],
  controllers: [SprocketsController],
  providers: [SprocketsService],
})
export class SprocketsModule {}
