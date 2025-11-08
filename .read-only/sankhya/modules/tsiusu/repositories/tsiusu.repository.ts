import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TsiusuEntity } from '../../../entities/tSIUSU.entity';
import { TsiusuRepository } from './tsiusu.repository.abstract';
import { Tsiusu } from '../domain/tsiusu.domain';
import { TsiusuMapper } from '../domain/tsiusu.mapper';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto, QueryDto } from 'src/utils/dto/query.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TsiusuRepositoryImpl extends TsiusuRepository {
  constructor(
    @InjectRepository(TsiusuEntity)
    private readonly repository: Repository<TsiusuEntity>,
  ) {
    super();
  }

  async findManyWithPagination({
    paginationOptions,
    sortOptions,
  }: {
    paginationOptions: IPaginationOptions;
    sortOptions?: SortDto<TsiusuEntity>[];
  }): Promise<Tsiusu[]> {
    const findOptions = buildTypeOrmQuery<TsiusuEntity>({
      page: paginationOptions.page,
      limit: paginationOptions.limit,
      sort: sortOptions,
    } as QueryDto<TsiusuEntity>);

    const entities = await this.repository.find(findOptions);

    return entities.map((item) => TsiusuMapper.toDomain(item));
  }

  async findById(id: number): Promise<Tsiusu | null> {
    const entity = await this.repository.findOneBy({ codusu: id });
    return entity ? TsiusuMapper.toDomain(entity) : null;
  }

  async create(entity: Tsiusu): Promise<Tsiusu> {
    const persistenceEntity = TsiusuMapper.toPersistence(entity as Tsiusu);
    const createdEntity = await this.repository.save(persistenceEntity);
    return TsiusuMapper.toDomain(createdEntity);
  }

  async update(id: number, entity: Partial<Tsiusu>): Promise<Tsiusu | null> {
    const persistenceEntity = TsiusuMapper.toPersistence(entity as Tsiusu);
    await this.repository.update(id, persistenceEntity);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
