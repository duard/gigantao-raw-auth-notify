import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TsiufsEntity } from '../../../entities/tSIUFS.entity';
import { TsiufsRepository } from '../domain/tsiufs.repository';
import { TsiufsMapper } from '../domain/tsiufs.mapper';
import { CreateTsiufsDto } from '../dto/create-tsiufs.dto';
import { UpdateTsiufsDto } from '../dto/update-tsiufs.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { SortDto, QueryDto } from 'src/utils/dto/query.dto';
import { buildTypeOrmQuery } from 'src/utils/typeorm-query';
import { Tsiufs } from '../domain/tsiufs.domain';

@Injectable()
export class TsiufsRepositoryImpl extends TsiufsRepository {
  constructor(
    @InjectRepository(TsiufsEntity)
    private readonly repo: Repository<TsiufsEntity>,
  ) {
    super();
  }

  async create(createDto: CreateTsiufsDto): Promise<TsiufsEntity> {
    const domain = new Tsiufs();
    Object.assign(domain, createDto);
    const persistenceEntity = TsiufsMapper.toPersistence(domain);
    const createdEntity = await this.repo.save(persistenceEntity);
    return createdEntity;
  }

  async findAll(options: {
    paginationOptions?: IPaginationOptions;
    sortOptions?: SortDto<TsiufsEntity>[];
  }): Promise<TsiufsEntity[]> {
    const findOptions = buildTypeOrmQuery<TsiufsEntity>({
      page: options.paginationOptions?.page,
      limit: options.paginationOptions?.limit,
      sort: options.sortOptions,
    } as QueryDto<TsiufsEntity>);
    findOptions.relations = ['codpais'];

    const entities = await this.repo.find(findOptions);
    return entities;
  }

  async findById(coduf: number): Promise<TsiufsEntity | null> {
    const entity = await this.repo.findOne({
      where: { coduf },
      relations: ['codpais'],
    });
    return entity;
  }

  async update(
    coduf: number,
    updateDto: UpdateTsiufsDto,
  ): Promise<TsiufsEntity> {
    const domain = new Tsiufs();
    Object.assign(domain, updateDto);
    const persistencePartialEntity = TsiufsMapper.toPersistencePartial(domain);
    await this.repo.update(coduf, persistencePartialEntity);
    const updatedEntity = await this.repo.findOneBy({ coduf });
    if (!updatedEntity) {
      throw new Error(`Tsiufs with coduf ${coduf} not found after update.`);
    }
    return updatedEntity;
  }

  async delete(coduf: number): Promise<void> {
    await this.repo.delete(coduf);
  }
}
