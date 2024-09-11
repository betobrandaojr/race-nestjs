import { Inject, Injectable } from '@nestjs/common';
import { DriverRepository } from '../../domain/repositories/driver.repository';
import { Driver } from '../../domain/entities/driver';

@Injectable()
export class GetDriverUseCase {
  constructor(
    @Inject('DriverRepository')
    private readonly driverRepository: DriverRepository,
  ) {}

  async execute(id: number): Promise<Driver> {
    const driver = await this.driverRepository.getDriver(id);

    if (!driver) {
      throw new Error('Driver not found');
    }

    return driver;
  }
}
