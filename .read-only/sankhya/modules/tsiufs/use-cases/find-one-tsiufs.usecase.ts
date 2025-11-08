import { Injectable, Inject } from '@nestjs/common';
import { TsiufsRepository } from '../repositories/tsiufs.repository.abstract';
import { Tsiufs } from '../domain/tsiufs.domain';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class FindOneTsiufsUseCase {
  constructor(
    @Inject('TsiufsRepository')
    private readonly tsiufsRepository: TsiufsRepository,
  ) {}

  execute(id: Tsiufs['coduf']): Promise<NullableType<Tsiufs>> {
    return this.tsiufsRepository.findById(id);
  }
}
