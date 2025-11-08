import { Injectable } from '@nestjs/common';
import { TfpreqRepository } from '../infrastructure/tfpreq.repository.abstract';
import { QueryTfpreqDto } from '../dto/query-tfpreq.dto';
import { TfpreqMapper } from '../domain/tfpreq.mapper';

@Injectable()
export class FindAllTfpreqUseCase {
  constructor(private readonly repository: TfpreqRepository) {}

  async execute(query: QueryTfpreqDto): Promise<any[] | null> {
    const entities = await this.repository.findAll(query);
    if (!entities) {
      return null;
    }
    return entities.map(TfpreqMapper.toResponse);
  }
}
