import { Injectable, Inject } from '@nestjs/common';
import { TgfcabRepository } from '../repositories/tgfcab.repository.abstract';
import { Tgfcab } from '../domain/tgfcab.domain';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class FindOneTgfcabUseCase {
  constructor(
    @Inject('TgfcabRepository')
    private readonly tgfcabRepository: TgfcabRepository,
  ) {}

  execute(id: Tgfcab['nunota']): Promise<NullableType<Tgfcab>> {
    return this.tgfcabRepository.findById(id);
  }
}
