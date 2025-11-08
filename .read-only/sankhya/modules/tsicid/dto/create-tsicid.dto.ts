import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateTsicidDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  codcid: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nomecid: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  uf?: number | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  ddd?: string | null;

  @ApiProperty({ type: Date })
  @IsOptional()
  dtalter?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  descricaocorreio?: string | null;
}
