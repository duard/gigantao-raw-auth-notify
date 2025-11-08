import { Injectable } from '@nestjs/common';
import { TfpsfeRepository } from '../infrastructure/tfpsfe.repository.abstract';

@Injectable()
export class RemoveTfpsfeUseCase {
  constructor(private readonly repository: TfpsfeRepository) {}

  async execute(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<void> {
    return this.repository.remove(codemp, codfunc, nusolicit, dtiniaqui);
  }
}
