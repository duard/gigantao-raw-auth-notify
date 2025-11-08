import { ApiProperty } from '@nestjs/swagger';
import { QueryDto } from '../../../../utils/dto/query.dto';
import { TfpreqEntity } from '../../../entities/tFPREQ.entity';

export class QueryTfpreqDto extends QueryDto<TfpreqEntity> {
  @ApiProperty({ required: false })
  nomefunc?: string;
}
