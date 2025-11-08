import { Injectable } from '@nestjs/common';
import { CreateAdChamadosCorridasUseCase } from './usecases/ad-chamados-corridas.create.usecase';
import { FindAllAdChamadosCorridasUseCase } from './usecases/ad-chamados-corridas.find-all.usecase';
import { FindAdChamadosCorridasByUseCase } from './usecases/ad-chamados-corridas.find-by.usecase';
import { CreateAdChamadosCorridasDto } from './dto/ad-chamados-corridas.create.dto';
import { UpdateAdChamadosCorridasDto } from './dto/ad-chamados-corridas.update.dto';
import { AdChamadosCorridasMapper } from './domain/ad-chamados-corridas.mapper';
import { AdChamadosCorridasResponseDto } from './dto/ad-chamados-corridas.response.dto';
import { AdChamadosCorridasRepository } from './domain/ad-chamados-corridas.repository';

@Injectable()
export class AdChamadosCorridasService {
  constructor(
    private readonly createUseCase: CreateAdChamadosCorridasUseCase,
    private readonly findAllUseCase: FindAllAdChamadosCorridasUseCase,
    private readonly findByUseCase: FindAdChamadosCorridasByUseCase,
    private readonly repository: AdChamadosCorridasRepository,
  ) {}

  async create(
    createAdChamadosCorridaDto: CreateAdChamadosCorridasDto,
  ): Promise<AdChamadosCorridasResponseDto> {
    const domainEntity = await this.createUseCase.execute(
      createAdChamadosCorridaDto,
    );
    return AdChamadosCorridasMapper.toResponse(domainEntity);
  }

  async findAll(query: any): Promise<AdChamadosCorridasResponseDto[]> {
    const domainEntities = await this.findAllUseCase.execute(query);
    return domainEntities.map(AdChamadosCorridasMapper.toResponse);
  }

  async findOne(id: number): Promise<AdChamadosCorridasResponseDto | null> {
    const domainEntity = await this.findByUseCase.execute(id);
    return domainEntity
      ? AdChamadosCorridasMapper.toResponse(domainEntity)
      : null;
  }

  async update(
    id: number,
    updateAdChamadosCorridaDto: UpdateAdChamadosCorridasDto,
  ): Promise<AdChamadosCorridasResponseDto> {
    const updatedEntity = await this.repository.update(
      id,
      updateAdChamadosCorridaDto,
    );
    return AdChamadosCorridasMapper.toResponse(updatedEntity);
  }

  async remove(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
