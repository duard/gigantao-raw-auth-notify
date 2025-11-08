import { Inject, Injectable } from '@nestjs/common';
import { QueryTgfcabDto } from '../dto/query-tgfcab.dto';
import { TgfcabRepository } from '../repositories/tgfcab.repository.abstract';
import { TgfcabMapper } from '../domain/tgfcab.mapper';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { TgfcabSummaryDto } from '../dto/tgfcab-summary.dto';

@Injectable()
export class FindAllTgfcabSummarizedUseCase {
  constructor(
    @Inject('TgfcabRepository')
    private readonly tgfcabRepository: TgfcabRepository,
  ) {}

  async execute(
    query: QueryTgfcabDto,
  ): Promise<PaginatedOutputDto<TgfcabSummaryDto>> {
    console.log('UseCase findAllSummarized');
    const paginatedResult =
      await this.tgfcabRepository.findAllSummarized(query);
    return {
      ...paginatedResult,
      data: paginatedResult.data.map(TgfcabMapper.toSummaryResponse),
    };
  }
}
