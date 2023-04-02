import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sprockets } from './sprockets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SprocketsService {
  constructor(
    @InjectRepository(Sprockets)
    private sprocketsRepository: Repository<Sprockets>,
  ) {}

  async getAllSprockets(): Promise<Sprockets[]> {
    return this.sprocketsRepository.find();
  }

  async getSprocketById(id: string): Promise<Sprockets> {
    return this.sprocketsRepository.findOneBy({ id: id });
  }

  async createSprocket(sprocket: Sprockets): Promise<Sprockets> {
    return this.sprocketsRepository.save(sprocket);
  }

  async updateSprocket(id: string, sprocket: Sprockets): Promise<Sprockets> {
    return this.sprocketsRepository.save({ id: id, ...sprocket });
  }
}
