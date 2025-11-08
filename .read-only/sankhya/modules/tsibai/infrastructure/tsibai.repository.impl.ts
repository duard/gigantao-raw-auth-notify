import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TsibaiEntity as TsibaiRepoEntity } from 'src/sankhya/entities/tSIBAI.entity';
import { TsibaiRepository } from '../domain/tsibai.repository';
import { Tsibai } from '../domain/tsibai.entity';
import { TsibaiMapper } from '../domain/tsibai.mapper';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto, QueryDto } from 'src/utils/dto/query.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TsibaiRepositoryImpl extends TsibaiRepository {
  constructor(
    @InjectRepository(TsibaiRepoEntity)
    private readonly repo: Repository<TsibaiRepoEntity>,
  ) {
    super();
  }

  async create(entity: Tsibai): Promise<Tsibai> {
    const persistenceEntity = TsibaiMapper.toPersistence(entity);
    const createdEntity = await this.repo.save(persistenceEntity);
    return TsibaiMapper.toDomain(createdEntity);
  }

  async findAll(query: any): Promise<Tsibai[]> {
    const findOptions = buildTypeOrmQuery<TsibaiRepoEntity>(query);
    findOptions.relations = ['codreg'];

    const entities = await this.repo.find(findOptions);
    return entities.map(TsibaiMapper.toDomain);
  }

  async findById(codbai: number): Promise<Tsibai | null> {
    const entity = await this.repo.findOne({
      where: { codbai },
      relations: ['codreg'],
    });
    return entity ? TsibaiMapper.toDomain(entity) : null;
  }

  async update(codbai: number, entity: Partial<Tsibai>): Promise<Tsibai> {
    const persistencePartialEntity = TsibaiMapper.toPersistencePartial(entity);
    await this.repo.update(codbai, persistencePartialEntity);
    const updatedEntity = await this.repo.findOneBy({ codbai });
    if (!updatedEntity) {
      throw new Error(`Tsibai with codbai ${codbai} not found after update.`);
    }
    return TsibaiMapper.toDomain(updatedEntity);
  }

  async delete(codbai: number): Promise<void> {
    await this.repo.delete(codbai);
  }
}
