import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { TfpsfeEntity } from 'src/sankhya/entities/tFPSFE.entity';
import { QueryDto } from 'src/utils/dto/query.dto';

export class QueryTfpsfeDto extends QueryDto<TfpsfeEntity> {
  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  codfunc?: number;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  codemp?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nomefunc?: string;
}
