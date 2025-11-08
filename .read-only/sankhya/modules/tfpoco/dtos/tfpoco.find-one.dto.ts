import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { QueryDto } from '../../../../utils/dto/query.dto';
import { TfpocoEntity } from '../../../entities/tFPOCO.entity';


export class QueryTfpocoFindOneDto extends QueryDto<TfpocoEntity> {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  nuocor?: number;
  
}
