import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { QueryDto } from 'src/utils/dto/query.dto';
import { TgfproEntity } from 'src/sankhya/entities/tGFPRO.entity';

export class FindAllMobileTgfproDto extends QueryDto<TgfproEntity> {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  codlocal?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  codprod?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  codgru?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  search?: string;
}
