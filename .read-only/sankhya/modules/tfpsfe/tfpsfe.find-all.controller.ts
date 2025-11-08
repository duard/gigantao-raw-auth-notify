import { Controller, Get, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { FindAllTfpsfeUseCase } from './usecases/tfpsfe.find-all.usecase';
import { QueryTfpsfeDto } from './dto/query-tfpsfe.dto';
import { Pagination } from './utils/pagination';
import { TfpsfeResponseDto } from './dto/tfpsfe-response.dto';

@Controller({
  path: 'tfpsfe',
  version: '1',
})
export class FindAllTfpsfeController {
  constructor(private readonly findAllTfpsfeUseCase: FindAllTfpsfeUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async execute(
    @Query() query: QueryTfpsfeDto,
  ): Promise<Pagination<TfpsfeResponseDto>> {
    return this.findAllTfpsfeUseCase.execute(query);
  }
}
