import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { QueryDto } from '../../../../utils/dto/query.dto';
import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';

export class QueryTfpdpdDto extends QueryDto<TfpdpdEntity> {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  codemp?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  codfunc?: number;
}
