import { Injectable, Inject } from '@nestjs/common';
import { TsiufsRepository } from '../repositories/tsiufs.repository.abstract';
import { Tsiufs } from '../domain/tsiufs.domain';

@Injectable()
export class DeleteTsiufsUseCase {
  constructor(
    @Inject('TsiufsRepository')
    private readonly tsiufsRepository: TsiufsRepository,
  ) {}

  execute(id: Tsiufs['coduf']): Promise<void> {
    return this.tsiufsRepository.remove(id);
  }
}
