import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDriver } from '../../../core/driver/infrastructure/percistence/driver.entity';
import { IRace } from 'src/core/race/infrastructure/persistence/race.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [IDriver, IRace],
      synchronize: true,
      logging: ['query'],
    }),
  ],
})
export class DatabaseModule {}
