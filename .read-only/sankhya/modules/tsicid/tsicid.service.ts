import { Injectable } from '@nestjs/common';
import { CreateTsicidUseCase } from './usecases/create-tsicid.usecase';
import { FindAllTsicidUseCase } from './usecases/find-all-tsicid.usecase';
import { FindByTsicidUseCase } from './usecases/find-by-tsicid.usecase';
import { UpdateTsicidUseCase } from './usecases/update-tsicid.usecase';
import { DeleteTsicidUseCase } from './usecases/delete-tsicid.usecase';
import { CreateTsicidDto } from './dto/create-tsicid.dto';
import { UpdateTsicidDto } from './dto/update-tsicid.dto';
import { TsicidResponseDto } from './dto/tsicid.response.dto';
import { QueryTsicidDto } from './dto/query-tsicid.dto';

@Injectable()
export class TsicidService {
  constructor(
    private readonly createUseCase: CreateTsicidUseCase,
    private readonly findAllUseCase: FindAllTsicidUseCase,
    private readonly findByUseCase: FindByTsicidUseCase,
    private readonly updateUseCase: UpdateTsicidUseCase,
    private readonly deleteUseCase: DeleteTsicidUseCase,
  ) {}

  async create(createDto: CreateTsicidDto): Promise<TsicidResponseDto> {
    return this.createUseCase.execute(createDto);
  }

  async findAll(query: QueryTsicidDto): Promise<TsicidResponseDto[]> {
    return this.findAllUseCase.execute(query);
  }

  async findOne(codcid: number): Promise<TsicidResponseDto | null> {
    return this.findByUseCase.execute(codcid);
  }

  async update(
    codcid: number,
    updateDto: UpdateTsicidDto,
  ): Promise<TsicidResponseDto> {
    return this.updateUseCase.execute(codcid, updateDto);
  }

  async remove(codcid: number): Promise<void> {
    return this.deleteUseCase.execute(codcid);
  }
}
