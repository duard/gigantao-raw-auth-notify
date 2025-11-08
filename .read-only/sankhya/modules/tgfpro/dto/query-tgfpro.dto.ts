import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Transform, Type, plainToInstance } from 'class-transformer';
import { PaginatedQueryDto } from 'src/utils/dto/paginated-query.dto';
import { SortDto } from 'src/utils/dto/query.dto';
import { TgfproEntity } from 'src/sankhya/entities/tGFPRO.entity';

export class QueryTgfproDto extends PaginatedQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  codprod?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  descrprod?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  referencia?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  codgrupoprod?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  marca?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ativo?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  search?: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @Transform(({ value }) => {
    return value
      ? plainToInstance(SortDto<TgfproEntity>, JSON.parse(value))
      : [];
  })
  @ValidateNested({ each: true })
  @Type(() => SortDto<TgfproEntity>)
  sort?: SortDto<TgfproEntity>[] = [];
}
