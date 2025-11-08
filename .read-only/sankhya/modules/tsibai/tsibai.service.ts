import { Injectable } from '@nestjs/common';
import { CreateTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/create-tsibai.usecase';
import { FindAllTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/find-all-tsibai.usecase';
import { FindByTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/find-by-tsibai.usecase';
import { UpdateTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/update-tsibai.usecase';
import { DeleteTsibaiUseCase } from 'src/sankhya/modules/tsibai/usecases/delete-tsibai.usecase';
import { CreateTsibaiDto } from 'src/sankhya/modules/tsibai/dto/create-tsibai.dto';
import { UpdateTsibaiDto } from 'src/sankhya/modules/tsibai/dto/update-tsibai.dto';
import { TsibaiResponseDto } from 'src/sankhya/modules/tsibai/dto/tsibai.response.dto';
import { QueryTsibaiDto } from './dto/query-tsibai.dto';

@Injectable()
export class TsibaiService {
  constructor(
    private readonly createUseCase: CreateTsibaiUseCase,
    private readonly findAllUseCase: FindAllTsibaiUseCase,
    private readonly findByUseCase: FindByTsibaiUseCase,
    private readonly updateUseCase: UpdateTsibaiUseCase,
    private readonly deleteUseCase: DeleteTsibaiUseCase,
  ) {}

  async create(createDto: CreateTsibaiDto): Promise<TsibaiResponseDto> {
    return this.createUseCase.execute(createDto);
  }

  async findAll(query: QueryTsibaiDto): Promise<TsibaiResponseDto[]> {
    return this.findAllUseCase.execute(query);
  }

  async findOne(codbai: number): Promise<TsibaiResponseDto | null> {
    return this.findByUseCase.execute(codbai);
  }

  async update(
    codbai: number,
    updateDto: UpdateTsibaiDto,
  ): Promise<TsibaiResponseDto> {
    return this.updateUseCase.execute(codbai, updateDto);
  }

  async remove(codbai: number): Promise<void> {
    return this.deleteUseCase.execute(codbai);
  }
}
