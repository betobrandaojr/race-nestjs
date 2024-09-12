import { IsString, IsInt, Min, IsPositive, IsOptional } from 'class-validator';

export class CreateDriverDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsInt()
  @Min(18, { message: 'O motorista deve ter pelo menos 18 anos.' })
  age: number;
}
