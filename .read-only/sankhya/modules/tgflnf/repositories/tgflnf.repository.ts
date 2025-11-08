import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TgflnfEntity } from '../../../entities/tGFLNF.entity';
import { TgflnfRepository } from './tgflnf.repository.abstract';
import { Tgflnf } from '../domain/tgflnf.domain';
import { TgflnfMapper } from '../domain/tgflnf.mapper';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto, QueryDto } from 'src/utils/dto/query.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TgflnfRepositoryImpl extends TgflnfRepository {
  constructor(
    @InjectRepository(TgflnfEntity)
    private readonly repository: Repository<TgflnfEntity>,
  ) {
    super();
  }

  async findManyWithPagination({
    paginationOptions,
    sortOptions,
  }: {
    paginationOptions: IPaginationOptions;
    sortOptions?: SortDto<Tgflnf>[];
  }): Promise<Tgflnf[]> {
    const findOptions = buildTypeOrmQuery<Tgflnf>({
      page: paginationOptions.page,
      limit: paginationOptions.limit,
      sort: sortOptions,
    } as QueryDto<Tgflnf>);

    const entities = await this.repository.find(findOptions);

    return entities.map((item) => TgflnfMapper.toDomain(item));
  }

  async findById(id: number): Promise<Tgflnf | null> {
    const entity = await this.repository.findOneBy({ nulote: id });
    return entity ? TgflnfMapper.toDomain(entity) : null;
  }

  async create(entity: Tgflnf): Promise<Tgflnf> {
    const persistenceEntity = TgflnfMapper.toPersistence(entity as Tgflnf);
    const createdEntity = await this.repository.save(persistenceEntity);
    return TgflnfMapper.toDomain(createdEntity);
  }

  async update(id: number, entity: Partial<Tgflnf>): Promise<Tgflnf | null> {
    const persistenceEntity = TgflnfMapper.toPersistence(entity as Tgflnf);
    await this.repository.update(id, persistenceEntity);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
