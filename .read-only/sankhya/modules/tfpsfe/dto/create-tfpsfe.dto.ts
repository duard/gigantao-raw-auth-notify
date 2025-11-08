import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTfpsfeDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  codemp: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  codfunc: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  nusolicit: number;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dhsolicit: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  status: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  previnicio: Date;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  diassolicitados: number;

  @ApiProperty({ default: 'N' })
  @IsString()
  @IsOptional()
  @MaxLength(1)
  adiantadecterc: string;

  @ApiProperty({ default: 'N' })
  @IsString()
  @IsOptional()
  @MaxLength(1)
  abonopecuniario: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  observacao: string;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dtiniaqui: Date;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  seqfer: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  diasabonopec: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  id: number;
}
