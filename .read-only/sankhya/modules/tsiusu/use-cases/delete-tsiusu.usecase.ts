import { Injectable, Inject } from '@nestjs/common';
import { TsiusuRepository } from '../repositories/tsiusu.repository.abstract';
import { Tsiusu } from '../domain/tsiusu.domain';

@Injectable()
export class DeleteTsiusuUseCase {
  constructor(
    @Inject('TsiusuRepository')
    private readonly tsiusuRepository: TsiusuRepository,
  ) {}

  execute(id: Tsiusu['codusu']): Promise<void> {
    return this.tsiusuRepository.remove(id);
  }
}
