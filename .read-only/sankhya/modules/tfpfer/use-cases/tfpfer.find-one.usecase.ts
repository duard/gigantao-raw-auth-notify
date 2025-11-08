import { Injectable } from '@nestjs/common';
import { TfpferEntity } from '../../../entities/tFPFER.entity';
import { QueryTfpferFindOneDto } from '../dtos/query-tfpfer.dto';
import { TfpferRepository } from '../infra/tfpfer.repository.abstract';

@Injectable()
export class TfpferFindOneUseCase {
  constructor(private readonly repository: TfpferRepository) {}

  async execute(query: QueryTfpferFindOneDto): Promise<TfpferEntity | null> {
    return await this.repository.findOne(query);
  }
}
