import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDriver } from '../../../core/driver/infrastructure/percistence/driver.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [IDriver],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
