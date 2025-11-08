import { Injectable } from '@nestjs/common';
import { TfpreqRepository } from '../infrastructure/tfpreq.repository.abstract';

@Injectable()
export class RemoveTfpreqUseCase {
  constructor(private readonly repository: TfpreqRepository) {}

  async execute(id: number): Promise<void> {
    return this.repository.remove(id);
  }
}
