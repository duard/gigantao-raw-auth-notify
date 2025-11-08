import { Tgfcab } from '../domain/tgfcab.domain';
import { QueryTgfcabDto } from '../dto/query-tgfcab.dto';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';

export abstract class TgfcabRepository {
  abstract findAll(query: QueryTgfcabDto): Promise<PaginatedOutputDto<Tgfcab>>;
  abstract findAllSummarized(
    query: QueryTgfcabDto,
  ): Promise<PaginatedOutputDto<Tgfcab>>;
  abstract findById(id: number): Promise<Tgfcab | null>;
  abstract create(entity: Tgfcab): Promise<Tgfcab>;
  abstract update(id: number, entity: Partial<Tgfcab>): Promise<Tgfcab | null>;
  abstract remove(id: number): Promise<void>;
}
