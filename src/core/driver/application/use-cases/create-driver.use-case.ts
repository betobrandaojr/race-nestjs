import { Inject, Injectable } from '@nestjs/common';
import { DriverRepository } from '../../domain/repositories/driver.repository';

@Injectable()
export class CreateDriverUseCase {
  constructor(
    @Inject('DriverRepository')
    private readonly driverRepository: DriverRepository,
  ) {}

  async execute(name: string, age: number): Promise<void> {
    if (age < 18) {
      throw new Error('Driver must be at least 18 years old.');
    }

    await this.driverRepository.createDriver(name, age);
  }
}
