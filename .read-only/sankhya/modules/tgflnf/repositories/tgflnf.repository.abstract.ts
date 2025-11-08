import { DeepPartial } from 'src/utils/types/deep-partial.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { Tgflnf } from '../domain/tgflnf.domain';

export abstract class TgflnfRepository {
  abstract create(data: Omit<Tgflnf, 'nulote'>): Promise<Tgflnf>;

  abstract findManyWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Tgflnf[]>;

  abstract findById(id: Tgflnf['nulote']): Promise<NullableType<Tgflnf>>;

  abstract update(
    id: Tgflnf['nulote'],
    payload: DeepPartial<Tgflnf>,
  ): Promise<Tgflnf | null>;

  abstract remove(id: Tgflnf['nulote']): Promise<void>;
}
