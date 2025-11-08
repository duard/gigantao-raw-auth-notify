import { Injectable, Inject } from '@nestjs/common';
import { TsiusuRepository } from '../repositories/tsiusu.repository.abstract';
import { Tsiusu } from '../domain/tsiusu.domain';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class FindOneTsiusuUseCase {
  constructor(
    @Inject('TsiusuRepository')
    private readonly tsiusuRepository: TsiusuRepository,
  ) {}

  execute(id: Tsiusu['codusu']): Promise<NullableType<Tsiusu>> {
    return this.tsiusuRepository.findById(id);
  }
}
