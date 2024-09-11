import { Inject, Injectable } from '@nestjs/common';
import { DriverRepository } from '../../domain/repositories/driver.repository';
import { Driver } from '../../domain/entities/driver';

@Injectable()
export class GetDriversUseCase {
  constructor(
    @Inject('DriverRepository')
    private readonly driverRepository: DriverRepository,
  ) {}

  async execute(): Promise<Driver[]> {
    return await this.driverRepository.getDrivers();
  }
}
