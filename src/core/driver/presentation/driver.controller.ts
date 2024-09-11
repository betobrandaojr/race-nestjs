import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { CreateDriverUseCase } from '../../../core/driver/application/use-cases/create-driver.use-case';
import { GetDriverUseCase } from '../../../core/driver/application/use-cases/get-driver.use-case';
import { GetDriversUseCase } from '../../../core/driver/application/use-cases/get-drivers.use-case';
import { UpdateDriverUseCase } from '../../../core/driver/application/use-cases/update-driver.use-case';
import { CreateDriverDto } from './dtos/create-driver.dto';
import { UpdateDriverDto } from './dtos/update-driver.dto';

@Controller('drivers')
export class DriverController {
  constructor(
    private readonly createDriverUseCase: CreateDriverUseCase,
    private readonly getDriverUseCase: GetDriverUseCase,
    private readonly getDriversUseCase: GetDriversUseCase,
    private readonly updateDriverUseCase: UpdateDriverUseCase,
  ) {}

  @Post()
  async createDriver(@Body() createDriverDto: CreateDriverDto): Promise<void> {
    const { name, age } = createDriverDto;
    await this.createDriverUseCase.execute(name, age);
  }

  @Get(':id')
  async getDriver(@Param('id') id: number) {
    return await this.getDriverUseCase.execute(id);
  }

  @Get()
  async getDrivers() {
    return await this.getDriversUseCase.execute();
  }

  @Put(':id')
  async updateDriver(
    @Param('id') id: number,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<void> {
    const { name, age } = updateDriverDto;
    await this.updateDriverUseCase.execute(id, name, age);
  }
}
