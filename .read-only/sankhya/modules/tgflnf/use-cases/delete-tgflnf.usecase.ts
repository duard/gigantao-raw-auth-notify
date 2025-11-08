import { Injectable, Inject } from '@nestjs/common';
import { TgflnfRepository } from '../repositories/tgflnf.repository.abstract';
import { Tgflnf } from '../domain/tgflnf.domain';

@Injectable()
export class DeleteTgflnfUseCase {
  constructor(
    @Inject('TgflnfRepository')
    private readonly tgflnfRepository: TgflnfRepository,
  ) {}

  execute(id: Tgflnf['nulote']): Promise<void> {
    return this.tgflnfRepository.remove(id);
  }
}
