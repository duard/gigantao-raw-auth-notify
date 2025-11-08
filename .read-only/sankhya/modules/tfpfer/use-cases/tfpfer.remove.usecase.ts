import { Injectable } from '@nestjs/common';
import { QueryTfpferFindOneDto } from '../dtos/query-tfpfer.dto';
import { TfpferRepository } from '../infra/tfpfer.repository.abstract';

@Injectable()
export class TfpferRemoveUseCase {
  constructor(private readonly repository: TfpferRepository) {}

  async execute(id: QueryTfpferFindOneDto): Promise<void> {
    await this.repository.remove(id);
  }
}
