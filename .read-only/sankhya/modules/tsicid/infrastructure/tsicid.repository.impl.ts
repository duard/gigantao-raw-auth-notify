import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TsicidEntity as TsicidRepoEntity } from 'src/sankhya/entities/tSICID.entity';
import { TsicidRepository } from '../domain/tsicid.repository';
import { Tsicid } from '../domain/tsicid.domain';
import { TsicidMapper } from '../domain/tsicid.mapper';
import { CreateTsicidDto } from '../dto/create-tsicid.dto';
import { UpdateTsicidDto } from '../dto/update-tsicid.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto, QueryDto } from 'src/utils/dto/query.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';

@Injectable()
export class TsicidRepositoryImpl extends TsicidRepository {
  constructor(
    @InjectRepository(TsicidRepoEntity)
    private readonly repo: Repository<TsicidRepoEntity>,
  ) {
    super();
  }

  async create(createDto: CreateTsicidDto): Promise<TsicidRepoEntity> {
    const domainEntity = new Tsicid();
    Object.assign(domainEntity, createDto);
    const persistenceEntity = TsicidMapper.toPersistence(domainEntity);
    const createdEntity = await this.repo.save(persistenceEntity);
    return createdEntity;
  }

  async findAll(query: any): Promise<TsicidRepoEntity[]> {
    const findOptions = buildTypeOrmQuery<TsicidRepoEntity>(query);
    findOptions.relations = ['uf2'];

    const entities = await this.repo.find(findOptions);
    return entities;
  }

  async findById(codcid: number): Promise<TsicidRepoEntity | null> {
    const entity = await this.repo.findOne({
      where: { codcid },
      relations: ['uf2'],
    });
    return entity;
  }

  async update(
    codcid: number,
    updateDto: UpdateTsicidDto,
  ): Promise<TsicidRepoEntity> {
    const domainEntity = new Tsicid();
    Object.assign(domainEntity, updateDto);
    const persistencePartialEntity =
      TsicidMapper.toPersistencePartial(domainEntity);
    await this.repo.update(codcid, persistencePartialEntity);
    const updatedEntity = await this.repo.findOneBy({ codcid });
    if (!updatedEntity) {
      throw new Error(`Tsicid with codcid ${codcid} not found after update.`);
    }
    return updatedEntity;
  }

  async delete(codcid: number): Promise<void> {
    await this.repo.delete(codcid);
  }
}
