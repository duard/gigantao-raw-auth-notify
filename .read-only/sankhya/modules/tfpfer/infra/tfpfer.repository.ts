import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfpferEntity } from '../../../entities/tFPFER.entity';
import { CreateTfpferDto } from '../dtos/create-tfpfer.dto';
import {
  QueryTfpferDto,
  QueryTfpferFindOneDto,
} from '../dtos/query-tfpfer.dto';
import { TfpferRepository } from './tfpfer.repository.abstract';

@Injectable()
export class TfpferRepositoryImpl implements TfpferRepository {
  constructor(
    @InjectRepository(TfpferEntity)
    private readonly tfpferRepository: Repository<TfpferEntity>,
  ) {}

  async findAll(query: QueryTfpferDto): Promise<TfpferEntity[] | null> {
    const queryBuilder = this.tfpferRepository.createQueryBuilder('tfpfer');

    if (query.dtprevista) {
      queryBuilder.where('tfpfer.dtprevista = :dtprevista', {
        dtprevista: query.dtprevista,
      });
    }

    queryBuilder.limit(query.limit || 10);
    queryBuilder.offset((query.page || 0) * (query.limit || 10));

    queryBuilder.orderBy('tfpfer.dtprevista', 'DESC');

    const result = await queryBuilder.getMany();
    return result;
  }

  async findOne(query: QueryTfpferFindOneDto): Promise<TfpferEntity | null> {
    return await this.tfpferRepository.findOne({
      where: query,
    });
  }

  async create(query: CreateTfpferDto): Promise<TfpferEntity> {
    const result = await this.tfpferRepository.save(query);
    return result;
  }

  async update(
    id: QueryTfpferFindOneDto,
    query: CreateTfpferDto,
  ): Promise<TfpferEntity | null> {
    await this.tfpferRepository.update(id, query);
    return this.findOne(id);
  }

  async remove(id: QueryTfpferFindOneDto): Promise<void> {
    await this.tfpferRepository.delete(id);
  }
}
