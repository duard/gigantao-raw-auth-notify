import { Injectable } from '@nestjs/common';
import { TsiufsRepository } from '../domain/tsiufs.repository';
import { TsiufsResponseDto } from '../dto/tsiufs-response.dto';
import { TsiufsMapper } from '../domain/tsiufs.mapper';
import { QueryTsiufsDto } from '../dto/query-tsiufs.dto';

@Injectable()
export class FindAllTsiufsUseCase {
  constructor(private readonly repo: TsiufsRepository) {}

  async execute(query: QueryTsiufsDto): Promise<TsiufsResponseDto[]> {
    const entities = await this.repo.findAll({
      paginationOptions: {
        page: query.page,
        limit: query.limit,
      },
      sortOptions: query.sort,
    });
    return entities.map(TsiufsMapper.toResponse);
  }
}
