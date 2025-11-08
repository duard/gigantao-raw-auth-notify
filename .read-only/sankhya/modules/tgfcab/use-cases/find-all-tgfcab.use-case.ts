import { Inject, Injectable } from '@nestjs/common';
import { QueryTgfcabDto } from '../dto/query-tgfcab.dto';
import { SearchTgfcabResponse } from '../dto/search-response.dto';
import { TgfcabRepository } from '../repositories/tgfcab.repository.abstract';
import { TgfcabMapper } from '../domain/tgfcab.mapper';

@Injectable()
export class FindAllTgfcabUseCase {
  constructor(
    @Inject('TgfcabRepository')
    private readonly tgfcabRepository: TgfcabRepository,
  ) {}

  async execute(query: QueryTgfcabDto): Promise<SearchTgfcabResponse> {
    const paginatedResult = await this.tgfcabRepository.findAll(query);
    return {
      ...paginatedResult,
      data: paginatedResult.data.map(TgfcabMapper.toResponse),
      filtrosAplicados: {
        // q: query.q,
        // status: query.status,
        // prioridade: query.prioridade,
        // destino: query.destino,
      },
    };
  }
}
