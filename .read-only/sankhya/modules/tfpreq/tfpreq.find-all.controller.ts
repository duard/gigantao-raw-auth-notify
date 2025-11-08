import { Controller, Get, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { FindAllTfpreqUseCase } from './usecases/tfpreq.find-all.usecase';
import { QueryTfpreqDto } from './dto/query-tfpreq.dto';

@Controller({
  path: 'tfpreq',
  version: '1',
})
export class FindAllTfpreqController {
  constructor(private readonly findAllTfpreqUseCase: FindAllTfpreqUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async execute(@Query() query: QueryTfpreqDto): Promise<any> {
    return this.findAllTfpreqUseCase.execute(query);
  }
}
