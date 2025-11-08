import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TsiusuEntity } from '../../../entities/tSIUSU.entity';
import { Tsiusu } from '../domain/tsiusu.domain';
import { TsiusuByCpfRepositoryAbstract } from './tsiusu-by-cpf.repository.abstract';
import { TsiusuMapper } from '../domain/tsiusu.mapper';

@Injectable()
export class TsiusuByCpfRepositoryImpl
  implements TsiusuByCpfRepositoryAbstract
{
  constructor(
    @InjectRepository(TsiusuEntity)
    private readonly repository: Repository<TsiusuEntity>,
  ) {}

  async findOneByCpf(cpf: string): Promise<Tsiusu | null> {
    const entity = await this.repository.findOneBy({ cpf });
    return entity ? TsiusuMapper.toDomain(entity) : null;
  }
}
