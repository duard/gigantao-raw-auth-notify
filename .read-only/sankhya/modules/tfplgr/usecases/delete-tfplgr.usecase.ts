import { Injectable } from '@nestjs/common';
import { TfplgrRepository } from '../domain/tfplgr.repository';

@Injectable()
export class DeleteTfplgrUseCase {
  constructor(private readonly repo: TfplgrRepository) {}

  async execute(codlogradouro: string): Promise<void> {
    await this.repo.delete(codlogradouro);
  }
}
