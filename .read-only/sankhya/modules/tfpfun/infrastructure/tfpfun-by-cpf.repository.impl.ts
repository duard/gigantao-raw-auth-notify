import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TfpfunEntity } from '../../../entities/tFPFUN.entity';
import { Tfpfun } from '../domain/tfpfun.domain';
import { TfpfunByCpfRepositoryAbstract } from '../domain/tfpfun-by-cpf.repository.abstract';
import { TfpfunMapper } from '../domain/tfpfun.mapper';

@Injectable()
export class TfpfunByCpfRepositoryImpl
  implements TfpfunByCpfRepositoryAbstract
{
  constructor(
    @InjectRepository(TfpfunEntity)
    private readonly repository: Repository<TfpfunEntity>,
  ) {}

  async findOneByCpf(cpf: string): Promise<Tfpfun | null> {
    const entity = await this.repository.findOneBy({ cpf });
    return entity ? TfpfunMapper.toDomain(entity) : null;
  }
}
