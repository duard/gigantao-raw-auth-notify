import { DeepPartial } from 'src/utils/types/deep-partial.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { Tsiufs } from '../domain/tsiufs.domain';

export abstract class TsiufsRepository {
  abstract create(data: Omit<Tsiufs, 'coduf'>): Promise<Tsiufs>;

  abstract findManyWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Tsiufs[]>;

  abstract findById(id: Tsiufs['coduf']): Promise<NullableType<Tsiufs>>;

  abstract update(
    id: Tsiufs['coduf'],
    payload: DeepPartial<Tsiufs>,
  ): Promise<Tsiufs | null>;

  abstract remove(id: Tsiufs['coduf']): Promise<void>;
}
