import { Injectable } from '@nestjs/common';
import { TfpferEntity } from '../../../entities/tFPFER.entity';
import { QueryTfpferFindOneDto } from '../dtos/query-tfpfer.dto';
import { UpdateTfpferDto } from '../dtos/update-tfpfer.dto';
import { TfpferRepository } from '../infra/tfpfer.repository.abstract';

@Injectable()
export class TfpferUpdateUseCase {
  constructor(private readonly repository: TfpferRepository) {}

  async execute(
    id: QueryTfpferFindOneDto,
    data: UpdateTfpferDto,
  ): Promise<TfpferEntity | null> {
    return await this.repository.update(id, data);
  }
}
