import { Injectable } from '@nestjs/common';
import { TfpreqRepository } from '../infrastructure/tfpreq.repository.abstract';
import { UpdateTfpreqDto } from '../dto/update-tfpreq.dto';
import { TfpreqEntity } from '../../../entities/tFPREQ.entity';

@Injectable()
export class UpdateTfpreqUseCase {
  constructor(private readonly repository: TfpreqRepository) {}

  async execute(
    id: number,
    updateTfpreqDto: UpdateTfpreqDto,
  ): Promise<TfpreqEntity | null> {
    return this.repository.update(id, updateTfpreqDto);
  }
}
