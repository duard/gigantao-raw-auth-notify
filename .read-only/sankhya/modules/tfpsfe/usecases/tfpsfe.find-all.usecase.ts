import { Injectable } from '@nestjs/common';
import { TfpsfeRepository } from '../infrastructure/tfpsfe.repository.abstract';
import { QueryTfpsfeDto } from '../dto/query-tfpsfe.dto';
import { TfpsfeMapper } from '../domain/tfpsfe.mapper';
import { TfpsfeResponseDto } from '../dto/tfpsfe-response.dto';
import { Pagination } from '../utils/pagination';

@Injectable()
export class FindAllTfpsfeUseCase {
  constructor(private readonly repository: TfpsfeRepository) {}

  async execute(query: QueryTfpsfeDto): Promise<Pagination<TfpsfeResponseDto>> {
    const [entities, count] = await this.repository.findAll(query);
    const items = entities.map(TfpsfeMapper.toResponse);
    const { page = 1, limit = 10 } = query;
    return new Pagination<TfpsfeResponseDto>(items, count, page, limit);
  }
}
