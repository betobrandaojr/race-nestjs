import { Injectable } from '@nestjs/common';
import { RaceRepositoryPort } from '../../domain/repositories/race.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IRace } from './race.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RaceRepositoryImpl implements RaceRepositoryPort {
  constructor(
    @InjectRepository(IRace)
    private readonly raceRepository: Repository<IRace>,
  ) {}

  async createRace(
    name: string,
    minSpeed: number,
    maxSpeed: number,
    location: string,
  ): Promise<void> {
    const race = this.raceRepository.create({
      name,
      minSpeed,
      maxSpeed,
      location,
    });
    await this.raceRepository.save(race);
  }
}
