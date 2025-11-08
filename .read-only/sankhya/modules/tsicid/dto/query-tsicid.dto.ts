import { QueryDto } from 'src/utils/dto/query.dto';
import { TsicidEntity } from 'src/sankhya/entities/tSICID.entity';

export class QueryTsicidDto extends QueryDto<TsicidEntity> {
  // You can add specific filters for Tsicid here if needed
}
