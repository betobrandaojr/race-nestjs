import { Module } from '@nestjs/common';
import { MachineModule } from './core/machine/machine.module';
import { RaceModule } from './core/race/race.module';
import { DriverModule } from './core/driver/driver.module';
import { DatabaseModule } from './shered/config/database/database.module';

@Module({
  imports: [MachineModule, RaceModule, DriverModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
