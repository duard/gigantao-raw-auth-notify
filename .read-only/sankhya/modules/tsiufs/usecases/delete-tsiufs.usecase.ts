import { Injectable } from '@nestjs/common';
import { TsiufsRepository } from '../domain/tsiufs.repository';

@Injectable()
export class DeleteTsiufsUseCase {
  constructor(private readonly repo: TsiufsRepository) {}

  async execute(coduf: number): Promise<void> {
    await this.repo.delete(coduf);
  }
}
