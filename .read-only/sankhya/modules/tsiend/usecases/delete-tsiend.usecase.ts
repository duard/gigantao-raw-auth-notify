import { Injectable } from '@nestjs/common';
import { TsiendRepository } from '../domain/tsiend.repository';

@Injectable()
export class DeleteTsiendUseCase {
  constructor(private readonly repo: TsiendRepository) {}

  async execute(codend: number): Promise<void> {
    await this.repo.delete(codend);
  }
}
