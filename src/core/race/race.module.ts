import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IRace } from './infrastructure/persistence/race.entity';
import { RaceController } from 'src/shered/infrastructure/race.controller';
import { CreateRaceUseCase } from './application/use-case/create-race.use-case';
import { RaceRepositoryImpl } from './infrastructure/persistence/race.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IRace])],
  controllers: [RaceController],
  providers: [
    CreateRaceUseCase,
    {
      provide: 'RaceRepositoryPort',
      useClass: RaceRepositoryImpl,
    },
  ],
})
export class RaceModule {}
