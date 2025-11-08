import { Injectable } from '@nestjs/common';
import { CreateTsiendUseCase } from './usecases/create-tsiend.usecase';
import { FindAllTsiendUseCase } from './usecases/find-all-tsiend.usecase';
import { FindByTsiendUseCase } from './usecases/find-by-tsiend.usecase';
import { UpdateTsiendUseCase } from './usecases/update-tsiend.usecase';
import { DeleteTsiendUseCase } from './usecases/delete-tsiend.usecase';
import { CreateTsiendDto } from './dto/create-tsiend.dto';
import { UpdateTsiendDto } from './dto/update-tsiend.dto';
import { TsiendResponseDto } from './dto/tsiend.response.dto';
import { QueryTsiendDto } from './dto/query-tsiend.dto';

@Injectable()
export class TsiendService {
  constructor(
    private readonly createUseCase: CreateTsiendUseCase,
    private readonly findAllUseCase: FindAllTsiendUseCase,
    private readonly findByUseCase: FindByTsiendUseCase,
    private readonly updateUseCase: UpdateTsiendUseCase,
    private readonly deleteUseCase: DeleteTsiendUseCase,
  ) {}

  async create(createDto: CreateTsiendDto): Promise<TsiendResponseDto> {
    return this.createUseCase.execute(createDto);
  }

  async findAll(query: QueryTsiendDto): Promise<TsiendResponseDto[]> {
    return this.findAllUseCase.execute(query);
  }

  async findOne(codend: number): Promise<TsiendResponseDto | null> {
    return this.findByUseCase.execute(codend);
  }

  async update(
    codend: number,
    updateDto: UpdateTsiendDto,
  ): Promise<TsiendResponseDto> {
    return this.updateUseCase.execute(codend, updateDto);
  }

  async remove(codend: number): Promise<void> {
    return this.deleteUseCase.execute(codend);
  }
}
