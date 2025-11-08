import { Injectable } from '@nestjs/common';
import { TfpreqRepository } from '../infrastructure/tfpreq.repository.abstract';
import { TfpreqEntity } from '../../../entities/tFPREQ.entity';

@Injectable()
export class FindTfpreqByUseCase {
  constructor(private readonly repository: TfpreqRepository) {}

  async execute(id: number): Promise<TfpreqEntity | null> {
    return this.repository.findOne(id);
  }
}
