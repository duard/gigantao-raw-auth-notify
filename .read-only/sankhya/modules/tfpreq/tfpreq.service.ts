import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTfpreqUseCase } from './usecases/tfpreq.create.usecase';
import { FindAllTfpreqUseCase } from './usecases/tfpreq.find-all.usecase';
import { FindTfpreqByUseCase } from './usecases/tfpreq.find-by.usecase';
import { CreateTfpreqDto } from './dto/create-tfpreq.dto';
import { UpdateTfpreqDto } from './dto/update-tfpreq.dto';
import { TfpreqMapper } from './domain/tfpreq.mapper';
import { UpdateTfpreqUseCase } from './usecases/tfpreq.update.usecase';
import { RemoveTfpreqUseCase } from './usecases/tfpreq.remove.usecase';
import { QueryTfpreqDto } from './dto/query-tfpreq.dto';

@Injectable()
export class TfpreqService {
  constructor(
    private readonly createUseCase: CreateTfpreqUseCase,
    private readonly findAllUseCase: FindAllTfpreqUseCase,
    private readonly findByUseCase: FindTfpreqByUseCase,
    private readonly updateUseCase: UpdateTfpreqUseCase,
    private readonly removeUseCase: RemoveTfpreqUseCase,
  ) {}

  async create(createTfpreqDto: CreateTfpreqDto): Promise<any> {
    const domainEntity = await this.createUseCase.execute(createTfpreqDto);
    if (!domainEntity) {
      throw new Error('Failed to create Tfpreq');
    }
    return TfpreqMapper.toResponse(domainEntity);
  }

  async findAll(query: QueryTfpreqDto): Promise<any[]> {
    const entities = await this.findAllUseCase.execute(query);
    if (!entities) {
      return [];
    }
    return entities;
  }

  async findOne(id: number): Promise<any | null> {
    const domainEntity = await this.findByUseCase.execute(id);
    if (!domainEntity) {
      return null;
    }
    return TfpreqMapper.toResponse(domainEntity);
  }

  async update(id: number, updateTfpreqDto: UpdateTfpreqDto): Promise<any> {
    const updatedEntity = await this.updateUseCase.execute(id, updateTfpreqDto);
    if (!updatedEntity) {
      throw new NotFoundException('Tfpreq not found');
    }
    return TfpreqMapper.toResponse(updatedEntity);
  }

  async remove(id: number): Promise<void> {
    return this.removeUseCase.execute(id);
  }
}
