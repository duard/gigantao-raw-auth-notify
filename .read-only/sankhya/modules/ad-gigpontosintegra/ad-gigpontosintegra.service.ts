import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdGigpontosintegraUseCase } from './usecases/create-ad-gigpontosintegra.usecase';
import { FindAllAdGigpontosintegraUseCase } from './usecases/find-all-ad-gigpontosintegra.usecase';
import { FindOneAdGigpontosintegraUseCase } from './usecases/find-one-ad-gigpontosintegra.usecase';
import { UpdateAdGigpontosintegraUseCase } from './usecases/update-ad-gigpontosintegra.usecase';
import { DeleteAdGigpontosintegraUseCase } from './usecases/delete-ad-gigpontosintegra.usecase';
import { CreateAdGigpontosintegraDto } from './dto/create-ad-gigpontosintegra.dto';
import { UpdateAdGigpontosintegraDto } from './dto/update-ad-gigpontosintegra.dto';
import { AdGigpontosintegraResponseDto } from './dto/ad-gigpontosintegra.response.dto';

@Injectable()
export class AdGigpontosintegraService {
  constructor(
    private readonly createUseCase: CreateAdGigpontosintegraUseCase,
    private readonly findAllUseCase: FindAllAdGigpontosintegraUseCase,
    private readonly findOneUseCase: FindOneAdGigpontosintegraUseCase,
    private readonly updateUseCase: UpdateAdGigpontosintegraUseCase,
    private readonly deleteUseCase: DeleteAdGigpontosintegraUseCase,
  ) {}

  async create(
    createAdGigpontosintegraDto: CreateAdGigpontosintegraDto,
  ): Promise<AdGigpontosintegraResponseDto> {
    return this.createUseCase.execute(createAdGigpontosintegraDto);
  }

  async findAll(): Promise<AdGigpontosintegraResponseDto[]> {
    return this.findAllUseCase.execute();
  }

  async findOne(id: number): Promise<AdGigpontosintegraResponseDto | null> {
    const entity = await this.findOneUseCase.execute(id);
    if (!entity) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }
    return entity;
  }

  async update(
    id: number,
    updateAdGigpontosintegraDto: UpdateAdGigpontosintegraDto,
  ): Promise<AdGigpontosintegraResponseDto> {
    return this.updateUseCase.execute(id, updateAdGigpontosintegraDto);
  }

  async remove(id: number): Promise<void> {
    await this.deleteUseCase.execute(id);
  }
}
