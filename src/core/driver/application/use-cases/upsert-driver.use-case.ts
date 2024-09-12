import { Inject } from '@nestjs/common';
import { DriverRepository } from '../../domain/repositories/driver.repository';

export class UpsertDriverUseCase {
  constructor(
    @Inject('DriverRepository')
    private readonly driverRepository: DriverRepository,
  ) {}

  async execute(id: number, name: string, age: number): Promise<void> {
    await this.driverRepository.upsertDriver(id, name, age);
  }
}
