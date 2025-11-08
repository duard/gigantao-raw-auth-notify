import { Inject, Injectable } from '@nestjs/common';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';
import { CreateTgfcabDto } from './dto/create-tgfcab.dto';
import { QueryTgfcabDto } from './dto/query-tgfcab.dto';
import { SearchTgfcabResponse } from './dto/search-response.dto';
import { TgfcabSummaryDto } from './dto/tgfcab-summary.dto';
import { UpdateTgfcabDto } from './dto/update-tgfcab.dto';
import { CreateTgfcabUseCase } from './use-cases/create-tgfcab.use-case';
import { DeleteTgfcabUseCase } from './use-cases/delete-tgfcab.use-case';
import { FindAllTgfcabSummarizedUseCase } from './use-cases/find-all-tgfcab-summarized.use-case';
import { FindAllTgfcabUseCase } from './use-cases/find-all-tgfcab.use-case';
import { FindOneTgfcabUseCase } from './use-cases/find-one-tgfcab.use-case';
import { UpdateTgfcabUseCase } from './use-cases/update-tgfcab.use-case';

@Injectable()
export class TgfcabService {
  constructor(
    @Inject(CreateTgfcabUseCase)
    private readonly createTgfcabUseCase: CreateTgfcabUseCase,
    @Inject(FindAllTgfcabUseCase)
    private readonly findAllTgfcabUseCase: FindAllTgfcabUseCase,
    @Inject(FindOneTgfcabUseCase)
    private readonly findOneTgfcabUseCase: FindOneTgfcabUseCase,
    @Inject(UpdateTgfcabUseCase)
    private readonly updateTgfcabUseCase: UpdateTgfcabUseCase,
    @Inject(DeleteTgfcabUseCase)
    private readonly deleteTgfcabUseCase: DeleteTgfcabUseCase,
    @Inject(FindAllTgfcabSummarizedUseCase)
    private readonly findAllTgfcabSummarizedUseCase: FindAllTgfcabSummarizedUseCase,
  ) {}

  create(createTgfcabDto: CreateTgfcabDto) {
    return this.createTgfcabUseCase.execute(createTgfcabDto);
  }

  findAll(query: QueryTgfcabDto): Promise<SearchTgfcabResponse> {
    console.log('Service query', query);

    return this.findAllTgfcabUseCase.execute(query);
  }

  findOne(id: number) {
    return this.findOneTgfcabUseCase.execute(id);
  }

  update(id: number, updateTgfcabDto: UpdateTgfcabDto) {
    return this.updateTgfcabUseCase.execute(id, updateTgfcabDto);
  }

  remove(id: number) {
    return this.deleteTgfcabUseCase.execute(id);
  }

  findAllSummarized(
    query: QueryTgfcabDto,
  ): Promise<PaginatedOutputDto<TgfcabSummaryDto>> {
    console.log('Service findAllSummarized');
    return this.findAllTgfcabSummarizedUseCase.execute(query);
  }
}
