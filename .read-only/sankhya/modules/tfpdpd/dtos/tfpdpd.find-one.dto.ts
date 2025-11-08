import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { QueryDto } from '../../../../utils/dto/query.dto';
import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';

export class QueryTfpdpFindOneDto extends QueryDto<TfpdpdEntity> {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  nomedepend?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  codparc?: number;
}
