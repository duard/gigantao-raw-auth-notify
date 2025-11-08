import { Injectable } from '@nestjs/common';
import { TsicidRepository } from '../domain/tsicid.repository';

@Injectable()
export class DeleteTsicidUseCase {
  constructor(private readonly repo: TsicidRepository) {}

  async execute(codcid: number): Promise<void> {
    await this.repo.delete(codcid);
  }
}
