import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TsiendEntity as TsiendRepoEntity } from 'src/sankhya/entities/tSIEND.entity';
import { TsiendRepository } from '../domain/tsiend.repository';
import { Tsiend } from '../domain/tsiend.entity';
import { TsiendMapper } from '../domain/tsiend.mapper';
import { CreateTsiendDto } from '../dto/create-tsiend.dto';
import { UpdateTsiendDto } from '../dto/update-tsiend.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto, QueryDto } from 'src/utils/dto/query.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TsiendRepositoryImpl extends TsiendRepository {
  constructor(
    @InjectRepository(TsiendRepoEntity)
    private readonly repo: Repository<TsiendRepoEntity>,
  ) {
    super();
  }

  async create(createDto: CreateTsiendDto): Promise<Tsiend> {
    const persistenceEntity = TsiendMapper.toPersistence(createDto);
    const createdEntity = await this.repo.save(persistenceEntity);
    return TsiendMapper.toDomain(createdEntity);
  }

  async findAll(query: any): Promise<Tsiend[]> {
    const findOptions = buildTypeOrmQuery<TsiendRepoEntity>(query);
    findOptions.relations = ['codlogradouro'];

    const entities = await this.repo.find(findOptions);
    return entities.map(TsiendMapper.toDomain);
  }

  async findById(codend: number): Promise<Tsiend | null> {
    const entity = await this.repo.findOne({
      where: { codend },
      relations: ['codlogradouro'],
    });
    return entity ? TsiendMapper.toDomain(entity) : null;
  }

  async update(codend: number, updateDto: UpdateTsiendDto): Promise<Tsiend> {
    const persistencePartialEntity =
      TsiendMapper.toPersistencePartial(updateDto);
    await this.repo.update(codend, persistencePartialEntity);
    const updatedEntity = await this.repo.findOneBy({ codend });
    if (!updatedEntity) {
      throw new Error(`Tsiend with codend ${codend} not found after update.`);
    }
    return TsiendMapper.toDomain(updatedEntity);
  }

  async delete(codend: number): Promise<void> {
    await this.repo.delete(codend);
  }
}
