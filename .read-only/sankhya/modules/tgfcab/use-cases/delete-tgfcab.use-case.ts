import { Injectable, Inject } from '@nestjs/common';
import { TgfcabRepository } from '../repositories/tgfcab.repository.abstract';
import { Tgfcab } from '../domain/tgfcab.domain';

@Injectable()
export class DeleteTgfcabUseCase {
  constructor(
    @Inject('TgfcabRepository')
    private readonly tgfcabRepository: TgfcabRepository,
  ) {}

  execute(id: Tgfcab['nunota']): Promise<void> {
    return this.tgfcabRepository.remove(id);
  }
}
