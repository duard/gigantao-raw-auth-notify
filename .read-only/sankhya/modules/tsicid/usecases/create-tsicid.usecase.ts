import { Injectable } from '@nestjs/common';
import { TsicidRepository } from '../domain/tsicid.repository';
import { CreateTsicidDto } from '../dto/create-tsicid.dto';
import { TsicidMapper } from '../domain/tsicid.mapper';
import { TsicidResponseDto } from '../dto/tsicid.response.dto';

@Injectable()
export class CreateTsicidUseCase {
  constructor(private readonly repo: TsicidRepository) {}

  async execute(createDto: CreateTsicidDto): Promise<TsicidResponseDto> {
    const domainEntity = await this.repo.create(createDto);
    return TsicidMapper.toResponse(domainEntity);
  }
}
