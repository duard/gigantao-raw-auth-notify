import { Injectable } from '@nestjs/common';
import { TfpdpdCreateDto } from './dtos/tfpdpd.create.dto';
import { QueryTfpdpdDto } from './dtos/tfpdpd.find-all.dto';
import { QueryTfpdpFindOneDto } from './dtos/tfpdpd.find-one.dto';
import { TfpdpdUpdateDto } from './dtos/tfpdpd.update.dto';
import { TfpdpdCreateUseCase } from './use-cases/tfpdpd.create.usecase';
import { TfpdpdFindAllUseCase } from './use-cases/tfpdpd.find-all.usecase';
import { TfpdpdFindOneUseCase } from './use-cases/tfpdpd.find-one.usecase';
import { TfpdpdRemoveUseCase } from './use-cases/tfpdpd.remove.usecase';
import { TfpdpdUpdateUseCase } from './use-cases/tfpdpd.update.usecase';

@Injectable()
export class TfpdpdService {
  constructor(
    private readonly createUseCase: TfpdpdCreateUseCase,
    private readonly findAllUseCase: TfpdpdFindAllUseCase,
    private readonly findOneUseCase: TfpdpdFindOneUseCase,
    private readonly updateUseCase: TfpdpdUpdateUseCase,
    private readonly removeUseCase: TfpdpdRemoveUseCase,
  ) {}

  async create(data: TfpdpdCreateDto) {
    return this.createUseCase.execute(data);
  }

  async findAll(query: QueryTfpdpdDto) {
    return this.findAllUseCase.execute(query);
  }

  async findOne(query: QueryTfpdpFindOneDto) {
    return this.findOneUseCase.execute(query);
  }

  async update(id: QueryTfpdpFindOneDto, data: TfpdpdUpdateDto) {
    return this.updateUseCase.execute(id, data);
  }

  async remove(id: QueryTfpdpFindOneDto) {
    return this.removeUseCase.execute(id);
  }
}
