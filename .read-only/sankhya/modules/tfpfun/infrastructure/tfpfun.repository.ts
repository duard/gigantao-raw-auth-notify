import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfpfunEntity } from '../../../entities/tFPFUN.entity';
import { TfpfunRepositoryAbstract } from '../domain/tfpfun.repository.abstract';
import { Tfpfun } from '../domain/tfpfun.domain';
import { CreateTfpfunDto } from '../dto/dto.create-tfpfun';
import { UpdateTfpfunDto } from '../dto/dto.update-tfpfun';
import { QueryTfpfunDto } from '../dto/query-tfpfun.dto';

import { TfpfunMapper } from '../domain/tfpfun.mapper';

@Injectable()
export class TfpfunRepositoryImpl implements TfpfunRepositoryAbstract {
  constructor(
    @InjectRepository(TfpfunEntity)
    private readonly tfpfunRepository: Repository<TfpfunEntity>,
  ) {}

  async create(item: Tfpfun): Promise<Tfpfun | undefined> {
    const tfpfun = this.tfpfunRepository.create(item as any);
    return TfpfunMapper.toDomain(
      await this.tfpfunRepository.save(tfpfun as any),
    );
  }

  async findAll(
    query: QueryTfpfunDto,
  ): Promise<{ data: Tfpfun[]; total: number }> {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const [data, total] = await this.tfpfunRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { codfunc: 'DESC', codemp: 'DESC' },
    });
    return { data: data.map(TfpfunMapper.toDomain), total };
  }

  async findById(id: number, codemp: number): Promise<Tfpfun | undefined> {
    const tfpfunEntity = await this.tfpfunRepository.findOne({
      where: { codfunc: id, codemp: codemp },
    });
    return tfpfunEntity ? TfpfunMapper.toDomain(tfpfunEntity) : undefined;
  }

  async update(id: number, item: Tfpfun): Promise<Tfpfun | undefined> {
    await this.tfpfunRepository.update({ codfunc: id }, item as any);
    const updatedTfpfun = await this.findById(id, item.codemp);
    if (!updatedTfpfun) {
      throw new NotFoundException(`Tfpfun with id ${id} not found`);
    }
    return updatedTfpfun;
  }

  async delete(id: number): Promise<void> {
    await this.tfpfunRepository.delete({ codfunc: id });
  }
}
