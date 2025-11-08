import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTfpsfeUseCase } from './usecases/tfpsfe.create.usecase';
import { FindAllTfpsfeUseCase } from './usecases/tfpsfe.find-all.usecase';
import { FindTfpsfeByUseCase } from './usecases/tfpsfe.find-by.usecase';
import { CreateTfpsfeDto } from './dto/create-tfpsfe.dto';
import { UpdateTfpsfeDto } from './dto/update-tfpsfe.dto';
import { TfpsfeMapper } from './domain/tfpsfe.mapper';
import { UpdateTfpsfeUseCase } from './usecases/tfpsfe.update.usecase';
import { RemoveTfpsfeUseCase } from './usecases/tfpsfe.remove.usecase';
import { QueryTfpsfeDto } from './dto/query-tfpsfe.dto';
import { TfpsfeResponseDto } from './dto/tfpsfe-response.dto';
import { Pagination } from './utils/pagination';

@Injectable()
export class TfpsfeService {
  constructor(
    private readonly createUseCase: CreateTfpsfeUseCase,
    private readonly findAllUseCase: FindAllTfpsfeUseCase,
    private readonly findByUseCase: FindTfpsfeByUseCase,
    private readonly updateUseCase: UpdateTfpsfeUseCase,
    private readonly removeUseCase: RemoveTfpsfeUseCase,
  ) {}

  async create(createTfpsfeDto: CreateTfpsfeDto): Promise<TfpsfeResponseDto> {
    const domainEntity = await this.createUseCase.execute(createTfpsfeDto);
    if (!domainEntity) {
      throw new Error('Failed to create Tfpsfe');
    }
    return TfpsfeMapper.toResponse(domainEntity);
  }

  async findAll(query: QueryTfpsfeDto): Promise<Pagination<TfpsfeResponseDto>> {
    return await this.findAllUseCase.execute(query);
  }

  async findOne(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<TfpsfeResponseDto | null> {
    const domainEntity = await this.findByUseCase.execute(
      codemp,
      codfunc,
      nusolicit,
      dtiniaqui,
    );
    if (!domainEntity) {
      return null;
    }
    return TfpsfeMapper.toResponse(domainEntity);
  }

  async update(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
    updateTfpsfeDto: UpdateTfpsfeDto,
  ): Promise<TfpsfeResponseDto> {
    const updatedEntity = await this.updateUseCase.execute(
      codemp,
      codfunc,
      nusolicit,
      dtiniaqui,
      updateTfpsfeDto,
    );
    if (!updatedEntity) {
      throw new NotFoundException('Tfpsfe not found');
    }
    return TfpsfeMapper.toResponse(updatedEntity);
  }

  async remove(
    codemp: number,
    codfunc: number,
    nusolicit: number,
    dtiniaqui: Date,
  ): Promise<void> {
    return this.removeUseCase.execute(codemp, codfunc, nusolicit, dtiniaqui);
  }
}
