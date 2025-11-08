import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTmstvcUseCase } from './usecases/create-tmstvc.usecase';
import { FindAllTmstvcUseCase } from './usecases/find-all-tmstvc.usecase';
import { FindTmstvcByUseCase } from './usecases/find-by-tmstvc.usecase';
import { CreateTmstvcDto } from './dto/create-tmstvc.dto';
import { UpdateTmstvcDto } from './dto/update-tmstvc.dto';
import { TmstvcMapper } from './domain/tmstvc.mapper';
import { TmstvcResponseDto } from './dto/tmstvc.response.dto';
import { TmstvcRepository } from './domain/tmstvc.repository';
import { QueryTmstvcDto } from './dto/query-tmstvc.dto';

@Injectable()
export class TmstvcService {
  constructor(
    private readonly createUseCase: CreateTmstvcUseCase,
    private readonly findAllUseCase: FindAllTmstvcUseCase,
    private readonly findByUseCase: FindTmstvcByUseCase,
    private readonly repository: TmstvcRepository,
  ) {}

  async create(createTmstvcDto: CreateTmstvcDto): Promise<TmstvcResponseDto> {
    const domainEntity = await this.createUseCase.execute(createTmstvcDto);
    return TmstvcMapper.toResponse(domainEntity);
  }

  async findAll(query: QueryTmstvcDto): Promise<TmstvcResponseDto[]> {
    const domainEntities = await this.findAllUseCase.execute(query);
    return domainEntities.map(TmstvcMapper.toResponse);
  }

  async findOne(id: number): Promise<TmstvcResponseDto | null> {
    const domainEntity = await this.findByUseCase.execute(id);
    if (!domainEntity) {
      throw new NotFoundException(`TMSTVC with ID ${id} not found`);
    }
    return TmstvcMapper.toResponse(domainEntity);
  }

  async update(
    id: number,
    updateTmstvcDto: UpdateTmstvcDto,
  ): Promise<TmstvcResponseDto> {
    const domainEntity = await this.findByUseCase.execute(id);
    if (!domainEntity) {
      throw new NotFoundException(`TMSTVC with ID ${id} not found`);
    }
    const updatedEntity = await this.repository.update(id, updateTmstvcDto);
    return TmstvcMapper.toResponse(updatedEntity);
  }

  async remove(id: number): Promise<void> {
    const domainEntity = await this.findByUseCase.execute(id);
    if (!domainEntity) {
      throw new NotFoundException(`TMSTVC with ID ${id} not found`);
    }
    return this.repository.delete(id);
  }
}
