import { Inject } from '@nestjs/common';
import { RaceRepositoryPort } from '../../domain/repositories/race.repository';

export class CreateRaceUseCase {
  constructor(
    @Inject('RaceRepositoryPort')
    private readonly raceRepository: RaceRepositoryPort,
  ) {}

  async execute(
    name: string,
    minSpeed: number,
    maxSpeed: number,
    location: string,
  ): Promise<void> {
    return this.raceRepository.createRace(name, minSpeed, maxSpeed, location);
  }
}
