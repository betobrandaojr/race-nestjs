import { IsString, IsInt, IsOptional, Min } from 'class-validator';

export class UpdateDriverDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(18, { message: 'O motorista deve ter pelo menos 18 anos.' })
  age?: number;
}
