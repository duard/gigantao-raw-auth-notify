import { Tsibai } from './tsibai.entity';
import { QueryTsibaiDto } from '../dto/query-tsibai.dto';

export abstract class TsibaiRepository {
  abstract create(entity: Tsibai): Promise<Tsibai>;
  abstract findAll(query: QueryTsibaiDto): Promise<Tsibai[]>;
  abstract findById(codbai: number): Promise<Tsibai | null>;
  abstract update(codbai: number, entity: Partial<Tsibai>): Promise<Tsibai>;
  abstract delete(codbai: number): Promise<void>;
}
