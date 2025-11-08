import { QueryTfplgrDto } from '../dto/query-tfplgr.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfplgrEntity as TfplgrRepoEntity } from 'src/sankhya/entities/tFPLGR.entity';
import { TfplgrRepository } from '../domain/tfplgr.repository';
import { Tfplgr } from '../domain/tfplgr.entity';
import { TfplgrMapper } from '../domain/tfplgr.mapper';
import { CreateTfplgrDto } from '../dto/create-tfplgr.dto';
import { UpdateTfplgrDto } from '../dto/update-tfplgr.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto, QueryDto } from 'src/utils/dto/query.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TfplgrRepositoryImpl extends TfplgrRepository {
  constructor(
    @InjectRepository(TfplgrRepoEntity)
    private readonly repo: Repository<TfplgrRepoEntity>,
  ) {
    super();
  }

  async create(createDto: CreateTfplgrDto): Promise<Tfplgr> {
    const persistenceEntity = TfplgrMapper.toPersistence(createDto);
    const createdEntity = await this.repo.save(persistenceEntity);
    return TfplgrMapper.toDomain(createdEntity);
  }

  async findAll(query: QueryTfplgrDto): Promise<Tfplgr[]> {
    const findOptions = buildTypeOrmQuery<TfplgrRepoEntity>(query);
    findOptions.relations = ['codusu'];

    const entities = await this.repo.find(findOptions);
    return entities.map(TfplgrMapper.toDomain);
  }

  async findById(codlogradouro: string): Promise<Tfplgr | null> {
    const entity = await this.repo.findOne({
      where: { codlogradouro },
      relations: ['codusu'],
    });
    return entity ? TfplgrMapper.toDomain(entity) : null;
  }

  async update(
    codlogradouro: string,
    updateDto: UpdateTfplgrDto,
  ): Promise<Tfplgr> {
    const persistencePartialEntity =
      TfplgrMapper.toPersistencePartial(updateDto);
    await this.repo.update(codlogradouro, persistencePartialEntity);
    const updatedEntity = await this.repo.findOneBy({ codlogradouro });
    if (!updatedEntity) {
      throw new Error(
        `Tfplgr with codlogradouro ${codlogradouro} not found after update.`,
      );
    }
    return TfplgrMapper.toDomain(updatedEntity);
  }

  async delete(codlogradouro: string): Promise<void> {
    await this.repo.delete(codlogradouro);
  }
}
