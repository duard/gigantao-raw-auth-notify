import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TsiufsEntity } from '../../../entities/tSIUFS.entity';
import { TsiufsRepository } from './tsiufs.repository.abstract';
import { Tsiufs } from '../domain/tsiufs.domain';
import { TsiufsMapper } from '../domain/tsiufs.mapper';
import { IPaginationOptions } from 'src/utils/types/pagination-options';

@Injectable()
export class TsiufsRepositoryImpl extends TsiufsRepository {
  constructor(
    @InjectRepository(TsiufsEntity)
    private readonly repository: Repository<TsiufsEntity>,
  ) {
    super();
  }

  async findManyWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Tsiufs[]> {
    const entities = await this.repository.find({
      skip:
        ((paginationOptions.page || 1) - 1) * (paginationOptions.limit || 10),
      take: paginationOptions.limit || 10,
      order: {
        [paginationOptions.orderBy || 'coduf']:
          paginationOptions.order || 'ASC',
      },
    });

    return entities.map((item) => TsiufsMapper.toDomain(item));
  }

  async findById(id: number): Promise<Tsiufs | null> {
    const entity = await this.repository.findOneBy({ coduf: id });
    return entity ? TsiufsMapper.toDomain(entity) : null;
  }

  async create(entity: Omit<Tsiufs, 'coduf'>): Promise<Tsiufs> {
    const persistenceEntity = TsiufsMapper.toPersistence(entity as Tsiufs);
    const createdEntity = await this.repository.save(persistenceEntity);
    return TsiufsMapper.toDomain(createdEntity);
  }

  async update(id: number, entity: Partial<Tsiufs>): Promise<Tsiufs | null> {
    const persistenceEntity = TsiufsMapper.toPersistence(entity as Tsiufs);
    await this.repository.update(id, persistenceEntity);
    return this.findById(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
