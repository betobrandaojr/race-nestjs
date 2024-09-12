import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateDriverUseCase } from '../../core/driver/application/use-cases/create-driver.use-case';
import { GetDriverUseCase } from '../../core/driver/application/use-cases/get-driver.use-case';
import { GetDriversUseCase } from '../../core/driver/application/use-cases/get-drivers.use-case';
import { UpdateDriverUseCase } from '../../core/driver/application/use-cases/update-driver.use-case';
import { IDriver } from './infrastructure/percistence/driver.entity';
import { DriverController } from './presentation/driver.controller';
import { DriverRepositoryImpl } from './infrastructure/percistence/driver.repository';
import { UpsertDriverUseCase } from './application/use-cases/upsert-driver.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([IDriver])],
  controllers: [DriverController],
  providers: [
    CreateDriverUseCase,
    GetDriverUseCase,
    GetDriversUseCase,
    UpdateDriverUseCase,
    UpsertDriverUseCase,
    {
      provide: 'DriverRepository',
      useClass: DriverRepositoryImpl,
    },
  ],
})
export class DriverModule {}
