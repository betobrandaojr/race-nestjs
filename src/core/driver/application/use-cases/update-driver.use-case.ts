import { Inject, Injectable } from '@nestjs/common';
import { DriverRepository } from '../../domain/repositories/driver.repository';

@Injectable()
export class UpdateDriverUseCase {
  constructor(
    @Inject('DriverRepository')
    private readonly driverRepository: DriverRepository,
  ) {}

  async execute(id: number, name: string, age: number): Promise<void> {
    const driver = await this.driverRepository.getDriver(id);

    if (!driver) {
      throw new Error('Driver not found');
    }

    if (age < 18) {
      throw new Error('Driver must be at least 18 years old.');
    }

    await this.driverRepository.updateDriver(id, name, age);
  }
}
