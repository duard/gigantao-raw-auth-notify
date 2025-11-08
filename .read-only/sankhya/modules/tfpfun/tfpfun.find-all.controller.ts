import { Controller, Get, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { FindAllTfpfunUseCase } from './usecases/tfpfun.find-all.usecase';

@Controller({
  path: 'tfpfun',
  version: '1',
})
export class FindAllTfpfunController {
  constructor(private readonly findAllTfpfunUseCase: FindAllTfpfunUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async execute(@Query() query: any): Promise<any> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    return this.findAllTfpfunUseCase.execute({
      page,
      limit,
    });
  }
}
