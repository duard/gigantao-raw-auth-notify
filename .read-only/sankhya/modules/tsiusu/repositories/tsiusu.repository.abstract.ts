import { DeepPartial } from 'src/utils/types/deep-partial.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { Tsiusu } from '../domain/tsiusu.domain';

export abstract class TsiusuRepository {
  abstract create(data: Omit<Tsiusu, 'codusu'>): Promise<Tsiusu>;

  abstract findManyWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Tsiusu[]>;

  abstract findById(id: Tsiusu['codusu']): Promise<NullableType<Tsiusu>>;

  abstract update(
    id: Tsiusu['codusu'],
    payload: DeepPartial<Tsiusu>,
  ): Promise<Tsiusu | null>;

  abstract remove(id: Tsiusu['codusu']): Promise<void>;
}
