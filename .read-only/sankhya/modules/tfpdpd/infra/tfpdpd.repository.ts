import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfpdpdEntity } from '../../../entities/tFPDPD.entity';
import { TfpdpdCreateDto } from '../dtos/tfpdpd.create.dto';
import { QueryTfpdpdDto } from '../dtos/tfpdpd.find-all.dto';
import { QueryTfpdpFindOneDto } from '../dtos/tfpdpd.find-one.dto';
import { TfpdpdUpdateDto } from '../dtos/tfpdpd.update.dto';
import { TfpdpdRepository } from './tfpdpd.repository.abstract';

@Injectable()
export class TfpdpdRepositoryImpl implements TfpdpdRepository {
  constructor(
    @InjectRepository(TfpdpdEntity)
    private readonly repository: Repository<TfpdpdEntity>,
  ) {}

  async findAll(query: QueryTfpdpdDto): Promise<TfpdpdEntity[] | null> {
    const queryBuilder = this.repository.createQueryBuilder('tfpdpd');

    if (query.codemp) {
      queryBuilder.where('tfpdpd.codemp = :codemp', { codemp: query.codemp });
    }

    if (query.codfunc) {
      queryBuilder.where('tfpdpd.codfunc = :codfunc', {
        codfunc: query.codfunc,
      });
    }

    queryBuilder.limit(query.limit || 10);
    queryBuilder.offset((query.page || 0) * (query.limit || 10));

    queryBuilder.orderBy('tfpdpd.codemp', 'ASC');

    const result = await queryBuilder.getMany();
    return result;
  }

  async findOne(query: QueryTfpdpFindOneDto): Promise<TfpdpdEntity | null> {
    return await this.repository.findOne({ where: query });
  }

  async create(query: TfpdpdCreateDto): Promise<TfpdpdEntity> {
    const newTfpdpd = this.repository.create(query);
    const result = await this.repository.save(newTfpdpd);

    return result;
  }

  async update(
    id: QueryTfpdpFindOneDto,
    query: TfpdpdUpdateDto,
  ): Promise<TfpdpdEntity | null> {
    await this.repository.update(id, query);

    return this.findOne(id);
  }

  async remove(id: QueryTfpdpFindOneDto): Promise<void> {
    await this.repository.delete(id);
  }
}
