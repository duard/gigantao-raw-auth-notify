import { Injectable } from '@nestjs/common';
import { CreateTfpferDto } from './dtos/create-tfpfer.dto';
import { QueryTfpferDto, QueryTfpferFindOneDto } from './dtos/query-tfpfer.dto';
import { UpdateTfpferDto } from './dtos/update-tfpfer.dto';
import { TfpferCreateUseCase } from './use-cases/tfpfer.create.usecase';
import { TfpferFindAllUseCase } from './use-cases/tfpfer.find-all.usecase';
import { TfpferFindOneUseCase } from './use-cases/tfpfer.find-one.usecase';
import { TfpferRemoveUseCase } from './use-cases/tfpfer.remove.usecase';
import { TfpferUpdateUseCase } from './use-cases/tfpfer.update.usecase';

@Injectable()
export class TfpferService {
  constructor(
    private readonly createUseCase: TfpferCreateUseCase,
    private readonly findAllUseCase: TfpferFindAllUseCase,
    private readonly findOneUseCase: TfpferFindOneUseCase,
    private readonly updateUseCase: TfpferUpdateUseCase,
    private readonly removeUseCase: TfpferRemoveUseCase,
  ) {}

  async create(data: CreateTfpferDto) {
    return await this.createUseCase.execute(data);
  }

  async findAll(query: QueryTfpferDto) {
    return await this.findAllUseCase.execute(query);
  }

  async findOne(query: QueryTfpferFindOneDto) {
    return await this.findOneUseCase.execute(query);
  }

  async update(id: QueryTfpferFindOneDto, data: UpdateTfpferDto) {
    return await this.updateUseCase.execute(id, data);
  }

  async remove(id: QueryTfpferFindOneDto) {
    return await this.removeUseCase.execute(id);
  }
}
