import { Injectable } from '@nestjs/common';
import { TfpsfeRepository } from '../infrastructure/tfpsfe.repository.abstract';
import { TfpsfeEntity } from 'src/sankhya/entities/tFPSFE.entity';

@Injectable()
export class FindTfpsfeByUseCase {
  constructor(private readonly repository: TfpsfeRepository) {}

  async execute(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<TfpsfeEntity | null> {
    return this.repository.findOne(codemp, codfunc, nusolicit, dtiniaqui);
  }
}
