import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateTsiendDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  codend: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nomeend: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  tipo?: string | null;

  @ApiProperty({ type: Date })
  @IsOptional()
  dtalter?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  descricaocorreio?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nuversao?: number | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  atunuversao?: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  codlogradouro?: string;
}
