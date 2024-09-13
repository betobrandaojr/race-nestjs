import { IsString } from 'class-validator';

export class CreateRaceDto {
  @IsString()
  name: string;
  minSpeed: number;
  maxSpeed: number;
  location: string;
}
