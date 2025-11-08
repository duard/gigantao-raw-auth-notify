import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { QueryDto } from '../../../../utils/dto/query.dto';
import { TfpferEntity } from '../../../entities/tFPFER.entity';

export class QueryTfpferDto extends QueryDto<TfpferEntity> {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  dtprevista?: string;
}

export class QueryTfpferFindOneDto extends QueryDto<TfpferEntity> {
  @ApiProperty({
    required: true,
    description: 'Código da empresa do funcionário',
    example: 5,
  })
  @IsNumber()
  codemp: number;

  @ApiProperty({
    required: true,
    description: 'Código do funcionário',
    example: 99,
  })
  @IsNumber()
  codfunc: number;

  @ApiProperty({
    required: true,
    description: 'Data de referência',
    example: '2025-07-01T00:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  referencia?: Date;
}
