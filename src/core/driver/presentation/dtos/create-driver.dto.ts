import { IsString, IsInt, Min } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(18, { message: 'O motorista deve ter pelo menos 18 anos.' })
  age: number;
}
