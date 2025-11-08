import { Injectable } from '@nestjs/common';
import { CreateTfplgrUseCase } from './usecases/create-tfplgr.usecase';
import { FindAllTfplgrUseCase } from './usecases/find-all-tfplgr.usecase';
import { FindByTfplgrUseCase } from './usecases/find-by-tfplgr.usecase';
import { UpdateTfplgrUseCase } from './usecases/update-tfplgr.usecase';
import { DeleteTfplgrUseCase } from './usecases/delete-tfplgr.usecase';
import { CreateTfplgrDto } from './dto/create-tfplgr.dto';
import { UpdateTfplgrDto } from './dto/update-tfplgr.dto';
import { TfplgrResponseDto } from './dto/tfplgr.response.dto';

@Injectable()
export class TfplgrService {
  constructor(
    private readonly createUseCase: CreateTfplgrUseCase,
    private readonly findAllUseCase: FindAllTfplgrUseCase,
    private readonly findByUseCase: FindByTfplgrUseCase,
    private readonly updateUseCase: UpdateTfplgrUseCase,
    private readonly deleteUseCase: DeleteTfplgrUseCase,
  ) {}

  async create(createDto: CreateTfplgrDto): Promise<TfplgrResponseDto> {
    return this.createUseCase.execute(createDto);
  }

  async findAll(query: any): Promise<TfplgrResponseDto[]> {
    return this.findAllUseCase.execute(query);
  }

  async findOne(codlogradouro: string): Promise<TfplgrResponseDto | null> {
    return this.findByUseCase.execute(codlogradouro);
  }

  async update(
    codlogradouro: string,
    updateDto: UpdateTfplgrDto,
  ): Promise<TfplgrResponseDto> {
    return this.updateUseCase.execute(codlogradouro, updateDto);
  }

  async remove(codlogradouro: string): Promise<void> {
    return this.deleteUseCase.execute(codlogradouro);
  }
}
