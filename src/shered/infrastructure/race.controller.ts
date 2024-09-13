import { Body, Controller, Post } from '@nestjs/common';
import { CreateRaceUseCase } from 'src/core/race/application/use-case/create-race.use-case';
import { CreateRaceDto } from './dto/create-race.dto';

@Controller('race')
export class RaceController {
  constructor(private readonly createRaceUseCase: CreateRaceUseCase) {}

  @Post()
  async createRace(@Body() createRaceDto: CreateRaceDto): Promise<void> {
    const { name, minSpeed, maxSpeed, location } = createRaceDto;
    await this.createRaceUseCase.execute(name, minSpeed, maxSpeed, location);
  }
}
