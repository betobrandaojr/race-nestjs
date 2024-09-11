import { Driver } from '../entities/driver';

export interface DriverRepository {
  createDriver(name: string, age: number): Promise<void>;
  getDriver(id: number): Promise<Driver>;
  getDrivers(): Promise<Driver[]>;
  updateDriver(id: number, name: string, age: number): Promise<void>;
}
