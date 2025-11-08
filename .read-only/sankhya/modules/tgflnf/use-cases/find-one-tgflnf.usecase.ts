import { Injectable, Inject } from '@nestjs/common';
import { TgflnfRepository } from '../repositories/tgflnf.repository.abstract';
import { Tgflnf } from '../domain/tgflnf.domain';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class FindOneTgflnfUseCase {
  constructor(
    @Inject('TgflnfRepository')
    private readonly tgflnfRepository: TgflnfRepository,
  ) {}

  execute(id: Tgflnf['nulote']): Promise<NullableType<Tgflnf>> {
    return this.tgflnfRepository.findById(id);
  }
}
