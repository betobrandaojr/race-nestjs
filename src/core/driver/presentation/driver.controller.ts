import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateDriverUseCase } from '../../../core/driver/application/use-cases/create-driver.use-case';
import { GetDriverUseCase } from '../../../core/driver/application/use-cases/get-driver.use-case';
import { GetDriversUseCase } from '../../../core/driver/application/use-cases/get-drivers.use-case';
import { UpdateDriverUseCase } from '../../../core/driver/application/use-cases/update-driver.use-case';
import { CreateDriverDto } from './dtos/create-driver.dto';
import { UpdateDriverDto } from './dtos/update-driver.dto';
import { UpsertDriverUseCase } from '../application/use-cases/upsert-driver.use-case';

@Controller('drivers')
export class DriverController {
  constructor(
    private readonly createDriverUseCase: CreateDriverUseCase,
    private readonly getDriverUseCase: GetDriverUseCase,
    private readonly getDriversUseCase: GetDriversUseCase,
    private readonly updateDriverUseCase: UpdateDriverUseCase,
    private readonly upsertDriverUseCase: UpsertDriverUseCase,
  ) {}

  @Post()
  async createDriver(@Body() createDriverDto: CreateDriverDto): Promise<void> {
    const { name, age } = createDriverDto;
    await this.createDriverUseCase.execute(name, age);
  }

  @Get(':id')
  async getDriver(@Param('id') id: number) {
    try {
      return await this.getDriverUseCase.execute(id);
    } catch (error) {
      throw new HttpException(
        'Error getting driver',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async getDrivers() {
    try {
      return await this.getDriversUseCase.execute();
    } catch (error) {
      throw new HttpException(
        'Error getting drivers',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async updateDriver(
    @Param('id') id: number,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<void> {
    const { name, age } = updateDriverDto;
    try {
      await this.updateDriverUseCase.execute(id, name, age);
    } catch (error) {
      throw new HttpException(
        'Error updating driver',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('upsert')
  async upsertDriver(@Body() createDriverDto: CreateDriverDto): Promise<void> {
    try {
      const { id, name, age } = createDriverDto;

      await this.upsertDriverUseCase.execute(id, name, age);
    } catch (error) {
      throw new HttpException(
        'Error upserting driver',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
