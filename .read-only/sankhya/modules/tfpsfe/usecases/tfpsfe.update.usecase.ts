import { Injectable } from '@nestjs/common';
import { TfpsfeRepository } from '../infrastructure/tfpsfe.repository.abstract';
import { UpdateTfpsfeDto } from '../dto/update-tfpsfe.dto';
import { TfpsfeEntity } from 'src/sankhya/entities/tFPSFE.entity';

@Injectable()
export class UpdateTfpsfeUseCase {
  constructor(private readonly repository: TfpsfeRepository) {}

  async execute(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
    updateTfpsfeDto: UpdateTfpsfeDto,
  ): Promise<TfpsfeEntity | null> {
    return this.repository.update(
      codemp,
      codfunc,
      nusolicit,
      dtiniaqui,
      updateTfpsfeDto,
    );
  }
}
