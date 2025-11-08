import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTfpfunUseCase } from './usecases/tfpfun.create.usecase';
import { FindAllTfpfunUseCase } from './usecases/tfpfun.find-all.usecase';
import { FindTfpfunByUseCase } from './usecases/tfpfun.find-by.usecase';
import { CreateTfpfunDto } from './dto/dto.create-tfpfun';
import { UpdateTfpfunDto } from './dto/dto.update-tfpfun';
import { TfpfunResponseDto } from './dto/tfpfun.dto';
import { QueryTfpfunDto } from './dto/query-tfpfun.dto';
import { TfpfunMapper } from './domain/tfpfun.mapper';
import { TfpfunRepositoryAbstract } from './domain/tfpfun.repository.abstract';
import { PaginatedOutputDto } from 'src/utils/dto/paginated-output.dto';

@Injectable()
export class TfpfunService {
  constructor(
    private readonly createUseCase: CreateTfpfunUseCase,
    private readonly findAllUseCase: FindAllTfpfunUseCase,
    private readonly findByUseCase: FindTfpfunByUseCase,
    private readonly repository: TfpfunRepositoryAbstract,
  ) {}

  async create(createTfpfunDto: CreateTfpfunDto): Promise<TfpfunResponseDto> {
    const domainEntity = await this.createUseCase.execute(createTfpfunDto);
    return TfpfunMapper.toResponse(domainEntity);
  }

  async findAll(
    query: QueryTfpfunDto,
  ): Promise<PaginatedOutputDto<TfpfunResponseDto>> {
    const page = query.page || 1;
    const limit = query.limit || 10;

    const { data: domainEntities, total } = await this.findAllUseCase.execute({
      ...query,
      page,
      limit,
    });

    const data = domainEntities.map(TfpfunMapper.toResponse);

    const lastPage = Math.ceil(total / limit);
    const hasMore = page < lastPage;

    return {
      data,
      meta: {
        total,
        lastPage,
        currentPage: page,
        perPage: limit,
        prev: page > 1 ? page - 1 : null,
        next: hasMore ? page + 1 : null,
        hasMore,
      },
    };
  }

  async findOne(id: number, codemp: number): Promise<TfpfunResponseDto> {
    const domainEntity = await this.findByUseCase.execute(id, codemp);
    if (!domainEntity) {
      throw new NotFoundException('Tfpfun not found');
    }
    return TfpfunMapper.toResponse(domainEntity);
  }

  async update(
    id: number,
    updateTfpfunDto: UpdateTfpfunDto,
  ): Promise<TfpfunResponseDto> {
    const updatedEntity = await this.repository.update(
      id,
      updateTfpfunDto as any,
    );
    if (!updatedEntity) {
      throw new NotFoundException('Tfpfun not found');
    }
    return TfpfunMapper.toResponse(updatedEntity);
  }

  async remove(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
