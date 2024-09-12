import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverRepository } from '../../domain/repositories/driver.repository';
import { Driver } from '../../domain/entities/driver';
import { IDriver } from './driver.entity';

@Injectable()
export class DriverRepositoryImpl implements DriverRepository {
  constructor(
    @InjectRepository(IDriver)
    private readonly driverRepository: Repository<IDriver>,
  ) {}

  async createDriver(name: string, age: number): Promise<void> {
    const driver = this.driverRepository.create({ name, age });
    await this.driverRepository.save(driver);
  }

  async getDriver(id: number): Promise<Driver> {
    const driverEntity = await this.driverRepository.findOne({ where: { id } });
    if (!driverEntity) {
      throw new Error('Driver not found');
    }
    return this.toDomain(driverEntity);
  }

  async getDrivers(): Promise<Driver[]> {
    const driverEntities = await this.driverRepository.find();
    return driverEntities.map((driverEntity) => this.toDomain(driverEntity));
  }

  async updateDriver(id: number, name: string, age: number): Promise<void> {
    const driverEntity = await this.driverRepository.findOne({ where: { id } });
    if (!driverEntity) {
      throw new Error('Driver not found');
    }
    driverEntity.name = name;
    driverEntity.age = age;
    await this.driverRepository.save(driverEntity);
  }

  private toDomain(driverEntity: IDriver): Driver {
    return {
      id: driverEntity.id,
      name: driverEntity.name,
      age: driverEntity.age,
    };
  }

  async upsertDriver(id: number, name: string, age: number): Promise<void> {
    const existingDriver = await this.driverRepository.findOneBy({ id });

    if (existingDriver) {
      await this.driverRepository.update(id, { name, age });
    } else {
      const newDriver = this.driverRepository.create({ id, name, age });
      await this.driverRepository.save(newDriver);
    }
  }
}
