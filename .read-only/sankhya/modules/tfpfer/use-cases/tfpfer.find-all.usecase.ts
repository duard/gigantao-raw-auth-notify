import { Injectable } from '@nestjs/common';
import { TfpferMapper } from '../domain/tfpfer.mapper';
import { QueryTfpferDto } from '../dtos/query-tfpfer.dto';
import { TfpferRepository } from '../infra/tfpfer.repository.abstract';

@Injectable()
export class TfpferFindAllUseCase {
  constructor(private readonly repository: TfpferRepository) {}

  async execute(query: QueryTfpferDto): Promise<any[] | null> {
    const entities = await this.repository.findAll(query);
    if (!entities) {
      return null;
    }
    return entities.map(TfpferMapper.toResponse);
  }
}
